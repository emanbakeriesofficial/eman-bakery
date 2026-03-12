'use client';

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
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 2 C16 2 12 8 12 14 C12 18 14 22 16 26 C18 22 20 18 20 14 C20 8 16 2 16 2Z"
                  fill="var(--gold)"
                  opacity="0.9"
                />
                <path
                  d="M16 8 C13 6 8 7 6 10 C8 10 12 10 16 14"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M16 8 C19 6 24 7 26 10 C24 10 20 10 16 14"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                <line x1="16" y1="26" x2="16" y2="30" stroke="var(--gold)" strokeWidth="2" />
              </svg>
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

          {/* Location */}
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
              Jeddah, Saudi Arabia
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
            >
              جدة، المملكة العربية السعودية
            </p>
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
