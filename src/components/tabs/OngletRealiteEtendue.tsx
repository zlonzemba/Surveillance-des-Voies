import React, { useState } from 'react';
import { 
  Glasses, 
  Layers, 
  Eye, 
  TrendingUp, 
  Info, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { CalquePredictif } from './CalquePredictif';

interface OngletRealiteEtendueProps {
  onOpenSource: (id: number) => void;
}

export const OngletRealiteEtendue: React.FC<OngletRealiteEtendueProps> = ({ onOpenSource }) => {
  const [activeLayerInfo, setActiveLayerInfo] = useState<number | null>(null);

  const layers3D = [
    {
      id: 5,
      name: '5. Prédictions de l\'IA & Dérive',
      sourceId: 32,
      origin: 'Modèles de maintenance prédictive apprenant la courbe de panne passage après passage (projet STC) et modélisation hollandaise des aiguillages [4][32].',
      color: '#F472B6',
    },
    {
      id: 4,
      name: '4. Télémétrie IoT temps réel',
      sourceId: 24,
      origin: 'Flux en direct des capteurs de température de rail, accéléromètres d\'aiguillages et fibre acoustique SURFO centralisés dans Supervision NG [6][24].',
      color: '#2DD4BF',
    },
    {
      id: 3,
      name: '3. Plateforme logicielle Altametris Suite',
      sourceId: 29,
      origin: 'Logiciel en ligne SaaS dans le navigateur : visualisation de nuages de points 3D colorisés, superposition multicouches et détection automatique des anomalies [29].',
      color: '#4DA3FF',
    },
    {
      id: 2,
      name: '2. Jumeau numérique du réseau',
      sourceId: 25,
      origin: 'Réseau de 45 000 km consultable en 3D à une précision de ~5 mm ; LiDAR scanné toutes les 8 semaines (≈ 3 To/jour) avec IA extrayant les cotes géométriques [25].',
      color: '#9B7BFF',
    },
    {
      id: 1,
      name: '1. Maquette numérique / BIM & MINERVE',
      sourceId: 28,
      origin: 'Maquettes numériques 3D des infrastructures et des matériels (PLM / BIM) servant de socle spatial et géométrique aux calques augmentés [28][7].',
      color: '#94A3B8',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #F472B6 */}
      <div className="border-b border-[#3d182e] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F472B6]/15 border border-[#F472B6]/40 text-xs font-mono font-bold text-[#F472B6] mb-3">
          <Glasses className="w-4 h-4" />
          <span>Sprint 5 · Réalité Augmentée, Jumeau 3D & Risques</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Réalité étendue : Voir le rail autrement
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Guidage des techniciens en atelier, superposition de nuages de points LiDAR millimétriques et projection holographique des micro-fissures prédites directement sur le ballast.
        </p>
      </div>

      {/* A. Quel usage précis ? 4 cartes avec étiquettes de statut */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Glasses className="w-5 h-5 text-[#F472B6]" />
          <span>Quel usage précis ? 4 cas d'application analysés</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Usage 1 : Projection des défauts */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#F472B6] uppercase">Usage retenu</span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Proposition
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Projection des défauts sur le rail</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Afficher dans un casque de réalité mixte ou sur tablette les micro-fissures et défauts géométriques prédits, à leur position métrique exacte sur la voie. S'appuie sur le jumeau numérique et la « Maintenance assistée » présentée à VivaTech 2026 <SourceCitation id={7} onOpenSource={onOpenSource} /> <SourceCitation id={25} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>

          {/* Usage 2 : Guidage atelier */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Matériel roulant</span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Déployé
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Guidage opérateur en atelier</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Déjà utilisé sur matériel roulant : instructions affichées en réalité augmentée pour le montage des sièges de TGV duplex (remplace la trentaine de fiches papier) et visualisation des faisceaux de câblage des motrices avant montage <SourceCitation id={28} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Perspective : afficher les tensions électriques aux électriciens via l'IoT <SourceCitation id={28} onOpenSource={onOpenSource} />.
            </div>
          </div>

          {/* Usage 3 : Formation à risque */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Pédagogie VR</span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  Proposition
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Formation en environnement à risque</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Entraînement des techniciens de voie aux situations d'urgence (approche inopinée d'un train, coupure caténaire) en réalité virtuelle immersive sans exposition au danger réel sur les voies.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 italic border-t border-slate-800">
              Aucune source solide trouvée pour la voie : piste présentée comme proposition.
            </div>
          </div>

          {/* Usage 4 : Repérage PMR */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">Voyageurs en gare</span>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                  Déployé (BLE)
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Repérage PMR en gare</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                SNCF Voyageurs : balises Bluetooth Low Energy (BLE) et applications mobiles d'aide à l'orientation pour guider les voyageurs à mobilité réduite en gare <SourceCitation id={7} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Pas de réalité augmentée visuelle citée dans les sources <SourceCitation id={7} onOpenSource={onOpenSource} />. Au Royaume-Uni, HS1 teste la réalité augmentée <SourceCitation id={31} onOpenSource={onOpenSource} />.
            </div>
          </div>
        </div>
      </div>

      {/* B. D'où viennent les calques 3D ? Pile de 5 calques empilés en perspective */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#F472B6]" />
              <span>D'où viennent les données des calques 3D ?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Survolez ou cliquez sur chacun des 5 calques superposés pour afficher la source de données exacte.
            </p>
          </div>
        </div>

        {/* 3D Stack Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-col gap-2.5">
            {layers3D.map((layer) => {
              const isHovered = activeLayerInfo === layer.id;
              return (
                <div
                  key={layer.id}
                  onMouseEnter={() => setActiveLayerInfo(layer.id)}
                  onClick={() => setActiveLayerInfo(layer.id)}
                  style={{
                    borderColor: isHovered ? layer.color : '#234169',
                    backgroundColor: isHovered ? '#142742' : '#0b1626',
                  }}
                  className="p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group shadow"
                >
                  <div className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: `${layer.color}30`, color: layer.color, borderColor: layer.color }}
                      className="w-7 h-7 rounded-lg border font-mono font-bold text-xs flex items-center justify-center shrink-0"
                    >
                      {layer.id}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-slate-100">
                      {layer.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SourceCitation id={layer.sourceId} onOpenSource={onOpenSource} />
                    <Info className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Layer Detail Box */}
          <div className="lg:col-span-5 bg-[#091424] p-5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-200 min-h-[220px] flex flex-col justify-between">
            {activeLayerInfo ? (
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F472B6] mb-1">
                  Détail de la source de données #{activeLayerInfo}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {layers3D.find((l) => l.id === activeLayerInfo)?.name}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {layers3D.find((l) => l.id === activeLayerInfo)?.origin}
                </p>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-400">
                <Layers className="w-10 h-10 mx-auto text-slate-600 mb-2" />
                <p>Survolez ou cliquez sur l'un des 5 calques à gauche pour examiner son origine géospatiale.</p>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              Programme <strong>MINERVE</strong> : BIM + Jumeau numérique + IA pour la performance long terme des infrastructures <SourceCitation id={7} onOpenSource={onOpenSource} />.
            </div>
          </div>
        </div>
      </div>

      {/* C. DÉMO INTERACTIVE : Calque prédictif des risques */}
      <CalquePredictif onOpenSource={onOpenSource} />

      {/* D. Retour sur investissement (ROI) : 6 Tuiles */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          <span>Retour sur investissement (ROI) documenté</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tuile 1 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-2xl font-black text-emerald-400 font-mono mb-1">+ 1 000 j-h</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Temps de relevé à pied</div>
            <p className="text-xs text-slate-300">
              Plus de 1 000 jours-homme de relevés physiques supprimés grâce au jumeau numérique Altametris <SourceCitation id={25} onOpenSource={onOpenSource} />.
            </p>
          </div>

          {/* Tuile 2 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-2xl font-black text-emerald-400 font-mono mb-1">Plusieurs M€</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Économies d'exploitation</div>
            <p className="text-xs text-slate-300">
              Économies annuelles majeures permises par le retrait de plusieurs trains de mesure lourds au profit des scans 3D <SourceCitation id={25} onOpenSource={onOpenSource} />.
            </p>
          </div>

          {/* Tuile 3 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-2xl font-black text-[#F5B800] font-mono mb-1">15× plus rapide</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Relevé 3D par drone</div>
            <p className="text-xs text-slate-300">
              Jusqu'à 15 fois plus rapide et 4 fois moins cher qu'une méthode géomètre classique sur site <SourceCitation id={30} isCommercial onOpenSource={onOpenSource} />.
            </p>
          </div>

          {/* Tuile 4 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-2xl font-black text-[#4DA3FF] font-mono mb-1">-30 %</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Incidents d'aiguillage</div>
            <p className="text-xs text-slate-300">
              Baisse constatée des dysfonctionnements dès la pose des accéléromètres connectés sur la LGV Sud-Est <SourceCitation id={1} onOpenSource={onOpenSource} />.
            </p>
          </div>

          {/* Tuile 5 */}
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-2xl font-black text-rose-400 font-mono mb-1">≈ 3 500 €</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Coût par casque AR</div>
            <p className="text-xs text-slate-300">
              Matériel coûteux à généraliser à grande échelle ; délai de rentabilité non immédiat nécessitant de multiplier les usages <SourceCitation id={28} onOpenSource={onOpenSource} />.
            </p>
          </div>

          {/* Tuile 6 Grisée */}
          <div className="bg-[#09121e] p-4 rounded-xl border border-slate-800/60 opacity-60">
            <div className="text-2xl font-black text-slate-400 font-mono mb-1">0 accident</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Formation & autonomie PMR</div>
            <p className="text-xs text-slate-400">
              Zéro accident en formation / autonomie PMR : objectif visé, aucun chiffre sourcé dans la documentation disponible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
