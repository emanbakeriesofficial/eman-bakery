'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const bar = barRef.current;
    const loader = loaderRef.current;
    if (!bar || !loader) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => setVisible(false),
        });
      },
    });

    tl.to(bar, {
      width: '100%',
      duration: 2.2,
      ease: 'power2.inOut',
    });
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <Image
        src="/logo.jpg"
        alt="Eman Bakery Logo"
        width={160}
        height={160}
        className="mb-6 rounded-full"
        priority
      />
      <h1
        className="text-3xl md:text-4xl font-bold tracking-[0.2em] mb-2"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-cream)' }}
      >
        EMAN BAKERY
      </h1>
      <p
        className="text-lg md:text-xl mb-10"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
      >
        The Taste of Tradition
      </p>
      <div className="w-48 md:w-64 h-[3px] rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ width: '0%', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-bright), var(--ember))' }}
        />
      </div>
    </div>
  );
}
