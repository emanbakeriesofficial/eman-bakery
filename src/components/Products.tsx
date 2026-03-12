'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productCategories, type ProductCategory } from '@/lib/products-data';

gsap.registerPlugin(ScrollTrigger);

function ProductCard({ category }: { category: ProductCategory }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative border rounded-lg p-6 transition-all duration-300 hover:border-[var(--gold)]/30"
      style={{
        background: 'var(--bg-card)',
        borderColor: expanded ? 'var(--gold)' : 'var(--border-card)',
      }}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
      />

      <div
        className="flex items-start justify-between gap-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setExpanded(!expanded);
          }
        }}
      >
        <div className="flex-1">
          <h3
            className="text-xl md:text-2xl font-bold mb-1"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            {category.name}
          </h3>
          <p
            className="text-base mb-2"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', opacity: 0.8 }}
          >
            {category.arabicName}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
          >
            {category.description}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{
              fontFamily: 'var(--font-ui)',
              background: 'var(--gold)',
              color: 'var(--bg-primary)',
            }}
          >
            {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
          </span>
          <span
            className="text-lg transition-transform duration-300"
            style={{
              color: 'var(--gold)',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
              display: 'inline-block',
            }}
          >
            ▾
          </span>
        </div>
      </div>

      {/* Expanded items */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: expanded ? `${category.items.length * 42 + 32}px` : '0px',
          opacity: expanded ? 1 : 0,
        }}
      >
        <div
          className="mt-4 pt-4 border-t"
          style={{ borderColor: 'var(--border-card)' }}
        >
          <div className="grid gap-2">
            {category.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 py-1.5 px-3 rounded text-sm transition-colors duration-200 hover:bg-[var(--bg-secondary)]"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)' }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '6px' }}>●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.products-animate'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
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
      id="products"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-6 products-animate">
          <h2
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
          >
            Our Products
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
          >
            منتجاتنا
          </p>
          <div
            className="w-16 h-[2px] mx-auto mt-6"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        <p
          className="text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-14 products-animate"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)' }}
        >
          From traditional flatbreads to specialty items, our extensive product range caters to
          every segment of the food industry.
        </p>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <div key={category.name} className="products-animate">
              <ProductCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
