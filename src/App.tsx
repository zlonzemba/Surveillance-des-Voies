/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, TabId } from './components/Navbar';
import { Hero } from './components/Hero';
import { OngletCloud } from './components/tabs/OngletCloud';
import { OngletEdge } from './components/tabs/OngletEdge';
import { OngletDonneesIA } from './components/tabs/OngletDonneesIA';
import { OngletIoT } from './components/tabs/OngletIoT';
import { OngletTravail } from './components/tabs/OngletTravail';
import { OngletRealiteEtendue } from './components/tabs/OngletRealiteEtendue';
import { OngletSchemaGlobal } from './components/tabs/OngletSchemaGlobal';
import { OngletConclusion } from './components/tabs/OngletConclusion';
import { SectionSources } from './components/tabs/SectionSources';
import { Footer } from './components/Footer';
import { SourceDetailModal } from './components/SourceDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('accueil');
  const [modalSourceId, setModalSourceId] = useState<number | null>(null);

  // Sync hash on mount and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabId;
      const validTabs: TabId[] = [
        'accueil',
        'cloud',
        'edge',
        'donnees-ia',
        'iot',
        'realite-etendue',
        'travail',
        'schema',
        'conclusion',
        'sources',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSourceModal = (id: number) => {
    setModalSourceId(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E33] text-slate-100 font-sans selection:bg-[#F5B800] selection:text-slate-950">
      {/* Sticky Top Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {activeTab === 'accueil' && (
          <Hero 
            onOpenSource={handleOpenSourceModal} 
            onSelectTab={handleSelectTab} 
          />
        )}

        {activeTab === 'cloud' && (
          <OngletCloud onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'edge' && (
          <OngletEdge onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'donnees-ia' && (
          <OngletDonneesIA onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'iot' && (
          <OngletIoT onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'realite-etendue' && (
          <OngletRealiteEtendue onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'travail' && (
          <OngletTravail onOpenSource={handleOpenSourceModal} />
        )}

        {activeTab === 'schema' && (
          <OngletSchemaGlobal 
            onOpenSource={handleOpenSourceModal} 
            onSelectTab={handleSelectTab} 
          />
        )}

        {activeTab === 'conclusion' && (
          <OngletConclusion 
            onOpenSource={handleOpenSourceModal} 
            onSelectTab={handleSelectTab} 
          />
        )}

        {activeTab === 'sources' && (
          <SectionSources />
        )}
      </main>

      {/* Footer with mandatory student disclaimer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Interactive Source Inspector Modal */}
      <SourceDetailModal
        sourceId={modalSourceId}
        onClose={() => setModalSourceId(null)}
        onNavigateToSourcesTab={() => {
          handleSelectTab('sources');
        }}
      />
    </div>
  );
}
