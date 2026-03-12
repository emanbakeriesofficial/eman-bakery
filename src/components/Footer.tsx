'use client';

import Image from 'next/image';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Our Reach', href: '#reach' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative py-16 px-4"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--gold)',
        borderTopWidth: '0.5px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Eman Bakery Logo"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span
                className="text-lg font-bold tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
              >
                EMAN BAKERY
              </span>
            </div>
            <p
              className="text-sm italic"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
            >
              The Taste of Tradition
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)' }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm transition-colors duration-300 hover:text-[var(--gold)]"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4
              className="text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)' }}
            >
              Location
            </h4>
            <p
              className="text-sm mb-1"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
            >
              Hira Street, Al Nahdah Dist.
            </p>
            <p
              className="text-sm mb-1"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
            >
              Jeddah, Makkah Province, Saudi Arabia
            </p>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
            >
              شارع حراء، حي النهضة، جدة
            </p>
            <div className="space-y-1">
              <a
                href="mailto:info@emanbakeries.com"
                className="text-sm block transition-colors hover:text-[var(--gold)]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
              >
                info@emanbakeries.com
              </a>
              <a
                href="https://wa.me/9200123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block transition-colors hover:text-[var(--gold)]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
              >
                WhatsApp: 920 012 3456
              </a>
              <a
                href="https://www.emanbakeries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm block transition-colors hover:text-[var(--gold)]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
              >
                www.emanbakeries.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid var(--border-card)' }}
        >
          <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}>
            © 2007–2026 Eman Bakery. All rights reserved.
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[var(--gold)]"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}
