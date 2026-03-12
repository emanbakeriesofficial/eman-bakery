'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Our Reach', href: '#reach' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen && linksRef.current) {
      const links = linksRef.current.querySelectorAll('a');
      gsap.fromTo(
        links,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#2a2a2a]/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.jpg"
              alt="Eman Bakery Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span
              className="text-lg font-bold tracking-[0.15em]"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
            >
              EMAN BAKERY
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
              style={{ background: 'var(--gold)' }}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
              style={{ background: 'var(--gold)' }}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
              style={{ background: 'var(--gold)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-[39] flex items-center justify-center"
          style={{ background: 'rgba(10, 10, 10, 0.95)' }}
        >
          <div ref={linksRef} className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
