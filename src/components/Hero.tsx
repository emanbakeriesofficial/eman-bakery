'use client';

import dynamic from 'next/dynamic';

const ParticleSphere = dynamic(() => import('./ParticleSphere'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Three.js canvas background */}
      <div className="absolute inset-0 z-0">
        <ParticleSphere />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Establishment label */}
        <p
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)' }}
        >
          EST. 2007 — JEDDAH, SAUDI ARABIA
        </p>

        {/* Main headline */}
        <h1
          className="font-bold leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-cream)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
          }}
        >
          The Taste of
          <br />
          <span style={{ color: 'var(--gold)' }}>Tradition</span>
        </h1>

        {/* Arabic name */}
        <p
          className="text-2xl md:text-4xl mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
        >
          مخبز إيمان
        </p>

        {/* Subheading */}
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', opacity: 0.85 }}
        >
          Manufacturing daily fresh bread serving the Hejaz food sector — restaurants, hotels,
          catering &amp; more across Jeddah, Makkah, and Madinah.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, '#products')}
            className="px-8 py-3 border text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
            style={{
              fontFamily: 'var(--font-ui)',
              color: 'var(--gold)',
              borderColor: 'var(--gold)',
            }}
          >
            Explore Products
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="px-8 py-3 text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-80"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'var(--gold)',
              color: 'var(--bg-primary)',
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
        >
          Scroll
        </span>
        <div className="animate-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
