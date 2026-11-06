import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Shield, CheckCircle, Building, Users, FileText, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenDeliverablesModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDeliverablesModal,
}) => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Corporate Overview</span>
            <span aria-hidden="true">·</span>
            <span>About GLOBALPARTNERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            Bridging High-Level Strategy and Hands-On Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            GLOBALPARTNERS was established to solve a critical enterprise challenge: closing the gap between high-level management consulting recommendations and the actual technical talent required to implement them.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg text-slate-900 dark:text-white font-semibold leading-relaxed">
              Based in Dover, Delaware, GLOBALPARTNERS delivers technology consulting, IT staffing, and systems integration services designed for organizations undergoing mission-critical growth and digital modernization.
            </p>

            <p>
              Traditional staffing agencies often lack the technical depth to properly evaluate complex engineering skillsets, while traditional management consultancies produce high-level strategy decks without providing the hands-on engineering muscle needed for deployment.
            </p>

            <p>
              GLOBALPARTNERS integrates both capabilities. We provide technology advisory from practitioners who understand modern cloud architectures, paired with a vetted talent network capable of embedding directly into your sprints under flexible US contract models.
            </p>

            {/* Core Commitments */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Our Operating Commitments:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111C2E] border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                  <span><strong>Zero Hyperbole:</strong> No fabricated credentials, unverified logos, or inflated statistics.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111C2E] border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span><strong>US Governance:</strong> Direct accountability under Delaware LLC corporate protections.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111C2E] border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                  <span><strong>Practitioner Vetting:</strong> Talent screened by active engineers, not keyword matchers.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111C2E] border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span><strong>Transparent Scoping:</strong> Clear Statements of Work with deliverables and timelines.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDeliverablesModal}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
              >
                <span>Read Strategy Analysis & Positioning Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Corporate Profile Card */}
          <div className="lg:col-span-5 bg-[#F8FAFC] dark:bg-[#111C2E] rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Corporate Registration
              </div>
              <span className="text-[11px] font-mono text-[#2563EB] dark:text-[#38BDF8] font-bold">
                Delaware LLC
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Legal Name</div>
                  <div className="text-slate-600 dark:text-slate-400">{COMPANY_INFO.name}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Registered Office Address</div>
                  <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {COMPANY_INFO.registeredAddress.street}<br />
                    {COMPANY_INFO.registeredAddress.city}, {COMPANY_INFO.registeredAddress.state} {COMPANY_INFO.registeredAddress.zip}, {COMPANY_INFO.registeredAddress.country}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Corporate Status</div>
                  <div className="text-slate-600 dark:text-slate-400">Active Limited Liability Company in Good Standing</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Primary Delivery Scope</div>
                  <div className="text-slate-600 dark:text-slate-400">North American Enterprise Technology & Staffing</div>
                </div>
              </div>
            </div>

            {/* Strategic Differentiation Callout */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-2xs">
              <div className="font-bold text-slate-900 dark:text-white mb-1">
                Distinction from Reference Profile:
              </div>
              Unlike legacy staffing brokerages, Global Partners LLC guarantees transparent scope definition, direct engineering peer reviews, and strict contractual intellectual property handover.
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#0F172A] hover:bg-slate-800 dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
              >
                <span>Initiate Business Dialogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
