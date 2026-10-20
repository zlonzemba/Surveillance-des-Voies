import React from 'react';
import { 
  Briefcase, 
  HelpCircle, 
  Search, 
  FileText, 
  UserCheck, 
  AlertTriangle, 
  Clock, 
  Eye, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';

interface OngletTravailProps {
  onOpenSource: (id: number) => void;
}

export const OngletTravail: React.FC<OngletTravailProps> = ({ onOpenSource }) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #F59E0B */}
      <div className="border-b border-[#3d2f14] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-xs font-mono font-bold text-[#F59E0B] mb-3">
          <Briefcase className="w-4 h-4" />
          <span>Sprint 6 · Environnement de Travail & Métiers</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Environnement de travail : L'agent de voie et son assistant IA
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Au cœur de l'Infrapôle, le technicien de voie fait face à des dizaines de milliers de règles et documents. L'IA générative et les applications mobiles assistent la décision sans jamais remplacer la responsabilité humaine.
        </p>
      </div>

      {/* A. Qui travaille ? Fiche Métier */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#F59E0B]" />
          <span>Qui travaille ? Fiche métier : Technicien de maintenance de la voie</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase block mb-1">
              Métier impacté
            </span>
            <h4 className="text-base font-bold text-white mb-2">Le technicien Infrapôle</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Il intervient sur les anomalies géométriques de la voie, reçoit les alertes et organise les tournées de nivellement ou remplacement. Les agents d'inspection sont aussi concernés (environ <strong className="text-white">2 200 utilisateurs potentiels d'AIDO</strong>) <SourceCitation id={15} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase block mb-1">
              Outil mobile de référence
            </span>
            <h4 className="text-base font-bold text-white mb-2">Supervision NG</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Application mobile qui alerte les équipes de maintenance de SNCF Réseau, localise géographiquement les incidents sur carte interactive et aide au choix des intervenants disponibles. Objectif : <strong className="text-white">plus de 20 000 utilisateurs</strong> à terme <SourceCitation id={24} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase block mb-1">
              Données reçues
            </span>
            <h4 className="text-base font-bold text-white mb-2">Flux consolidé</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mesures continues embarquées des trains techniques (IRIS 320, SIM), télésurveillance fixe, capteurs IoT LoRaWAN d'aiguillages et saisies terrain des agents sur leurs tablettes durcies <SourceCitation id={24} onOpenSource={onOpenSource} />.
            </p>
          </div>
        </div>
      </div>

      {/* B. Les 5 Frictions Majeures Chiffrées */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Les 5 frictions opérationnelles du terrain</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {/* Friction 1 */}
          <div className="bg-[#112240] border border-[#234169] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-emerald-400 font-mono mb-1">+ 1 000</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Jours-homme</div>
              <p className="text-xs text-slate-300">
                de relevés pédestres supprimés grâce aux données 3D acquises par LiDAR et drones Altametris <SourceCitation id={25} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>

          {/* Friction 2 */}
          <div className="bg-[#112240] border border-[#234169] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-[#F59E0B] font-mono mb-1">70 000</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Documents</div>
              <p className="text-xs text-slate-300">
                de référence technique dispersés, dans lesquels l'agent doit chercher la procédure adéquate en urgence <SourceCitation id={27} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>

          {/* Friction 3 */}
          <div className="bg-[#112240] border border-[#234169] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-purple-400 font-mono mb-1">Vision</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Tâches répétitives</div>
              <p className="text-xs text-slate-300">
                AIDO décharge les agents d'inspection du visionnage fastidieux d'heures de vidéo de voie saine <SourceCitation id={15} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>

          {/* Friction 4 */}
          <div className="bg-[#112240] border border-[#234169] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-rose-400 font-mono mb-1">1 500 - 2 000</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Minutes perdues</div>
              <p className="text-xs text-slate-300">
                en moyenne lors d'un incident de caténaire sur le réseau ferré national <SourceCitation id={26} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>

          {/* Friction 5 */}
          <div className="bg-[#112240] border border-[#234169] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-sky-400 font-mono mb-1">Triage</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Validation expert</div>
              <p className="text-xs text-slate-300">
                Chaque défaut potentiel levé par l'IA doit être confirmé par un expert avant toute intervention physique <SourceCitation id={13} onOpenSource={onOpenSource} />.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* C. IA intégrée : Frise en 4 étapes */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#F59E0B]" />
            <span>Assistance générative : La frise en 4 étapes</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            SNCF Group GPT sur Azure OpenAI <SourceCitation id={27} onOpenSource={onOpenSource} />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-[#F59E0B] mb-1">Étape 1</div>
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#F59E0B]" />
              <span>Question sur le terrain</span>
            </h4>
            <p className="text-xs text-slate-300">
              L'agent de maintenance pose sa question technique ou décrit l'anomalie constatée depuis son smartphone ou tablette.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-[#F59E0B] mb-1">Étape 2</div>
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
              <Search className="w-4 h-4 text-[#F59E0B]" />
              <span>Recherche sémantique</span>
            </h4>
            <p className="text-xs text-slate-300">
              Le GPT interne interroge instantanément la base documentaire de <strong className="text-white">plus de 70 000 documents</strong> de maintenance <SourceCitation id={27} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-[#F59E0B] mb-1">Étape 3</div>
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#F59E0B]" />
              <span>Réponse résumée & sourcée</span>
            </h4>
            <p className="text-xs text-slate-300">
              Génération d'une synthèse claire accompagnée des références réglementaires précises pour vérification <SourceCitation id={27} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#0b1626] p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">Étape 4</div>
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>L'agent vérifie et décide</span>
            </h4>
            <p className="text-xs text-slate-300">
              L'agent contrôle la cohérence métier, valide la consigne et prend la décision finale d'intervention sur le rail.
            </p>
          </div>
        </div>

        {/* Garde-fous humains & Déploiement souverain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 pt-4 border-t border-slate-800">
          <div className="bg-[#091424] p-4 rounded-xl border border-amber-500/30">
            <h5 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Garde-fous humains fondamentaux</span>
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              L'humain garde l'autorité absolue, en particulier pour la décision lourde d'arrêter ou non les circulations commerciales <SourceCitation id={27} onOpenSource={onOpenSource} />. Toute alerte automatique est obligatoirement visée par un expert métier certifié <SourceCitation id={13} onOpenSource={onOpenSource} /> <SourceCitation id={17} onOpenSource={onOpenSource} />.
            </p>
          </div>

          <div className="bg-[#091424] p-4 rounded-xl border border-slate-800">
            <h5 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
              Chiffres de déploiement & Souveraineté Mistral AI
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              SNCF Group GPT comptait plus de <strong className="text-white">2 500 utilisateurs par jour en 2024</strong> <SourceCitation id={27} onOpenSource={onOpenSource} />, avec un objectif de déploiement à <strong className="text-white">100 000 collaborateurs en 2026</strong> <SourceCitation id={36} onOpenSource={onOpenSource} />. Le Groupe s'est également associé à <strong className="text-white">Mistral AI</strong> pour bâtir des modèles ne dépendant pas d'entreprises technologiques étrangères <SourceCitation id={39} onOpenSource={onOpenSource} />.
            </p>
            <div className="text-[11px] text-slate-400 italic mt-2">
              Note : Aucun gain chiffré spécifique à la voie n'est publié pour le GPT interne.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
