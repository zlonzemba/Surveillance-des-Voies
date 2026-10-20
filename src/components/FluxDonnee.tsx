import React, { useState } from 'react';
import { 
  Cpu, 
  Cloud, 
  UserCheck, 
  Wrench, 
  ChevronRight, 
  RefreshCw, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { SourceCitation } from './SourceCitation';

interface FluxStep {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
  citationId?: number;
}

interface FluxDonneeProps {
  onOpenSource: (id: number) => void;
}

export const FluxDonnee: React.FC<FluxDonneeProps> = ({ onOpenSource }) => {
  const [selectedStep, setSelectedStep] = useState<number | null>(1);

  const steps: FluxStep[] = [
    {
      id: 1,
      title: '1. Capteurs',
      subtitle: 'Mesure physique continue',
      color: '#2DD4BF', // IoT turquoise
      icon: <RadioIcon className="w-5 h-5" />,
      summary: 'Collecte à très haute vitesse sur trains d\'inspection, rames commerciales, aiguillages et fibre optique.',
      details: [
        'Train IRIS 320 : caméras linéaires, lasers géométriques, accéléromètres (60 à 100 Go/jour) [3]',
        'Wagons SIM : 7 caméras vidéo haute résolution analysant les joints isolants collés [15]',
        'Network Rail PLPR : 70 000 images par seconde à 125 mph (1 image tous les 0,8 mm) [13]',
        'Réseau SURFO : 28 000 km de fibre optique transformés en capteurs acoustiques distribués [6]',
      ],
      citationId: 3,
    },
    {
      id: 2,
      title: '2. IA embarquée (Edge)',
      subtitle: 'Filtrage & détection temps réel',
      color: '#FF6B35', // Edge orange
      icon: <Cpu className="w-5 h-5" />,
      summary: 'Traitement à bord du train sous < 10 ms pour déclencher les alertes d\'urgence et élaguer le volume.',
      details: [
        'Latence d\'alerte < 10 ms contre 100 à 300 ms vers le Cloud (source commerciale) [5]',
        'Moins de 10 % du volume collecté est transmis vers le réseau (source commerciale) [5]',
        'Fonctionnement autonome garanti en tunnel et zone blanche sans coupure de sécurité [20]',
        'Élimination des téraoctets de vidéos de rails sains pour ne retenir que les anomalies probables [18]',
      ],
      citationId: 5,
    },
    {
      id: 3,
      title: '3. Cloud',
      subtitle: 'Centralisation & Mémoire',
      color: '#4DA3FF', // Cloud sky blue
      icon: <Cloud className="w-5 h-5" />,
      summary: 'Référentiel national unique (Ligne / Voie / PK), archivage 20 ans et calcul prédictif lourd.',
      details: [
        'Serveur national IRIS 320 de 80 To avec 20 ans d\'archives de mesure ferroviaire [3]',
        'Calcul de tendances multi-passages sur Databricks (projet STC) pour anticiper les dégradations [4]',
        'Entraînement des réseaux de neurones profonds sur AWS SageMaker [16]',
        'Génération et diffusion des nouveaux modèles IA vers les calculateurs embarqués des trains [16]',
      ],
      citationId: 3,
    },
    {
      id: 4,
      title: '4. Validation humaine',
      subtitle: '« L\'IA propose, l\'humain décide »',
      color: '#9B7BFF', // Données & IA purple
      icon: <UserCheck className="w-5 h-5" />,
      summary: 'Garde-fou indispensable : des experts du rail examinent chaque défaut potentiel avant tout ordre de travaux.',
      details: [
        'Principe directeur du rapport UIC / McKinsey : validation systématique "human-in-the-loop" [17]',
        'Network Rail : centre d\'experts à Derby (un 2e centre ouvert en janvier 2019) pour trier les alertes [13]',
        'Seuls les défauts confirmés par un regard humain sont envoyés aux chefs de section de voie [13]',
        'Prévention des biais d\'apprentissage, des faux positifs et de l\'effet boîte noire [18][40]',
      ],
      citationId: 17,
    },
    {
      id: 5,
      title: '5. Maintenance',
      subtitle: 'Intervention ciblée sur le terrain',
      color: '#2EAD6B', // Normal / track green
      icon: <Wrench className="w-5 h-5" />,
      summary: 'Planification ciblée, sécurité renforcée des agents et réduction drastique des ralentissements inopinés.',
      details: [
        'Classement normal / urgent / critique transmis à l\'Infrapôle via Supervision NG [3][24]',
        'Suppression de 8 500 miles de tournées à pied dangereuses sur le ballast au Royaume-Uni [13]',
        'Plus de 1 000 jours-homme de relevés à pied supprimés grâce aux scans 3D Altametris [25]',
        '-30 % d\'incidents d\'aiguillages constatés sur la LGV Sud-Est [1]',
      ],
      citationId: 1,
    },
  ];

  const currentStep = steps.find((s) => s.id === selectedStep) || steps[0];

  return (
    <div className="w-full bg-[#112240] border border-[#233d63] rounded-2xl p-4 sm:p-6 shadow-xl my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>Parcours de la donnée ferroviaire</span>
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Architecture hybride Edge + Cloud
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Cliquez sur chaque étape pour afficher son rôle opérationnel, ses métriques et ses sources.
          </p>
        </div>
      </div>

      {/* Interactive 5 steps container */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3 relative z-10">
          {steps.map((step, idx) => {
            const isSelected = selectedStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setSelectedStep(step.id)}
                className={`relative p-3.5 rounded-xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-[#183153] border-slate-200 shadow-md ring-2 ring-[#F5B800]'
                    : 'bg-[#0c1829] hover:bg-[#132742] border-[#223959] text-slate-300'
                }`}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      style={{ color: step.color }}
                      className="p-1.5 rounded-lg bg-black/30 shrink-0"
                    >
                      {step.icon}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      #{step.id}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-white leading-snug">
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-2">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dotted Return Loop Cloud -> Edge */}
        <div className="mt-4 p-3 rounded-xl bg-[#0b1626] border border-dashed border-[#4DA3FF]/60 flex items-center justify-between gap-3 text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-[#4DA3FF] animate-spin-slow shrink-0" />
            <span className="font-semibold text-white">Boucle de rétroaction fermée (Cloud → Edge) :</span>
            <span>« modèles d'IA réentraînés et mis à jour » renvoyés périodiquement aux calculateurs des trains</span>
            <SourceCitation id={16} onOpenSource={onOpenSource} />
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800">
            AWS SageMaker → Trains
          </span>
        </div>
      </div>

      {/* Expanded Details Pane for Selected Step */}
      <div className="mt-5 p-5 rounded-xl bg-[#091424] border border-[#1f375a] text-slate-200">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div 
              style={{ backgroundColor: `${currentStep.color}25`, color: currentStep.color, borderColor: currentStep.color }}
              className="p-2 rounded-lg border shrink-0"
            >
              {currentStep.icon}
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{currentStep.title} : {currentStep.subtitle}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {currentStep.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-slate-800">
          {currentStep.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-[#0d1c31] p-3 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function RadioIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  );
}
