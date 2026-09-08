'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroFace() {
  const containerRef = useRef<HTMLDivElement>(null);

  // xp represents the split x position (center is 520 out of 1040)
  const [xp, setXp] = useState<number>(520);
  const targetXp = useRef<number>(520);
  const isHovered = useRef<boolean>(false);
  const animFrameId = useRef<number | null>(null);

  // Initial load animation state
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation loop using requestAnimationFrame for smooth spring damping
  const updatePhysicsRef = useRef<() => void>(() => {});

  useEffect(() => {
    function loop() {
      setXp((prev) => {
        const diff = targetXp.current - prev;
        if (Math.abs(diff) < 0.1) {
          if (!isHovered.current && Math.abs(prev - 520) < 0.1) {
            animFrameId.current = null;
            return 520;
          }
          if (!isHovered.current) {
            return 520;
          }
        }
        return prev + diff / 10;
      });

      animFrameId.current = requestAnimationFrame(loop);
    }

    updatePhysicsRef.current = loop;

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, relX / rect.width));
    targetXp.current = ratio * 1040;

    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    handlePointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    targetXp.current = 520;
    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  // Clamped split percentage for the divider (8% to 92%)
  const splitRatio = xp / 1040;
  const splitPercent = Math.max(8, Math.min(92, splitRatio * 100));

  // Dynamic opacity for designer and coder cards
  const designerOpacity = Math.max(0.45, Math.min(1, (1040 - xp) / 520));
  const coderOpacity = Math.max(0.45, Math.min(1, xp / 520));

  return (
    <section
      id="section"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-t border-white bg-white pt-[70px] pb-10 min-[830px]:pt-[100px] min-[830px]:pb-16"
      style={{
        borderBottom: '#dddddd solid 1px',
      }}
    >
      <div className="mx-auto max-w-[1040px] px-4 min-[1140px]:px-0">
        {/* Mobile & Tablet Header Navigation (< 1024px) */}
        <div className="mb-6 flex items-center justify-between border-b border-[#eeeeee] pb-4 min-[1024px]:hidden">
          <Link
            href="/portfolio"
            className="group block text-left no-underline transition-opacity"
            style={{ opacity: designerOpacity }}
          >
            <h1
              className="m-0 text-[26px] font-normal leading-tight tracking-[-0.04em] text-[#333333] group-hover:text-[#757575] min-[600px]:text-[34px]"
              style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              designer
            </h1>
            <p
              className="mt-0.5 text-[13px] text-[#757575] min-[600px]:text-[14px]"
              style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Creative & Portfolio
            </p>
          </Link>

          <div className="h-8 w-[1px] bg-[#e0e0e0]" />

          <Link
            href="/about"
            className="group block text-right no-underline transition-opacity"
            style={{ opacity: coderOpacity }}
          >
            <h1
              className="m-0 text-[26px] font-normal leading-tight tracking-[-0.04em] text-[#333333] group-hover:text-[#0284c7] min-[600px]:text-[34px]"
              style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <span className="text-[#0284c7]">&lt;</span>coder<span className="text-[#0284c7]">&gt;</span>
            </h1>
            <p
              className="mt-0.5 text-[13px] text-[#757575] min-[600px]:text-[14px]"
              style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Web Dev & AI
            </p>
          </Link>
        </div>

        {/* Hero Interactive Canvas Container */}
        <div
          id="face"
          ref={containerRef}
          className="relative mx-auto w-full select-none overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-[#111111] shadow-[0_16px_50px_rgba(0,0,0,0.12)] min-[1024px]:h-[585px]"
        >
          {/* Main Shilah Photograph */}
          <div className="relative h-full w-full">
            <Image
              id="face-img"
              src="/images/shilah-hero.png"
              alt="Shilah Al Jakarti"
              width={1671}
              height={941}
              priority
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Subtle Ambient Mood Overlays */}
            {/* Left Warm Amber Glow (Designer Mood) */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-amber-500/15 via-orange-400/5 to-transparent transition-opacity duration-300"
              style={{ opacity: (1040 - xp) / 1040 }}
            />
            {/* Right Cool Blue Tech Glow (Coder Mood) */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky-500/20 via-blue-400/5 to-transparent transition-opacity duration-300"
              style={{ opacity: xp / 1040 }}
            />

            {/* Interactive Vertical Split Divider */}
            <div
              className="pointer-events-none absolute inset-y-0 z-20 transition-all duration-75"
              style={{ left: `${splitPercent}%` }}
            >
              {/* Glowing Divider Line */}
              <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />

              {/* Central Interactive Handle */}
              <div className="absolute top-1/2 -left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-white/90 shadow-xl backdrop-blur-md transition-transform duration-150">
                <div className="flex items-center gap-1 text-[12px] font-bold text-[#333333]">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>

              {/* Floating Pills Near Top of Split Line */}
              <div className="absolute top-4 -translate-x-full pr-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium text-white shadow-lg backdrop-blur-md">
                  <span>🎨</span> designer
                </span>
              </div>
              <div className="absolute top-4 pl-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium text-white shadow-lg backdrop-blur-md">
                  <span>💻</span> &lt;coder&gt;
                </span>
              </div>
            </div>

            {/* Clickable Full-Height Split Overlay Links */}
            <div className="absolute inset-0 z-10 flex">
              <Link
                href="/portfolio"
                title="View Portfolio"
                className="h-full cursor-pointer"
                style={{ width: `${splitPercent}%` }}
              />
              <Link
                href="/about"
                title="About Shilah"
                className="h-full cursor-pointer"
                style={{ width: `${100 - splitPercent}%` }}
              />
            </div>

            {/* Desktop Floating HUD Cards (>= 1024px) */}
            {/* Left Card: Designer */}
            <div
              className="pointer-events-none absolute bottom-6 left-6 z-20 hidden max-w-[340px] rounded-2xl border border-white/80 bg-white/85 p-5 text-left shadow-xl backdrop-blur-md transition-all duration-300 min-[1024px]:block"
              style={{ opacity: designerOpacity }}
            >
              <Link
                href="/portfolio"
                className="pointer-events-auto block text-left no-underline"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    Creative
                  </span>
                </div>
                <h1
                  className="mt-2 text-[32px] font-normal leading-none tracking-[-0.05em] text-[#222222] transition-colors hover:text-[#555555] min-[1140px]:text-[38px]"
                  style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  designer
                </h1>
                <p
                  className="mt-2 text-[14px] leading-[1.45] text-[#555555]"
                  style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  High school student exploring creative design, visual aesthetics, and digital ideas.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#333333] hover:underline">
                  Lihat Portfolio →
                </span>
              </Link>
            </div>

            {/* Right Card: Coder */}
            <div
              className="pointer-events-none absolute bottom-6 right-6 z-20 hidden max-w-[340px] rounded-2xl border border-white/80 bg-white/85 p-5 text-right shadow-xl backdrop-blur-md transition-all duration-300 min-[1024px]:block"
              style={{ opacity: coderOpacity }}
            >
              <Link
                href="/about"
                className="pointer-events-auto block text-right no-underline"
              >
                <div className="flex items-center justify-end gap-2">
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-sky-800">
                    Developer & Gamer
                  </span>
                </div>
                <h1
                  className="mt-2 text-[32px] font-normal leading-none tracking-[-0.05em] text-[#222222] transition-colors hover:text-[#0284c7] min-[1140px]:text-[38px]"
                  style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  <span className="text-[#0284c7]">&lt;</span>coder<span className="text-[#0284c7]">&gt;</span>
                </h1>
                <p
                  className="mt-2 text-[14px] leading-[1.45] text-[#555555]"
                  style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Aspiring developer learning web development with AI, coding websites, and playing Super Sus.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0284c7] hover:underline">
                  Tentang Shilah →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Action Buttons (< 1024px) */}
        <div className="mt-4 grid grid-cols-2 gap-3 min-[1024px]:hidden">
          <Link
            href="/portfolio"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#dddddd] bg-[#fafafa] py-2.5 text-center text-[14px] font-semibold text-[#333333] transition-colors hover:bg-neutral-100"
          >
            <span>🎨</span> Portfolio
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#dddddd] bg-[#fafafa] py-2.5 text-center text-[14px] font-semibold text-[#333333] transition-colors hover:bg-neutral-100"
          >
            <span>💻</span> About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
