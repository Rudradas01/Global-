import React, { useState } from 'react';
import { APPROACH_STEPS } from '../data/companyData';
import { Check, ArrowRight, Clock, FileCheck, Layers } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section
      id="approach"
      className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Our Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Structured Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            A Disciplined 4-Step Engagement Lifecycle
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every technical initiative succeeds or stumbles based on execution discipline. Our 4-step framework eliminates ambiguity from initial scoping to long-term post-deployment stability.
          </p>
        </div>

        {/* Process Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {APPROACH_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-150 focus:outline-hidden ${
                  isSelected
                    ? 'bg-[#0F172A] dark:bg-[#1E293B] text-white border-slate-900 dark:border-slate-700 shadow-md ring-2 ring-[#2563EB]/40'
                    : 'bg-white dark:bg-[#111C2E] text-slate-800 dark:text-slate-200 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#0D9488] dark:text-[#2DD4BF]' : 'text-slate-400 dark:text-slate-500'}`}>
                    {step.number}
                  </span>
                  <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    Step {idx + 1} of 4
                  </span>
                </div>
                <div className={`text-base font-bold tracking-tight mb-1 ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {step.title}
                </div>
                <div className={`text-xs line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                  {step.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Presentation */}
        <div className="bg-white dark:bg-[#111C2E] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-black text-[#2563EB] dark:text-[#38BDF8]">
                {activeStep.number}
              </span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {activeStep.title} — {activeStep.tagline}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeStep.description}
            </p>

            {/* Key activities */}
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Core Activities Executed in This Phase:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStep.keyActivities.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Artifacts, Cadence & Checkpoint */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                <FileCheck className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8]" />
                <span>Primary Deliverable Artifact</span>
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                {activeStep.output}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                <Clock className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF]" />
                <span>Estimated Time Horizon</span>
              </div>
              <div className="text-sm font-mono font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                {activeStep.timeline}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
              >
                <span>Next Phase: {APPROACH_STEPS[(activeStepIndex + 1) % 4].title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline"
              >
                Scope this step &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
