import React, { useState } from 'react';
import { Gauge, Zap, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { calculateDistanceTraveled } from '../../utils/calculations';
import { SourceCitation } from '../SourceCitation';

interface CalculateurLatenceProps {
  onOpenSource: (id: number) => void;
}

export const CalculateurLatence: React.FC<CalculateurLatenceProps> = ({ onOpenSource }) => {
  const [speedKmH, setSpeedKmH] = useState<number>(320);
  const [delayMs, setDelayMs] = useState<number>(300);

  const distanceMeters = calculateDistanceTraveled(speedKmH, delayMs);
  const isEdge = delayMs <= 10;

  // Track animation: percentage position along the rail visual (0m -> 0%, 30m -> 100%)
  const maxMeterVisual = 30;
  const trainPositionPercent = Math.min(100, Math.max(3, (distanceMeters / maxMeterVisual) * 90));

  return (
    <div className="bg-[#112240] border border-[#FF6B35]/40 rounded-2xl p-5 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-mono font-bold mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Simulateur interactif</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-black text-white">
            « Pendant que le Cloud répond… »
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Visualisez la distance physique que parcourt un train à grande vitesse avant de recevoir une réponse.
          </p>
        </div>
        <div className="text-xs text-slate-400 bg-[#0a1524] px-3 py-1.5 rounded-xl border border-slate-800 self-start">
          Formule : <code className="text-[#F5B800] font-mono">distance (m) = vitesse ÷ 3,6 × délai (s)</code>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Curseur Vitesse */}
        <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="speed-slider" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-[#FF6B35]" />
              <span>Vitesse de circulation :</span>
            </label>
            <span className="font-mono text-lg font-black text-[#F5B800]">
              {speedKmH} km/h
            </span>
          </div>
          <input
            id="speed-slider"
            type="range"
            min="80"
            max="320"
            step="10"
            value={speedKmH}
            onChange={(e) => setSpeedKmH(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
            aria-label="Vitesse du train en kilomètres par heure"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
            <span>80 km/h (Ligne classique)</span>
            <span>160</span>
            <span>200</span>
            <span>300</span>
            <span className="text-white font-bold">320 km/h (LGV)</span>
          </div>
        </div>

        {/* Sélecteur de Délai */}
        <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#4DA3FF]" />
              <span>Délai de décision :</span>
            </label>
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-200">
              {isEdge ? 'Edge local (< 10 ms)' : 'Aller-retour Cloud (100 - 300 ms)'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setDelayMs(10)}
              className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                delayMs === 10
                  ? 'bg-[#FF6B35] text-slate-950 font-bold border-[#FF6B35] shadow-md ring-2 ring-[#FF6B35]/40'
                  : 'bg-[#12233b] hover:bg-[#182f4e] text-slate-200 border-slate-700'
              }`}
            >
              <div className="text-sm font-black font-mono">10 ms</div>
              <div className="text-[10px] uppercase tracking-wider mt-0.5">Edge local</div>
            </button>

            <button
              type="button"
              onClick={() => setDelayMs(100)}
              className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                delayMs === 100
                  ? 'bg-[#4DA3FF] text-slate-950 font-bold border-[#4DA3FF] shadow-md ring-2 ring-[#4DA3FF]/40'
                  : 'bg-[#12233b] hover:bg-[#182f4e] text-slate-200 border-slate-700'
              }`}
            >
              <div className="text-sm font-black font-mono">100 ms</div>
              <div className="text-[10px] uppercase tracking-wider mt-0.5">Cloud min</div>
            </button>

            <button
              type="button"
              onClick={() => setDelayMs(300)}
              className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                delayMs === 300
                  ? 'bg-[#4DA3FF] text-slate-950 font-bold border-[#4DA3FF] shadow-md ring-2 ring-[#4DA3FF]/40'
                  : 'bg-[#12233b] hover:bg-[#182f4e] text-slate-200 border-slate-700'
              }`}
            >
              <div className="text-sm font-black font-mono">300 ms</div>
              <div className="text-[10px] uppercase tracking-wider mt-0.5">Cloud max</div>
            </button>
          </div>
          <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
            <span>Délai Cloud 100-300 ms vs Edge &lt; 10 ms</span>
            <SourceCitation id={5} isCommercial onOpenSource={onOpenSource} />
          </div>
        </div>
      </div>

      {/* Dynamic Result Banner */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 ${
        isEdge 
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
          : 'bg-orange-950/40 border-orange-500/40 text-orange-200'
      }`}>
        <div className="flex items-center gap-3">
          {isEdge ? (
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-8 h-8 text-orange-400 shrink-0" />
          )}
          <div>
            <div className="text-xs uppercase font-mono tracking-wider font-bold">
              {isEdge ? 'Sécurité Edge garantie' : 'Distance aveugle en attendant le Cloud'}
            </div>
            <div className="text-sm text-slate-200 mt-0.5">
              À <strong className="text-white">{speedKmH} km/h</strong>, le train parcourt <strong className="text-white">{(speedKmH / 3.6).toFixed(1)} m par seconde</strong>.
            </div>
          </div>
        </div>

        <div className="text-right sm:text-right">
          <div className="text-xs text-slate-400">Distance parcourue :</div>
          <div className="text-3xl sm:text-4xl font-mono font-black text-white">
            {distanceMeters.toFixed(1)} <span className="text-lg font-normal text-slate-300">mètres</span>
          </div>
        </div>
      </div>

      {/* Animated SVG Track and Train Simulation */}
      <div className="bg-[#091322] p-4 rounded-xl border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
          <span>Point zéro (Capteur déclenché)</span>
          <span>Échelle visuelle (0 à 30 mètres)</span>
          <span>Point d'arrêt alerte ({distanceMeters.toFixed(1)} m)</span>
        </div>

        {/* SVG Railway Track */}
        <div className="relative h-20 w-full flex items-center">
          <svg className="w-full h-12" preserveAspectRatio="none" viewBox="0 0 1000 50">
            {/* Gravel / Ballast bed */}
            <rect x="0" y="5" width="1000" height="40" fill="#14243b" rx="4" />
            {/* Sleepers (traverses) */}
            {Array.from({ length: 40 }).map((_, i) => (
              <rect key={i} x={i * 25 + 5} y="10" width="8" height="30" fill="#243c5e" rx="1.5" />
            ))}
            {/* Top and bottom rails */}
            <line x1="0" y1="16" x2="1000" y2="16" stroke="#94A3B8" strokeWidth="3" />
            <line x1="0" y1="34" x2="1000" y2="34" stroke="#94A3B8" strokeWidth="3" />
            {/* Distance marker ticks */}
            <line x1="10" y1="0" x2="10" y2="50" stroke="#2EAD6B" strokeWidth="2" strokeDasharray="3 3" />
          </svg>

          {/* SVG High-speed Train Moving on Track */}
          <div
            style={{
              left: `${trainPositionPercent}%`,
              transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
          >
            {/* High speed Train Car SVG */}
            <div className="relative group cursor-pointer">
              <svg width="74" height="32" viewBox="0 0 74 32" fill="none">
                {/* Nose / aerodynamic front */}
                <path
                  d="M72 16 C68 9, 58 6, 44 6 L4 6 C2 6, 0 8, 0 10 L0 24 C0 26, 2 28, 4 28 L44 28 C58 28, 68 23, 72 16 Z"
                  fill={isEdge ? '#2EAD6B' : '#FF6B35'}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
                {/* Cab windshield */}
                <path d="M50 8 L62 13 L50 17 Z" fill="#0A1828" />
                {/* Side passenger windows */}
                <rect x="8" y="10" width="8" height="6" rx="1" fill="#0A1828" />
                <rect x="20" y="10" width="8" height="6" rx="1" fill="#0A1828" />
                <rect x="32" y="10" width="8" height="6" rx="1" fill="#0A1828" />
                {/* Headlight beam */}
                <circle cx="70" cy="16" r="2.5" fill="#F5B800" />
              </svg>
              {/* Distance label above train */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 border border-slate-700 text-white font-mono text-[11px] px-1.5 py-0.2 rounded shadow">
                +{distanceMeters.toFixed(1)} m
              </div>
            </div>
          </div>
        </div>

        {/* Control Values Checklist Verification Note */}
        <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <div>
            <strong>Valeurs de contrôle à 320 km/h :</strong> 10 ms = <span className="text-white font-mono">0,9 m</span> · 100 ms = <span className="text-white font-mono">8,9 m</span> · 300 ms = <span className="text-white font-mono">26,7 m</span>.
          </div>
          <div className="text-[#FF6B35] font-semibold">
            {isEdge ? '✓ Alerte quasi-instantanée (< 1 m)' : '⚠️ Zone aveugle critique pouvant dépasser 26 m'}
          </div>
        </div>
      </div>
    </div>
  );
};
