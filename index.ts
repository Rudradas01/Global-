export type LogoConceptId = 'connected' | 'momentum' | 'network';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  category: 'consulting' | 'staffing' | 'cloud' | 'automation' | 'enablement';
  status: 'verified' | 'proposed';
  deliverables: string[];
  businessBenefits: string[];
  idealFor: string;
  iconName: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyActivities: string[];
  output: string;
  timeline: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  proofPoint: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    sectionId: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  areaOfInterest: string;
  timeline: string;
  projectScope: string;
}
