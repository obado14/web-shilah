'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroFace() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full bg-white pt-[62px] min-[830px]:pt-[92px]"
      style={{
        borderBottom: '#dddddd solid 1px',
      }}
    >
      {/* 1. Full-Width Edge-to-Edge Hero Photo (100% Unobstructed & Clear) */}
      <div className="relative w-full overflow-hidden bg-[#0d0d0d]">
        <div className="relative mx-auto w-full aspect-[16/9] max-h-[75vh] min-h-[280px]">
          <Image
            id="hero-img"
            src="/images/shilah-hero.png"
            alt="Shilah Al Jakarti"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-[center_25%] transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* 2. Hero Information & Navigation (Below Photo, Zero Overlap on Face) */}
      <div className="mx-auto max-w-[1040px] px-6 py-10 min-[830px]:py-14 text-center">
        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-[#f5f5f5] px-3.5 py-1 text-[12px] font-semibold text-[#444444] min-[830px]:text-[13px]">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            High School Student & Gamer (Super Sus)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-[12px] font-semibold text-sky-700 min-[830px]:text-[13px]">
            <span>⚡</span> Learning Web Dev with AI
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="m-0 text-[36px] font-normal leading-tight tracking-[-0.04em] text-[#222222] min-[600px]:text-[48px] min-[830px]:text-[60px]"
          style={{
            fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          Shilah Al Jakarti
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.6] text-[#666666] min-[600px]:text-[18px]"
          style={{
            fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          Selamat datang di website portofolio saya. Gemar bermain game{' '}
          <strong className="font-semibold text-[#111111]">Super Sus</strong> (ID:{' '}
          <span className="font-mono font-semibold text-[#0284c7]">shill23</span>), berolahraga, dan sedang antusias belajar coding serta membuat website modern menggunakan bantuan AI.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-[#444444] hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span>👤</span> Tentang Saya
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#cccccc] bg-white px-6 py-3 text-[14px] font-semibold text-[#333333] shadow-sm transition-all hover:bg-[#f5f5f5] hover:border-[#999999] hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span>🎨</span> Portfolio (Coming Soon)
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#cccccc] bg-white px-6 py-3 text-[14px] font-semibold text-[#333333] shadow-sm transition-all hover:bg-[#f5f5f5] hover:border-[#999999] hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span>💬</span> Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
