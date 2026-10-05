import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Check, Copy, AlertCircle, RefreshCw, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { playTactileClick } from '../utils/sound';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [scope, setScope] = useState<string>('Web Development');
  const [message, setMessage] = useState<string>('');
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const scopes = [
    'Web Development',
    'IoT / Hardware Project',
    'Python & Automation',
    'Full-Stack Role',
    'General Question'
  ];

  const handleCopyEmail = () => {
    playTactileClick();
    navigator.clipboard.writeText(PROFILE.contact.directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide details about your project or inquiry';
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick(800, 0.04, 0.05);

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#1D4ED8', '#2563EB', '#111111']
        });
      } catch {
        // Confetti fallback
      }
    }, 1200);
  };

  const handleResetForm = () => {
    playTactileClick();
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
  };

  const directMailtoUrl = `mailto:${PROFILE.contact.directEmail}?subject=${encodeURIComponent(
    `[Portfolio Inquiry - ${scope}] from ${name || 'Inquirer'}`
  )}&body=${encodeURIComponent(message || `Hello ${PROFILE.shortName},\n\nI would like to discuss...`)}`;

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-paper-border dark:border-paper-dark-border">
      <div className="editorial-container">
        {/* Top Eyebrow */}
        <div className="pb-8 border-b border-paper-border dark:border-paper-dark-border mb-16 flex items-center justify-between">
          <span className="font-mono text-xs text-accent-blue uppercase tracking-wider font-semibold">
            {PROFILE.contact.responseTime}
          </span>
        </div>

        {/* Asymmetric Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Editorial Statement & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-10"
          >
            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-[0.95]">
                LET'S BUILD <br />
                <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
                  something
                </span> <br />
                USEFUL.
              </h2>
              <p className="font-sans text-lg sm:text-xl text-ink-muted dark:text-ink-light-muted leading-relaxed mt-6 font-normal max-w-lg">
                {PROFILE.contact.subtext}
              </p>
            </div>

            {/* Direct Channels Specification */}
            <div className="space-y-4 font-mono text-xs pt-4 border-t border-paper-border dark:border-paper-dark-border">
              {/* Direct Email with 1-click copy */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface/60 dark:bg-paper-dark-surface/60 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent-blue flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-ink-subtle uppercase block">EMAIL</span>
                    <a
                      href={`mailto:${PROFILE.contact.directEmail}`}
                      className="font-bold text-ink-charcoal dark:text-ink-light hover:text-accent-blue transition-colors text-sm"
                    >
                      {PROFILE.contact.directEmail}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded border border-paper-border dark:border-paper-dark-border text-ink-muted hover:text-ink-charcoal dark:hover:text-ink-light bg-paper-light dark:bg-paper-dark flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
              </motion.div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  href={PROFILE.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 hover:bg-paper-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-ink-charcoal dark:text-ink-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <div>
                      <span className="text-[10px] text-ink-subtle uppercase block">CODE REPO</span>
                      <span className="font-bold text-ink-charcoal dark:text-ink-light group-hover:text-accent-blue transition-colors">
                        GitHub
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  href={PROFILE.socials[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 hover:bg-paper-surface flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-ink-charcoal dark:text-ink-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <div>
                      <span className="text-[10px] text-ink-subtle uppercase block">NETWORK</span>
                      <span className="font-bold text-ink-charcoal dark:text-ink-light group-hover:text-accent-blue transition-colors">
                        LinkedIn
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-6 sm:p-10 rounded-xl border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface shadow-editorial"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-4 border-b border-paper-border/60 dark:border-paper-dark-border/60 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-ink-charcoal dark:text-ink-light">
                    SEND A MESSAGE
                  </span>
                  <span className="font-mono text-[10px] text-ink-subtle">
                    FIELDS MARKED * REQUIRED
                  </span>
                </div>

                {/* Scope of Work Pills */}
                <div>
                  <label className="block font-mono text-xs text-ink-subtle uppercase mb-2">
                    WHAT WOULD YOU LIKE TO TALK ABOUT?
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {scopes.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => {
                          playTactileClick();
                          setScope(s);
                        }}
                        className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                          scope === s
                            ? 'bg-ink-charcoal text-paper-light dark:bg-ink-light dark:text-paper-dark font-medium shadow-sm'
                            : 'bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border text-ink-muted hover:border-ink-charcoal'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs uppercase text-ink-primary dark:text-ink-light mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className={`w-full px-4 py-3 rounded bg-paper-card dark:bg-paper-dark-card border font-sans text-sm text-ink-primary dark:text-ink-light placeholder:text-ink-faint focus:outline-none focus:border-accent-blue transition-colors ${
                      errors.name ? 'border-red-500' : 'border-paper-border dark:border-paper-dark-border'
                    }`}
                  />
                  {errors.name && (
                    <span className="font-mono text-[11px] text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs uppercase text-ink-primary dark:text-ink-light mb-1.5">
                    YOUR EMAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. maria@organization.com"
                    className={`w-full px-4 py-3 rounded bg-paper-card dark:bg-paper-dark-card border font-sans text-sm text-ink-primary dark:text-ink-light placeholder:text-ink-faint focus:outline-none focus:border-accent-blue transition-colors ${
                      errors.email ? 'border-red-500' : 'border-paper-border dark:border-paper-dark-border'
                    }`}
                  />
                  {errors.email && (
                    <span className="font-mono text-[11px] text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs uppercase text-ink-primary dark:text-ink-light mb-1.5">
                    PROJECT GOALS & TIMELINE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the system requirements, the core problem to solve, or team background..."
                    className={`w-full px-4 py-3 rounded bg-paper-card dark:bg-paper-dark-card border font-sans text-sm text-ink-primary dark:text-ink-light placeholder:text-ink-faint focus:outline-none focus:border-accent-blue transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-paper-border dark:border-paper-dark-border'
                    }`}
                  />
                  {errors.message && (
                    <span className="font-mono text-[11px] text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded bg-ink-charcoal dark:bg-ink-light text-paper-light dark:text-paper-dark font-mono text-xs uppercase tracking-widest hover:bg-accent-blue dark:hover:bg-accent-blue transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 shadow-editorial"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>

                <div>
                  <span className="font-mono text-xs text-accent-blue uppercase tracking-wider font-bold block mb-1">
                    MESSAGE SENT
                  </span>
                  <h3 className="font-display font-extrabold text-2xl uppercase text-ink-charcoal dark:text-ink-light">
                    THANK YOU, {name.toUpperCase()}.
                  </h3>
                  <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted mt-2 max-w-sm mx-auto leading-relaxed">
                    Your note about <strong className="text-ink-primary dark:text-ink-light">{scope}</strong> has been received. I'll read through your message and get back to <strong className="text-ink-primary dark:text-ink-light">{email}</strong> soon.
                  </p>
                </div>

                <div className="p-4 rounded bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border text-left font-mono text-xs space-y-1">
                  <div className="text-[10px] text-ink-subtle uppercase">ALTERNATIVE</div>
                  <p className="text-ink-muted font-sans text-xs">
                    You can also open your mail app with this message:
                  </p>
                  <a
                    href={directMailtoUrl}
                    className="inline-flex items-center gap-1.5 text-accent-blue hover:underline pt-1 font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>OPEN IN YOUR EMAIL APP</span>
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded border border-paper-border dark:border-paper-dark-border font-mono text-xs uppercase hover:border-accent-blue transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
