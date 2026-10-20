/**
 * Pure calculation and data transformation functions
 */

/**
 * Distance parcourue par le train pendant un délai donné :
 * distance (m) = vitesse (km/h) ÷ 3,6 × délai (s)
 */
export function calculateDistanceTraveled(speedKmH: number, delayMs: number): number {
  const delaySec = delayMs / 1000;
  const distance = (speedKmH / 3.6) * delaySec;
  return Math.round(distance * 10) / 10;
}

/**
 * Estimation qualitative de l'autonomie d'un capteur LoRaWAN :
 * Règle impérative : afficher la fourchette "1 à 10 ans selon le réglage" et une estimation qualitative.
 */
export interface BatteryLifeEstimate {
  qualitativeLevel: 'Courte' | 'Moyenne' | 'Élevée (5 à 10 ans)';
  generalRange: string;
  advice: string;
  consumptionFactor: number;
}

export function estimateBatteryAutonomy(intervalMinutes: number, ackRequired: boolean): BatteryLifeEstimate {
  // Plus on émet fréquemment, plus la batterie s'épuise vite.
  // L'acquittement (confirmation) double presque l'énergie d'un message.
  let score = intervalMinutes;
  if (ackRequired) {
    score = score * 0.5;
  }

  if (score < 15) {
    return {
      qualitativeLevel: 'Courte',
      generalRange: '1 à 10 ans selon le réglage',
      advice: 'Émission très fréquente : risque de remplacement anticipé de la pile sous 1 à 2 ans.',
      consumptionFactor: 90,
    };
  } else if (score < 60) {
    return {
      qualitativeLevel: 'Moyenne',
      generalRange: '1 à 10 ans selon le réglage',
      advice: 'Rythme standard : bon compromis entre fraîcheur des mesures et durée de vie (2 à 5 ans).',
      consumptionFactor: 45,
    };
  } else {
    return {
      qualitativeLevel: 'Élevée (5 à 10 ans)',
      generalRange: '1 à 10 ans selon le réglage',
      advice: 'Rythme optimal recommandé : émissions espacées et envoi sur seuil pour atteindre 5 à 10 ans.',
      consumptionFactor: 15,
    };
  }
}

/**
 * Calcul des métriques de détection pour la démo de biais / déséquilibre des classes
 * 1 000 images : 10 défauts réels (Positifs), 990 voies saines (Négatifs)
 */
export interface ModelMetrics {
  totalImages: number;
  totalDefects: number;
  totalHealthy: number;
  truePositives: number;
  falsePositives: number;
  trueNegatives: number;
  falseNegatives: number;
  accuracyPercent: number;
  recallPercent: number;
}

export function computeImbalanceMetrics(modelType: 'naive_always_healthy' | 'trained_ai'): ModelMetrics {
  const totalImages = 1000;
  const totalDefects = 10;
  const totalHealthy = 990;

  if (modelType === 'naive_always_healthy') {
    // Le modèle répond toujours "sain" (aucun défaut détecté)
    const tp = 0;
    const fp = 0;
    const tn = 990;
    const fn = 10;
    return {
      totalImages,
      totalDefects,
      totalHealthy,
      truePositives: tp,
      falsePositives: fp,
      trueNegatives: tn,
      falseNegatives: fn,
      accuracyPercent: 99.0, // (0 + 990) / 1000 = 99%
      recallPercent: 0.0,    // 0 / 10 = 0%
    };
  } else {
    // Modèle IA robuste entraîné (ex. avec priorisation du rappel et validation)
    const tp = 10; // détecte les 10 défauts
    const fp = 25; // quelques faux positifs prudents qui seront filtrés par l'expert
    const tn = 965;
    const fn = 0;
    return {
      totalImages,
      totalDefects,
      totalHealthy,
      truePositives: tp,
      falsePositives: fp,
      trueNegatives: tn,
      falseNegatives: fn,
      accuracyPercent: 97.5,
      recallPercent: 100.0,
    };
  }
}

/**
 * Sections de voies ferroviaires pour le calque prédictif des risques (PK 12 à PK 19)
 */
export interface TrackSectionState {
  pk: number;
  label: string;
  status: 'sain' | 'a_surveiller' | 'critique';
  description: string;
  criticalAtMonths: number;
  actionRequired: boolean;
}

export function getTrackSectionState(pk: number, currentMonthOffset: number): TrackSectionState {
  // Valeurs du brief :
  // PK 16 devient critique dans environ 3 semaines (~0.75 mois)
  // PK 17 devient à surveiller dans environ 2 mois
  // PK 14 devient à surveiller dans environ 4 mois
  // Les autres (PK 12, 13, 15, 18, 19) restent sains (> 12 mois)

  if (pk === 16) {
    if (currentMonthOffset >= 0.7) {
      return {
        pk,
        label: 'PK 16',
        status: 'critique',
        description: 'Fissure détectée au cœur d\'aiguille. Seuil critique atteint sous ~3 semaines.',
        criticalAtMonths: 0.75,
        actionRequired: true,
      };
    }
    return {
      pk,
      label: 'PK 16',
      status: 'a_surveiller',
      description: 'Micro-fissure en propagation active. Surveillance rapprochée.',
      criticalAtMonths: 0.75,
      actionRequired: true,
    };
  }

  if (pk === 17) {
    if (currentMonthOffset >= 4.0) {
      return {
        pk,
        label: 'PK 17',
        status: 'critique',
        description: 'Usure ondulatoire avancée atteignant le seuil de tolérance.',
        criticalAtMonths: 4.0,
        actionRequired: true,
      };
    }
    if (currentMonthOffset >= 2.0) {
      return {
        pk,
        label: 'PK 17',
        status: 'a_surveiller',
        description: 'Évolution de la géométrie de voie à surveiller dans ~2 mois.',
        criticalAtMonths: 2.0,
        actionRequired: false,
      };
    }
    return {
      pk,
      label: 'PK 17',
      status: 'sain',
      description: 'État géométrique conforme aux normes.',
      criticalAtMonths: 2.0,
      actionRequired: false,
    };
  }

  if (pk === 14) {
    if (currentMonthOffset >= 8.0) {
      return {
        pk,
        label: 'PK 14',
        status: 'critique',
        description: 'Écartement et nivellement hors tolérance critique.',
        criticalAtMonths: 8.0,
        actionRequired: true,
      };
    }
    if (currentMonthOffset >= 4.0) {
      return {
        pk,
        label: 'PK 14',
        status: 'a_surveiller',
        description: 'Défaut de nivellement longitudinal à surveiller dans ~4 mois.',
        criticalAtMonths: 4.0,
        actionRequired: false,
      };
    }
    return {
      pk,
      label: 'PK 14',
      status: 'sain',
      description: 'État géométrique nominal.',
      criticalAtMonths: 4.0,
      actionRequired: false,
    };
  }

  // PK 12, 13, 15, 18, 19
  return {
    pk,
    label: `PK ${pk}`,
    status: 'sain',
    description: 'Voie saine (> 12 mois sans anomalie prévisible).',
    criticalAtMonths: 14.0,
    actionRequired: false,
  };
}
