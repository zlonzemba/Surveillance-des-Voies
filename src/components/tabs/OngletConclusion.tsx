import React from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Layers, 
  UserCheck, 
  AlertTriangle, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { TabId } from '../Navbar';

interface OngletConclusionProps {
  onOpenSource: (id: number) => void;
  onSelectTab?: (tab: TabId) => void;
}

export const OngletConclusion: React.FC<OngletConclusionProps> = ({ 
  onOpenSource, 
  onSelectTab 
}) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section */}
      <div className="border-b border-[#223959] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2EAD6B]/15 border border-[#2EAD6B]/40 text-xs font-mono font-bold text-[#2EAD6B] mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cas C · Synthèse & Conclusion Générale</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Détecter la fissure avant l'accident
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl leading-relaxed">
            Ce que nous retenons de l'étude de SNCF Réseau, comparée à Network Rail : la détection des défauts de voie repose sur une chaîne complète et continue, du capteur physique jusqu'à l'agent qui répare.
          </p>
        </div>

        <div className="bg-[#112240] p-3.5 rounded-xl border border-slate-700/80 text-right self-start md:self-auto shrink-0 shadow-md">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            Présenté par
          </div>
          <div className="text-sm font-bold text-white">
            Mohamed Doucoure · Zacharie Lonzemba-Yoka
          </div>
          <div className="text-[11px] text-[#2EAD6B] font-mono mt-0.5">
            Projet étudiant · Octobre 2026
          </div>
        </div>
      </div>

      {/* 3 Messages Clés */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#F5B800]" />
          <span>3 Messages Clés</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Message 1 */}
          <div className="bg-[#112240] border-t-4 border-[#FF6B35] border-x border-b border-[#234169] rounded-2xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#FF6B35] text-slate-950 font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h4 className="text-base font-bold text-white leading-snug">
                  L'Edge pour la sécurité, le Cloud pour l'intelligence
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La décision critique se prend à bord en moins de <strong className="text-white">10 ms</strong> : à 320 km/h, attendre le Cloud (300 ms) ferait parcourir <strong className="text-[#FF6B35]">26,7 mètres aveugles</strong> au train. Le Cloud centralise, compare les passages et réentraîne les modèles d'IA <SourceCitation id={5} isCommercial onOpenSource={onOpenSource} /> <SourceCitation id={16} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-orange-300 font-mono">
              Aller-retour Cloud vs &lt; 10 ms Edge local
            </div>
          </div>

          {/* Message 2 */}
          <div className="bg-[#112240] border-t-4 border-[#9B7BFF] border-x border-b border-[#234169] rounded-2xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#9B7BFF] text-slate-950 font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h4 className="text-base font-bold text-white leading-snug">
                  Une voie qui parle, un réseau modélisé en 3D
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Capteurs IoT, fibre optique (20 000 km), drones et bientôt la patrouille autonome MARS LGV alimentent un jumeau numérique de <strong className="text-white">45 000 km</strong>. La vision par ordinateur couplée aux transformeurs détecte <strong className="text-[#9B7BFF]">97,3 % des défauts</strong> <SourceCitation id={25} onOpenSource={onOpenSource} /> <SourceCitation id={36} onOpenSource={onOpenSource} /> <SourceCitation id={37} onOpenSource={onOpenSource} /> <SourceCitation id={39} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-mono">
              Précision millimétrique ~5 mm
            </div>
          </div>

          {/* Message 3 */}
          <div className="bg-[#112240] border-t-4 border-[#2EAD6B] border-x border-b border-[#234169] rounded-2xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#2EAD6B] text-slate-950 font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h4 className="text-base font-bold text-white leading-snug">
                  L'IA propose, l'humain décide
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Chaque défaut est confirmé par un expert avant toute intervention sur le terrain. L'application mobile Supervision NG et le GPT interne assistent les équipes de maintenance, qui passent nettement moins de temps exposées à pied sur le ballast <SourceCitation id={13} onOpenSource={onOpenSource} /> <SourceCitation id={17} onOpenSource={onOpenSource} /> <SourceCitation id={24} onOpenSource={onOpenSource} /> <SourceCitation id={36} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300 font-mono">
              Validation humaine systématique obligatoire
            </div>
          </div>
        </div>
      </div>

      {/* 2 Colonnes : Limites vs Et après ? */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colonne Limites */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-base uppercase tracking-wider mb-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <span>Limites constatées</span>
          </div>

          <div className="p-4 bg-[#0b1626] rounded-xl border border-rose-500/30">
            <h5 className="font-bold text-white text-sm mb-1">Biais de l'IA &amp; Rareté des défauts</h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Les défauts sont extrêmement rares : un modèle naïf peut afficher 99 % de précision globale sans rien détecter du tout. <strong className="text-white">Parades :</strong> priorité absolue au rappel, tests de robustesse météo et validation humaine <SourceCitation id={18} onOpenSource={onOpenSource} /> <SourceCitation id={19} onOpenSource={onOpenSource} /> <SourceCitation id={40} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="p-4 bg-[#0b1626] rounded-xl border border-rose-500/30">
            <h5 className="font-bold text-white text-sm mb-1">Souveraineté, coûts et couverture réseau</h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Applications hébergées chez AWS et conformité loi SREN (SecNumCloud), calculateurs durcis certifiés ferroviaire (EN 50155) très coûteux, et couverture mobile régionale visée à seulement 90 % <SourceCitation id={10} onOpenSource={onOpenSource} /> <SourceCitation id={11} onOpenSource={onOpenSource} /> <SourceCitation id={20} onOpenSource={onOpenSource} /> <SourceCitation id={21} isCommercial onOpenSource={onOpenSource} />.
            </p>
          </div>
        </div>

        {/* Colonne Et après ? */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-[#4DA3FF] font-bold text-base uppercase tracking-wider mb-2">
            <ArrowRight className="w-5 h-5 text-[#4DA3FF]" />
            <span>Et après ? Perspectives d'avenir</span>
          </div>

          <div className="p-4 bg-[#0b1626] rounded-xl border border-[#4DA3FF]/30">
            <h5 className="font-bold text-white text-sm mb-1">Calque prédictif en réalité augmentée</h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Afficher dans le casque ou la tablette de l'agent les tronçons de voie qui deviendront critiques dans les semaines à venir. Proposition pédagogique construite sur des briques réelles éprouvées <SourceCitation id={25} onOpenSource={onOpenSource} /> <SourceCitation id={32} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="p-4 bg-[#0b1626] rounded-xl border border-[#4DA3FF]/30">
            <h5 className="font-bold text-white text-sm mb-1">Inspection autonome &amp; IA de confiance</h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              Généraliser le robot MARS LGV et les flottes de drones à horizon 2029-2030, avec des modèles mathématiques testés et auditables dans le strict cadre européen de l'AI Act <SourceCitation id={26} onOpenSource={onOpenSource} /> <SourceCitation id={36} onOpenSource={onOpenSource} /> <SourceCitation id={40} onOpenSource={onOpenSource} />.
            </p>
          </div>
        </div>
      </div>

      {/* Bannière de synthèse & Clôture de soutenance */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#112744] via-[#163459] to-[#0f2139] border border-[#2e548a] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800] mb-1">
              Synthèse opérationnelle finale
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
              Des défauts repérés plus tôt, des interventions ciblées, moins d'agents exposés : la donnée au service de la sécurité ferroviaire.
            </h3>
          </div>
        </div>

        <div className="bg-[#091424] px-6 py-4 rounded-xl border border-slate-700/80 text-center shrink-0 shadow-lg">
          <div className="text-2xl font-black text-[#F5B800] tracking-tight">
            Merci !
          </div>
          <div className="text-xs text-slate-300 font-medium mt-0.5">
            Des questions ?
          </div>
        </div>
      </div>

      {/* Navigation de fin de soutenance */}
      {onSelectTab && (
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0b1626] border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => onSelectTab('schema')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#142640] hover:bg-[#1a3356] text-[#38BDF8] border border-[#38BDF8]/40 font-bold transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>← Revoir le Schéma complet (PDF)</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('sources')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#142640] hover:bg-[#1a3356] text-[#F5B800] border border-[#F5B800]/40 font-bold transition-colors cursor-pointer"
          >
            <span>Consulter les 40 Sources bibliographiques →</span>
          </button>
        </div>
      )}
    </div>
  );
};
