'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  business: string;
  phone: string;
  message: string;
}

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Hira Street, Al Nahdah Dist. Jeddah, Makkah Province, Saudi Arabia',
    valueAr: 'شارع حراء، حي النهضة، جدة، منطقة مكة المكرمة، المملكة العربية السعودية',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'info@emanbakeries.com',
    valueAr: '',
    href: 'mailto:info@emanbakeries.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '920 012 3456',
    valueAr: '',
    href: 'https://wa.me/9200123456',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: 'Website',
    value: 'www.emanbakeries.com',
    valueAr: '',
    href: 'https://www.emanbakeries.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Working Hours',
    value: 'Saturday – Thursday: 6:00 AM – 10:00 PM',
    valueAr: '',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    business: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.contact-animate'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', business: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    background: 'var(--bg-tertiary)',
    color: 'var(--text-cream)',
    borderColor: 'var(--border-card)',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 contact-animate">
          <h2
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            Get in Touch
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
          >
            تواصل معنا
          </p>
          <div
            className="w-16 h-[2px] mx-auto mt-6"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Form */}
          <div className="contact-animate">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="text-4xl mb-4 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--gold)', color: 'var(--bg-primary)' }}
                >
                  ✓
                </div>
                <p
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
                >
                  Thank you!
                </p>
                <p
                  className="text-base"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
                >
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-sm mb-2 tracking-wide"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:border-[var(--gold)] transition-colors"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-2 tracking-wide"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:border-[var(--gold)] transition-colors"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-2 tracking-wide"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:border-[var(--gold)] transition-colors"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-2 tracking-wide"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    style={inputStyle}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm uppercase tracking-[0.15em] font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    background: 'var(--gold)',
                    color: 'var(--bg-primary)',
                  }}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact info tiles */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Wrapper = info.href ? 'a' : 'div';
              const wrapperProps = info.href
                ? { href: info.href, target: info.href.startsWith('http') ? '_blank' as const : undefined, rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {};
              return (
                <Wrapper
                  key={info.label}
                  {...wrapperProps}
                  className={`contact-animate border rounded-lg p-5 flex items-start gap-4 transition-all duration-300 hover:border-[var(--gold)]/30 ${info.href ? 'cursor-pointer group' : ''}`}
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                    display: 'flex',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ color: 'var(--gold)' }}>{info.icon}</div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-[0.1em] mb-1"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`text-base ${info.href ? 'group-hover:text-[var(--gold)] transition-colors' : ''}`}
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-cream)' }}
                    >
                      {info.value}
                    </p>
                    {info.valueAr && (
                      <p
                        className="text-sm mt-1"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
                      >
                        {info.valueAr}
                      </p>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
