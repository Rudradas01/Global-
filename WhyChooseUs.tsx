import React from 'react';
import { VALUE_PILLARS } from '../data/companyData';
import { Target, Layers, CheckCircle2, Handshake, Zap, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-[#315EFB]' };
    switch (name) {
      case 'Target': return <Target {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Handshake': return <Handshake {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Shield {...props} />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Value Proposition</span>
            <span aria-hidden="true">·</span>
            <span>Strategic Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            Engineered for Predictability, Transparency, and Execution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Unlike traditional vendor relationships defined by opaque billing and talent turnover, GLOBALPARTNERS structures every engagement around technical clarity, collaborative partnership, and measurable outcomes.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F8FAFC] dark:bg-[#111C2E] border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center shadow-xs text-[#2563EB] dark:text-[#38BDF8]">
                    {renderIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Concrete proof point / mechanism */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1">
                  How We Enforce This:
                </span>
                <span>{pillar.proofPoint}</span>
              </div>
            </div>
          ))}

          {/* Sixth Card: US Corporate Governance & Compliance */}
          <div className="p-7 rounded-2xl bg-[#0F172A] dark:bg-[#162238] text-white border border-slate-800 dark:border-slate-700 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700/80 flex items-center justify-center text-[#2DD4BF]">
                  <Shield className="w-5 h-5 text-[#2DD4BF]" />
                </div>
                <span className="font-mono text-xs text-slate-400 font-bold">
                  Governance
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                US Legal & Corporate Governance
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Registered in Delaware with rigorous adherence to US labor standards, intellectual property protection, and contractual security.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 dark:border-slate-700 text-xs text-slate-400">
              <span className="font-bold text-white block mb-1">
                Corporate Filing:
              </span>
              <span>8 The Green #25964, Dover, DE 19901</span>
            </div>
          </div>
        </div>

        {/* Proposed Positioning Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            These pillars represent Global Partners LLC’s core operating principles and commitments to clients. We do not invent unverified awards, fake client rosters, or fabricated satisfaction percentages.
          </p>
        </div>

      </div>
    </section>
  );
};
