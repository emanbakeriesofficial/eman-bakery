'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Region {
  city: string;
  badge: string;
  description: string;
  highlighted: boolean;
}

const regions: Region[] = [
  {
    city: 'Jeddah',
    badge: 'Home City',
    description:
      'Our headquarters and primary production hub, serving the largest concentration of food businesses in the western region.',
    highlighted: true,
  },
  {
    city: 'Makkah',
    badge: 'Holy City',
    description:
      'Supplying fresh bread to establishments serving millions of pilgrims and residents throughout the year.',
    highlighted: false,
  },
  {
    city: 'Madinah',
    badge: 'City of Light',
    description:
      "Extending our fresh daily production to meet the growing demand of Madinah's thriving food sector.",
    highlighted: false,
  },
];

interface Sector {
  icon: string;
  name: string;
  description: string;
}

const sectors: Sector[] = [
  { icon: '🍽️', name: 'Restaurants', description: 'Premium dining establishments' },
  { icon: '🌯', name: 'Shawarma Shops', description: 'Quick-service favorites' },
  { icon: '🏨', name: 'Hotels', description: 'Hospitality & room service' },
  { icon: '🎪', name: 'Catering', description: 'Events & corporate dining' },
  { icon: '🛒', name: 'Supermarkets', description: 'Retail & wholesale' },
  { icon: '🏬', name: 'Food Courts', description: 'Mall & commercial outlets' },
];

export default function Reach() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.reach-animate'),
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

  return (
    <section
      id="reach"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 reach-animate">
          <h2
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            Our Reach
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
          >
            نطاق خدماتنا
          </p>
          <div
            className="w-16 h-[2px] mx-auto mt-6"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        {/* Region cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {regions.map((region) => (
            <div
              key={region.city}
              className={`reach-animate relative border rounded-lg p-6 md:p-8 transition-all duration-300 ${
                region.highlighted ? 'shadow-[0_0_30px_rgba(201,169,110,0.1)]' : ''
              }`}
              style={{
                background: 'var(--bg-card)',
                borderColor: region.highlighted ? 'var(--gold)' : 'var(--border-card)',
              }}
            >
              {/* Gold top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg"
                style={{
                  background: region.highlighted
                    ? 'linear-gradient(90deg, var(--gold-dark), var(--gold-bright), var(--gold-dark))'
                    : 'var(--border-card)',
                }}
              />

              <span
                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                style={{
                  fontFamily: 'var(--font-ui)',
                  background: region.highlighted ? 'var(--gold)' : 'var(--bg-secondary)',
                  color: region.highlighted ? 'var(--bg-primary)' : 'var(--gold)',
                  border: region.highlighted ? 'none' : '1px solid var(--border-card)',
                }}
              >
                {region.badge}
              </span>

              <h3
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
              >
                {region.city}
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
              >
                {region.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sectors subtitle */}
        <div className="text-center mb-12 reach-animate">
          <h3
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            Sectors We Serve
          </h3>
          <div
            className="w-12 h-[2px] mx-auto mt-4"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        {/* Sector tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="reach-animate border rounded-lg p-5 md:p-6 text-center transition-all duration-300 hover:border-[var(--gold)]/40 hover:bg-[var(--bg-tertiary)]"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
              }}
            >
              <span className="text-3xl mb-3 block">{sector.icon}</span>
              <h4
                className="text-base md:text-lg font-bold mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
              >
                {sector.name}
              </h4>
              <p
                className="text-xs md:text-sm"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
              >
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
