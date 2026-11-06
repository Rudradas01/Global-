import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenDeliverablesModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] dark:from-[#0B1120] dark:via-[#0E1726] dark:to-[#0B1120] text-slate-900 dark:text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/10 dark:bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[350px] bg-teal-500/10 dark:bg-[#0D9488]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Trust line with unboxed metadata */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-6">
          <span className="text-[#2563EB] dark:text-[#38BDF8] font-bold">GLOBALPARTNERS</span>
          <span aria-hidden="true">·</span>
          <span>Dover, Delaware</span>
          <span aria-hidden="true">·</span>
          <span>Enterprise IT & Staffing Advisory</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12] max-w-3xl text-balance mb-6">
          Build What's Next With the Right Partner.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl text-balance mb-10">
          Technology expertise, skilled talent, and intelligent solutions to help your business move forward.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] rounded-xl transition-all duration-150 shadow-md shadow-blue-600/20 w-full sm:w-auto"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all duration-150 shadow-2xs w-full sm:w-auto"
          >
            <span>Talk to Our Team</span>
          </a>
        </div>

        {/* Key Value Indicators */}
        <div className="max-w-2xl w-full grid grid-cols-3 gap-6 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tabular-nums">4-Step</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Structured Delivery Model</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tabular-nums">100% US</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Delaware Corporate Entity</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tabular-nums">End-to-End</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Advisory & Vetted Talent</div>
          </div>
        </div>

      </div>
    </section>
  );
};
