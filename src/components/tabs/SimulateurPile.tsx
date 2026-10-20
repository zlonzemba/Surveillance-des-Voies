import React, { useState } from 'react';
import { BatteryCharging, Battery, Clock, CheckSquare, Square, Info, ShieldCheck, AlertCircle } from 'lucide-react';
import { estimateBatteryAutonomy } from '../../utils/calculations';
import { SourceCitation } from '../SourceCitation';

interface SimulateurPileProps {
  onOpenSource: (id: number) => void;
}

export const SimulateurPile: React.FC<SimulateurPileProps> = ({ onOpenSource }) => {
  const [intervalMinutes, setIntervalMinutes] = useState<number>(60);
  const [ackRequired, setAckRequired] = useState<boolean>(false);

  const autonomy = estimateBatteryAutonomy(intervalMinutes, ackRequired);

  return (
    <div className="bg-[#112240] border border-[#2DD4BF]/40 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/20 text-[#2DD4BF] text-xs font-mono font-bold mb-1">
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Simulateur pédagogique</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-white">
            Autonomie de la pile des capteurs LoRaWAN
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Comprendre comment la fréquence d'envoi et l'acquittement impactent la longévité de la batterie sur les voies.
          </p>
        </div>
        <div className="text-right self-start sm:self-auto">
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
            simulation indicative
          </span>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Curseur Fréquence */}
        <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="battery-interval-slider" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2DD4BF]" />
              <span>Intervalle d'émission :</span>
            </label>
            <span className="font-mono text-base font-bold text-[#F5B800]">
              1 message toutes les {intervalMinutes} min
            </span>
          </div>
          <input
            id="battery-interval-slider"
            type="range"
            min="1"
            max="240"
            step="5"
            value={intervalMinutes}
            onChange={(e) => setIntervalMinutes(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#2DD4BF]"
            aria-label="Fréquence d'envoi des messages en minutes"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
            <span>1 min (Très fréquent)</span>
            <span>15 min</span>
            <span>60 min (1h)</span>
            <span>120 min</span>
            <span className="text-white font-bold">240 min (4h)</span>
          </div>
        </div>

        {/* Checkbox Confirmation de réception */}
        <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-slate-300 mb-2">
              Confirmation de réception (Acquittement réseau) :
            </div>
            <button
              type="button"
              onClick={() => setAckRequired(!ackRequired)}
              className="flex items-start gap-3 p-3 rounded-lg bg-[#112137] hover:bg-[#162a45] border border-slate-700 text-left cursor-pointer transition-colors w-full"
            >
              {ackRequired ? (
                <CheckSquare className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              )}
              <div className="text-xs">
                <span className="font-bold text-white block">
                  {ackRequired ? 'Confirmation de réception activée' : 'Pas de confirmation de réception (Recommandé)'}
                </span>
                <span className="text-slate-400 text-[11px] mt-0.5 block leading-tight">
                  La confirmation force le récepteur LoRaWAN à écouter et réémettre, réduisant l'autonomie de la pile <SourceCitation id={33} onOpenSource={onOpenSource} />.
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Result Display Box - Following the strict rule: qualitative level + fourchette "1 à 10 ans selon le réglage" */}
      <div className="bg-[#0b1728] p-5 rounded-xl border border-[#2DD4BF]/30 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${
              autonomy.qualitativeLevel === 'Courte'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                : autonomy.qualitativeLevel === 'Moyenne'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
            }`}>
              <Battery className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Estimation qualitative de l'autonomie
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                {autonomy.qualitativeLevel}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                {autonomy.advice}
              </div>
            </div>
          </div>

          <div className="sm:text-right bg-[#09121f] p-3 rounded-lg border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase">
              Fourchette réglementaire LoRaWAN
            </div>
            <div className="text-lg font-bold text-[#F5B800] mt-0.5">
              « {autonomy.generalRange} » <SourceCitation id={33} onOpenSource={onOpenSource} />
            </div>
            <div className="text-[10px] text-slate-400 italic mt-0.5">
              Résultat de configuration, non une garantie brute de la pile
            </div>
          </div>
        </div>

        {/* Battery drain indicator progress bar */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
            <span>Intensité de consommation de la pile :</span>
            <span className="text-white font-bold">{autonomy.consumptionFactor} %</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              style={{
                width: `${autonomy.consumptionFactor}%`,
                backgroundColor:
                  autonomy.consumptionFactor > 70
                    ? '#F43F5E'
                    : autonomy.consumptionFactor > 30
                    ? '#F59E0B'
                    : '#10B981',
              }}
              className="h-full rounded-full transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Leviers pour garantir 5 à 10 ans d'autonomie */}
      <div className="bg-[#091322] p-4 rounded-xl border border-slate-800">
        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Comment garantir 5 à 10 ans d'autonomie sur les voies ferrées ?</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Envoyer peu :</strong>
            Intervalle long, ou envoi seulement quand la grandeur change ou franchit un seuil critique <SourceCitation id={33} onOpenSource={onOpenSource} />.
          </div>
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Messages courts sans ACK :</strong>
            Pas de confirmation systématique, réservée aux alertes majeures d'incident <SourceCitation id={33} onOpenSource={onOpenSource} />.
          </div>
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Régler la puissance (ADR) :</strong>
            Adaptative Data Rate pour les capteurs fixes sur les traverses de voie <SourceCitation id={33} onOpenSource={onOpenSource} />.
          </div>
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Position des passerelles :</strong>
            Un capteur éloigné émet plus longtemps et peut consommer environ 20 fois plus par message ! <SourceCitation id={33} onOpenSource={onOpenSource} />.
          </div>
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Prise en compte du gel :</strong>
            Le froid réduit la capacité chimique de la pile en hiver ; batterie dimensionnée pour les pires conditions.
          </div>
          <div className="p-2.5 bg-[#0e1c30] rounded-lg border border-slate-800">
            <strong className="text-white block mb-0.5">Télémétrie de la pile :</strong>
            Surveillance de la tension pour planifier son remplacement lors des tournées d'entretien habituelles.
          </div>
        </div>

        <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
          <strong>Limite documentée :</strong> SNCF ne publie ni la fréquence d'envoi exacte ni l'autonomie réelle de ses capteurs de voie ; les 5 à 10 ans sont une valeur générale propre à la technologie LoRaWAN <SourceCitation id={23} onOpenSource={onOpenSource} /> <SourceCitation id={33} onOpenSource={onOpenSource} />.
        </div>
      </div>
    </div>
  );
};
