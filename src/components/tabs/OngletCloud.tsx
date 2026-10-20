import React from 'react';
import { 
  Cloud, 
  Database, 
  Cpu, 
  Send, 
  HardDrive, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  Server,
  Layers,
  ArrowRightLeft
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';

interface OngletCloudProps {
  onOpenSource: (id: number) => void;
}

export const OngletCloud: React.FC<OngletCloudProps> = ({ onOpenSource }) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #4DA3FF */}
      <div className="border-b border-[#1c385f] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4DA3FF]/15 border border-[#4DA3FF]/40 text-xs font-mono font-bold text-[#4DA3FF] mb-3">
          <Cloud className="w-4 h-4" />
          <span>Sprint 1 · Architecture Cloud Hybride</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Le Cloud : Centraliser, Calculer, Exposer
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          La détection immédiate se fait à bord (Edge), tandis que le Cloud intervient en temps différé comme la mémoire séculaire du réseau et le moteur d'apprentissage continu.
        </p>
      </div>

      {/* Rôle du Cloud : 3 Cartes */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#4DA3FF]" />
          <span>Les 3 fonctions clés du Cloud</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Carte 1 : Centraliser */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4DA3FF]/20 text-[#4DA3FF] flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                1. Centraliser
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Réunir les mesures de tous les vecteurs (trains d'analyse, IoT, rames commerciales) dans un <strong className="text-white">référentiel unique</strong> (ligne, voie, point kilométrique) et les archiver pour constituer la mémoire vivante du réseau ferroviaire.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-sky-300/90 bg-[#0a1626] p-3 rounded-xl">
              <strong>Preuve d'échelle :</strong> Les mesures de l'IRIS 320 vont vers un serveur national de <strong className="text-white">80 To</strong>, avec <strong className="text-white">20 ans d'archives</strong> <SourceCitation id={3} onOpenSource={onOpenSource} />.
            </div>
          </div>

          {/* Carte 2 : Calculer */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4DA3FF]/20 text-[#4DA3FF] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                2. Calculer
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comparer de nombreux passages, valider statistiquement et suivre l'évolution des défauts (maintenance prédictive). Le Cloud entraîne les modèles d'IA lourds et orchestre les jumeaux numériques.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1.5 bg-[#0a1626] p-3 rounded-xl">
              <div>• Suivi multi-passages sur Databricks (projet STC) <SourceCitation id={4} onOpenSource={onOpenSource} /></div>
              <div>• Entraînement de vision sur AWS SageMaker <SourceCitation id={16} onOpenSource={onOpenSource} /> <span className="text-[10px] text-slate-400 font-mono">[historique 2020]</span></div>
              <div>• Programme Usine 3D (caténaire, ballast, gabarit) <SourceCitation id={39} onOpenSource={onOpenSource} /></div>
              <div>• Déploiement de jumeaux numériques de gares <SourceCitation id={38} onOpenSource={onOpenSource} /></div>
            </div>
          </div>

          {/* Carte 3 : Exposer */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#4DA3FF]/20 text-[#4DA3FF] flex items-center justify-center mb-4">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                3. Exposer (API)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diffuser les alertes, rapports d'anomalies et historiques consolidés vers les outils de maintenance prédictive, les tableaux de bord décisionnels et les applications mobiles des agents terrain.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-sky-300/90 bg-[#0a1626] p-3 rounded-xl">
              <strong>Programme Surveillance & Supervision :</strong> Alimentation en temps réel de Supervision NG pour les équipes des Infrapôles <SourceCitation id={6} onOpenSource={onOpenSource} /> <SourceCitation id={24} onOpenSource={onOpenSource} />.
            </div>
          </div>
        </div>
      </div>

      {/* Tableau Local vs Cloud */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-[#4DA3FF]" />
            <span>Répartition des données : Gardé en Local vs Envoyé au Cloud</span>
          </h3>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 self-start">
            Moins de 10 % du volume collecté est transmis <SourceCitation id={5} isCommercial onOpenSource={onOpenSource} />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Colonne Local (Edge) */}
          <div className="bg-[#0b1626] border border-[#FF6B35]/30 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#FF6B35] uppercase tracking-wide mb-3">
              <Cpu className="w-4 h-4" />
              <span>Gardé en local (Edge à bord du train)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                <span>Flux vidéo bruts des caméras linéaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                <span>Mesures laser et géométriques brutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                <span>Vibrations haute fréquence (accéléromètres)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                <span>Signaux bruts de la fibre optique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                <span>Calcul de l'IA en temps réel à la vitesse de circulation</span>
              </li>
              <li className="flex items-start gap-2 font-medium text-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Alerte immédiate en cas de dépassement d'un seuil critique</span>
              </li>
            </ul>
          </div>

          {/* Colonne Cloud */}
          <div className="bg-[#0b1626] border border-[#4DA3FF]/30 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#4DA3FF] uppercase tracking-wide mb-3">
              <Cloud className="w-4 h-4" />
              <span>Envoyé au Cloud (Centres de données)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                <span>Défauts détectés : type, gravité (normal/urgent/critique), position (ligne, voie, PK, GPS), date <SourceCitation id={3} onOpenSource={onOpenSource} /></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                <span>Indicateurs de géométrie agrégés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                <span>Extraits d'images ciblés des défauts confirmés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                <span>Informations de passage (identifiant train, vitesse réelle)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] mt-1.5 shrink-0" />
                <span>Historique multi-passages pour l'analyse prédictive de dégradation</span>
              </li>
              <li className="flex items-start gap-2 font-medium text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>Dans l'autre sens : redéploiement des modèles d'IA mis à jour</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Freins documentés & Contexte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Frein principal et secondaire */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg">
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Freins documentés : Réseau & Souveraineté</span>
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="p-3 bg-[#0a1626] rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">1. Frein principal : Latence et bande passante</strong>
              <span>
                IRIS 320 produit 60 à 100 Go par jour ; les résultats sont évalués à bord puis transmis par réseau mobile avec un léger décalage <SourceCitation id={3} onOpenSource={onOpenSource} />. Selon Gartner, 75 % des données d'entreprise sont créées et traitées hors du Cloud centralisé d'ici 2025 <SourceCitation id={2} onOpenSource={onOpenSource} />.
              </span>
            </div>

            <div className="p-3 bg-[#0a1626] rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">2. Frein secondaire : Souveraineté des données</strong>
              <span>
                En 2022, le passage de SNCF Connect sur AWS a fait l'objet de critiques concernant le RGPD et l'extraterritorialité du droit américain ; SNCF indiquait que 7 000 serveurs sur plus de 35 000 étaient concernés <SourceCitation id={10} onOpenSource={onOpenSource} />.
              </span>
              <p className="mt-2 text-slate-300">
                La loi SREN (article 31, décret du 14 avril 2026) impose un cloud qualifié SecNumCloud pour les données sensibles de l'État et des opérateurs essentiels <SourceCitation id={11} onOpenSource={onOpenSource} /> (application exacte à SNCF non confirmée). Des offres souveraines de confiance existent, telle la coentreprise Thales / Google Cloud (2021) <SourceCitation id={12} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>
        </div>

        {/* Contexte stratégique : Migration AWS & Sources réelles */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-[#4DA3FF]" />
              <span>Cadre et trajectoire Cloud de SNCF</span>
            </h3>

            <div className="p-3 bg-[#0a1626] rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 mb-3">
              <p>
                SNCF Réseau a engagé dès 2018 la migration de ses actifs applicatifs vers le cloud AWS <SourceCitation id={8} onOpenSource={onOpenSource} />, avec un objectif de <strong className="text-white">90 % des applications</strong> migrées et des économies annoncées de <em className="text-white">« plusieurs dizaines de millions d'euros par an »</em> <SourceCitation id={9} onOpenSource={onOpenSource} />.
              </p>
            </div>

            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Deux sources réelles clés (Auteur + Date)
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-[#0c182a] border border-slate-800">
                <span className="font-semibold text-white">Lélia De Matharel, Journal du Net (18/05/2017) :</span>
                <p className="mt-0.5 text-slate-300">
                  Plan numérique de 900 M€ sur 3 ans, 400 personnes dans 50 équipes IoT, -30 % d'incidents d'aiguillages sur la LGV Sud-Est <SourceCitation id={1} onOpenSource={onOpenSource} />.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c182a] border border-slate-800">
                <span className="font-semibold text-white">Santhosh Rao (Gartner), cité par Schneider Electric (30/09/2019) :</span>
                <p className="mt-0.5 text-slate-300">
                  75 % des données créées et traitées hors data center ou cloud centralisé d'ici 2025, contre 10 % auparavant <SourceCitation id={2} onOpenSource={onOpenSource} />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
