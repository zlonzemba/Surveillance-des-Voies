import React, { useState } from 'react';
import { BookOpen, ExternalLink, Search, Filter, Calendar, Sparkles, History, Tag } from 'lucide-react';
import { SOURCES, SourceItem } from '../../data/sources';

export const SectionSources: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'recent' | 'historical' | 'commercial'>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSources = SOURCES.filter((source) => {
    // Filter mode
    if (filterMode === 'recent' && !source.isRecent) return false;
    if (filterMode === 'historical' && !source.isHistorical) return false;
    if (filterMode === 'commercial' && !source.isCommercial) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match =
        source.title.toLowerCase().includes(q) ||
        source.author.toLowerCase().includes(q) ||
        source.publication.toLowerCase().includes(q) ||
        source.id.toString() === q;
      if (!match) return false;
    }

    return true;
  });

  const recentCount = SOURCES.filter((s) => s.isRecent).length;
  const historicalCount = SOURCES.filter((s) => s.isHistorical).length;
  const commercialCount = SOURCES.filter((s) => s.isCommercial).length;

  return (
    <div id="section-sources" className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section */}
      <div className="border-b border-[#24354c] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-200 mb-3">
          <BookOpen className="w-4 h-4 text-[#F5B800]" />
          <span>Bibliographie & Sources Documentaires (40 Références)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Sources vérifiées & Références bibliographiques
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Toutes les données de ce projet sont rigoureusement issues de publications officielles, retours d'expérience industriels et travaux de recherche. Les sources 2025-2026 sont prioritaires, et les antérieures à 2022 sont marquées « historique ».
        </p>
      </div>

      {/* Controls: Filter chips + Search input */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterMode('recent')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filterMode === 'recent'
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md ring-2 ring-emerald-500/40'
                  : 'bg-[#0b1626] hover:bg-[#12233b] text-emerald-300 border-emerald-500/40'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Les plus récentes (2025-2026) ({recentCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filterMode === 'all'
                  ? 'bg-[#F5B800] text-slate-950 border-[#F5B800] shadow-md ring-2 ring-[#F5B800]/40'
                  : 'bg-[#0b1626] hover:bg-[#12233b] text-slate-300 border-slate-700'
              }`}
            >
              <span>Toutes les sources (40)</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterMode('historical')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filterMode === 'historical'
                  ? 'bg-slate-300 text-slate-950 border-white shadow-md ring-2 ring-slate-400/40'
                  : 'bg-[#0b1626] hover:bg-[#12233b] text-slate-400 border-slate-700'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Historiques (≤ 2022) ({historicalCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterMode('commercial')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filterMode === 'commercial'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-[#0b1626] hover:bg-[#12233b] text-amber-300 border-amber-500/40'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Sources commerciales ({commercialCount})</span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par titre, auteur, date..."
              className="w-full bg-[#0b1626] border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent"
              aria-label="Rechercher dans les sources bibliographiques"
            />
          </div>
        </div>
      </div>

      {/* Sources List */}
      <div className="space-y-3">
        {filteredSources.map((source) => (
          <article
            key={source.id}
            id={`source-${source.id}`}
            className="p-4 sm:p-5 rounded-xl bg-[#112240] border border-[#234169] hover:border-slate-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div className="flex items-start gap-3.5 flex-1">
              <span className="font-mono text-sm font-black text-slate-950 bg-[#F5B800] px-2.5 py-0.5 rounded shrink-0 mt-0.5">
                [{source.id}]
              </span>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                    {source.title}
                  </h3>
                  {source.isRecent && (
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      2025-2026 récent
                    </span>
                  )}
                  {source.isHistorical && (
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-slate-700/40 text-slate-300 border border-slate-600">
                      historique
                    </span>
                  )}
                  {source.isCommercial && (
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      source commerciale
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span><strong>Auteur :</strong> {source.author}</span>
                  <span><strong>Publication :</strong> {source.publication}</span>
                  <span><strong>Date :</strong> {source.date}</span>
                </div>

                {source.note && (
                  <div className="text-xs text-amber-300/90 italic">
                    Note : {source.note}
                  </div>
                )}
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c182a] hover:bg-[#182f4d] border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer group-hover:border-[#F5B800]/50"
                aria-label={`Ouvrir la source [${source.id}] dans un nouvel onglet`}
              >
                <span>Consulter</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F5B800]" />
              </a>
            </div>
          </article>
        ))}

        {filteredSources.length === 0 && (
          <div className="text-center py-12 bg-[#112240] rounded-xl border border-slate-800 text-slate-400">
            Aucune source ne correspond à votre recherche.
          </div>
        )}
      </div>
    </div>
  );
};
