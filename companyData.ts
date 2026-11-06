import { ServiceItem, ApproachStep, ValuePillar } from '../types';

export const COMPANY_INFO = {
  name: 'GLOBALPARTNERS',
  tagline: "Build What's Next With the Right Partner.",
  supportingCopy: 'Technology expertise, skilled talent, and intelligent solutions to help your business move forward.',
  registeredAddress: {
    street: '8 The Green #25964',
    city: 'Dover',
    state: 'DE',
    zip: '19901',
    country: 'United States',
  },
  inquiriesEmail: 'inquiries@globalpartnersllc.com',
  careersEmail: 'careers@globalpartnersllc.com',
  phone: '+1 (302) 555-0198',
  businessHours: 'Monday – Friday, 8:00 AM – 6:00 PM EST',
  entityType: 'Delaware Limited Liability Company (LLC)',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'tech-consulting',
    title: 'Technology Consulting & Digital Transformation',
    category: 'consulting',
    status: 'verified',
    shortDesc: 'Strategic architecture, legacy modernization, and roadmap formulation that align technology investments with business objectives.',
    detailedDesc: 'We partner with enterprise decision-makers to evaluate existing architecture, eliminate technological debt, and build scalable technology ecosystems. From cloud-native transitions to API-first integrations, our advisory services turn complex systems into agile engines of business execution.',
    deliverables: [
      'Digital Maturity Assessment & Gap Analysis',
      'Enterprise Technology Strategy & Roadmap',
      'Architecture Evaluation & Cloud Migration Blueprint',
      'Vendor & Tooling Feasibility Studies',
    ],
    businessBenefits: [
      'Reduces tech debt and operating overhead',
      'Accelerates product release velocity',
      'Ensures regulatory compliance & security standards',
    ],
    idealFor: 'Enterprises needing strategic tech leadership without long-term advisory lock-in.',
    iconName: 'Compass',
  },
  {
    id: 'it-staffing',
    title: 'IT Staffing & Talent Solutions',
    category: 'staffing',
    status: 'verified',
    shortDesc: 'Precision talent acquisition across contract, contract-to-hire, and dedicated engineering squads for mission-critical projects.',
    detailedDesc: 'Finding vetted technical talent in cloud architecture, full-stack engineering, DevOps, and data science is a competitive bottleneck. We deliver pre-screened, culturally aligned, and rigorously evaluated engineers and technology leads ready to integrate into your existing sprint cadence.',
    deliverables: [
      'Contract & Project-Based Technical Specialists',
      'Contract-to-Hire Talent Evaluation Pipeline',
      'Dedicated Autonomous Engineering Pods',
      'Executive & Senior Engineering Leadership Search',
    ],
    businessBenefits: [
      'Eliminates hiring lag time with pre-vetted candidates',
      'Scales team capacity dynamically with project demand',
      'Guarantees verified technical competencies and domain fit',
    ],
    idealFor: 'Engineering organizations requiring specialized skills or rapid delivery capacity.',
    iconName: 'Users',
  },
  {
    id: 'cloud-systems',
    title: 'Cloud Technologies & Systems Integration',
    category: 'cloud',
    status: 'verified',
    shortDesc: 'Multi-cloud infrastructure design, container orchestration, microservices integration, and enterprise data pipelines.',
    detailedDesc: 'Modern organizations rely on interconnected SaaS, legacy databases, and cloud infrastructures. We architect seamless integrations across AWS, Google Cloud, and Azure, implementing automated CI/CD pipelines, zero-trust security postures, and elastic compute configurations.',
    deliverables: [
      'Multi-Cloud Architecture & Migration Execution',
      'Kubernetes & Microservices Containerization',
      'REST & GraphQL API Gateway Unification',
      'Infrastructure as Code (Terraform / Pulumi) Setup',
    ],
    businessBenefits: [
      'Eliminates data silos across disparate corporate software',
      'Optimizes cloud consumption costs and auto-scaling rules',
      'Establishes 99.99% system resilience and disaster recovery',
    ],
    idealFor: 'Growing organizations unifying fragmented IT systems and modernizing cloud footprints.',
    iconName: 'Cloud',
  },
  {
    id: 'enterprise-workforce',
    title: 'Enterprise Workforce & HCM Solutions',
    category: 'staffing',
    status: 'proposed',
    shortDesc: 'Modernizing human capital management systems, contingent workforce governance, and HR tech integrations.',
    detailedDesc: 'Proposed capability for organizations managing hybrid teams and large-scale contractor networks. We assist in deploying and optimizing HCM platforms (Workday, SAP SuccessFactors, UKG), streamlining vendor management (VMS), and standardizing contractor onboarding compliance.',
    deliverables: [
      'HCM Platform Implementation & Data Migration',
      'Contingent Workforce & VMS Integration',
      'Payroll & Benefits API Synchronization',
      'Worker Compliance & Onboarding Workflows',
    ],
    businessBenefits: [
      'Centralizes contingent workforce oversight',
      'Reduces onboarding cycle times from weeks to days',
      'Maintains strict labor compliance across US jurisdictions',
    ],
    idealFor: 'Enterprises managing distributed workforce rosters seeking operational efficiency.',
    iconName: 'Briefcase',
  },
  {
    id: 'process-automation',
    title: 'Business Process Automation',
    category: 'automation',
    status: 'verified',
    shortDesc: 'Eliminating manual friction with workflow automation, robotic process automation (RPA), and intelligent document processing.',
    detailedDesc: 'Transform repetitive, error-prone operational bottlenecks into autonomous digital pipelines. By integrating enterprise automation tools with machine learning and automated workflow triggers, we free internal teams to focus on high-value client initiatives.',
    deliverables: [
      'End-to-End Workflow Mapping & Optimization',
      'RPA Bot Deployment for Repetitive Data Entry',
      'Intelligent Document & Invoice Parsing Systems',
      'Cross-Platform Webhook & Event Integration',
    ],
    businessBenefits: [
      'Reduces operational turnaround time by up to 70%',
      'Cuts manual processing error rates to near zero',
      'Frees key employees for revenue-generating initiatives',
    ],
    idealFor: 'Operations and finance teams burdened by manual cross-system data transfer.',
    iconName: 'Cpu',
  },
  {
    id: 'technical-training',
    title: 'Technical Training & Enablement',
    category: 'enablement',
    status: 'proposed',
    shortDesc: 'Custom curriculum, cloud certifications, and upskilling workshops to prepare internal teams for new architectures.',
    detailedDesc: 'Proposed service line designed to ensure long-term sustainability following digital rollouts. We deliver structured enablement bootcamps for internal engineers in modern DevOps practices, cloud governance, and security-first development.',
    deliverables: [
      'Custom Corporate Cloud Architecture Workshops',
      'DevOps & CI/CD Pipeline Best Practices Enablement',
      'Security First Coding & Compliance Seminars',
      'Hands-on Architecture Lab Simulations',
    ],
    businessBenefits: [
      'Prevents post-delivery vendor dependency',
      'Upskills in-house engineers on modern tech stacks',
      'Elevates internal team morale and talent retention',
    ],
    idealFor: 'Organizations transitioning to modern tech stacks who wish to cultivate internal mastery.',
    iconName: 'GraduationCap',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand the business challenge',
    description: 'We initiate every engagement by mapping your existing business workflows, technical dependencies, and team capacity constraints. We interview stakeholders and audit architecture to isolate root challenges.',
    keyActivities: [
      'Stakeholder alignment interviews',
      'Technical architecture & data flow audit',
      'Skills gap & staffing needs analysis',
      'Risk assessment & compliance scoping',
    ],
    output: 'Discovery Findings Document & Technical Feasibility Report',
    timeline: 'Week 1 – 2',
  },
  {
    number: '02',
    title: 'Strategize',
    tagline: 'Identify suitable solutions',
    description: 'We construct an actionable execution roadmap tailored to your specific constraints, budget, and milestone horizons. We establish architectural patterns, staffing profiles, and delivery phases.',
    keyActivities: [
      'Target-state architecture definition',
      'Resource & staffing allocation matrix',
      'Milestone-driven implementation schedule',
      'Technology selection & vendor evaluation',
    ],
    output: 'Execution Blueprint & Staffing Statement of Work (SOW)',
    timeline: 'Week 2 – 3',
  },
  {
    number: '03',
    title: 'Deliver',
    tagline: 'Implement the agreed approach',
    description: 'Execution is managed through agile sprints with transparent weekly status cadences. Whether embedding senior engineers or executing system deployments, our team adheres to strict quality controls.',
    keyActivities: [
      'Bi-weekly sprint cycles & standups',
      'Iterative infrastructure / talent deployment',
      'Rigorous peer review & automated testing',
      'Transparent milestone tracking & reporting',
    ],
    output: 'Functional Software, Deployed Infrastructure, or Integrated Team Pods',
    timeline: 'Ongoing Agile Cadence',
  },
  {
    number: '04',
    title: 'Optimize',
    tagline: 'Evaluate and improve outcomes',
    description: 'Delivery is not the finish line. We monitor system performance, gather internal feedback, conduct knowledge transfers, and refine solutions to guarantee sustained ROI and operational durability.',
    keyActivities: [
      'Telemetry & performance metrics monitoring',
      'Knowledge transfer & internal team enablement',
      'Ongoing governance & post-launch reviews',
      'Iterative enhancements & scale planning',
    ],
    output: 'Operational Runbooks & Performance Optimization Scorecard',
    timeline: 'Quarterly Reviews & Sustained SLA',
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'Business-Focused Consulting',
    description: 'We prioritize measurable commercial impact and operational clarity over buzzword-driven architecture.',
    proofPoint: 'Every technical decision maps to an identified business metric, cost efficiency, or time-to-market goal.',
    iconName: 'Target',
  },
  {
    title: 'Flexible Delivery Models',
    description: 'Adaptable engagement frameworks spanning dedicated engineer pods, targeted advisory sprints, and direct technical placements.',
    proofPoint: 'Seamlessly shift between staff augmentation and managed solutions as your product priorities evolve.',
    iconName: 'Layers',
  },
  {
    title: 'Technology & Talent Alignment',
    description: 'We do not treat engineering tools and talent in isolation; our specialists understand your specific stack and domain culture.',
    proofPoint: 'Technical screening conducted by veteran engineers with hands-on enterprise experience.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Collaborative Long-Term Partnership',
    description: 'A transparent US-based advisory partner that works alongside your leadership rather than functioning as an opaque vendor.',
    proofPoint: 'Direct access to senior principals, transparent communication cadences, and zero lock-in contracts.',
    iconName: 'Handshake',
  },
  {
    title: 'Practical Innovation',
    description: 'Applying proven automation, cloud-native frameworks, and intelligent tools where they create tangible business leverage.',
    proofPoint: 'We implement stable, maintainable systems that your team can run and understand with confidence.',
    iconName: 'Zap',
  },
];

export const RESEARCH_AND_STRATEGY = {
  referenceSiteAnalysis: {
    siteName: 'Golden Pegasus IT (goldenpegasusit.com)',
    primaryServices: [
      'IT Staffing & Recruitment',
      'Software Development & Application Support',
      'Cloud & Infrastructure Management',
      'Business Consulting & IT Strategy',
    ],
    targetAudience: 'Mid-sized to enterprise businesses in North America requiring technical capacity and outsourced IT.',
    strengths: [
      'Broad coverage of technology workforce categories',
      'Clear commitment to technical support and staffing models',
    ],
    weaknessesIdentified: [
      'Generic corporate templates with outdated visual layout and typography',
      'Lack of clear differentiation between consulting vs. body-shop staffing',
      'Absence of interactive engagement tools or transparent scoping steps',
      'No interactive client assistance or intelligent exploration mechanisms',
    ],
    opportunitiesForGlobalPartners: [
      'Establish a modern, polished brand presence with clean typographic hierarchy',
      'Clearly delineate verified services from planned expansion areas',
      'Provide an interactive 4-step engagement roadmap that builds executive trust',
      'Incorporate an intelligent assistant to address prospective client inquiries 24/7',
      'Explicitly display US corporate identity (Dover, DE) and transparent contact channels',
    ],
  },
  brandStrategy: {
    corePositioning: 'GLOBALPARTNERS is a premier US-based technology consulting and specialized talent solutions firm, uniting senior technical acumen with agile workforce delivery.',
    brandAttributes: ['Strategic', 'Agile', 'Transparent', 'Pragmatic', 'Trustworthy'],
    toneOfVoice: 'Authoritative yet approachable, concise, business-focused, and free of hyperbole.',
  },
  stakeholderVerificationChecklist: [
    {
      item: 'Corporate Entity & Address',
      status: 'VERIFIED',
      detail: 'GLOBALPARTNERS, 8 The Green #25964, Dover, DE 19901, USA.',
    },
    {
      item: 'Core Value Proposition & Copy',
      status: 'CONFIRMED FOR LAUNCH',
      detail: '“Build What’s Next With the Right Partner.” Supported by technology expertise and skilled talent messaging.',
    },
    {
      item: 'Technology Consulting & IT Staffing',
      status: 'VERIFIED CORE',
      detail: 'Primary business pillars modelled on verified requirements.',
    },
    {
      item: 'Cloud & Systems Integration',
      status: 'VERIFIED CORE',
      detail: 'Multi-cloud architecture and API systems integration service lines.',
    },
    {
      item: 'Enterprise HCM & Workforce Solutions',
      status: 'PROPOSED EXPANSION (PENDING APPROVAL)',
      detail: 'Platform integration services (Workday, UKG, VMS) presented as proposed roadmap items.',
    },
    {
      item: 'Technical Training & Enablement',
      status: 'PROPOSED EXPANSION (PENDING APPROVAL)',
      detail: 'Internal enablement bootcamps presented as proposed roadmap items.',
    },
    {
      item: 'Case Studies & Quantified Client Metrics',
      status: 'AWAITING STAKEHOLDER METRICS',
      detail: 'No fabricated client case studies or unconfirmed logos are presented; placeholders clearly framed around methodology.',
    },
  ],
};
