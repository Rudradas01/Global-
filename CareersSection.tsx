import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  Award,
  Users,
  Search,
  Send,
  X,
  FileText,
  AlertCircle,
  Building2,
} from 'lucide-react';

export interface JobOpening {
  id: string;
  title: string;
  department: 'cloud' | 'erp' | 'engineering' | 'talent';
  departmentLabel: string;
  location: string;
  type: string;
  experience: string;
  compensation: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

export const OPEN_JOBS: JobOpening[] = [
  {
    id: 'aws-cloud-architect',
    title: 'Senior AWS & Kubernetes Cloud Architect',
    department: 'cloud',
    departmentLabel: 'Cloud & Infrastructure',
    location: 'Remote (US Timezones)',
    type: 'Full-Time',
    experience: '7+ Years',
    compensation: '$155,000 – $185,000 / yr',
    shortDesc: 'Lead enterprise multi-cloud architectures, Kubernetes cluster provisioning, and automated Terraform infrastructure pipelines.',
    responsibilities: [
      'Architect and deploy high-availability, zero-trust cloud infrastructure on AWS for enterprise clients.',
      'Design automated CI/CD deployment pipelines using GitHub Actions, ArgoCD, and Helm.',
      'Conduct cloud architecture well-architected reviews and cost optimization audits.',
      'Mentor engineering squads on infrastructure-as-code and container security practices.',
    ],
    requirements: [
      'Active AWS Certified Solutions Architect (Professional) or equivalent certification.',
      'Deep hands-on expertise with Kubernetes (EKS), Docker, Terraform, and Linux internals.',
      'Demonstrated experience migrating monolithic on-premise systems to microservices cloud fabrics.',
      'Excellent verbal communication and stakeholder presentation capabilities.',
    ],
    skills: ['AWS', 'Kubernetes (EKS)', 'Terraform', 'Helm', 'CI/CD', 'Docker', 'Linux'],
  },
  {
    id: 'workday-consultant',
    title: 'Workday HCM & Integration Consultant',
    department: 'erp',
    departmentLabel: 'Enterprise ERP & HCM',
    location: 'Remote (US Timezones)',
    type: 'Full-Time / Contract',
    experience: '5+ Years',
    compensation: '$135,000 – $165,000 / yr',
    shortDesc: 'Configure and deploy core Workday HCM, Studio integration pipelines, EIBs, and custom business processes for scaling enterprises.',
    responsibilities: [
      'Lead end-to-end Workday HCM configuration, security group assignment, and custom business process workflows.',
      'Build and maintain bi-directional integration pipelines using Workday Studio, EIBs, and Core Connectors.',
      'Collaborate with HR Operations and finance teams to execute bi-annual Workday release testing and tenant updates.',
      'Provide post-deployment hypercare and operational support.',
    ],
    requirements: [
      'Demonstrated track record of 2+ full-lifecycle Workday HCM implementations.',
      'Proficiency in Workday Studio, BIRT, Calculated Fields, and XML/XSLT transformations.',
      'Strong knowledge of North American payroll and benefits compliance frameworks.',
      'Workday integration or functional certifications preferred.',
    ],
    skills: ['Workday HCM', 'Workday Studio', 'EIB', 'BIRT', 'XML/XSLT', 'API Integration'],
  },
  {
    id: 'fullstack-engineer',
    title: 'Lead Full-Stack React & Node.js Engineer',
    department: 'engineering',
    departmentLabel: 'Software Engineering',
    location: 'Remote (US Timezones)',
    type: 'Full-Time',
    experience: '6+ Years',
    compensation: '$140,000 – $170,000 / yr',
    shortDesc: 'Build resilient, high-performance web applications, serverless microservices, and modern user experiences for clients.',
    responsibilities: [
      'Design, build, and maintain mission-critical web applications with React, TypeScript, and Node.js.',
      'Architect robust REST and GraphQL API services backed by PostgreSQL and Redis caches.',
      'Enforce automated testing suites (Jest, Playwright) and strict code quality standards.',
      'Collaborate directly with client product managers and UX architects in rapid 2-week agile sprints.',
    ],
    requirements: [
      'Expert proficiency in modern React, TypeScript, Tailwind CSS, and asynchronous Node.js.',
      'Strong fundamentals in relational database schema design, indexing, and query optimization.',
      'Experience building production applications deployed on cloud services (AWS/Vercel/Docker).',
      'Passionate about clean architecture, accessibility (WCAG), and responsive design.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'GraphQL', 'Jest'],
  },
  {
    id: 'sap-lead',
    title: 'SAP S/4HANA Finance & Core Lead',
    department: 'erp',
    departmentLabel: 'Enterprise ERP & HCM',
    location: 'Remote / Hybrid (US)',
    type: 'Full-Time / Contract',
    experience: '8+ Years',
    compensation: '$160,000 – $190,000 / yr',
    shortDesc: 'Drive SAP S/4HANA enterprise transformations, business process re-engineering, and financial system integrations.',
    responsibilities: [
      'Lead S/4HANA Finance (FI/CO) solution architecture, blueprinting, and migration tracks.',
      'Work with enterprise clients to align business financial reporting with SAP best practices.',
      'Oversee data migration, cutover strategies, and integration with third-party banking/tax systems.',
      'Manage client deliverables, SOW milestone tracking, and user enablement programs.',
    ],
    requirements: [
      'At least 2 complete lifecycles of SAP S/4HANA Finance implementation.',
      'Deep functional mastery of General Ledger (GL), Accounts Payable (AP), AR, and Asset Accounting.',
      'Familiarity with SAP BTP extensions, Fiori apps, and SAP Activate methodology.',
      'Strong consulting presence with enterprise CFO and IT leadership teams.',
    ],
    skills: ['SAP S/4HANA', 'FI/CO', 'SAP BTP', 'Fiori', 'Data Migration', 'Activate'],
  },
  {
    id: 'devops-sre-engineer',
    title: 'DevOps & Site Reliability Engineer (SRE)',
    department: 'cloud',
    departmentLabel: 'Cloud & Infrastructure',
    location: 'Remote (US Timezones)',
    type: 'Full-Time',
    experience: '4+ Years',
    compensation: '$125,000 – $155,000 / yr',
    shortDesc: 'Automate infrastructure provisioning, maintain high-availability Kubernetes clusters, and optimize production telemetry.',
    responsibilities: [
      'Manage multi-environment Kubernetes clusters, ingress controllers, and service meshes.',
      'Author robust Infrastructure-as-Code modules in Terraform for cloud resource management.',
      'Implement central observability and alerting with Prometheus, Grafana, Datadog, and ELK stack.',
      'Participate in on-call rotations and lead blameless post-mortem investigations.',
    ],
    requirements: [
      'Experience managing production workloads on AWS, Azure, or GCP.',
      'Proficiency in Terraform, Bash/Python scripting, and Docker container lifecycle.',
      'Solid grasp of networking, TLS certificates, DNS, and load balancer configurations.',
      'Understanding of SRE principles (SLAs, SLOs, SLIs, error budgets).',
    ],
    skills: ['DevOps', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana', 'Python', 'AWS'],
  },
  {
    id: 'technical-recruiter',
    title: 'Senior Technical Talent Acquisition Specialist',
    department: 'talent',
    departmentLabel: 'Talent & Recruitment',
    location: 'Dover, DE / Remote (US)',
    type: 'Full-Time',
    experience: '4+ Years',
    compensation: '$85,000 – $115,000 / yr + Bonus',
    shortDesc: 'Source, screen, and place elite software engineers, cloud architects, and ERP consultants for client pod deployments.',
    responsibilities: [
      'Source elite technical talent across specialized niches (Cloud, DevOps, Workday, SAP, React/Node).',
      'Conduct rigorous initial technical and behavioral screenings in tandem with engineering practice leads.',
      'Manage candidate pipelines through modern ATS systems with exceptional candidate experience.',
      'Partner closely with client hiring executives to clarify requirements and deliver rapid talent submissions.',
    ],
    requirements: [
      'Proven background in technical recruitment within IT consulting or tech staffing agencies.',
      'Deep understanding of engineering stacks, developer skill profiles, and compensation benchmarks.',
      'High integrity, relationship-oriented sourcing ethics, and structured follow-through.',
      'Strong communication and negotiation skills.',
    ],
    skills: ['Tech Sourcing', 'Candidate Screening', 'ATS', 'Talent Pipeline', 'Client Relations'],
  },
];

export const WHY_JOIN_US = [
  {
    icon: TrendingUp,
    title: 'High-Impact Enterprise Engagements',
    description: 'Work on mission-critical digital transformations, cloud migrations, and modern ERP ecosystems for high-growth enterprises and established leaders.',
  },
  {
    icon: Shield,
    title: 'Transparent Contracts & US Governance',
    description: 'Headquartered in Dover, Delaware with 100% US corporate accountability, clear Statements of Work, competitive compensation, and on-time disbursements.',
  },
  {
    icon: Award,
    title: 'Continuous Enablement & Certification',
    description: 'We actively invest in your professional growth—sponsoring official certifications across AWS, Kubernetes, Workday, SAP, and modern engineering frameworks.',
  },
  {
    icon: Users,
    title: 'Collaborative, Autonomous Engineering Pods',
    description: 'Join close-knit pods led by senior practitioners who respect engineering craft, eliminate pointless bureaucracy, and prioritize high-velocity execution.',
  },
];

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  jobRole: string;
  experienceYears: string;
  notes: string;
}

export const CareersSection: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeJobDetails, setActiveJobDetails] = useState<JobOpening | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);

  // Application form state
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    jobRole: '',
    experienceYears: '3–5 Years',
    notes: '',
  });

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkjjwpqy';
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccessCode, setApplicationSuccessCode] = useState<string | null>(null);
  const [careerSubmitError, setCareerSubmitError] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Roles' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'erp', label: 'Enterprise ERP & HCM' },
    { id: 'engineering', label: 'Software Engineering' },
    { id: 'talent', label: 'Talent & Recruitment' },
  ];

  const filteredJobs = OPEN_JOBS.filter((job) => {
    const matchesDept = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch =
      searchQuery.trim() === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const handleOpenApplyModal = (job: JobOpening) => {
    setApplyingJob(job);
    setFormData((prev) => ({ ...prev, jobRole: job.title }));
    setFormErrors({});
    setCareerSubmitError(null);
    setApplicationSuccessCode(null);
  };

  const validateApplication = (): boolean => {
    const errors: Partial<Record<keyof ApplicationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    }

    if (!formData.linkedin.trim()) {
      errors.linkedin = 'LinkedIn or portfolio URL is required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitError(null);
    if (!validateApplication()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedin: formData.linkedin,
          jobRole: formData.jobRole,
          role: formData.jobRole,
          experienceYears: formData.experienceYears,
          notes: formData.notes,
          message: `Application for ${formData.jobRole}. Experience: ${formData.experienceYears}. Notes: ${formData.notes}`,
          _subject: `Career Application: ${formData.fullName} - ${formData.jobRole}`,
        }),
      });

      if (response.ok) {
        setApplicationSuccessCode(`GP-CAREER-${Math.floor(10000 + Math.random() * 90000)}`);
      } else {
        const data = await response.json().catch(() => null);
        const errMsg =
          data?.errors?.map((err: { field?: string; message: string }) => err.message).join(', ') ||
          data?.error ||
          'Failed to submit application. Please try again or email careers@globalpartners.info';
        setCareerSubmitError(errMsg);
      }
    } catch (err) {
      console.error('Career application submission error:', err);
      setCareerSubmitError('Unable to connect to submission service. Please check your connection or email careers@globalpartners.info.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="careers"
      className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B1120] text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-500/5 dark:bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mb-2 tracking-wide uppercase">
            <span>Join Our Team</span>
            <span aria-hidden="true">·</span>
            <span>Careers at GLOBALPARTNERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight text-balance">
            Build Your Career With a High-Velocity Technology Partner
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We are always seeking exceptional engineers, cloud architects, ERP consultants, and technical recruiters to join our US-governed client pods. Explore our open positions and discover why senior practitioners thrive with GLOBALPARTNERS.
          </p>
        </div>

        {/* Part 1: Why Join Us / Value Proposition */}
        <div className="mb-20">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>Why Join GLOBALPARTNERS</span>
            <span className="text-[11px] font-mono text-[#0D9488] dark:text-[#2DD4BF]">Our People-First Ethos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_JOIN_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#111C2E] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#2563EB]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-[#2563EB] dark:text-[#38BDF8] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Current Job Openings Header & Search / Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-xs font-bold text-[#0D9488] dark:text-[#2DD4BF] uppercase tracking-wider mb-1">
                Active Requisitions
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Current Openings ({filteredJobs.length})
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, skill, or role..."
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900/80 rounded-xl overflow-x-auto max-w-full my-6 w-fit scrollbar-none border border-slate-300/40 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedDepartment(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                  selectedDepartment === cat.id
                    ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        {filteredJobs.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#111C2E] rounded-2xl border border-slate-200 dark:border-slate-800">
            <Briefcase className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              No matching job openings found
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-4">
              We couldn't find any active roles matching your search criteria. Try a different query or submit a general application.
            </p>
            <button
              onClick={() => {
                setSelectedDepartment('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] bg-blue-50 dark:bg-slate-800 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#111C2E] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563EB]/50 dark:hover:border-[#38BDF8]/50 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-200 group"
              >
                <div>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
                    <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#38BDF8] uppercase tracking-wider">
                      {job.departmentLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {job.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors mb-2">
                    {job.title}
                  </h4>

                  {/* Location & Experience details */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8]" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {job.shortDesc}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/80 dark:border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-slate-200">
                    {job.compensation}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveJobDetails(job)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenApplyModal(job)}
                      className="px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* JOB DETAILS MODAL */}
      {activeJobDetails && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col text-slate-900 dark:text-white">
            
            {/* Header */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>{activeJobDetails.departmentLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeJobDetails.type}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {activeJobDetails.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#2DD4BF]" />
                    <span>{activeJobDetails.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8]" />
                    <span>{activeJobDetails.experience}</span>
                  </div>
                  <div className="font-mono font-bold text-slate-900 dark:text-white">
                    {activeJobDetails.compensation}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveJobDetails(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Role Overview
                </h4>
                <p className="leading-relaxed">
                  {activeJobDetails.shortDesc} At GLOBALPARTNERS, you will collaborate with seasoned senior engineers in autonomous pods with direct accountability under US governance standards.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {activeJobDetails.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Candidate Requirements
                </h4>
                <ul className="space-y-2">
                  {activeJobDetails.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Core Competencies & Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeJobDetails.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-slate-800 text-[#2563EB] dark:text-[#38BDF8] rounded-lg border border-blue-100 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveJobDetails(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const job = activeJobDetails;
                  setActiveJobDetails(null);
                  handleOpenApplyModal(job);
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
              >
                Apply for This Role &rarr;
              </button>
            </div>

          </div>
        </div>
      )}

      {/* QUICK APPLICATION MODAL */}
      {applyingJob && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-xl bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col text-slate-900 dark:text-white">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] uppercase tracking-wider mb-1">
                  Candidate Application
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {applyingJob.title}
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  GLOBALPARTNERS · Talent Acquisition
                </div>
              </div>
              <button
                onClick={() => setApplyingJob(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              {applicationSuccessCode ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                    Application Submitted!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>. Your credentials for the <span className="font-semibold text-slate-900 dark:text-white">{formData.jobRole}</span> role have been routed directly to our practice recruitment team.
                  </p>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 max-w-xs mx-auto text-xs flex justify-between items-center font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Application Ref:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{applicationSuccessCode}</span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setApplyingJob(null)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmitApplication}
                  className="space-y-4"
                  noValidate
                >
                  {/* Career Error Banner */}
                  {careerSubmitError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                      <div>{careerSubmitError}</div>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2 text-xs rounded-xl border ${
                        formErrors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                      } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl border ${
                          formErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                        } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl border ${
                          formErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                        } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* LinkedIn / Portfolio & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        LinkedIn or Portfolio URL <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/alex"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl border ${
                          formErrors.linkedin ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                        } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]`}
                      />
                      {formErrors.linkedin && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.linkedin}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                        Years of Experience
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                      >
                        <option value="1–2 Years">1–2 Years</option>
                        <option value="3–5 Years">3–5 Years</option>
                        <option value="6–8 Years">6–8 Years</option>
                        <option value="9+ Years">9+ Years (Senior / Lead)</option>
                      </select>
                    </div>
                  </div>

                  {/* Candidate Summary / Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                      Brief Note or Relevant Highlights
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly highlight your primary stack, certifications, or availability..."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Application...</span>
                        </div>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                    Equal Opportunity Employer. Your information is kept strictly confidential under US privacy regulations.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
