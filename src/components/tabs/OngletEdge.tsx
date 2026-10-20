import React from 'react';
import { 
  Cpu, 
  WifiOff, 
  HardDrive, 
  Zap, 
  ArrowRight, 
  Train, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert,
  Server
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { CalculateurLatence } from './CalculateurLatence';

interface OngletEdgeProps {
  onOpenSource: (id: number) => void;
}

export const OngletEdge: React.FC<OngletEdgeProps> = ({ onOpenSource }) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #FF6B35 */}
      <div className="border-b border-[#3b231d] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/40 text-xs font-mono font-bold text-[#FF6B35] mb-3">
          <Cpu className="w-4 h-4" />
          <span>Sprint 2 · Traitement Embarqué Ultra-Rapide</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          L'Edge : Décider dans le train, au plus près du rail
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Face aux contraintes de vitesse physique extrême, de zones blanches et de débits massifs, l'Edge computing est une obligation de sécurité ferroviaire absolue.
        </p>
      </div>

      {/* A. Où l'Edge est obligatoire : 3 Cartes */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#FF6B35]" />
          <span>Où l'Edge est strictement obligatoire (3 contraintes)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Carte 1 : Latence / Sécurité */}
          <div className="bg-[#112240] border border-[#3b2721] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                1. Latence / Sécurité
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Un défaut critique doit déclencher une alerte sans attendre un aller-retour réseau. À 320 km/h, le train parcourt <strong className="text-white">88,9 mètres chaque seconde</strong>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-orange-200 bg-[#0a1524] p-3 rounded-xl">
              <strong>Preuve chiffrée :</strong> Aller-retour Cloud de <strong className="text-white">100 à 300 ms</strong> contre <strong className="text-white">&lt; 10 ms</strong> en Edge local <SourceCitation id={5} isCommercial onOpenSource={onOpenSource} />. À 320 km/h, 8,9 à 26,7 m parcourus contre 0,9 m en Edge !
            </div>
          </div>

          {/* Carte 2 : Coupure réseau */}
          <div className="bg-[#112240] border border-[#3b2721] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center mb-4">
                <WifiOff className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                2. Coupure réseau
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tunnels, tranchées rocheuses, zones blanches et commutations d'antennes 4G/5G à haute vitesse : la connexion est intermittente. Le système de détection doit rester 100 % opérationnel déconnecté.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-orange-200 bg-[#0a1524] p-3 rounded-xl">
              <strong>Contexte Arcep :</strong> L'objectif de couverture des lignes régionales n'était que de <strong className="text-white">90 % fin 2025</strong> ; plusieurs LGV (Lyon-Marseille, Atlantique, SEA) comportent des zones mal couvertes <SourceCitation id={20} onOpenSource={onOpenSource} />.
            </div>
          </div>

          {/* Carte 3 : Volume de données */}
          <div className="bg-[#112240] border border-[#3b2721] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                3. Volume de données
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Le flux vidéo continu haute résolution est inondant et impossible à envoyer par voie hertzienne : 60 à 100 Go/jour pour IRIS 320 <SourceCitation id={3} onOpenSource={onOpenSource} />, 70 000 images/seconde pour PLPR <SourceCitation id={13} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-orange-200 bg-[#0a1524] p-3 rounded-xl">
              <strong>Bande passante :</strong> Un flux vidéo 1080p pèse environ <strong className="text-white">6 Mbit/s</strong>, contre seulement <strong className="text-white">~0,1 Mbit/s</strong> pour les métadonnées filtrées <SourceCitation id={5} isCommercial onOpenSource={onOpenSource} />.
            </div>
          </div>
        </div>

        {/* Note sur ce qui n'est pas Edge */}
        <div className="mt-4 p-3 rounded-xl bg-[#0b1626] border border-slate-800 text-xs text-slate-400">
          <strong className="text-slate-200">Là où l'Edge n'est PAS nécessaire :</strong> L'entraînement des modèles lourds d'IA, l'archivage 20 ans, les comparaisons statistiques multi-passages et la planification des travaux de nuit restent naturellement exécutés dans le Cloud.
        </div>
      </div>

      {/* B. CALCULATEUR INTERACTIF */}
      <CalculateurLatence onOpenSource={onOpenSource} />

      {/* C. Comment Edge et Cloud s'articulent : Frise en 6 étapes */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Comment Edge et Cloud s'articulent dans le flux opérationnel</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {[
            {
              num: 1,
              title: 'Mesure',
              loc: 'Edge (train)',
              desc: 'Caméras, lasers et accéléromètres captent le rail en continu (jusqu\'à 1 image tous les 0,8 mm sur PLPR [13]).',
            },
            {
              num: 2,
              title: 'Détection & tri',
              loc: 'Edge (train)',
              desc: 'L\'IA embarquée repère les défauts potentiels, classe leur niveau de criticité et élague le flux inutile.',
            },
            {
              num: 3,
              title: 'Transmission',
              loc: 'Réseau 4G/5G',
              desc: 'Seuls les défauts géolocalisés partent, en 4G/5G ou en différé en cas de zone blanche (IRIS 320 [3]).',
            },
            {
              num: 4,
              title: 'Centralisation',
              loc: 'Cloud central',
              desc: 'Comparaison automatique avec les passages précédents et la base nationale des équipements de voie.',
            },
            {
              num: 5,
              title: 'Validation humaine',
              loc: 'Centre d\'expertise',
              desc: 'Des experts ferroviaires confirment ou rejettent les défauts proposés par les algorithmes [13].',
            },
            {
              num: 6,
              title: 'Réentraînement',
              loc: 'Cloud → Edge',
              desc: 'Les défauts validés servent à réentraîner les modèles (AWS SageMaker [16]), redéployés ensuite dans les trains.',
            },
          ].map((item) => (
            <div key={item.num} className="bg-[#0b1626] border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#FF6B35] text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                    {item.loc}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* D. Cas réels déployés : Network Rail PLPR vs SNCF AIDO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Rail PLPR */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#F5B800] uppercase tracking-wider">
                Cas de référence déployé · Royaume-Uni
              </span>
              <span className="text-xs font-mono text-slate-400">Royaume-Uni</span>
            </div>
            <h4 className="text-xl font-black text-white mb-3">
              Network Rail : Système PLPR (Plain Line Pattern Recognition)
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p>
                <strong className="text-white">Dispositif :</strong> Caméras sous 5 trains de mesure, dont le <em>New Measurement Train</em> <SourceCitation id={13} onOpenSource={onOpenSource} /> <SourceCitation id={14} onOpenSource={onOpenSource} />.
              </p>
              <p>
                <strong className="text-white">Cadence de capture :</strong> 1 image tous les 0,8 mm, soit <strong className="text-[#F5B800]">70 000 images par seconde</strong> à 125 mph (~200 km/h).
              </p>
              <p>
                <strong className="text-white">Défauts détectés :</strong> Attaches manquantes ou inefficaces, éclisses fissurées, excès ou manque de ballast.
              </p>
              <p>
                <strong className="text-white">Traitement & experts :</strong> L'IA signale les anomalies potentielles ; une équipe d'experts à Derby les confirme avant transmission aux responsables de section (un 2e centre ouvert en janvier 2019) <SourceCitation id={13} onOpenSource={onOpenSource} />.
              </p>
              <div className="p-3 bg-[#0a1626] rounded-xl border border-emerald-500/30 text-emerald-300 mt-2">
                <strong>Résultats mesurés :</strong> Inspections à pied supprimées sur <strong className="text-white">8 500 miles</strong> (potentiel de 15 000 miles) ; environ <strong className="text-white">2,2 M£ économisés</strong> (2019) ; 975 000 miles inspectés prévus sur 2019-2024 <SourceCitation id={14} onOpenSource={onOpenSource} />.
              </div>
            </div>
          </div>
        </div>

        {/* SNCF Réseau : AIDO & Autres gestionnaires */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#4DA3FF] uppercase tracking-wider">
                Cas de référence France · SNCF Réseau
              </span>
              <span className="text-xs font-mono text-slate-400">France</span>
            </div>
            <h4 className="text-xl font-black text-white mb-3">
              AIDO : L'IA d'analyse vidéo d'Eurailscout France
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p>
                <strong className="text-white">Dispositif AIDO :</strong> IA de vision par ordinateur (réseaux de neurones convolutifs CNN) développée par Eurailscout France, filiale de SNCF Réseau, analysant la vidéo de 7 caméras des wagons SIM <SourceCitation id={15} onOpenSource={onOpenSource} />.
              </p>
              <p>
                <strong className="text-white">Cible initiale :</strong> Détection et contrôle automatique des joints isolants collés (JIC), éléments critiques de la signalisation.
              </p>
              <p>
                <strong className="text-white">Reconnaissance internationale :</strong> Le rapport mondial UIC / McKinsey (février 2024) cite AIDO comme référence majeure d'application de l'IA chez les gestionnaires d'infrastructure <SourceCitation id={17} onOpenSource={onOpenSource} />.
              </p>
            </div>

            <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
              Autres exemples ferroviaires mondiaux
            </h5>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-2 rounded-lg bg-[#0a1626] border border-slate-800">
                <strong className="text-white">CFF (Suisse) :</strong> Caméras avec IA de détection des défauts de rails fiabilisée avec LatticeFlow, l'ETH Zurich et Siemens <SourceCitation id={19} onOpenSource={onOpenSource} />.
              </div>
              <div className="p-2 rounded-lg bg-[#0a1626] border border-slate-800">
                <strong className="text-white">TrackEi (L&T) :</strong> IA embarquée sur boîtiers durcis NVIDIA Jetson, détection en temps réel à plus de 60 mph en essais fret nord-américains (mars 2025) <SourceCitation id={22} onOpenSource={onOpenSource} />.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E. Freins opérationnels d'un déploiement Edge */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Coûts et freins opérationnels d'un déploiement Edge</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-1.5">Charge de validation humaine</h4>
            <p className="text-xs text-slate-300">
              L'IA signale des défauts « potentiels » : il faut des équipes d'experts pour les trier. Network Rail a dû ouvrir un 2e centre à Derby pour absorber la charge <SourceCitation id={13} onOpenSource={onOpenSource} /> <SourceCitation id={14} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-1.5">Matériel durci & certifié</h4>
            <p className="text-xs text-slate-300">
              Calculateurs embarqués soumis aux sévères normes ferroviaires : <strong className="text-white">EN 50155:2021</strong> (vibrations, chocs, température extrême) et <strong className="text-white">EN 45545-2</strong> (feu / fumée) <SourceCitation id={21} isCommercial onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-1.5">Parc à maintenir & MAJ</h4>
            <p className="text-xs text-slate-300">
              Chaque rame devient un centre de calcul décentralisé : gestion des pannes, mises à jour logicielles de sécurité, redéploiement des modèles. À l'échelle SNCF, <strong className="text-white">plus de 1 100 trains</strong> sont déjà équipés de capteurs <SourceCitation id={7} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-white mb-1.5">Rentabilité & accès aux données</h4>
            <p className="text-xs text-slate-300">
              Business case difficile à démontrer (changements de processus profonds) ; l'accès aux données est identifié comme le premier obstacle, nécessitant un accompagnement fort des équipes <SourceCitation id={17} onOpenSource={onOpenSource} />.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
          <strong className="text-slate-200">À mettre en balance :</strong> PLPR a permis environ 2,2 M£ d'économies <SourceCitation id={14} onOpenSource={onOpenSource} />. Aucun coût global chiffré de déploiement n'est publié par SNCF ou Network Rail : le coût reste un frein qualitatif dans les sources consultées.
        </div>
      </div>
    </div>
  );
};
