import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenDeliverablesModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo
              size="md"
              theme="dark"
              showWordmark={true}
            />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-3">
              Technology expertise, skilled talent, and intelligent solutions to help your business move forward. Headquartered in Dover, Delaware.
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              Delaware Corporate Registration: Limited Liability Company
            </div>
          </div>

          {/* Core Services */}
          <div>
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-4">
              Core Capabilities
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Technology Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  IT Staffing & Augmentation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Systems Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Workforce & HCM Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-4">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Our 4-Step Approach
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Consulting Partners
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers & Openings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Discovery
                </a>
              </li>
            </ul>
          </div>

          {/* Registered Office */}
          <div>
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-4">
              Delaware Registered Office
            </div>
            <div className="space-y-3 leading-relaxed text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.registeredAddress.street}<br />
                  {COMPANY_INFO.registeredAddress.city}, {COMPANY_INFO.registeredAddress.state} {COMPANY_INFO.registeredAddress.zip}<br />
                  {COMPANY_INFO.registeredAddress.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.inquiriesEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.inquiriesEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. Registered in Delaware, USA.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Equal Opportunity Employer
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
