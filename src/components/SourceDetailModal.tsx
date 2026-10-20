import React from 'react';
import { ExternalLink, X, Calendar, BookOpen, User, Building } from 'lucide-react';
import { SOURCES, SourceItem } from '../data/sources';

interface SourceDetailModalProps {
  sourceId: number | null;
  onClose: () => void;
  onNavigateToSourcesTab: () => void;
}

export const SourceDetailModal: React.FC<SourceDetailModalProps> = ({
  sourceId,
  onClose,
  onNavigateToSourcesTab,
}) => {
  if (sourceId === null) return null;
  const source = SOURCES.find((s) => s.id === sourceId);
  if (!source) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-source-title"
      onClick={onClose}
    >
      <div
        className="bg-[#112240] border border-[#25436c] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-black bg-[#F5B800] text-slate-950 px-2.5 py-0.5 rounded">
              [{source.id}]
            </span>
            {source.isRecent && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                2025-2026 récent
              </span>
            )}
            {source.isHistorical && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-600/30 text-slate-300 border border-slate-500/40">
                historique (&lt; 2022)
              </span>
            )}
            {source.isCommercial && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                source commerciale
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre de source"
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 id="modal-source-title" className="text-lg font-bold text-white mb-4 leading-snug">
          {source.title}
        </h3>

        <div className="space-y-2 text-sm text-slate-300 mb-6 bg-[#0B1524] p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400 shrink-0" />
            <span><strong className="text-slate-200">Auteur :</strong> {source.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-slate-400 shrink-0" />
            <span><strong className="text-slate-200">Publication :</strong> {source.publication}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
            <span><strong className="text-slate-200">Date :</strong> {source.date}</span>
          </div>
          {source.note && (
            <div className="text-xs text-amber-300/90 pt-1 border-t border-slate-800/80">
              Note : {source.note}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5B800] hover:bg-[#e0a800] text-slate-950 font-semibold text-sm transition-colors shadow-md"
          >
            <span>Consulter l'article original</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateToSourcesTab();
              setTimeout(() => {
                const el = document.getElementById(`source-${source.id}`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.classList.add('ring-2', 'ring-[#F5B800]');
                  setTimeout(() => el.classList.remove('ring-2', 'ring-[#F5B800]'), 2000);
                }
              }, 150);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors border border-slate-700"
          >
            <BookOpen className="w-4 h-4" />
            <span>Voir dans la bibliographie</span>
          </button>
        </div>
      </div>
    </div>
  );
};
