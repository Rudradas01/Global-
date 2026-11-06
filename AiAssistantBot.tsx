import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Bot,
  Send,
  X,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface AiAssistantBotProps {
  onNavigateToSection?: (sectionId: string) => void;
  isOpenInitial?: boolean;
}

export const AiAssistantBot: React.FC<AiAssistantBotProps> = ({
  onNavigateToSection,
  isOpenInitial = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Hey! This side Pluto, here to help you with your question regarding the website. Ask me anything about our services, consulting partners, Dover DE headquarters, career openings, or engagement models!`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What services do you offer?',
    'Who are your consulting partners?',
    'What job openings do you have?',
    'Where is your Delaware office?',
    'How does your IT staffing work?',
    'How do I toggle light/dark mode?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge base Q&A engine trained on every section of the website
  const generateAssistantResponse = (query: string): { text: string; action?: { label: string; sectionId: string } } => {
    const raw = query.trim();
    const q = raw.toLowerCase();

    // 1. GREETINGS & INTRODUCTIONS (Strict user requirement)
    // "if the user ask with the hi / hello like this type of message reply it with the - hey this side pluto help you with your question regarding website like this type of message"
    const greetingRegex = /^(hi|hello|hey|heyy|heya|hola|howdy|good\s*(morning|afternoon|evening|day)|greetings|sup|yo|hiya)(\s.*|[!?,.]*)$/i;
    if (greetingRegex.test(q) || q === 'hi' || q === 'hello' || q === 'hey' || q === 'hola') {
      return {
        text: `hey this side pluto help you with your question regarding website! What would you like to explore today? I can answer everything about our consulting services, the 9 consulting partners (AWS, Workday, SAP, Oracle, DevOps, etc.), open career opportunities, our 4-step delivery process, or our Dover, Delaware headquarters.`,
        action: { label: 'Explore Services', sectionId: '#services' },
      };
    }

    // 2. BOT IDENTITY & ROLE
    if (q.includes('who are you') || q.includes('your name') || q.includes('who is pluto') || q.includes('what are you') || q.includes('pluto')) {
      return {
        text: `Hey! This side Pluto, your dedicated AI guide for the GLOBALPARTNERS website. I'm trained on our complete corporate repository—including our 5 practice areas, 9 enterprise partner ecosystems, senior staffing framework, active job openings, and Dover, Delaware corporate governance.`,
        action: { label: 'Learn About GLOBALPARTNERS', sectionId: '#about' },
      };
    }

    // 3. COMPANY LOCATION & DOVER, DELAWARE HEADQUARTERS
    if (
      q.includes('where') ||
      q.includes('location') ||
      q.includes('address') ||
      q.includes('delaware') ||
      q.includes('dover') ||
      q.includes('headquarters') ||
      q.includes('hq') ||
      q.includes('office') ||
      q.includes('the green')
    ) {
      return {
        text: `GLOBALPARTNERS is a registered Delaware Limited Liability Company headquartered at ${COMPANY_INFO.registeredAddress.street}, ${COMPANY_INFO.registeredAddress.city}, ${COMPANY_INFO.registeredAddress.state} ${COMPANY_INFO.registeredAddress.zip}, USA. We operate across all North American time zones (EST, CST, MST, PST) with enterprise security and US legal governance.`,
        action: { label: 'View Corporate Location', sectionId: '#about' },
      };
    }

    // 4. CONSULTING PARTNERS & PLATFORMS (AWS, Workday, SAP, Oracle, DevOps, ADP, Kronos/UKG, Boomi, Salesforce)
    if (q.includes('aws') || q.includes('amazon web services')) {
      return {
        text: `Our AWS practice specializes in AWS Well-Architected Framework implementations, EKS containerization, serverless architectures (Lambda/API Gateway), multi-region high availability, and automated Terraform deployments.`,
        action: { label: 'View Consulting Partners', sectionId: '#partners' },
      };
    }

    if (q.includes('workday')) {
      return {
        text: `Our Workday practice delivers certified expertise in Workday HCM, Payroll, Financial Management, Prism Analytics, and custom Enterprise Interface Builder (EIB) / Studio integrations.`,
        action: { label: 'View Workday Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('sap') || q.includes('s/4hana') || q.includes('hana')) {
      return {
        text: `Our SAP practice handles enterprise migrations to SAP S/4HANA, ABAP on HANA optimizations, SAP Business Technology Platform (BTP), Fiori UX modernizations, and supply chain ERP workflows.`,
        action: { label: 'View SAP Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('oracle') || q.includes('oci')) {
      return {
        text: `Our Oracle practice covers Oracle Cloud Infrastructure (OCI), Oracle Fusion ERP & Supply Chain Management, Database 19c/23c administration, and secure data migration pipelines.`,
        action: { label: 'View Oracle Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('devops') || q.includes('kubernetes') || q.includes('docker') || q.includes('ci/cd') || q.includes('terraform') || q.includes('gitops')) {
      return {
        text: `Our DevOps practice builds end-to-end GitOps pipelines, Kubernetes clusters (EKS/GKE), Infrastructure as Code with Terraform, automated zero-downtime releases, and Prometheus/Grafana observability stacks.`,
        action: { label: 'View DevOps Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('adp') || q.includes('workforce now')) {
      return {
        text: `Our ADP practice implements and integrates ADP Workforce Now, Vantage HCM, and GlobalView payroll engines with secure bi-directional API synchronizations and compliance reporting.`,
        action: { label: 'View ADP Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('kronos') || q.includes('ukg') || q.includes('workforce central') || q.includes('dimensions')) {
      return {
        text: `Our Kronos (UKG) practice optimizes UKG Dimensions and Workforce Central for complex timekeeping, enterprise shift scheduling, labor activity tracking, and payroll boundary handoffs.`,
        action: { label: 'View Kronos Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('boomi') || q.includes('dell boomi')) {
      return {
        text: `Our Boomi practice leverages Dell Boomi AtomSphere for low-latency hybrid cloud integrations, EDI B2B trading partner workflows, API management, and master data hub synchronization.`,
        action: { label: 'View Boomi Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('salesforce') || q.includes('sfdc') || q.includes('mulesoft')) {
      return {
        text: `Our Salesforce practice architects enterprise implementations across Sales Cloud, Service Cloud, Financial Services Cloud, Lightning Web Components, and MuleSoft integration pipelines.`,
        action: { label: 'View Salesforce Practice', sectionId: '#partners' },
      };
    }

    if (q.includes('partner') || q.includes('platform') || q.includes('technologies') || q.includes('tech stack') || q.includes('ecosystem')) {
      return {
        text: `We maintain certified consulting practices across 9 major enterprise ecosystems: AWS, Workday, SAP, Oracle, DevOps, ADP, Kronos (UKG), Boomi, and Salesforce. We supply dedicated certified pods and strategic advisory for each platform.`,
        action: { label: 'View All 9 Partner Ecosystems', sectionId: '#partners' },
      };
    }

    // 5. SERVICES & CAPABILITIES
    if (
      q.includes('service') ||
      q.includes('what do you do') ||
      q.includes('offer') ||
      q.includes('capabilities') ||
      q.includes('practice')
    ) {
      return {
        text: `Global Partners LLC offers 5 enterprise capability areas:\n1. Technology Consulting & Digital Transformation\n2. IT Staffing & Talent Augmentation (vetted senior pods)\n3. Cloud Technologies & Systems Integration (AWS/Azure/GCP)\n4. Business Process Automation (RPA & CI/CD workflows)\n5. Workforce & Talent Enablement (upskilling & agile adoption)`,
        action: { label: 'Explore Services Grid', sectionId: '#services' },
      };
    }

    // 6. IT STAFFING & TALENT RECRUITING
    if (
      q.includes('staffing') ||
      q.includes('hire') ||
      q.includes('talent') ||
      q.includes('developer') ||
      q.includes('engineers') ||
      q.includes('recruiting') ||
      q.includes('pod') ||
      q.includes('augmentation')
    ) {
      return {
        text: `Our IT Staffing model provides pre-vetted senior software engineers, cloud architects, and dedicated engineering pods under contract, contract-to-hire, or direct placement models. Every candidate is evaluated by practicing senior staff engineers (top 3% acceptance rate) before introduction.`,
        action: { label: 'Inquire About IT Talent', sectionId: '#contact' },
      };
    }

    // 7. CAREERS & ACTIVE JOB OPENINGS
    if (
      q.includes('career') ||
      q.includes('job') ||
      q.includes('openings') ||
      q.includes('hiring') ||
      q.includes('open positions') ||
      q.includes('apply') ||
      q.includes('resume') ||
      q.includes('vacancies') ||
      q.includes('benefit') ||
      q.includes('salary') ||
      q.includes('join us')
    ) {
      return {
        text: `We are actively hiring across 6 key roles:\n• Senior AWS Cloud Architect ($145k-$175k, Remote US)\n• Workday HCM Integration Consultant ($130k-$160k, Remote)\n• Lead Full-Stack Engineer (React/Node) ($140k-$170k)\n• SAP S/4HANA Technical Lead ($150k-$180k)\n• DevOps & Site Reliability Engineer ($135k-$165k)\n• Senior Technical Recruiter ($85k-$115k + bonus)\n\nWe provide 100% remote flexibility, 401(k) matching, health/dental/vision coverage, and $2,500/year tech certification stipends.`,
        action: { label: 'View Careers & Apply', sectionId: '#careers' },
      };
    }

    // 8. 4-STEP ENGAGEMENT METHODOLOGY
    if (
      q.includes('approach') ||
      q.includes('step') ||
      q.includes('process') ||
      q.includes('method') ||
      q.includes('lifecycle') ||
      q.includes('how do you work') ||
      q.includes('timeline')
    ) {
      return {
        text: `We deliver projects through a structured 4-step framework:\n• Step 01: Discover (deep audit, requirements scoping & gap analysis)\n• Step 02: Strategize (solution architecture & staffing SOW blueprint)\n• Step 03: Deliver (bi-weekly agile sprints & automated CI/CD)\n• Step 04: Optimize (telemetry, warranty SLAs & knowledge handover)`,
        action: { label: 'Inspect 4-Step Roadmap', sectionId: '#approach' },
      };
    }

    // 9. WHY CHOOSE US & VALUE PROPOSITION
    if (
      q.includes('why') ||
      q.includes('choose') ||
      q.includes('difference') ||
      q.includes('differ') ||
      q.includes('vs') ||
      q.includes('golden pegasus') ||
      q.includes('advantage') ||
      q.includes('better')
    ) {
      return {
        text: `Why choose GLOBALPARTNERS?\n1. Top 3% Talent Vetting: Tested by senior practicing staff engineers, not keyword recruiters.\n2. Managed Pod Model: Cohesive delivery pods with embedded technical leads.\n3. Delaware LLC Governance: Strict US corporate accountability, NDAs, and IP protections.\n4. Outcome-Based Accountability: Transparent milestones and guaranteed delivery standards.`,
        action: { label: 'Review Value Proposition', sectionId: '#why-us' },
      };
    }

    // 10. PRICING & COST
    if (
      q.includes('cost') ||
      q.includes('price') ||
      q.includes('pricing') ||
      q.includes('rate') ||
      q.includes('how much') ||
      q.includes('quote') ||
      q.includes('budget') ||
      q.includes('billing')
    ) {
      return {
        text: `We offer two flexible billing arrangements: (1) Milestone-based Statement of Work (SOW) with fixed delivery deliverables for consulting/integrations, and (2) Transparent hourly contractor rates for engineering staff augmentation. We provide a free 30-minute scoping consultation to determine exact project estimates.`,
        action: { label: 'Request Scoping Consultation', sectionId: '#contact' },
      };
    }

    // 11. LIGHT AND DARK MODE / THEME
    if (
      q.includes('dark mode') ||
      q.includes('light mode') ||
      q.includes('theme') ||
      q.includes('toggle') ||
      q.includes('color') ||
      q.includes('sun') ||
      q.includes('moon')
    ) {
      return {
        text: `You can toggle between Light and Dark mode anytime using the Sun/Moon button located at the top-right of the header navigation bar. Your preference is automatically saved locally.`,
        action: { label: 'Back to Top Header', sectionId: '#home' },
      };
    }

    // 12. CONTACT, EMAIL & PHONE
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('call') ||
      q.includes('reach') ||
      q.includes('message') ||
      q.includes('form') ||
      q.includes('schedule') ||
      q.includes('speak')
    ) {
      return {
        text: `You can get in touch with our team through multiple channels:\n• Email: ${COMPANY_INFO.inquiriesEmail}\n• Phone: ${COMPANY_INFO.phone}\n• Online Intake: Complete the project discovery form at the bottom of the page to schedule a 30-minute scoping call.`,
        action: { label: 'Open Contact Form', sectionId: '#contact' },
      };
    }

    // 13. COMPREHENSIVE DEFAULT FALLBACK
    return {
      text: `Hey, this side Pluto! I'm here to help you with your question regarding the website. I can guide you through our core consulting services, the 9 enterprise partner platforms (AWS, Workday, SAP, Oracle, DevOps, Boomi, Salesforce, ADP, Kronos), open career positions, engagement pricing, or our Dover, Delaware headquarters. What would you like to know?`,
      action: { label: 'Explore All Services', sectionId: '#services' },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Natural assistant latency (350-450ms)
    setTimeout(() => {
      const { text: replyText, action } = generateAssistantResponse(text);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: 'Just now',
        suggestedAction: action,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: `Chat reset! Hey this side Pluto, ready to help you with any questions regarding the website, services, partners, or careers. What can I answer for you?`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button: Clean, iconic Bot button without text badges */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1E40AF] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#60A5FA] text-white shadow-2xl flex items-center justify-center border-2 border-white/20 dark:border-blue-400/30 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer relative"
            aria-label="Pluto Bot - Website Assistant"
            title="Chat with Pluto (Website Assistant)"
          >
            {/* Soft Ambient Glow */}
            <span className="absolute inset-0 rounded-full bg-blue-500/25 blur-md group-hover:bg-blue-400/40 transition-all pointer-events-none" />

            {/* Bot Icon */}
            <Bot className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-6" />

            {/* Online Green Indicator Dot */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0F172A] rounded-full shadow-xs" />
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Pluto Website Assistant"
          className="fixed bottom-5 right-5 sm:right-6 z-50 w-[calc(100vw-2.5rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header with Pluto Identity */}
          <div className="p-4 bg-[#0F172A] dark:bg-[#162238] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1D4ED8] to-[#3B82F6] flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0F172A] rounded-full" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>Pluto</span>
                  <span className="text-[10px] bg-blue-500/20 text-[#38BDF8] border border-blue-500/30 font-medium px-2 py-0.5 rounded-full">
                    Website Assistant
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  GLOBALPARTNERS · Ready to help
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Reset chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close Pluto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Suggestions Header */}
          <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 overflow-x-auto scrollbar-none flex items-center gap-2 shrink-0">
            <span className="shrink-0 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#2563EB]" />
              Ask:
            </span>
            {suggestedQuestions.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap shrink-0 px-2.5 py-1 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200/90 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-md text-[11px] transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/80 dark:bg-[#0B1120]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#2563EB] text-white rounded-br-xs shadow-xs'
                      : 'bg-white dark:bg-[#162238] text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 shadow-2xs rounded-bl-xs'
                  }`}
                >
                  {msg.text}

                  {/* Contextual Action Button */}
                  {msg.suggestedAction && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={msg.suggestedAction.sectionId}
                        onClick={() => {
                          setIsOpen(false);
                          if (onNavigateToSection) {
                            onNavigateToSection(msg.suggestedAction!.sectionId);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
                      >
                        <span>{msg.suggestedAction.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white dark:bg-[#162238] rounded-xl border border-slate-200 dark:border-slate-800 w-fit text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse delay-200" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-[#0F172A] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Pluto about services, partners, careers..."
              className="flex-1 text-xs px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 disabled:hover:bg-[#2563EB] text-white rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
              aria-label="Send query to Pluto"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Bot Attribution Footer */}
          <div className="px-4 py-1.5 bg-slate-100 dark:bg-slate-950 text-[10px] text-slate-500 dark:text-slate-400 text-center border-t border-slate-200 dark:border-slate-800">
            Pluto · AI Knowledge Guide for GLOBALPARTNERS
          </div>
        </div>
      )}
    </>
  );
};
