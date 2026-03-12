'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '17+', numericValue: 17, suffix: '+', label: 'Years of Excellence' },
  { value: '55+', numericValue: 55, suffix: '+', label: 'Product Varieties' },
  { value: '3', numericValue: 3, suffix: '', label: 'Regions Served' },
  { value: '24/7', numericValue: 24, suffix: '/7', label: 'Fresh Every Day' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Fade in elements
      gsap.fromTo(
        section.querySelectorAll('.about-animate'),
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

      // Stat counters
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-number');
        counters.forEach((counter, i) => {
          const target = stats[i].numericValue;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            snap: { val: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              counter.textContent = `${Math.round(obj.val)}${stats[i].suffix}`;
            },
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 about-animate">
          <h2
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            Our Story
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
          >
            قصتنا
          </p>
          <div
            className="w-16 h-[2px] mx-auto mt-6"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left: text */}
          <div className="about-animate">
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
            >
              Founded in 2007 in Jeddah, Eman Bakery has grown into a trusted name in the Hejaz
              food sector. We produce fresh bread daily — from traditional Arabic flatbreads to
              specialty items — serving restaurants, shawarma shops, hotels, catering companies,
              and supermarkets across Jeddah, Makkah, and Madinah.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
            >
              Our commitment to quality and consistency has made us the preferred supplier for
              businesses that demand excellence in every loaf.
            </p>
          </div>

          {/* Right: decorative frame */}
          <div className="about-animate flex items-center justify-center">
            <div
              className="relative w-full max-w-sm aspect-square flex items-center justify-center"
            >
              {/* Decorative gold border frame */}
              <div
                className="absolute inset-4 border-2 opacity-30"
                style={{ borderColor: 'var(--gold)' }}
              />
              <div
                className="absolute inset-8 border opacity-20"
                style={{ borderColor: 'var(--gold)' }}
              />
              <div className="text-center">
                <p
                  className="text-6xl md:text-7xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', opacity: 0.15 }}
                >
                  EB
                </p>
                <p
                  className="text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--gold)', opacity: 0.4 }}
                >
                  Since 2007
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 about-animate"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="stat-number text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs md:text-sm tracking-[0.1em] uppercase"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-dim)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="text-center max-w-3xl mx-auto about-animate">
          <div className="relative py-8 px-6">
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl leading-none"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', opacity: 0.3 }}
            >
              &ldquo;
            </span>
            <blockquote
              className="text-lg md:text-xl italic leading-relaxed pt-8"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-cream)' }}
            >
              Every loaf we bake carries the warmth of tradition and the promise of perfection.
            </blockquote>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl leading-none"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', opacity: 0.3 }}
            >
              &rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
