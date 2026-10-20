import React from 'react';
import { SOURCES } from '../data/sources';

interface SourceCitationProps {
  id: number;
  isCommercial?: boolean;
  isEstimation?: boolean;
  onOpenSource?: (id: number) => void;
  className?: string;
}

export const SourceCitation: React.FC<SourceCitationProps> = ({
  id,
  isCommercial,
  isEstimation,
  onOpenSource,
  className = '',
}) => {
  const source = SOURCES.find((s) => s.id === id);

  return (
    <span className={`inline-flex items-center gap-1 align-baseline ${className}`}>
      {isCommercial && (
        <span className="text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
          source commerciale
        </span>
      )}
      {isEstimation && (
        <span className="text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
          estimation
        </span>
      )}
      <button
        type="button"
        onClick={() => {
          if (onOpenSource) {
            onOpenSource(id);
          } else {
            const el = document.getElementById(`source-${id}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('ring-2', 'ring-[#F5B800]', 'transition-all');
              setTimeout(() => {
                el.classList.remove('ring-2', 'ring-[#F5B800]');
              }, 2500);
            }
          }
        }}
        className="inline-flex items-center justify-center font-mono text-[11px] font-bold text-[#F5B800] hover:text-slate-900 bg-[#F5B800]/15 hover:bg-[#F5B800] border border-[#F5B800]/40 rounded px-1.5 py-0.2 mx-0.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5B800]"
        title={source ? `[${id}] ${source.title} (${source.date})` : `Source [${id}]`}
        aria-label={`Source citation ${id}: ${source?.title || ''}`}
      >
        [{id}]
      </button>
    </span>
  );
};
