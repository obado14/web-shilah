'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroFace() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // 1. Background image fade-in starts smoothly on mount
    const t0 = setTimeout(() => setIsLoaded(true), 50);

    // 2. Main Title "Shilah Al Jakarti" appears with fade-in and slide-up
    const t1 = setTimeout(() => setShowTitle(true), 300);

    // 3. Profile badges appear with a slight delay AFTER the main title
    const t2 = setTimeout(() => setShowBadges(true), 650);

    // 4. Profile description appears gradually with fade-in
    const t3 = setTimeout(() => setShowDesc(true), 900);

    // 5. Action buttons appear with staggered animation
    const t4 = setTimeout(() => setShowButtons(true), 1150);

    // 6. Subtle scroll indicator appears
    const t5 = setTimeout(() => setShowScroll(true), 1500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[580px] h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Full-VH Background Photograph: Fade-in and subtle cinematic scale settling */}
      <Image
        id="hero-img"
        src="/images/shilah-hero.jpeg"
        alt="Shilah Al Jakarti"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-[center_top] min-[768px]:object-[center_20%] min-[1024px]:object-[center_24%] transition-all duration-1200 ease-out ${
          isLoaded
            ? 'opacity-100 scale-[1.06] min-[600px]:scale-100'
            : 'opacity-0 scale-[1.12] min-[600px]:scale-105'
        }`}
      />

      {/* Strategic Multi-Layer Gradient Overlays for Maximum Typography Contrast */}
      {/* 1. Desktop/Tablet Left Gradient: Richer dark base covering the text area */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 hidden min-[768px]:block w-[64%] min-[1280px]:w-[55%] bg-gradient-to-r from-black/95 via-black/80 to-transparent transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 2. Mobile Bottom Gradient: Smooth dark fade for lower 36%, leaving head & cap fully unobstructed */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[36%] min-[768px]:hidden bg-gradient-to-t from-black/98 via-black/85 to-transparent transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Subtle bottom border blend */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 4. Subtle Animated Ambient Glow Mesh (Subtle light glow / breathing gradient) */}
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-1500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute -left-24 top-1/4 h-[480px] w-[480px] rounded-full bg-emerald-500/15 blur-[120px] animate-hero-glow-1" />
        <div className="absolute -left-12 bottom-1/5 h-[420px] w-[420px] rounded-full bg-sky-500/18 blur-[110px] animate-hero-glow-2" />
      </div>

      {/* Hero Content Overlay: Positioned bottom-left on desktop & compact bottom on mobile */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-5 min-[768px]:pb-14 min-[1024px]:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 min-[830px]:px-10 min-[1140px]:px-16">
          {/* Mobile Compact Content Block (< 768px): Stays in lower 18-20% of screen */}
          <div className="block min-[768px]:hidden w-full">
            {/* 3. Mobile Badge */}
            <div
              className={`mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/70 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-md backdrop-blur-md transition-all duration-600 ease-out ${
                showBadges ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              High School Student • Gamer • AI
            </div>

            {/* 2. Mobile Title */}
            <h1
              className={`m-0 text-[28px] min-[380px]:text-[32px] font-bold leading-tight tracking-[-0.03em] text-white transition-all duration-700 ease-out ${
                showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 2px 14px rgba(0,0,0,0.95)',
              }}
            >
              Shilah Al Jakarti
            </h1>

            {/* 4. Mobile Description */}
            <p
              className={`mt-1 text-[13.5px] leading-snug text-neutral-200 transition-all duration-700 ease-out ${
                showDesc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 1px 6px rgba(0,0,0,0.95)',
              }}
            >
              Super Sus Gamer (ID: <span className="font-mono font-semibold text-[#38bdf8]">shill23</span>) &amp; learning web dev with AI.
            </p>

            {/* 5. Mobile Action Buttons */}
            <div className="mt-3.5 flex items-center gap-2">
              <Link
                href="/about"
                className={`flex-1 py-2 text-center rounded-full bg-white text-[12.5px] font-semibold text-[#111111] shadow-lg active:scale-95 transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", sans-serif',
                  transitionDelay: '0ms',
                }}
              >
                👤 About
              </Link>
              <Link
                href="/portfolio"
                className={`flex-1 py-2 text-center rounded-full border border-white/35 bg-black/65 text-[12.5px] font-semibold text-white shadow-lg backdrop-blur-md active:scale-95 transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", sans-serif',
                  transitionDelay: '120ms',
                }}
              >
                🎨 Portfolio
              </Link>
              <Link
                href="/contact"
                className={`py-2 px-3.5 text-center rounded-full border border-white/35 bg-black/65 text-[12.5px] font-semibold text-white shadow-lg backdrop-blur-md active:scale-95 transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", sans-serif',
                  transitionDelay: '240ms',
                }}
              >
                💬 Contact
              </Link>
            </div>
          </div>

          {/* Desktop & Tablet Rich Content Block (>= 768px): Positioned bottom-left */}
          <div className="hidden min-[768px]:block max-w-[540px] min-[1140px]:max-w-[620px]">
            {/* 3. Desktop Badges */}
            <div
              className={`mb-3.5 flex flex-wrap items-center gap-2.5 transition-all duration-600 ease-out ${
                showBadges ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/70 px-4 py-1.5 text-[12.5px] font-medium text-white shadow-lg backdrop-blur-md min-[830px]:text-[13.5px]">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                High School Student &amp; Gamer (Super Sus)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/35 bg-sky-950/70 px-4 py-1.5 text-[12.5px] font-medium text-[#7dd3fc] shadow-lg backdrop-blur-md min-[830px]:text-[13.5px]">
                <span>⚡</span> Learning Web Dev with AI
              </span>
            </div>

            {/* 2. Desktop Title */}
            <h1
              className={`m-0 text-[52px] font-normal leading-[1.05] tracking-[-0.04em] text-white min-[830px]:text-[66px] min-[1140px]:text-[76px] transition-all duration-700 ease-out ${
                showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 2px 18px rgba(0,0,0,0.95)',
              }}
            >
              Shilah Al Jakarti
            </h1>

            {/* 4. Desktop Description */}
            <p
              className={`mt-3.5 text-[16px] leading-[1.65] text-neutral-200 min-[830px]:text-[18.5px] transition-all duration-700 ease-out ${
                showDesc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 2px 8px rgba(0,0,0,0.95)',
              }}
            >
              Welcome to my portfolio website. Passionate about playing{' '}
              <strong className="font-semibold text-white">Super Sus</strong> (ID:{' '}
              <span className="font-mono font-semibold text-[#38bdf8]">shill23</span>), staying active with workouts, and enthusiastically learning coding &amp; building modern websites with AI.
            </p>

            {/* 5. Desktop Staggered Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14.5px] font-semibold text-[#111111] shadow-xl transition-all duration-500 ease-out hover:bg-[#eeeeee] hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  transitionDelay: '0ms',
                }}
              >
                <span>👤</span> About Me
              </Link>
              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/60 px-6 py-3 text-[14.5px] font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/60 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  transitionDelay: '130ms',
                }}
              >
                <span>🎨</span> Portfolio (Coming Soon)
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/60 px-6 py-3 text-[14.5px] font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/60 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  showButtons ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  transitionDelay: '260ms',
                }}
              >
                <span>💬</span> Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Desktop) */}
      <Link
        href="#about"
        className={`hidden min-[1024px]:flex absolute bottom-8 right-12 z-10 items-center gap-2.5 rounded-full border border-white/25 bg-black/50 px-4.5 py-2.5 text-[12.5px] font-medium tracking-wider text-neutral-200 backdrop-blur-md transition-all duration-700 ease-out hover:border-white/50 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span>Scroll to explore</span>
        <span className="animate-bounce">↓</span>
      </Link>
    </section>
  );
}
