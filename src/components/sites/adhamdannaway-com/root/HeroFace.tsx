'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroFace() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#0d0d0d] pt-[62px] min-[830px]:pt-[92px]"
      style={{
        borderBottom: '#dddddd solid 1px',
      }}
    >
      {/* Full Width Hero Image Stage */}
      <div className="relative h-[62vh] min-h-[460px] max-h-[820px] w-full min-[1024px]:h-[78vh] min-[1440px]:h-[84vh]">
        {/* Shilah's Full Width Photo */}
        <Image
          id="hero-img"
          src="/images/shilah-hero.png"
          alt="Shilah Al Jakarti"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[center_30%] transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Dark Gradients for Crisp Legibility & Seamless Integration */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/40" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-8 min-[830px]:pb-14">
          <div className="mx-auto w-full max-w-[1040px] px-6 min-[1140px]:px-0">
            {/* Tag / Badge */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[12px] font-medium text-white shadow-lg backdrop-blur-md min-[830px]:text-[13px]">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                High School Student & Gamer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[12px] font-medium text-[#7dd3fc] shadow-lg backdrop-blur-md min-[830px]:text-[13px]">
                <span>⚡</span> Learning Web Dev with AI
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="m-0 text-[36px] font-normal leading-[1.05] tracking-[-0.04em] text-white min-[600px]:text-[50px] min-[830px]:text-[66px] min-[1140px]:text-[78px]"
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              Shilah Al Jakarti
            </h1>

            {/* Subtitle */}
            <p
              className="mt-3 max-w-[650px] text-[15px] leading-[1.55] text-[#dddddd] min-[600px]:text-[17px] min-[830px]:text-[19px]"
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0 1px 4px rgba(0,0,0,0.7)',
              }}
            >
              Selamat datang di website portofolio saya. Gemar bermain game <strong className="font-semibold text-white">Super Sus</strong>, berolahraga, dan antusias mendalami coding & pembuatan website modern bersama AI.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#111111] shadow-lg transition-all hover:bg-[#eeeeee] hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                <span>👤</span> Tentang Saya
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-6 py-3 text-[14px] font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                <span>🎨</span> Portfolio (Coming Soon)
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-6 py-3 text-[14px] font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                <span>💬</span> Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
