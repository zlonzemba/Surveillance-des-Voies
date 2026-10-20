import React from 'react';
import { 
  Radio, 
  Cpu, 
  Wifi, 
  Battery, 
  ArrowRight, 
  Layers, 
  ShieldAlert, 
  Activity, 
  EyeOff,
  Server
} from 'lucide-react';
import { SourceCitation } from '../SourceCitation';
import { SimulateurPile } from './SimulateurPile';

interface OngletIoTProps {
  onOpenSource: (id: number) => void;
}

export const OngletIoT: React.FC<OngletIoTProps> = ({ onOpenSource }) => {
  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Header section with tab color #2DD4BF */}
      <div className="border-b border-[#143d38] pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DD4BF]/15 border border-[#2DD4BF]/40 text-xs font-mono font-bold text-[#2DD4BF] mb-3">
          <Radio className="w-4 h-4" />
          <span>Sprint 4 · Objets Connectés, Réseau & Autonomie</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          L'IoT : Des objets identifiés qui « parlent »
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Sur le rail, l'objet connecté n'est pas abstrait : c'est un coupon de rail, un cœur d'aiguille, un patin instrumenté ou un câble optique de 28 000 km qui transmet son état avant la rupture.
        </p>
      </div>

      {/* A. Quel identifiant ? Qu'est-ce qu'on « écoute » ? (5 cartes + 1 carte grisée) */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#2DD4BF]" />
          <span>Quel identifiant ? Les 5 objets écoutés sur le réseau</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. Section de rail */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Objet #1</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Voie</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Section de rail</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Capteurs de température posés sur les rails ; chaque capteur possède un identifiant unique rattaché à sa position géographique (ligne, voie, point kilométrique) <SourceCitation id={23} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Anticipation de la dilatation estivale et du risque de déformation (flambement).
            </div>
          </div>

          {/* 2. Aiguillage */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Objet #2</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Appareil de voie</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Aiguillage instrumenté</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Accéléromètres et capteurs posés sur tous les aiguillages de la LGV Sud-Est : déclenchement d'alerte en cas de choc ou mouvement anormal lors du passage <SourceCitation id={1} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-emerald-400 font-semibold border-t border-slate-800">
              -30 % d'incidents constatés sur la LGV Sud-Est dès le déploiement initial <SourceCitation id={1} onOpenSource={onOpenSource} />.
            </div>
          </div>

          {/* 3. Rail sous un train qui passe (DACE) */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Objet #3</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Patin de rail</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Rail sous train (DACE)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Station de 6 capteurs à fibre optique installés sous le patin du rail sur 7 mètres ; les trains sont identifiés automatiquement par badge RFID au franchissement <SourceCitation id={35} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Détection des méplats de roue et des surcharges d'essieux en temps réel.
            </div>
          </div>

          {/* 4. Rame / Train */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Objet #4</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Matériel roulant</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Train / Rame TGV</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                20 à 50 capteurs par rame TGV ; environ 70 000 éléments d'information télémétriques émis en continu sur les rames nouvelles générations <SourceCitation id={23} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Vibrations de bogies, température de boîte d'essieu, portes, tension batterie.
            </div>
          </div>

          {/* 5. Câble de fibre optique (SURFO) */}
          <div className="bg-[#112240] border border-[#234169] rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Objet #5</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Infrastructure</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Câble optique SURFO</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                28 000 km de câbles télécom existants utilisés comme capteurs acoustiques distribués le long des voies : l'IA distingue un train, un défaut de rail ou un éboulement de falaise <SourceCitation id={6} onOpenSource={onOpenSource} />.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              Réseau de fibre optique de 20 000 km selon le Rapport Annuel 2025 <SourceCitation id={39} onOpenSource={onOpenSource} />.
            </div>
          </div>

          {/* 6. CARTE GRISEE : Vêtement de sécurité d'agent */}
          <div className="bg-[#0b1422] border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between opacity-70">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Piste exploratoire</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  proposition
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-300 mb-2">Vêtement de sécurité d'agent</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aucun déploiement documenté dans les sources consultées : à présenter comme une piste de recherche (gilet connecté pour alerte d'approche d'un train), pas comme un fait avéré.
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-slate-400 italic border-t border-slate-800">
              Non documenté en production chez SNCF Réseau.
            </div>
          </div>
        </div>
      </div>

      {/* B. Tableau complet Quelle donnée ? Quelle fréquence ? Vers quel serveur ? */}
      <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>Quelle donnée ? Quelle fréquence ? Vers quel serveur ?</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-3">Grandeur mesurée</th>
                <th className="py-3 px-3">Objet</th>
                <th className="py-3 px-3">Fréquence</th>
                <th className="py-3 px-3">Destination réseau</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-bold text-white">Température du rail</td>
                <td className="py-3 px-3">Rail</td>
                <td className="py-3 px-3">
                  Non publiée.<br />
                  <span className="text-slate-400 text-xs">Proposition : toutes les 15 min + envoi immédiat si seuil critique dépassé</span>
                </td>
                <td className="py-3 px-3">
                  Passerelle LoRaWAN-4G puis serveur de réseau ThingPark <SourceCitation id={23} onOpenSource={onOpenSource} />
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-bold text-white">Accélération / vibration</td>
                <td className="py-3 px-3">Aiguillage</td>
                <td className="py-3 px-3 font-semibold text-amber-300">
                  Sur événement (mouvement anormal au passage) <SourceCitation id={1} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Alerte directe au technicien, puis base de supervision <SourceCitation id={1} onOpenSource={onOpenSource} /> <SourceCitation id={24} onOpenSource={onOpenSource} />
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-bold text-white">Déformation du rail</td>
                <td className="py-3 px-3">Rail sous le patin</td>
                <td className="py-3 px-3 font-semibold text-[#2DD4BF]">
                  Au passage de chaque train <SourceCitation id={35} onOpenSource={onOpenSource} />
                </td>
                <td className="py-3 px-3">
                  Station de mesure sol ; train non conforme garé sur voie de service <SourceCitation id={35} onOpenSource={onOpenSource} />
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-bold text-white">Vibrations, chocs, tension batterie, portes, humidité</td>
                <td className="py-3 px-3">Rame</td>
                <td className="py-3 px-3 text-slate-400 italic">Non publiée</td>
                <td className="py-3 px-3">
                  Passerelles embarquées (2 à 4 par train, 99 % de réussite de transmission) <SourceCitation id={23} onOpenSource={onOpenSource} />
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-3 font-bold text-white">Mesures embarquées + capteurs IoT + saisies tablettes</td>
                <td className="py-3 px-3">Réseau global</td>
                <td className="py-3 px-3 font-semibold text-emerald-400">Temps réel continu</td>
                <td className="py-3 px-3 font-semibold text-white">
                  Application Supervision NG, données centralisées pour anticiper les pannes <SourceCitation id={24} onOpenSource={onOpenSource} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* C. Réseau et autonomie : Schéma en 3 niveaux + Bascule Passif / Actif */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schéma en 3 niveaux */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-3">
              Architecture réseau en 3 niveaux
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#2DD4BF] uppercase">Niveau 1 · Voie / Train</div>
                  <div className="text-sm font-bold text-white">Capteur autonome sur pile ou passif</div>
                </div>
                <span className="text-xs text-slate-400 font-mono">LoRaWAN / RFID</span>
              </div>

              <div className="flex justify-center text-slate-500">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-amber-300 uppercase">Niveau 2 · Relais</div>
                  <div className="text-sm font-bold text-white">Passerelle LoRaWAN-4G alimentée</div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Portée 200-300 m train</span>
              </div>

              <div className="flex justify-center text-slate-500">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#4DA3FF] uppercase">Niveau 3 · Cœur de réseau</div>
                  <div className="text-sm font-bold text-white">Serveur ThingPark / Supervision NG</div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Cloud central</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
            <strong>Déploiement constaté :</strong> 500 passerelles et 6 000 modules installés en 2021 chez SNCF <SourceCitation id={23} onOpenSource={onOpenSource} />.
          </div>
        </div>

        {/* Tableau comparatif Passif / Actif */}
        <div className="bg-[#112240] border border-[#234169] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-3">
              Technologies réseau : Passif vs Actif
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-white text-sm">RFID (Système DACE)</strong>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">Passif (sans pile)</span>
                </div>
                <p className="text-slate-300">
                  Badge passif apposé sur le wagon, excité lors du franchissement de l'antenne au sol pour identifier instantanément le train <SourceCitation id={35} onOpenSource={onOpenSource} />.
                </p>
              </div>

              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-white text-sm">LoRaWAN privé</strong>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF]/40">Actif sur pile</span>
                </div>
                <p className="text-slate-300">
                  Remontée de température, vibrations et états de la rame : très longue portée radio, très faible débit de données, 5 à 10 ans d'autonomie <SourceCitation id={23} onOpenSource={onOpenSource} />.
                </p>
              </div>

              <div className="p-3 bg-[#0b1626] rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-white text-sm">Fibre optique (SURFO)</strong>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Pas de pile côté voie</span>
                </div>
                <p className="text-slate-300">
                  Câbles optiques déjà déployés dans les caniveaux, interrogés à distance par réflectométrie laser depuis les gares et sous-stations <SourceCitation id={6} onOpenSource={onOpenSource} />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* D. SIMULATEUR AUTONOMIE PILE */}
      <SimulateurPile onOpenSource={onOpenSource} />
    </div>
  );
};
