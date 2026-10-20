import React, { useState } from 'react';
import { 
  Eye, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';
import { getTrackSectionState, TrackSectionState } from '../../utils/calculations';
import { SourceCitation } from '../SourceCitation';

interface CalquePredictifProps {
  onOpenSource: (id: number) => void;
}

export const CalquePredictif: React.FC<CalquePredictifProps> = ({ onOpenSource }) => {
  const [monthOffset, setMonthOffset] = useState<number>(1);
  const [selectedPk, setSelectedPk] = useState<number>(16);
  const [sentValidations, setSentValidations] = useState<Record<number, boolean>>({});

  const pks = [12, 13, 14, 15, 16, 17, 18, 19];
  const selectedState = getTrackSectionState(selectedPk, monthOffset);

  const handleSendValidation = (pk: number) => {
    setSentValidations((prev) => ({ ...prev, [pk]: true }));
  };

  return (
    <div className="bg-[#112240] border border-[#F472B6]/40 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F472B6]/20 text-[#F472B6] text-xs font-mono font-bold mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Démo interactive AR</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-white">
            Calque prédictif des risques sur la voie (Vue 3D)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Simulation en réalité augmentée : chaque tronçon est coloré en fonction de l'horizon de criticité calculé par l'IA.
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 self-start">
          Exemple FICTIF pédagogique
        </span>
      </div>

      {/* Temporal Slider */}
      <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="risk-time-slider" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#F472B6]" />
            <span>Dans combien de temps ? (Horizon temporel prédictif)</span>
          </label>
          <span className="font-mono text-base font-bold text-[#F5B800]">
            {monthOffset === 0 ? 'Aujourd\'hui (Mois 0)' : `Dans ${monthOffset} mois`}
          </span>
        </div>
        <input
          id="risk-time-slider"
          type="range"
          min="0"
          max="12"
          step="0.5"
          value={monthOffset}
          onChange={(e) => setMonthOffset(Number(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F472B6]"
          aria-label="Horizon temporel de prédiction en mois"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
          <span>0 mois (immédiat)</span>
          <span>~3 sem (PK 16)</span>
          <span>2 mois (PK 17)</span>
          <span>4 mois (PK 14)</span>
          <span>6 mois</span>
          <span>12 mois (&gt; seuil sain)</span>
        </div>
      </div>

      {/* 3D Tilted Track View (CSS 3D perspective) */}
      <div className="relative bg-[#08111d] p-6 rounded-2xl border border-slate-800 overflow-hidden mb-6">
        <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
          <span>Vue en perspective de la voie ferrée (PK 12 à PK 19)</span>
          <span className="text-slate-400">Cliquez sur un tronçon pour l'inspecter</span>
        </div>

        {/* CSS 3D Stage */}
        <div 
          className="w-full py-8 flex justify-center items-center overflow-x-auto"
          style={{ perspective: '800px' }}
        >
          <div 
            className="flex items-center gap-2 sm:gap-3 transition-transform duration-500"
            style={{ 
              transform: 'rotateX(40deg) rotateZ(-3deg) scale(0.95)',
              transformStyle: 'preserve-3d'
            }}
          >
            {pks.map((pk) => {
              const state = getTrackSectionState(pk, monthOffset);
              const isSelected = selectedPk === pk;

              // Color styles based on status
              const colorBg =
                state.status === 'critique'
                  ? 'bg-rose-600/90 border-rose-400 shadow-rose-900/50'
                  : state.status === 'a_surveiller'
                  ? 'bg-amber-500/90 border-amber-300 shadow-amber-900/50'
                  : 'bg-emerald-600/90 border-emerald-400 shadow-emerald-900/50';

              return (
                <button
                  key={pk}
                  type="button"
                  onClick={() => setSelectedPk(pk)}
                  className={`relative w-14 sm:w-20 h-28 sm:h-36 rounded-xl border-2 flex flex-col justify-between p-2 text-center transition-all cursor-pointer group shadow-xl ${colorBg} ${
                    isSelected ? 'ring-4 ring-white scale-105 z-30' : 'hover:scale-102 opacity-95'
                  }`}
                  style={{
                    transform: isSelected ? 'translateZ(20px)' : 'translateZ(0px)',
                  }}
                  aria-label={`Tronçon ${state.label}: statut ${state.status}`}
                >
                  {/* Top rail sleeper marker */}
                  <div className="w-full h-1.5 bg-black/40 rounded-full" />
                  
                  <div>
                    <div className="font-mono text-xs sm:text-sm font-black text-white">
                      PK {pk}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-black/80 mt-1">
                      {state.status === 'critique'
                        ? 'Critique'
                        : state.status === 'a_surveiller'
                        ? 'Surveiller'
                        : 'Sain'}
                    </div>
                  </div>

                  {/* Bottom rail sleeper marker */}
                  <div className="w-full h-1.5 bg-black/40 rounded-full" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium pt-4 border-t border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-slate-300">Sain (&gt; 12 mois sans alerte)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-slate-300">À surveiller (propagation continue)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-600" />
            <span className="text-slate-300">Critique (seuil de sécurité dépassé)</span>
          </div>
        </div>
      </div>

      {/* Selected Section Details & Human Validation Action */}
      <div className="bg-[#0a1524] p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-base font-black text-white bg-[#162740] px-2.5 py-0.5 rounded border border-slate-700">
              Tronçon sélectionné : {selectedState.label}
            </span>
            <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
              selectedState.status === 'critique'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : selectedState.status === 'a_surveiller'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}>
              Statut : {selectedState.status === 'critique' ? 'Critique' : selectedState.status === 'a_surveiller' ? 'À surveiller' : 'Sain'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            {selectedState.description}
          </p>

          <div className="text-xs text-slate-400 mt-2">
            Date estimée de seuil critique :{' '}
            <strong className="text-white">
              {selectedState.pk === 16
                ? '≈ 3 semaines (urgent)'
                : selectedState.pk === 17
                ? '≈ 2 mois'
                : selectedState.pk === 14
                ? '≈ 4 mois'
                : '> 12 mois'}
            </strong>
          </div>
        </div>

        {/* Action Button */}
        <div>
          {sentValidations[selectedState.pk] ? (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-bold">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Transmis à l'expert à Derby / Infrapôle</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => handleSendValidation(selectedState.pk)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F472B6] hover:bg-[#e058a0] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer pour validation humaine</span>
            </button>
          )}
        </div>
      </div>

      {/* Note sous la démo : Brique réelle aux Pays-Bas */}
      <div className="mt-4 p-3 rounded-xl bg-[#0b1626] border border-slate-800 text-xs text-slate-300">
        <strong className="text-[#F5B800]">Brique réelle sous-jacente :</strong> Aux Pays-Bas, un modèle appris sur huit ans de mesures de courants moteur d'aiguillages a prédit <strong className="text-white">40 % des pannes quelques jours à l'avance</strong> (test sur 10 aiguillages par Arcadis & Asset Rail) <SourceCitation id={32} onOpenSource={onOpenSource} />.
      </div>
    </div>
  );
};
