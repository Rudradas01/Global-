import React, { useState } from 'react';
import { PartnerLogo } from './PartnerLogo';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Cloud,
  Users2,
  Workflow,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export interface PartnerItem {
  id: string;
  name: string;
  shortDesc: string;
  category: 'erp' | 'hcm' | 'cloud' | 'integration';
  categoryLabel: string;
  focusArea: string;
  keySolutions: string[];
  engagementTypes: string[];
  brandAccent: string;
  badgeBg: string;
  statsLabel: string;
}

export const PARTNERS_LIST: PartnerItem[] = [
  {
    id: 'aws',
    name: 'AWS',
    shortDesc: 'Resilient cloud infrastructure, automated containerization, serverless architectures, and secure DevOps.',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    focusArea: 'AWS Cloud · Kubernetes · Terraform · Serverless',
    keySolutions: [
      'Multi-Account AWS Well-Architected Frameworks',
      'Kubernetes (EKS) Microservices Orchestration',
      'Terraform Infrastructure-as-Code (IaC) Pipelines',
      'High-Availability Disaster Recovery & Zero-Trust',
    ],
    engagementTypes: ['AWS Certified Solutions Architects', 'DevOps Engineers', 'Cloud SREs'],
    brandAccent: '#FF9900',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
    statsLabel: 'Cloud Infrastructure',
  },
  {
    id: 'workday',
    name: 'Workday',
    shortDesc: 'Human Capital Management (HCM), financial management, and unified enterprise cloud planning solutions.',
    category: 'hcm',
    categoryLabel: 'HCM & Financial Management',
    focusArea: 'Workday HCM · Financials · Integration Cloud',
    keySolutions: [
      'Workday HCM Global Rollouts & Configuration',
      'Workday Studio & EIB Integration Pipelines',
      'Prism Analytics & Custom Reporting Solutions',
      'Post-Production Support & Release Management',
    ],
    engagementTypes: ['Workday Certified Leads', 'Functional Consultants', 'Integration Specialists'],
    brandAccent: '#F38B00',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
    statsLabel: 'Cloud HCM Specialist',
  },
  {
    id: 'sap',
    name: 'SAP',
    shortDesc: 'End-to-end SAP S/4HANA migrations, Business Technology Platform (BTP), and global supply chain execution.',
    category: 'erp',
    categoryLabel: 'ERP & Enterprise Core',
    focusArea: 'S/4HANA · SAP BTP · SuccessFactors',
    keySolutions: [
      'SAP S/4HANA Green-field & Brown-field Migrations',
      'SAP BTP Extension & Integration Scenarios',
      'SuccessFactors Talent & Core HR Implementations',
      'ABAP on HANA & Fiori Custom Development',
    ],
    engagementTypes: ['Enterprise Solution Architects', 'Staffing Pods', 'Upgrade Specialists'],
    brandAccent: '#0070F2',
    badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
    statsLabel: 'Global Enterprise Core',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    shortDesc: 'Enterprise Cloud ERP, Fusion Applications, and robust autonomous database systems integration.',
    category: 'erp',
    categoryLabel: 'ERP & Cloud Infrastructure',
    focusArea: 'Oracle Cloud ERP · Fusion Apps · Autonomous DB',
    keySolutions: [
      'Oracle Cloud ERP & Financials Implementation',
      'Database Migration & Infrastructure Modernization',
      'E-Business Suite (EBS) Maintenance & Sprints',
      'Oracle Cloud Infrastructure (OCI) Architecture',
    ],
    engagementTypes: ['Certified Implementation Pods', 'Staff Augmentation', 'Managed Advisory'],
    brandAccent: '#C74634',
    badgeBg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50',
    statsLabel: 'Enterprise ERP Practice',
  },
  {
    id: 'devops',
    name: 'DevOps',
    shortDesc: 'Automated CI/CD pipelines, Kubernetes container orchestration, Infrastructure as Code, and Site Reliability Engineering.',
    category: 'cloud',
    categoryLabel: 'DevOps & Automation',
    focusArea: 'CI/CD Pipelines · Kubernetes · Terraform · GitOps',
    keySolutions: [
      'Automated CI/CD Pipeline Implementation (GitHub Actions, GitLab, Jenkins)',
      'Infrastructure as Code (IaC) with Terraform & Ansible',
      'Kubernetes Cluster Architecture & Helm Deployments',
      'Observability, Telemetry & 24/7 Site Reliability (SRE)',
    ],
    engagementTypes: ['DevOps Lead Engineers', 'Site Reliability Engineers (SRE)', 'Cloud Automation Pods'],
    brandAccent: '#0078D7',
    badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
    statsLabel: 'CI/CD & Cloud Automation',
  },
  {
    id: 'adp',
    name: 'ADP',
    shortDesc: 'Comprehensive payroll architecture, ADP Workforce Now, Vantage HCM, and enterprise benefit systems.',
    category: 'hcm',
    categoryLabel: 'Workforce & Payroll',
    focusArea: 'ADP Workforce Now · Vantage HCM · Payroll APIs',
    keySolutions: [
      'ADP Workforce Now & Enterprise eTime Setup',
      'Custom ADP API Integration with Core ERP/GL',
      'Multi-State Payroll Compliance & Tax Pipelines',
      'Benefits Open Enrollment Automation',
    ],
    engagementTypes: ['Payroll Technical Engineers', 'API Developers', 'System Admins'],
    brandAccent: '#D0271D',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50',
    statsLabel: 'Payroll & Compliance',
  },
  {
    id: 'kronos',
    name: 'Kronos',
    shortDesc: 'Modern workforce management, time and attendance, scheduling optimization, and labor compliance analytics.',
    category: 'hcm',
    categoryLabel: 'Workforce Management',
    focusArea: 'UKG Pro / Kronos Dimensions · Workforce Central',
    keySolutions: [
      'Workforce Dimensions Cloud Upgrade & Migration',
      'Advanced Scheduling & Shift Optimization Engines',
      'Accruals, Pay Rule Configuration & Labor Tracking',
      'Enterprise Time Clock & Biometric API Sync',
    ],
    engagementTypes: ['UKG Solution Specialists', 'Pay Rule Analysts', 'Technical Developers'],
    brandAccent: '#005151',
    badgeBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50',
    statsLabel: 'Labor & Scheduling Ops',
  },
  {
    id: 'boomi',
    name: 'Boomi',
    shortDesc: 'Enterprise iPaaS integration, cloud workflow synchronization, API management, and master data hub governance.',
    category: 'integration',
    categoryLabel: 'Cloud iPaaS & Integration',
    focusArea: 'Boomi AtomSphere · MDM Hub · API Management',
    keySolutions: [
      'Multi-Point Cloud & Hybrid System Orchestration',
      'Event-Driven Middleware & Atom Runtime Clusters',
      'Master Data Hub (MDH) Synchronization',
      'Legacy-to-Cloud Integration Connectors',
    ],
    engagementTypes: ['Certified Boomi Architects', 'Integration Engineers', '24/7 Run Ops'],
    brandAccent: '#002C77',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/50',
    statsLabel: 'iPaaS Middleware Leader',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    shortDesc: 'Customer 360, Sales & Service Cloud enterprise automation, Apex frameworks, and MuleSoft integration.',
    category: 'integration',
    categoryLabel: 'CRM & Enterprise Experience',
    focusArea: 'Salesforce Core · Service Cloud · MuleSoft',
    keySolutions: [
      'Sales & Service Cloud Customization & Lightning',
      'MuleSoft Anypoint Platform Integrations',
      'Automated CPQ & Revenue Lifecycle Workflows',
      'Complex Data Migration & Org Health Audits',
    ],
    engagementTypes: ['Salesforce Technical Leads', 'Apex/LWC Developers', 'Admin Engineers'],
    brandAccent: '#00A1E0',
    badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-900/50',
    statsLabel: 'CRM & Automation',
  },
];

interface ConsultingPartnersSectionProps {
  onSelectPartnerForInquiry?: (partnerName: string) => void;
}

export const ConsultingPartnersSection: React.FC<ConsultingPartnersSectionProps> = ({
  onSelectPartnerForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePartnerModal, setActivePartnerModal] = useState<PartnerItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Consulting Partners' },
    { id: 'erp', label: 'Enterprise ERP' },
    { id: 'hcm', label: 'HCM & Workforce' },
    { id: 'integration', label: 'Integration & Middleware' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
  ];

  const filteredPartners = selectedCategory === 'all'
    ? PARTNERS_LIST
    : PARTNERS_LIST.filter((p) => p.category === selectedCategory);

  const handleInquire = (partnerName: string) => {
    if (onSelectPartnerForInquiry) {
      onSelectPartnerForInquiry(`${partnerName} Consulting & Staffing`);
    } else {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="partners"
      className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 dark:bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Strategic Alliances</span>
            <span aria-hidden="true">·</span>
            <span>Consulting Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            Enterprise Ecosystem Expertise & Consulting Partners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We partner with and deploy specialized consulting expertise across the world’s preeminent enterprise software platforms—including Oracle, SAP, Workday, Dell Boomi, ADP, Kronos, and AWS—enabling accelerated delivery, reliable systems integration, and vetted engineering talent.
          </p>
        </div>

        {/* Consulting Services Grid Showcase matching reference image */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white">
              CONSULTING SERVICES
            </h3>
          </div>

          {/* Top Row: 5 Cards (AWS, Workday, SAP, Oracle, DevOps) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6">
            {PARTNERS_LIST.slice(0, 5).map((partner) => (
              <div
                key={partner.id}
                onClick={() => setActivePartnerModal(partner)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-full h-32 sm:h-36 rounded-2xl sm:rounded-3xl bg-[#E2E6EA] dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/80 flex items-center justify-center p-4 shadow-xs group-hover:shadow-md group-hover:border-[#2563EB] dark:group-hover:border-[#38BDF8] group-hover:scale-[1.02] transition-all duration-200">
                  <PartnerLogo partnerId={partner.id} size="display" />
                </div>
                <div className="text-center mt-3 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 4 Cards Centered (ADP, Kronos, Boomi, Salesforce) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-4 sm:gap-6">
            {PARTNERS_LIST.slice(5).map((partner) => (
              <div
                key={partner.id}
                onClick={() => setActivePartnerModal(partner)}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-full h-32 sm:h-36 rounded-2xl sm:rounded-3xl bg-[#E2E6EA] dark:bg-slate-800/90 border border-slate-300/60 dark:border-slate-700/80 flex items-center justify-center p-4 shadow-xs group-hover:shadow-md group-hover:border-[#2563EB] dark:group-hover:border-[#38BDF8] group-hover:scale-[1.02] transition-all duration-200">
                  <PartnerLogo partnerId={partner.id} size="display" />
                </div>
                <div className="text-center mt-3 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
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

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => {
            return (
              <div
                key={partner.id}
                className="bg-white dark:bg-[#111C2E] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-[#2563EB]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-200 group"
              >
                <div>
                  {/* Top Bar with Category & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      {partner.categoryLabel}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${partner.badgeBg}`}>
                      {partner.statsLabel}
                    </span>
                  </div>

                  {/* Partner Name & Headline */}
                  <div className="mb-4 flex items-start gap-3">
                    <PartnerLogo partnerId={partner.id} size="md" />
                    <div>
                      <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                        {partner.name}
                      </h3>
                      <div className="text-[11px] font-semibold text-[#0D9488] dark:text-[#2DD4BF] mt-1 font-mono leading-tight">
                        {partner.focusArea}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {partner.shortDesc}
                  </p>

                  {/* Core Solutions bullet points */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Key Practice Competencies:
                    </div>
                    {partner.keySolutions.slice(0, 3).map((sol, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActivePartnerModal(partner)}
                    className="text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline inline-flex items-center gap-1 focus:outline-hidden"
                  >
                    <span>Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquire(partner.name)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] rounded-lg transition-all duration-150"
                  >
                    Engage Talent
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Callout for Consulting Partners */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50/50 dark:from-slate-900 dark:to-slate-900/90 border border-blue-200/70 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8]">
              <ShieldCheck className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF]" />
              <span>Certified Architecture & Delivery Pods</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Looking for specialized engineers or advisory across these enterprise stacks?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Our Dover, Delaware team provides dedicated pod deployments, contract-to-hire certified developers, and senior architecture audits under transparent US legal frameworks.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors shrink-0"
          >
            <span>Request Platform Scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Partner Detail Modal */}
      {activePartnerModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col text-slate-900 dark:text-white">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <PartnerLogo partnerId={activePartnerModal.id} size="md" />
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
                    <span>Consulting Partner Practice</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{activePartnerModal.categoryLabel}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {activePartnerModal.name} Enterprise Practice
                  </h3>
                  <div className="text-xs font-mono text-[#0D9488] dark:text-[#2DD4BF] mt-0.5">
                    {activePartnerModal.focusArea}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActivePartnerModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Ecosystem Overview
                </h4>
                <p className="leading-relaxed">
                  {activePartnerModal.shortDesc} Global Partners LLC provides seasoned practitioners and engineering teams equipped to design, implement, and maintain mission-critical {activePartnerModal.name} environments with zero disruption to core operations.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Core Implementation & Integration Offerings
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePartnerModal.keySolutions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Available Engagement Models
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePartnerModal.engagementTypes.map((eng, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-slate-800 text-[#2563EB] dark:text-[#38BDF8] rounded-lg text-xs font-medium border border-blue-100 dark:border-slate-700"
                    >
                      {eng}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActivePartnerModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setActivePartnerModal(null);
                  handleInquire(activePartnerModal.name);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
              >
                Inquire About {activePartnerModal.name} Talent &rarr;
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
