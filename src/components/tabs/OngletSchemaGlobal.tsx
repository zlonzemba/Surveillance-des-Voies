import React, { useState } from 'react';
import { 
  Network, 
  Download, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
  Cloud,
  Radio,
  Glasses,
  UserCheck,
  Eye,
  Bot
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { TabId } from '../Navbar';

interface OngletSchemaGlobalProps {
  onOpenSource: (id: number) => void;
  onSelectTab?: (tab: TabId) => void;
}

export const OngletSchemaGlobal: React.FC<OngletSchemaGlobalProps> = ({ 
  onOpenSource, 
  onSelectTab 
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  const pdfUrl = '/assets/aistudio/1___Sch_ma_complet_du_syst_me_c1fed2f7.pdf';
  const imgUrl = '/assets/schema_du_rail_au_reparateur.png';

  const stepsDetails = [
    {
      num: 1,
      title: 'Capter',
      desc: 'Capteurs IoT sur rails, aiguillages, fibre optique acoustique (20 000 km) et rames en circulation.',
      metric: '−30 % d\'incidents d\'aiguillage',
      sourceId: 1,
      extraSources: [6, 39],
      color: '#2DD4BF',
      tabTarget: 'iot' as TabId,
    },
    {
      num: 2,
      title: 'Inspecter sans agent',
      desc: 'Patrouille autonome de drones et du robot MARS LGV à 230 km/h pour sécuriser les agents sur les voies.',
      metric: 'GoA4 autonome · 2029-2030',
      sourceId: 36,
      color: '#94A3B8',
      tabTarget: 'accueil' as TabId,
    },
    {
      num: 3,
      title: 'Analyser à bord',
      desc: 'IA embarquée (Edge) décidant en < 10 ms sous 320 km/h (0,9 m parcouru contre 26,7 m en attendant le Cloud).',
      metric: '< 10 ms vs 300 ms Cloud',
      sourceId: 5,
      isCommercial: true,
      color: '#FF6B35',
      tabTarget: 'edge' as TabId,
    },
    {
      num: 4,
      title: 'Centraliser',
      desc: 'Serveur national Cloud de 80 To avec 20 ans d\'archives de mesure et réentraînement des IA sur AWS SageMaker.',
      metric: '80 To / 20 ans d\'archives',
      sourceId: 3,
      extraSources: [16],
      color: '#4DA3FF',
      tabTarget: 'cloud' as TabId,
    },
    {
      num: 5,
      title: 'Détecter & prédire',
      desc: 'Algorithmes de vision par ordinateur couplant réseaux CNN et transformeurs DETR avec prédiction de propagation.',
      metric: '97,3 % de détection',
      sourceId: 37,
      color: '#9B7BFF',
      tabTarget: 'donnees-ia' as TabId,
    },
    {
      num: 6,
      title: 'Visualiser en 3D',
      desc: 'Jumeau numérique Altametris de 45 000 km avec calque prédictif des risques (PK 12 à PK 19) à précision millimétrique.',
      metric: '45 000 km à ≈ 5 mm',
      sourceId: 25,
      color: '#F472B6',
      tabTarget: 'realite-etendue' as TabId,
    },
    {
      num: 7,
      title: 'Valider & réparer',
      desc: 'Supervision humaine obligatoire (« l\'IA propose, l\'humain décide »), déclenchement ciblé des tournées au ballast.',
      metric: 'Validation humaine systématique',
      sourceId: 17,
      color: '#2EAD6B',
      tabTarget: 'travail' as TabId,
    },
  ];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with presentation badge */}
      <div className="border-b border-[#223959] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-xs font-mono font-bold text-[#38BDF8] mb-2">
            <Network className="w-4 h-4" />
            <span>Cas C · SNCF Réseau · Schéma Complet du Système</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Du rail au réparateur
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl leading-relaxed">
            Le schéma architectural complet envoyé dans le dossier : le parcours d'un défaut, du rail physique jusqu'à l'agent qui répare, avant d'atteindre le seuil critique de sécurité.
          </p>
        </div>

        <div className="bg-[#112240] p-3.5 rounded-xl border border-slate-700/80 text-right self-start md:self-auto shrink-0 shadow-md">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            Présenté par
          </div>
          <div className="text-sm font-bold text-white">
            Mohamed Doucoure · Zacharie Lonzemba-Yoka
          </div>
          <div className="text-[11px] text-[#38BDF8] font-mono mt-0.5">
            Document PDF officiel · Octobre 2026
          </div>
        </div>
      </div>

      {/* Toolbar & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0d1c30] p-3.5 rounded-2xl border border-[#234169] shadow-lg">
        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[#08121f] p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setViewMode('interactive')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              viewMode === 'interactive'
                ? 'bg-[#38BDF8] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Schéma Haute Résolution</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('pdf')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              viewMode === 'pdf'
                ? 'bg-[#38BDF8] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Lecteur PDF Intégré</span>
          </button>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-2">
          {viewMode === 'interactive' && (
            <div className="flex items-center gap-1 bg-[#08121f] px-2 py-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer rounded"
                title="Dézoomer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-sky-400 px-1 min-w-[3.5rem] text-center">
                {Math.round(zoomLevel * 100)} %
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer rounded"
                title="Zoomer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1.5 text-slate-400 hover:text-white cursor-pointer rounded ml-1"
                title="Réinitialiser"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#13253d] hover:bg-[#1a3253] border border-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            title="Plein écran"
          >
            <Maximize2 className="w-4 h-4 text-[#38BDF8]" />
            <span className="hidden sm:inline">Plein écran</span>
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="1___Sch_ma_complet_du_syst_me_Cas_C.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F5B800] hover:bg-[#d9a300] text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger PDF</span>
          </a>
        </div>
      </div>

      {/* Main Schema Display Frame */}
      {viewMode === 'interactive' ? (
        <div className="relative bg-[#07101b] border-2 border-[#234169] rounded-2xl shadow-2xl overflow-hidden group">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Scrollable image viewport */}
          <div className="overflow-auto max-h-[750px] p-2 sm:p-4 flex items-center justify-center min-h-[420px]">
            <div 
              style={{ 
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 150ms ease-out'
              }}
              className="relative inline-block max-w-full rounded-xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <img
                src={imgUrl}
                alt="Schéma complet du système · Du rail au réparateur · Mohamed Doucoure et Zacharie Lonzemba-Yoka"
                className="w-full h-auto block select-none"
              />
            </div>
          </div>

          {/* Quick Caption Overlay Bar */}
          <div className="bg-[#0b1626]/90 backdrop-blur-sm border-t border-[#1c3352] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Document haute fidélité extrait à 300 DPI du PDF original</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span>SNCF Réseau vs Network Rail</span>
              <span>·</span>
              <span className="text-[#38BDF8]">Projet étudiant 2026</span>
            </div>
          </div>
        </div>
      ) : (
        /* PDF Native Viewer Embed */
        <div className="bg-[#0b1626] border-2 border-[#234169] rounded-2xl p-2 sm:p-4 shadow-2xl">
          <div className="w-full h-[750px] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <object
              data={`${pdfUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="p-8 text-center space-y-4">
                <FileText className="w-16 h-16 text-[#38BDF8] mx-auto opacity-70" />
                <h4 className="text-lg font-bold text-white">
                  Affichage du PDF directement dans votre navigateur
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Votre navigateur ne prend pas en charge la visualisation directe des PDF dans la page. Vous pouvez le visualiser via l'onglet Schéma Haute Résolution ou l'ouvrir directement.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setViewMode('interactive')}
                    className="px-4 py-2 rounded-xl bg-[#38BDF8] text-slate-950 font-bold text-xs"
                  >
                    Voir en image haute résolution
                  </button>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700"
                  >
                    Ouvrir dans un nouvel onglet
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>
      )}

      {/* Interactive 7-Step Navigation (directly mirroring the PDF's footer row) */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5B800]" />
              <span>Les 7 Étapes de la Chronologie du Schéma (1 à 7)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cliquez sur une étape pour inspecter son détail et ouvrir la source associée :
            </p>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            1 Capter › 2 Inspecter › 3 Analyser › 4 Centraliser › 5 Détecter › 6 Visualiser › 7 Valider
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
          {stepsDetails.map((step) => {
            const isSelected = selectedHotspot === step.num;
            return (
              <div
                key={step.num}
                onClick={() => setSelectedHotspot(isSelected ? null : step.num)}
                style={{
                  borderColor: isSelected ? step.color : undefined,
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#183153] ring-2 shadow-lg'
                    : 'bg-[#0b1626] border-slate-800 hover:border-slate-700 hover:bg-[#0e1d31]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      style={{ backgroundColor: step.color }}
                      className="w-5 h-5 rounded-full text-slate-950 font-black font-mono text-[11px] flex items-center justify-center shrink-0"
                    >
                      {step.num}
                    </span>
                    <SourceCitation
                      id={step.sourceId}
                      isCommercial={step.isCommercial}
                      onOpenSource={onOpenSource}
                    />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {step.title}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-3">
                    {step.desc}
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="font-mono font-semibold" style={{ color: step.color }}>
                    {step.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Expanded Details Inspector */}
        {selectedHotspot && (
          <div className="p-4 rounded-xl bg-[#08121f] border border-[#38BDF8]/50 mt-3 animate-fade-in flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase">
                  Focus Étape {selectedHotspot} : {stepsDetails[selectedHotspot - 1].title}
                </span>
                <SourceCitation
                  id={stepsDetails[selectedHotspot - 1].sourceId}
                  isCommercial={stepsDetails[selectedHotspot - 1].isCommercial}
                  onOpenSource={onOpenSource}
                />
                {stepsDetails[selectedHotspot - 1].extraSources?.map((id) => (
                  <SourceCitation key={id} id={id} onOpenSource={onOpenSource} />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                {stepsDetails[selectedHotspot - 1].desc}
              </p>
            </div>

            {onSelectTab && (
              <button
                type="button"
                onClick={() => onSelectTab(stepsDetails[selectedHotspot - 1].tabTarget)}
                className="shrink-0 px-3.5 py-2 rounded-lg bg-[#38BDF8] hover:bg-[#0ea5e9] text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explorer l'onglet associé</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Prominent Call-to-Action to Final Section: Conclusion */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#112744] via-[#17375f] to-[#112744] border-2 border-[#2EAD6B]/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Synthèse Finale · Clôture de la Soutenance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Terminer la présentation avec la Conclusion
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Retrouvez les 3 messages clés, l'analyse des limites (biais de l'IA, météo, souveraineté) et les perspectives d'avenir.
          </p>
        </div>

        {onSelectTab && (
          <button
            type="button"
            onClick={() => onSelectTab('conclusion')}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2EAD6B] hover:bg-[#26975c] text-slate-950 font-black text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-xl cursor-pointer"
          >
            <span>Passer à la Conclusion</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white">
                Schéma global · Du rail au réparateur (PDF plein écran)
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Mohamed Doucoure · Zacharie Lonzemba-Yoka
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="1___Sch_ma_complet_du_syst_me_Cas_C.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5B800] text-slate-950 text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger</span>
              </a>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                title="Fermer"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
            <img
              src={imgUrl}
              alt="Schéma plein écran"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
