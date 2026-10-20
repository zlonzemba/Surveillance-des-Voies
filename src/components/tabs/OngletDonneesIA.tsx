import React from 'react';
import { 
  Database, 
  Brain, 
  Users, 
  ShieldAlert, 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { DemoBiais } from './DemoBiais';

interface OngletDonneesIAProps {
  onOpenSource: (id: number) => void;
}

export const OngletDonneesIA: React.FC<OngletDonneesIAProps> = ({ onOpenSource }) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #9B7BFF */}
      <div className="border-b border-[#2d224e] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9B7BFF]/15 border border-[#9B7BFF]/40 text-xs font-mono font-bold text-[#9B7BFF] mb-3">
          <Database className="w-4 h-4" />
          <span>Sprint 3 · Pipeline de Données, Modèles & Gouvernance</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Données & IA : Détecter, Prédire, Superviser
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          De l'optique linéaire aux séries temporelles multi-passages, les modèles de vision convolutive et transformeurs fiabilisent l'infrastructure ferroviaire sous supervision humaine permanente.
        </p>
      </div>

      {/* A. Tableau des données collectées */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-[#9B7BFF]" />
            <span>Tableau des flux de données collectées</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Formats précis (JPEG, CSV) non publiés par SNCF
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-3">Source</th>
                <th className="py-3 px-3">Données captées</th>
                <th className="py-3 px-3">Volumétrie</th>
                <th className="py-3 px-3">Fréquence</th>
                <th className="py-3 px-3">Format & Traitement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                  IRIS 320 <SourceCitation id={3} onOpenSource={onOpenSource} /> <SourceCitation id={1} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Géométrie de voie, caméras linéaires de surface, caténaire, GPS, température
                </td>
                <td className="py-3 px-3 font-mono font-semibold text-sky-300">
                  60 à 100 Go / jour<br />
                  <span className="text-slate-400 text-xs">Archive 80 To</span>
                </td>
                <td className="py-3 px-3">
                  3 500 à 5 000 km/semaine<br />
                  <span className="text-slate-400 text-xs">Réseau couvert ≈ tous les 15 j</span>
                </td>
                <td className="py-3 px-3">
                  Images + séries de mesures + positions GPS ; classement normal / urgent / critique <SourceCitation id={3} onOpenSource={onOpenSource} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                  Wagons SIM / AIDO <SourceCitation id={15} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Vidéo haute résolution de 7 caméras orientées sur la voie (joints isolants JIC)
                </td>
                <td className="py-3 px-3 font-mono text-purple-300">
                  45 000 km (2023)<br />
                  <span className="text-slate-400 text-xs">80 000 km prévus en 2024</span>
                </td>
                <td className="py-3 px-3">
                  Campagnes d'inspection régulières
                </td>
                <td className="py-3 px-3">
                  Flux vidéo brut analysé par CNN → restitution en tableau pour l'Infrapôle <SourceCitation id={15} onOpenSource={onOpenSource} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                  Trains commerciaux STC <SourceCitation id={4} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Accéléromètres, positionnement satellite (GNSS), vitesse réelle (odométrie)
                </td>
                <td className="py-3 px-3 text-slate-400 italic">
                  Non publié
                </td>
                <td className="py-3 px-3">
                  À chaque passage de train commercial (quotidien)
                </td>
                <td className="py-3 px-3">
                  Séries temporelles projetées par ligne / voie / PK (traitement Python, pandas, Databricks) <SourceCitation id={4} onOpenSource={onOpenSource} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                  Fibre optique SURFO <SourceCitation id={6} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Vibrations acoustiques distribuées (DAS) le long des voies ferrées
                </td>
                <td className="py-3 px-3 font-mono text-emerald-300">
                  28 000 km de câbles<br />
                  <span className="text-slate-400 text-xs">(20 000 km fibre 2025 [39])</span>
                </td>
                <td className="py-3 px-3 font-semibold text-emerald-400">
                  En continu (24h/24)
                </td>
                <td className="py-3 px-3">
                  Signaux d'ondes acoustiques analysés par IA (détection train, défaut rail, chute de rochers) <SourceCitation id={6} onOpenSource={onOpenSource} />
                </td>
              </tr>

              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                  Référence : Network Rail PLPR <SourceCitation id={13} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Images haute fréquence sous châssis (attaches, ballast, traverses)
                </td>
                <td className="py-3 px-3 font-mono text-[#F5B800] font-bold">
                  70 000 images / seconde
                </td>
                <td className="py-3 px-3">
                  Passages des 5 trains de mesure à 125 mph (~200 km/h)
                </td>
                <td className="py-3 px-3">
                  Flux d'images analysé en pattern recognition → signalement de défauts potentiels vers Derby
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* B. Modèle de ML, Tableau BI et Chaîne de supervision de la décision */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modèles et résultats 2026 */}
        <div className="lg:col-span-2 bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#9B7BFF]" />
              <span>Architecture des modèles & Restitution</span>
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Résultat 2026 récent
            </span>
          </div>

          {/* Résultat récent 2026 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-emerald-500/30">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Projet SNCF Réseau / EURODECISION / yPlus (ROADEF Janvier 2026)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Pour fiabiliser les données d'infrastructure ferroviaire, ce projet combine vision par ordinateur moderne (CNN et transformeur DETR). Il annonce des performances exceptionnelles de <strong className="text-white text-base">97,3 % de détection</strong> avec une précision de <strong className="text-white text-base">0,95</strong>, garantissant une validation fluide par les experts <SourceCitation id={37} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Modèle de vision AIDO :</strong>
              <span>Réseaux de neurones convolutifs (CNN, YOLO, Faster R-CNN) les plus adaptés aux défauts de voie <SourceCitation id={15} onOpenSource={onOpenSource} /> <SourceCitation id={18} onOpenSource={onOpenSource} />, entraînés dans le Cloud AWS via SageMaker <SourceCitation id={16} onOpenSource={onOpenSource} />.</span>
            </div>
            <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Restitution BI opérationnelle :</strong>
              <span>Tableaux intégrés à la base de l'Infrapôle Paris-Nord (objet détecté au bon endroit, absent ou hors base) <SourceCitation id={15} onOpenSource={onOpenSource} /> ; classement normal / urgent / critique pour IRIS 320 <SourceCitation id={3} onOpenSource={onOpenSource} />.</span>
            </div>
          </div>
        </div>

        {/* Chaîne de décision verticale : L'IA propose, l'humain décide */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#F5B800] uppercase tracking-wider mb-1">
              Gouvernance de la décision
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              « L'IA propose, l'humain décide »
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Recommandation explicite de l'UIC et McKinsey : validation <em>« human-in-the-loop »</em> obligatoire <SourceCitation id={17} onOpenSource={onOpenSource} />.
            </p>

            {/* Schéma vertical en 4 boîtes */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#14233a] border border-[#9B7BFF]/40 text-center">
                <div className="text-[10px] font-mono font-bold text-[#9B7BFF] uppercase">1. Détection IA</div>
                <div className="text-xs font-bold text-white">Propose un défaut potentiel</div>
              </div>

              <div className="flex justify-center my-0.5 text-slate-500">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>

              <div className="p-2.5 rounded-lg bg-[#14233a] border border-amber-500/40 text-center">
                <div className="text-[10px] font-mono font-bold text-amber-300 uppercase">2. Expert métier</div>
                <div className="text-xs font-bold text-white">Confirme ou rejette l'alerte <SourceCitation id={13} onOpenSource={onOpenSource} /></div>
              </div>

              <div className="flex justify-center my-0.5 text-slate-500">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>

              <div className="p-2.5 rounded-lg bg-[#14233a] border border-blue-500/40 text-center">
                <div className="text-[10px] font-mono font-bold text-blue-300 uppercase">3. Chef de secteur / Infrapôle</div>
                <div className="text-xs font-bold text-white">Décide et planifie l'intervention</div>
              </div>

              <div className="flex justify-center my-0.5 text-slate-500">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center">
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">4. Agents de maintenance</div>
                <div className="text-xs font-bold text-white">Interviennent physiquement sur la voie</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C. Impact mesurable EX & CX (2 Colonnes) */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#9B7BFF]" />
          <span>Impacts mesurables : Salariés (EX) et Voyageurs (CX)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colonne EX (Salariés) */}
          <div className="bg-[#0b1626] border border-[#234169] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                EX · Expérience Salariés & Sécurité
              </span>
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">8 500 miles de voies sans inspection à pied :</strong>
                <span>Réduction massive de l'exposition dangereuse des agents sur le ballast au Royaume-Uni (potentiel de 15 000 miles) <SourceCitation id={13} onOpenSource={onOpenSource} />.</span>
              </li>
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">2 200 agents d'inspection ciblés :</strong>
                <span>Utilisateurs potentiels d'AIDO libérés des tâches fastidieuses de visionnage continu de vidéos <SourceCitation id={15} onOpenSource={onOpenSource} />.</span>
              </li>
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">Tournées à pied supprimées sur LGV :</strong>
                <span>Remplacées par les mesures haute vitesse de l'IRIS 320 à 320 km/h <SourceCitation id={1} onOpenSource={onOpenSource} />.</span>
              </li>
            </ul>
          </div>

          {/* Colonne CX (Voyageurs) */}
          <div className="bg-[#0b1626] border border-[#234169] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#F5B800] uppercase tracking-wider">
                CX · Expérience Voyageurs & Ponctualité
              </span>
              <Activity className="w-4 h-4 text-[#F5B800]" />
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">-30 % d'incidents d'aiguillage :</strong>
                <span>Constaté sur la LGV Sud-Est dès le déploiement initial des accéléromètres connectés <SourceCitation id={1} onOpenSource={onOpenSource} />.</span>
              </li>
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">-20 % de retards par service ferroviaire :</strong>
                <span>Effet attendu de la maintenance prédictive de l'infrastructure <SourceCitation id={17} isEstimation onOpenSource={onOpenSource} />.</span>
              </li>
              <li className="p-3 bg-[#0e1d33] rounded-lg border border-slate-800">
                <strong className="text-white block text-sm mb-0.5">-15 à -25 % d'arrêts imprévus en ligne :</strong>
                <span>Grâce à la détection précoce des micro-fissures avant fracture <SourceCitation id={17} isEstimation onOpenSource={onOpenSource} />.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* D. BIAIS ET RISQUE MAJEUR : DÉMO INTERACTIVE */}
      <DemoBiais onOpenSource={onOpenSource} />

      {/* Parades algorithmiques et Partenariat Numalis */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-emerald-400" />
          <span>Parades aux risques algorithmiques & Conformité AI Act</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
          <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Génération de défauts synthétiques :</strong>
            <span>Création d'images de fissures rares par réseaux antagonistes génératifs (GAN) pour enrichir l'apprentissage et rééquilibrer les classes <SourceCitation id={18} onOpenSource={onOpenSource} />.</span>
          </div>
          <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Tests de robustesse météo :</strong>
            <span>Simulation de pluie, neige, reflets solaires et rayures sur l'objectif optique pour éviter les faux négatifs en conditions réelles <SourceCitation id={19} onOpenSource={onOpenSource} />.</span>
          </div>
          <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Partenariat Numalis & SNCF :</strong>
            <span>Depuis 2018, tests d'explicabilité et de robustesse des IA ferroviaires certifiant la conformité au règlement européen AI Act (communiqué de janvier 2026) <SourceCitation id={40} onOpenSource={onOpenSource} />.</span>
          </div>
          <div className="p-3 bg-[#0a1524] rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Validation humaine systématique :</strong>
            <span>Triage par les experts avant toute intervention pour contrer l'effet « boîte noire » et préserver les compétences métier des équipes <SourceCitation id={17} onOpenSource={onOpenSource} /> <SourceCitation id={37} onOpenSource={onOpenSource} />.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
