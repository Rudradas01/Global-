import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ConsultingPartnersSection } from './components/ConsultingPartnersSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ApproachSection } from './components/ApproachSection';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantBot } from './components/AiAssistantBot';
import { StakeholderDeliverablesModal } from './components/StakeholderDeliverablesModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gp_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isDeliverablesModalOpen, setIsDeliverablesModalOpen] = useState(false);
  const [inquiryServiceTarget, setInquiryServiceTarget] = useState<string>('');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gp_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gp_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryServiceTarget(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${isDark ? 'dark bg-[#0B1120] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'}`}>
      {/* Top Header with Light/Dark Mode toggle */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenDeliverablesModal={() => setIsDeliverablesModalOpen(true)}
      />

      {/* Main Corporate Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDeliverablesModal={() => setIsDeliverablesModalOpen(true)}
        />

        {/* 2. Capabilities & Services Grid */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 3. Enterprise Consulting Partners (Oracle, SAP, Workday, Boomi, ADP, Kronos, AWS, Salesforce) */}
        <ConsultingPartnersSection
          onSelectPartnerForInquiry={handleSelectServiceForInquiry}
        />

        {/* 4. Strategic Value Proposition */}
        <WhyChooseUs />

        {/* 5. 4-Step Engagement Lifecycle */}
        <ApproachSection />

        {/* 6. Corporate Identity & Dover Headquarters */}
        <AboutSection
          onOpenDeliverablesModal={() => setIsDeliverablesModalOpen(true)}
        />

        {/* 7. Careers & Active Job Openings */}
        <CareersSection />

        {/* 8. Contact & High-Conversion Intake */}
        <ContactSection
          preselectedService={inquiryServiceTarget}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeliverablesModal={() => setIsDeliverablesModalOpen(true)}
      />

      {/* Floating AI Assistant Bot */}
      <AiAssistantBot
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Stakeholder Deliverables & Strategy Dossier Modal */}
      <StakeholderDeliverablesModal
        isOpen={isDeliverablesModalOpen}
        onClose={() => setIsDeliverablesModalOpen(false)}
      />
    </div>
  );
}
