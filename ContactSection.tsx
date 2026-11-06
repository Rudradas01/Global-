import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Clock, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    areaOfInterest: preselectedService || 'Technology Consulting & Digital Transformation',
    timeline: 'Within 30 Days',
    projectScope: '',
  });

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkjjwpqy';

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  // Update when preselected service prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, areaOfInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your organization or company name.';
    }

    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Please share a brief summary of your challenge or project needs.';
    } else if (formData.projectScope.trim().length < 15) {
      newErrors.projectScope = 'Please provide at least 15 characters to help us prepare appropriately.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          timeline: formData.timeline,
          service: formData.areaOfInterest,
          areaOfInterest: formData.areaOfInterest,
          message: formData.projectScope,
          projectScope: formData.projectScope,
          _subject: `New Consultation Scoping Request: ${formData.fullName} (${formData.company})`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setConfirmationCode(`GP-${Math.floor(100000 + Math.random() * 900000)}`);
      } else {
        const data = await response.json().catch(() => null);
        const errMsg =
          data?.errors?.map((err: { field?: string; message: string }) => err.message).join(', ') ||
          data?.error ||
          'Failed to send your request. Please try again or reach out directly at inquiries@globalpartners.info';
        setSubmitError(errMsg);
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      setSubmitError(
        'Unable to reach the submission server. Please verify your connection or email inquiries@globalpartners.info directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      areaOfInterest: 'Technology Consulting & Digital Transformation',
      timeline: 'Within 30 Days',
      projectScope: '',
    });
    setErrors({});
    setSubmitError(null);
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0F172A] dark:bg-[#080D1A] text-white relative transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] dark:text-[#2DD4BF] mb-2 tracking-wide uppercase">
            <span>Direct Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Discovery & Scoping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
            Let's Solve Your Next Business Challenge.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you need a dedicated engineering squad, a cloud architecture review, or strategic technology guidance, our team in Dover, Delaware is ready to discuss your requirements.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111C2E] text-slate-900 dark:text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-200/90 dark:border-slate-800">
            {isSuccess ? (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>. A senior technology director from GLOBALPARTNERS will review your scope and follow up within 1 business day.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/70 rounded-xl border border-slate-200 dark:border-slate-800 max-w-sm mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Reference Inquiry ID:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">{confirmationCode}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Target Service:</span>
                    <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[180px]">{formData.areaOfInterest}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Target Timeline:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{formData.timeline}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="#home"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-xs"
                  >
                    Return to Top
                  </a>
                </div>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-150">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                    <div className="leading-relaxed">
                      <span className="font-bold">Submission Notice:</span> {submitError}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                      } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                      } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      Organization / Company <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Health Technologies"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                        errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                      } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      Engagement Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all"
                    >
                      <option value="Immediate (1–2 weeks)">Immediate (1–2 weeks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Next Quarter (1–3 Months)">Next Quarter (1–3 Months)</option>
                      <option value="Exploratory / Scoping Only">Exploratory / Scoping Only</option>
                    </select>
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label htmlFor="areaOfInterest" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectScope" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                    Project Scope or Business Challenge <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="projectScope"
                    name="projectScope"
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Describe your current tech stack, headcount requirements, or specific challenges..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                      errors.projectScope ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950'
                    } text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:bg-white dark:focus:bg-slate-900 transition-all resize-none`}
                  />
                  {errors.projectScope && (
                    <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectScope}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting to Formspree...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Discovery Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                  Protected under mutual NDA. We do not sell or share business contact data.
                </p>
              </form>
            )}
          </div>

          {/* Details & Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-slate-900/90 dark:bg-[#111C2E] border border-slate-800 space-y-6 shadow-md">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Confirmed Corporate Coordinates
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Registered Office</div>
                    <div className="text-slate-400 leading-relaxed mt-0.5">
                      {COMPANY_INFO.name}<br />
                      {COMPANY_INFO.registeredAddress.street}<br />
                      {COMPANY_INFO.registeredAddress.city}, {COMPANY_INFO.registeredAddress.state} {COMPANY_INFO.registeredAddress.zip}, USA
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Direct Inquiries</div>
                    <a
                      href={`mailto:${COMPANY_INFO.inquiriesEmail}`}
                      className="text-[#38BDF8] hover:underline"
                    >
                      {COMPANY_INFO.inquiriesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0D9488] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Telephone</div>
                    <div className="text-slate-400">{COMPANY_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200">Operating Hours</div>
                    <div className="text-slate-400">{COMPANY_INFO.businessHours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                Response guarantee: All corporate inquiries receive an initial technical qualification review within 24 business hours.
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 rounded-2xl bg-slate-900/50 dark:bg-slate-900/70 border border-slate-800/80 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                What to Expect:
              </div>
              <ol className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400">1.</span>
                  <span>Direct technical review by a practice lead (no automated sales spam).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400">2.</span>
                  <span>Initial 30-minute scoping call to map requirements and timeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-400">3.</span>
                  <span>Written Statement of Work (SOW) or candidate roster presentation.</span>
                </li>
              </ol>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
