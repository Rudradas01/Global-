import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/companyData';
import { ServiceItem } from '../types';
import {
  Compass,
  Users,
  Cloud,
  Briefcase,
  Cpu,
  GraduationCap,
  ArrowRight,
  Check,
  X,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'consulting', label: 'Technology Consulting' },
    { id: 'staffing', label: 'Staffing & Talent' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'automation', label: 'Process Automation' },
    { id: 'enablement', label: 'Enablement' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#315EFB]' };
    switch (iconName) {
      case 'Compass': return <Compass {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      default: return <Compass {...props} />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            Specialized Services Tailored to High-Velocity Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From strategic advisory and cloud infrastructure to pre-screened technical squads, we provide flexible engagement models that solve immediate technical friction and support durable scaling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900/80 rounded-xl overflow-x-auto max-w-full mb-10 w-fit scrollbar-none border border-slate-300/40 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#111C2E] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-[#2563EB]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-200 group"
              >
                <div>
                  {/* Top Metadata Line (Zero-Pill compliant) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-400 dark:text-slate-500 font-bold">0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{service.category}</span>
                    </div>
                    {service.status === 'verified' ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">
                        Verified Core
                      </span>
                    ) : (
                      <span className="text-amber-700 dark:text-amber-400 font-semibold text-[11px]">
                        Proposed Roadmap
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 text-[#2563EB] dark:text-[#38BDF8]">
                    {renderIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Business Benefits */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                      Key Outcomes:
                    </div>
                    {service.businessBenefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline inline-flex items-center gap-1.5 transition-colors focus:outline-hidden"
                  >
                    <span>View Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] rounded-lg transition-all duration-150"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification transparency note */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/80 dark:bg-slate-900/90 border border-blue-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-950 dark:text-white">Transparency Notice:</span>
            <span>
              Services labelled "Verified Core" match foundational requirements; items labelled "Proposed Roadmap" are scheduled for stakeholder sign-off.
            </span>
          </div>
          <a
            href="#contact"
            className="text-[#2563EB] dark:text-[#38BDF8] font-bold hover:underline shrink-0"
          >
            Request Custom Scope &rarr;
          </a>
        </div>

      </div>

      {/* In-depth Service Detail Modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col text-slate-900 dark:text-white">
            {/* Header */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>Service Specification</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{activeModalService.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Overview & Methodology
                </h4>
                <p className="leading-relaxed">
                  {activeModalService.detailedDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Commercial & Operational Benefits
                </h4>
                <ul className="space-y-1.5">
                  {activeModalService.businessBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] dark:bg-[#2DD4BF]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900/50">
                <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
                  Ideal Client Scenario:
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  {activeModalService.idealFor}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectServiceForInquiry(activeModalService.title);
                  setActiveModalService(null);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors shadow-xs"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
