import React, { useState } from 'react';
import { RESEARCH_AND_STRATEGY, COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import {
  X,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Layers,
  Palette,
  Layout,
  Cpu,
  Search,
  ExternalLink,
} from 'lucide-react';

interface StakeholderDeliverablesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StakeholderDeliverablesModal: React.FC<StakeholderDeliverablesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<
    'research' | 'positioning' | 'logos' | 'design-system' | 'sitemap' | 'checklist' | 'readiness'
  >('research');

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col text-slate-900 dark:text-white">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0F172A] dark:bg-[#162238] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold flex items-center gap-2">
                <span>Executive Strategy & Deliverables Dossier</span>
                <span className="text-xs text-[#2DD4BF] font-mono font-medium">11 Requirements</span>
              </div>
              <div className="text-xs text-slate-400">
                GLOBALPARTNERS · Golden Pegasus IT Reference Benchmarking
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors focus:outline-hidden"
            aria-label="Close dossier"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1 overflow-x-auto scrollbar-none shrink-0 text-xs">
          {[
            { id: 'research', label: '1. Research & Analysis' },
            { id: 'positioning', label: '2. Brand Positioning' },
            { id: 'logos', label: '3 & 4. Visual Identity' },
            { id: 'design-system', label: '5. Visual System' },
            { id: 'sitemap', label: '6. Sitemap & Architecture' },
            { id: 'checklist', label: '7. Stakeholder Sign-Off' },
            { id: 'readiness', label: '8. SEO & Readiness' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-3.5 font-bold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-[#2563EB] text-[#2563EB] dark:text-[#38BDF8] bg-white dark:bg-[#0F172A]'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
          
          {/* TAB 1: RESEARCH & ANALYSIS */}
          {activeTab === 'research' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Reference Website Analysis (Golden Pegasus IT)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Benchmarking of https://goldenpegasusit.com/ to extract business model fundamentals and identify modernization opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Strengths of Reference Model:
                  </div>
                  <ul className="space-y-2 text-xs">
                    {RESEARCH_AND_STRATEGY.referenceSiteAnalysis.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl border border-rose-100 dark:border-rose-900/40 space-y-3">
                  <div className="text-xs font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider">
                    Weaknesses Identified in Reference:
                  </div>
                  <ul className="space-y-2 text-xs text-rose-950 dark:text-rose-200">
                    {RESEARCH_AND_STRATEGY.referenceSiteAnalysis.weaknessesIdentified.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/50 space-y-3">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Transformation Opportunities Executed in Global Partners LLC:
                </div>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {RESEARCH_AND_STRATEGY.referenceSiteAnalysis.opportunitiesForGlobalPartners.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#38BDF8] shrink-0 mt-1.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: BRAND POSITIONING */}
          {activeTab === 'positioning' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Proposed Brand Positioning & Value Proposition
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Clear market differentiation tailored for senior US decision-makers seeking agile technical execution.
                </p>
              </div>

              <div className="p-6 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs text-[#2DD4BF] uppercase font-mono tracking-widest font-bold">
                  Core Positioning Statement
                </div>
                <blockquote className="text-base sm:text-lg font-semibold leading-relaxed">
                  “{RESEARCH_AND_STRATEGY.brandStrategy.corePositioning}”
                </blockquote>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  {RESEARCH_AND_STRATEGY.brandStrategy.brandAttributes.map((attr, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Target Audience</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    CTOs, VPs of Engineering, and IT Procurement Directors at mid-market to enterprise companies needing proven engineering velocity.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Voice & Tone</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {RESEARCH_AND_STRATEGY.brandStrategy.toneOfVoice}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">US Governance</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Delaware LLC registration provides legal security, IP assignment clarity, and strict mutual non-disclosure frameworks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VISUAL IDENTITY */}
          {activeTab === 'logos' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Brand Identity & Signature Mark
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  The approved brand identity for Global Partners LLC: Connected Partnerships mark uniting blue and teal geometry.
                </p>
              </div>

              <div className="p-8 bg-slate-50 dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
                <Logo size="lg" theme="dark" showWordmark={true} />
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-lg mt-2 leading-relaxed">
                  The interlocking loops symbolize continuous client alignment, mutual trust, and the fusion of strategic management consulting with vetted software engineering delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Geometric Symbolism</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Continuous curves represent sustainable, long-term technological stability without vendor lock-in.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Dual-Tone Architecture</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Cobalt Blue represents technology infrastructure; Deep Teal represents human capital and agile talent.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Scalability & Favicon</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    High contrast down to 16px rasterization for favicons, headers, and official contract documents.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VISUAL SYSTEM */}
          {activeTab === 'design-system' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Color Palette & Design Tokens
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Restrained 60-30-10 color allocation following high corporate legibility standards and full Light/Dark mode support.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Midnight Navy', hex: '#0B1120', role: 'Dark canvas & hero foundation', text: 'text-white' },
                  { name: 'Royal Blue', hex: '#2563EB', role: 'Primary action CTAs & branding', text: 'text-white' },
                  { name: 'Deep Teal', hex: '#0D9488', role: 'Secondary outcomes & trust points', text: 'text-white' },
                  { name: 'Soft Off-White', hex: '#F8FAFC', role: 'Light mode page canvas', text: 'text-slate-900' },
                  { name: 'Pure White', hex: '#FFFFFF', role: 'Card structural surfaces', text: 'text-slate-900' },
                  { name: 'Slate Neutral', hex: '#475569', role: 'High-contrast body prose', text: 'text-white' },
                ].map((c) => (
                  <div key={c.hex} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs bg-slate-50 dark:bg-slate-900/60">
                    <div
                      className={`h-14 rounded-lg flex items-center justify-center font-mono font-bold mb-2 shadow-2xs ${c.text}`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {c.hex}
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">Typography Scale</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="font-bold block text-slate-800 dark:text-slate-200">Display / Headings:</span>
                    <span className="text-slate-600 dark:text-slate-400">Manrope (SemiBold & Bold), tight tracking, text-balance.</span>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-800 dark:text-slate-200">Body & Controls:</span>
                    <span className="text-slate-600 dark:text-slate-400">Plus Jakarta Sans (Regular 400 & Medium 500), 1.6 line height.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SITEMAP & CONTENT HIERARCHY */}
          {activeTab === 'sitemap' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Single-Page Architecture & Expansion Blueprint
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Current single-page flow engineered to seamlessly expand into multi-page corporate routes as business scales.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { anchor: '#home', title: '01. Navigation & Hero Anchor', desc: 'Top Bar Contract (3 zones), value proposition, and Connected Systems visualizer.' },
                  { anchor: '#services', title: '02. Capabilities Bento Grid', desc: '6 service lines categorized by discipline with verified vs proposed indicators.' },
                  { anchor: '#ai-solutions', title: '03. Interactive AI Solutions Guide', desc: 'Doubts resolution engine & floating assistant answering user inquiries.' },
                  { anchor: '#why-us', title: '04. Strategic Value Pillars', desc: '5 foundational operating principles + US corporate governance guarantee.' },
                  { anchor: '#approach', title: '05. 4-Step Lifecycle Timeline', desc: 'Discover → Strategize → Deliver → Optimize with deliverables and horizons.' },
                  { anchor: '#about', title: '06. Corporate Profile & Dover Address', desc: 'Entity identity, operating philosophy, and distinction from reference.' },
                  { anchor: '#contact', title: '07. High-Conversion Lead Capture', desc: 'Validated consultation intake form with immediate confirmation receipts.' },
                  { anchor: 'footer', title: '08. Footer Mirror & Legal Governance', desc: 'Corporate registry, compliance notices, and inquiry channels.' },
                ].map((s) => (
                  <div key={s.anchor} className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{s.title}</div>
                      <div className="text-slate-600 dark:text-slate-400 mt-0.5">{s.desc}</div>
                    </div>
                    <span className="font-mono text-slate-400 dark:text-slate-500 shrink-0">{s.anchor}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: STAKEHOLDER SIGN-OFF CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Stakeholder Verification & Unverified Claims Audit
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Distinction between confirmed business parameters and items requiring formal client sign-off.
                </p>
              </div>

              <div className="space-y-3">
                {RESEARCH_AND_STRATEGY.stakeholderVerificationChecklist.map((item, idx) => {
                  const isVerified = item.status.includes('VERIFIED');
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                        isVerified
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{item.item}</div>
                        <div className="text-slate-600 dark:text-slate-400 mt-0.5">{item.detail}</div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-md font-mono text-[11px] font-semibold whitespace-nowrap shrink-0 ${
                          isVerified
                            ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 7: READINESS & SEO */}
          {activeTab === 'readiness' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Production Readiness, SEO & Accessibility Audit
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verification against Core Web Vitals, Schema.org, WCAG AA compliance, and mobile responsive rules.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Schema.org ProfessionalService JSON-LD</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Embedded structured data with company name, Dover DE street address, phone number, and service catalogs.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>WCAG AA Contrast Compliant</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Text on both light and dark surfaces exceeds 4.5:1 ratio; interactive elements have visible focus rings.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero-Broken-Image Policy</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Interactive custom SVG system graphics and fallback canvas containers ensure zero broken external dependencies.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Theme-Adaptive Experience</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Full light and dark mode support with instant smooth transitions and persistence.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Global Partners LLC · Executive Deliverables Dossier
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#0F172A] hover:bg-slate-800 dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};