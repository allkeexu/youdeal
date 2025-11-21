import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import BentoGrid from './components/BentoGrid';
import Agents from './components/Agents';
import CostComparison from './components/CostComparison';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import DatabaseViewer from './components/DatabaseViewer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const handleOpenAdmin = () => setIsAdminOpen(true);
  const handleCloseAdmin = () => setIsAdminOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-sans">
      <Navbar onOpenConsultation={handleOpenModal} />
      <main>
        <Hero onOpenConsultation={handleOpenModal} />
        <PainPoints />
        <BentoGrid />
        <Agents />
        <CostComparison />
      </main>
      <Footer onOpenAdmin={handleOpenAdmin} />
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
      
      <DatabaseViewer 
        isOpen={isAdminOpen}
        onClose={handleCloseAdmin}
      />
    </div>
  );
}

export default App;