import React from 'react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  Radio, 
  Briefcase, 
  Glasses, 
  BookOpen, 
  Home,
  Network,
  CheckCircle2
} from 'lucide-react';

export type TabId = 
  | 'accueil' 
  | 'schema' 
  | 'cloud' 
  | 'edge' 
  | 'donnees-ia' 
  | 'iot' 
  | 'realite-etendue' 
  | 'travail' 
  | 'conclusion' 
  | 'sources';

export interface NavTabConfig {
  id: TabId;
  label: string;
  shortLabel?: string;
  color: string; // Hex color code specified in brief
  icon: React.ReactNode;
}

export const TABS: NavTabConfig[] = [
  { id: 'accueil', label: 'Accueil', color: '#F5B800', icon: <Home className="w-4 h-4" /> },
  { id: 'cloud', label: 'Cloud', color: '#4DA3FF', icon: <Cloud className="w-4 h-4" /> },
  { id: 'edge', label: 'Edge', color: '#FF6B35', icon: <Cpu className="w-4 h-4" /> },
  { id: 'donnees-ia', label: 'Données & IA', color: '#9B7BFF', icon: <Database className="w-4 h-4" /> },
  { id: 'iot', label: 'IoT', color: '#2DD4BF', icon: <Radio className="w-4 h-4" /> },
  { id: 'realite-etendue', label: 'Réalité étendue', shortLabel: 'Réalité ét.', color: '#F472B6', icon: <Glasses className="w-4 h-4" /> },
  { id: 'travail', label: 'Travail', color: '#F59E0B', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'schema', label: 'Schéma global', shortLabel: 'Schéma', color: '#38BDF8', icon: <Network className="w-4 h-4" /> },
  { id: 'conclusion', label: 'Conclusion', color: '#2EAD6B', icon: <CheckCircle2 className="w-4 h-4" /> },
  { id: 'sources', label: 'Sources', color: '#E2E8F0', icon: <BookOpen className="w-4 h-4" /> },
];

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (id: TabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0A1526]/95 backdrop-blur-md border-b border-[#203653] shadow-lg">
      {/* Rail track motif header line */}
      <div className="h-1.5 w-full bg-[#16273D] relative overflow-hidden flex items-center justify-around">
        {/* Subtle SVG rail ties / sleepers pattern */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,#F5B800_0px,#F5B800_3px,transparent_3px,transparent_16px)]" />
        <div className="absolute top-[2px] w-full h-[1px] bg-slate-400/40" />
        <div className="absolute bottom-[2px] w-full h-[1px] bg-slate-400/40" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-2">
          {/* Brand & Technical identification */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onSelectTab('accueil')}
              className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5B800] rounded-lg p-1"
            >
              {/* Technical Railway Track Icon SVG */}
              <div className="w-8 h-8 rounded-lg bg-[#142640] border border-[#2d4973] flex items-center justify-center text-[#F5B800] group-hover:border-[#F5B800] transition-colors shadow-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M4 3v18" strokeLinecap="round" />
                  <path d="M20 3v18" strokeLinecap="round" />
                  <path d="M4 6h16" />
                  <path d="M4 11h16" />
                  <path d="M4 16h16" />
                </svg>
              </div>
              <div className="hidden lg:block">
                <div className="text-xs font-mono font-bold tracking-wider text-[#F5B800] uppercase">
                  Cas C · 6 Sprints
                </div>
                <div className="text-sm font-black tracking-tight text-white leading-none">
                  Surveillance des Voies
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Tabs - Horizontally scrollable on mobile */}
          <nav 
            className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 scroll-smooth"
            aria-label="Navigation principale des 6 sprints"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  style={{
                    borderColor: isActive ? tab.color : 'transparent',
                    color: isActive ? '#FFFFFF' : '#94A3B8',
                  }}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-150 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-[#F5B800] ${
                    isActive 
                      ? 'bg-[#162A45] shadow-sm' 
                      : 'hover:bg-[#12233a] hover:text-slate-200 border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span 
                    style={{ color: isActive ? tab.color : undefined }}
                    className="shrink-0"
                  >
                    {tab.icon}
                  </span>
                  <span>{tab.shortLabel || tab.label}</span>
                  {isActive && (
                    <span 
                      style={{ backgroundColor: tab.color }}
                      className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
