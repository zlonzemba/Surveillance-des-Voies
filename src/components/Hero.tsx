import React, { useState, useEffect } from 'react';
import { ShieldAlert, Activity, ArrowRight, Gauge, Layers, Sparkles } from 'lucide-react';
import { SourceCitation } from './SourceCitation';
import { FluxDonnee } from './FluxDonnee';
import { TabId } from './Navbar';

interface HeroProps {
  onOpenSource: (id: number) => void;
  onSelectTab: (tab: TabId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSource, onSelectTab }) => {
  // Animated counters tick-up effect on mount
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative technical railway rails in SVG background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-15 overflow-hidden flex justify-center">
        <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 600" fill="none">
          <line x1="200" y1="0" x2="350" y2="600" stroke="#F5B800" strokeWidth="3" strokeDasharray="6 10" />
          <line x1="800" y1="0" x2="650" y2="600" stroke="#F5B800" strokeWidth="3" strokeDasharray="6 10" />
          {Array.from({ length: 15 }).map((_, i) => (
            <line
              key={i}
              x1={200 + i * 10}
              y1={i * 40}
              x2={800 - i * 10}
              y2={i * 40}
              stroke="#4DA3FF"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          ))}
        </svg>
      </div>

      {/* Hero Badge & Main Title */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162A45] border border-[#2B4C77] text-xs font-semibold text-[#F5B800] mb-5 shadow-sm">
          <Activity className="w-4 h-4 text-[#F5B800] animate-pulse" />
          <span>Cas C · Détection précoce des micro-fissures & défauts géométriques</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-4">
          Détecter la fissure <span className="text-[#F5B800]">avant l'accident</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Capteurs, IA embarquée, Cloud et données au service de la sécurité des voies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-mono text-slate-400">
          <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-700/60">
            Cas de référence : SNCF Réseau vs Network Rail
          </span>
          <span className="px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
            Sources récentes 2025-2026 priorisées
          </span>
        </div>

        {/* Presentation Fast-Tracks: Schéma Global & Conclusion */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          <button
            type="button"
            onClick={() => onSelectTab('schema')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38BDF8] hover:bg-[#0284c7] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
          >
            <span>Schéma : Du rail au réparateur</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onSelectTab('conclusion')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
          >
            <span>Conclusion &amp; 3 Messages Clés</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4 Compteurs Animés du Brief */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Compteur 1 */}
        <div className="bg-[#112240] border border-[#233f66] rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-[#F5B800]/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5B800]/5 rounded-bl-full pointer-events-none" />
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800] mb-2 flex items-center justify-between">
            <span>Réseau & Trafic</span>
            <Gauge className="w-4 h-4 opacity-70" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
            + 28 000 km
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            de lignes, dont <strong className="text-white font-semibold">2 800 km</strong> à grande vitesse, et <strong className="text-white font-semibold">15 000 trains</strong> par jour{' '}
            <SourceCitation id={39} onOpenSource={onOpenSource} />
          </p>
        </div>

        {/* Compteur 2 */}
        <div className="bg-[#112240] border border-[#233f66] rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-[#4DA3FF]/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#4DA3FF]/5 rounded-bl-full pointer-events-none" />
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4DA3FF] mb-2 flex items-center justify-between">
            <span>Train IRIS 320</span>
            <Layers className="w-4 h-4 opacity-70" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
            60 à 100 Go
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            de données par jour pour le train de mesure IRIS 320{' '}
            <SourceCitation id={3} onOpenSource={onOpenSource} />
          </p>
        </div>

        {/* Compteur 3 */}
        <div className="bg-[#112240] border border-[#233f66] rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-[#FF6B35]/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 rounded-bl-full pointer-events-none" />
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35] mb-2 flex items-center justify-between">
            <span>Cadence PLPR</span>
            <Activity className="w-4 h-4 opacity-70" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
            70 000 img/s
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            pour les trains PLPR de Network Rail (1 image tous les 0,8 mm à 125 mph){' '}
            <SourceCitation id={13} onOpenSource={onOpenSource} />
          </p>
        </div>

        {/* Compteur 4 */}
        <div className="bg-[#112240] border border-[#233f66] rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-[#2EAD6B]/50 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#2EAD6B]/5 rounded-bl-full pointer-events-none" />
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#2EAD6B] mb-2 flex items-center justify-between">
            <span>Sécurité des agents</span>
            <ShieldAlert className="w-4 h-4 opacity-70" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
            8 500 miles
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            de voies qui ne sont plus inspectés à pied au Royaume-Uni (ballast sécurisé){' '}
            <SourceCitation id={13} onOpenSource={onOpenSource} />
          </p>
        </div>
      </div>

      {/* Horizontal Data Flow Component */}
      <FluxDonnee onOpenSource={onOpenSource} />

      {/* Quick Launchpad to 6 Sprints */}
      <div className="mt-8 p-6 bg-[#0E1B2E] border border-[#1d3350] rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5B800]" />
              <span>Exploration des 6 Sprints Thématiques</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Chaque onglet détaille une brique spécifique de la chaîne de valeur ferroviaire.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <button
            type="button"
            onClick={() => onSelectTab('cloud')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#4DA3FF]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#4DA3FF] text-xs font-mono font-bold">Sprint 1</div>
            <div className="text-white text-sm font-bold group-hover:text-[#4DA3FF]">Cloud</div>
            <div className="text-[11px] text-slate-400 mt-1">Centraliser & Calculer</div>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('edge')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#FF6B35]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#FF6B35] text-xs font-mono font-bold">Sprint 2</div>
            <div className="text-white text-sm font-bold group-hover:text-[#FF6B35]">Edge</div>
            <div className="text-[11px] text-slate-400 mt-1">Calculateur latence</div>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('donnees-ia')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#9B7BFF]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#9B7BFF] text-xs font-mono font-bold">Sprint 3</div>
            <div className="text-white text-sm font-bold group-hover:text-[#9B7BFF]">Données & IA</div>
            <div className="text-[11px] text-slate-400 mt-1">Démo biais & rappel</div>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('iot')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#2DD4BF]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#2DD4BF] text-xs font-mono font-bold">Sprint 4</div>
            <div className="text-white text-sm font-bold group-hover:text-[#2DD4BF]">IoT</div>
            <div className="text-[11px] text-slate-400 mt-1">Simulateur pile</div>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('realite-etendue')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#F472B6]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#F472B6] text-xs font-mono font-bold">Sprint 5</div>
            <div className="text-white text-sm font-bold group-hover:text-[#F472B6]">Réalité ét.</div>
            <div className="text-[11px] text-slate-400 mt-1">Calque prédictif 3D</div>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('travail')}
            className="p-3 rounded-xl bg-[#13243a] hover:bg-[#182f4d] border border-[#F59E0B]/40 text-left cursor-pointer transition-colors group"
          >
            <div className="text-[#F59E0B] text-xs font-mono font-bold">Sprint 6</div>
            <div className="text-white text-sm font-bold group-hover:text-[#F59E0B]">Travail</div>
            <div className="text-[11px] text-slate-400 mt-1">Infrapôle & GPT</div>
          </button>
        </div>

        {/* Synthesis & End of presentation links */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 font-mono uppercase text-[11px]">
            Synthèse &amp; Clôture :
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectTab('schema')}
              className="px-3.5 py-1.5 rounded-lg bg-[#38BDF8]/20 hover:bg-[#38BDF8]/30 border border-[#38BDF8]/50 text-[#38BDF8] font-bold cursor-pointer transition-colors"
            >
              📄 Schéma global (PDF officiel)
            </button>
            <button
              type="button"
              onClick={() => onSelectTab('conclusion')}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-400 font-bold cursor-pointer transition-colors"
            >
              🎯 Conclusion &amp; 3 messages clés
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
