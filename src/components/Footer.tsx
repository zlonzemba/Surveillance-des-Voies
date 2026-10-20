import React from 'react';
import { TabId } from './Navbar';
import { ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#08121f] border-t border-[#1d3049] text-slate-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Rail ties motif line */}
        <div className="h-1 w-full bg-[#13243a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,#F5B800_0px,#F5B800_4px,transparent_4px,transparent_20px)]" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F5B800]" />
              <span>Dossier Récapitulatif · Cas C</span>
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed">
              Détection des micro-fissures et défauts géométriques des rails via capteurs et IA embarquée avant d'atteindre le seuil critique de sécurité ferroviaire.
            </p>
            <p className="text-xs text-slate-400">
              Cas de référence : SNCF Réseau, comparé à Network Rail (Royaume-Uni).
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#112240] hover:bg-[#183158] border border-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer self-start md:self-auto"
            aria-label="Remonter en haut de la page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-4 h-4 text-[#F5B800]" />
          </button>
        </div>

        {/* Quick Sprints Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-mono text-[11px] uppercase mr-2">Accès direct :</span>
          <button type="button" onClick={() => onSelectTab('cloud')} className="text-sky-400 hover:underline">Cloud</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('edge')} className="text-orange-400 hover:underline">Edge</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('donnees-ia')} className="text-purple-400 hover:underline">Données & IA</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('iot')} className="text-teal-400 hover:underline">IoT</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('realite-etendue')} className="text-pink-400 hover:underline">Réalité étendue</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('travail')} className="text-amber-400 hover:underline">Travail</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('schema')} className="text-[#38BDF8] hover:underline font-bold">Schéma global (PDF)</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('conclusion')} className="text-emerald-400 hover:underline font-bold">Conclusion</button>
          <span className="text-slate-600">·</span>
          <button type="button" onClick={() => onSelectTab('sources')} className="text-[#F5B800] hover:underline font-semibold">Sources (40)</button>
        </div>

        {/* Mandatory Student Project Disclaimer */}
        <div className="pt-6 border-t border-slate-800 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed">
            « Projet étudiant – 6 sprints : Cloud, Edge, Données &amp; IA, IoT, Réalité étendue, Environnement – Cas C : détection des défauts des voies ferrées – Non affilié à SNCF ni à Network Rail – 2026 »
          </p>
        </div>
      </div>
    </footer>
  );
};
