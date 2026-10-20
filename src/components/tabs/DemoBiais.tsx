import React, { useState } from 'react';
import { 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  TrendingUp,
  ShieldCheck,
  Brain
} from 'lucide-react';
import { computeImbalanceMetrics } from '../../utils/calculations';
import { SourceCitation } from '../SourceCitation';

interface DemoBiaisProps {
  onOpenSource: (id: number) => void;
}

export const DemoBiais: React.FC<DemoBiaisProps> = ({ onOpenSource }) => {
  const [modelType, setModelType] = useState<'naive_always_healthy' | 'trained_ai'>('naive_always_healthy');
  const [metricMode, setMetricMode] = useState<'accuracy' | 'recall'>('accuracy');

  const metrics = computeImbalanceMetrics(modelType);

  return (
    <div className="bg-[#112240] border border-[#9B7BFF]/40 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9B7BFF]/20 text-[#9B7BFF] text-xs font-mono font-bold mb-1">
            <Brain className="w-3.5 h-3.5" />
            <span>Démonstration pédagogique interactive</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-white">
            Le paradoxe du déséquilibre des classes ferroviaires
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Sur les rails, 99 % des images sont saines : pourquoi une précision globale de 99 % peut masquer une catastrophe ?
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 self-start">
          Exemple fictif pédagogique
        </span>
      </div>

      {/* Explication du biais */}
      <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
        <p>
          <strong className="text-white">Le problème :</strong> Les sections de voies saines sont immensément plus nombreuses que les sections défectueuses. Ji, Woo et Quek qualifient ce phénomène de <em className="text-[#9B7BFF]">« class imbalance problem »</em> <SourceCitation id={18} onOpenSource={onOpenSource} />.
          Conséquence critique : un réseau de neurones mal optimisé apprendra à répondre quasi systématiquement « sain » pour minimiser sa perte mathématique, ratant ainsi les micro-fissures (faux négatifs), ce qui constitue le scénario le plus dangereux en sécurité ferroviaire.
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Choix du modèle */}
        <div className="bg-[#0c182a] p-4 rounded-xl border border-slate-800">
          <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
            1. Choisissez le modèle testé sur 1 000 images :
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setModelType('naive_always_healthy')}
              className={`p-3 rounded-lg text-left text-xs transition-all cursor-pointer border ${
                modelType === 'naive_always_healthy'
                  ? 'bg-rose-950/70 border-rose-500 text-white font-bold ring-2 ring-rose-500/30'
                  : 'bg-[#13243d] hover:bg-[#182e4e] border-slate-700 text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-rose-300">Modèle naïf</div>
              <div className="text-[11px] text-slate-400 mt-1">Répond toujours « sain » (0 défaut détecté)</div>
            </button>

            <button
              type="button"
              onClick={() => setModelType('trained_ai')}
              className={`p-3 rounded-lg text-left text-xs transition-all cursor-pointer border ${
                modelType === 'trained_ai'
                  ? 'bg-purple-950/70 border-[#9B7BFF] text-white font-bold ring-2 ring-[#9B7BFF]/30'
                  : 'bg-[#13243d] hover:bg-[#182e4e] border-slate-700 text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-purple-300">IA entraînée pour le rail</div>
              <div className="text-[11px] text-slate-400 mt-1">Priorité absolue au Rappel + validation humaine</div>
            </button>
          </div>
        </div>

        {/* Bouton Changer de métrique */}
        <div className="bg-[#0c182a] p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
              2. Métrique d'évaluation appliquée :
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMetricMode(metricMode === 'accuracy' ? 'recall' : 'accuracy')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#9B7BFF] hover:bg-[#8864f7] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Changer de métrique ({metricMode === 'accuracy' ? 'Actuelle : Précision' : 'Actuelle : Rappel'})</span>
              </button>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Cliquez pour basculer entre l'illusion de la précision globale et la réalité du taux de détection (Rappel).
          </div>
        </div>
      </div>

      {/* Résultat des Métriques Chiffrées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Précision globale */}
        <div className={`p-4 rounded-xl border transition-all ${
          metricMode === 'accuracy'
            ? 'bg-[#162740] border-[#F5B800] ring-2 ring-[#F5B800]/40 shadow-lg'
            : 'bg-[#0a1524] border-slate-800 opacity-75'
        }`}>
          <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-400 mb-1">
            <span>Précision globale (Accuracy)</span>
            {metricMode === 'accuracy' && <span className="text-[#F5B800] font-bold">Métrique affichée</span>}
          </div>
          <div className="text-3xl font-mono font-black text-white">
            {metrics.accuracyPercent.toFixed(1)} %
          </div>
          <div className="text-xs text-slate-300 mt-1">
            {modelType === 'naive_always_healthy'
              ? 'Trompeur ! Le modèle semble parfait avec 99 % de précision...'
              : '97,5 % : très bonne précision tout en acceptant quelques faux positifs vérifiés par l\'expert.'}
          </div>
        </div>

        {/* Rappel (Recall) */}
        <div className={`p-4 rounded-xl border transition-all ${
          metricMode === 'recall'
            ? 'bg-[#162740] border-[#9B7BFF] ring-2 ring-[#9B7BFF]/40 shadow-lg'
            : 'bg-[#0a1524] border-slate-800 opacity-75'
        }`}>
          <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-400 mb-1">
            <span>Rappel (Recall / Détection des vrais défauts)</span>
            {metricMode === 'recall' && <span className="text-[#9B7BFF] font-bold">Métrique affichée</span>}
          </div>
          <div className={`text-3xl font-mono font-black ${
            metrics.recallPercent === 0 ? 'text-rose-400' : 'text-emerald-400'
          }`}>
            {metrics.recallPercent.toFixed(1)} %
          </div>
          <div className="text-xs text-slate-300 mt-1">
            {modelType === 'naive_always_healthy'
              ? 'DANGER CRITIQUE : 0 % des défauts détectés ! Les 10 fissures passent inaperçues.'
              : 'EXCELLENT : 100 % des défauts réels sont détectés (0 fissure ratée).'}
          </div>
        </div>
      </div>

      {/* Matrice de confusion 2x2 */}
      <div className="bg-[#0a1422] p-4 rounded-xl border border-slate-800">
        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
          Matrice de confusion sur l'échantillon test (1 000 images : 10 fissures / 990 voies saines)
        </h4>

        <div className="grid grid-cols-2 gap-3 text-xs">
          {/* Vrais Positifs (TP) */}
          <div className="bg-[#0f1f33] p-3 rounded-lg border border-emerald-500/30">
            <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
              <span>Vrais Positifs (TP)</span>
              <CheckCircle className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-black text-white">{metrics.truePositives}</div>
            <div className="text-[11px] text-slate-400">Fissures réelles bien détectées</div>
          </div>

          {/* Faux Négatifs (FN) - Le pire danger ! */}
          <div className={`p-3 rounded-lg border ${
            metrics.falseNegatives > 0
              ? 'bg-rose-950/50 border-rose-500 text-rose-200'
              : 'bg-[#0f1f33] border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center justify-between font-bold mb-1">
              <span className={metrics.falseNegatives > 0 ? 'text-rose-400' : 'text-slate-400'}>
                Faux Négatifs (FN) — Danger ferroviaire
              </span>
              <XCircle className="w-4 h-4" />
            </div>
            <div className={`text-2xl font-mono font-black ${metrics.falseNegatives > 0 ? 'text-rose-400' : 'text-white'}`}>
              {metrics.falseNegatives}
            </div>
            <div className="text-[11px]">Fissures ignorées par l'IA (vrai risque d'accident)</div>
          </div>

          {/* Faux Positifs (FP) */}
          <div className="bg-[#0f1f33] p-3 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between text-amber-300 font-bold mb-1">
              <span>Faux Positifs (FP)</span>
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-black text-white">{metrics.falsePositives}</div>
            <div className="text-[11px] text-slate-400">Fausses alertes (filtrées par l'expert humain à Derby ou Infrapôle)</div>
          </div>

          {/* Vrais Négatifs (TN) */}
          <div className="bg-[#0f1f33] p-3 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between text-slate-300 font-bold mb-1">
              <span>Vrais Négatifs (TN)</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-2xl font-mono font-black text-white">{metrics.trueNegatives}</div>
            <div className="text-[11px] text-slate-400">Voies saines correctement classées saines</div>
          </div>
        </div>

        <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
          <strong>Enseignement clé :</strong> En sécurité ferroviaire, le coût d'un faux négatif (fissure non détectée qui mène au bris de rail) est incommensurablement plus élevé que celui d'un faux positif. L'évaluation doit se faire exclusivement sur le <strong>Rappel</strong> <SourceCitation id={18} onOpenSource={onOpenSource} />.
        </div>
      </div>
    </div>
  );
};
