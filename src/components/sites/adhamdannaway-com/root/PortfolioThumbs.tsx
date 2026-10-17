'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function PortfolioThumbs() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative w-full border-b border-[#dddddd] bg-[#fafafa] px-6 py-16 min-[830px]:py-24"
      style={{
        boxShadow: 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="mx-auto max-w-[1080px]">
        <div id="content-detail">
          {/* Centered Header with Divider Line: Fade-in and slide-up */}
          <div
            data-reveal
            className={`relative mb-12 h-[1px] border-b border-white bg-[#dddddd] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h3
              className="absolute left-1/2 top-[-8px] block w-[240px] -translate-x-1/2 bg-[#fafafa] text-center text-[14px] font-normal uppercase tracking-[0.2rem] text-[#757575]"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0px 1px 1px #ffffff',
              }}
            >
              Portfolio
            </h3>
          </div>

          {/* Main Portfolio Container Card */}
          <div
            data-reveal
            className={`mx-auto max-w-[880px] rounded-[18px] border border-[#e0e0e0] bg-white p-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] min-[830px]:p-12 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span
              className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-50 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-amber-800"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon
            </span>

            <h4
              className="mb-3 text-[28px] font-normal text-[#222222] min-[830px]:text-[36px]"
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Projects in the Works
            </h4>

            <p
              data-reveal
              className={`mx-auto max-w-[580px] text-[17px] leading-[1.65] text-[#666666] min-[830px]:text-[18.5px] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                transitionDelay: '200ms',
              }}
            >
              I am currently having fun learning coding and building various website experiments with AI assistance. Exciting projects and creations will be featured here soon!
            </p>

            {/* Portfolio Cards Grid: Rich Visual Previews & Staggered Reveal */}
            <div className="mt-10 grid grid-cols-1 gap-6 text-left min-[720px]:grid-cols-3">
              {/* Card 1: Web Experiments */}
              <div
                data-reveal
                className={`transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                <div className="group flex flex-col justify-between h-full rounded-[14px] border border-neutral-200/90 bg-[#fafafa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-400 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.07)] active:translate-y-0 active:scale-[0.98] select-none cursor-default">
                  <div>
                    {/* Simulated App / Window Canvas Preview */}
                    <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 p-3 shadow-inner">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">preview.tsx</span>
                      </div>
                      <div className="pt-2.5 space-y-1.5">
                        <div className="h-2 w-3/4 rounded bg-emerald-500/40" />
                        <div className="h-2 w-full rounded bg-neutral-700/60" />
                        <div className="grid grid-cols-2 gap-1 pt-1">
                          <div className="h-5 rounded bg-neutral-800 border border-neutral-700/50" />
                          <div className="h-5 rounded bg-neutral-800 border border-neutral-700/50" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block text-[20px] transition-transform duration-300 group-hover:scale-115">
                        💻
                      </span>
                      <h5 className="text-[16px] font-bold text-neutral-900 leading-tight">
                        Web Experiments
                      </h5>
                    </div>

                    <p className="text-[13px] leading-relaxed text-neutral-500">
                      Interactive responsive UI layouts, animations, and Tailwind styling experiments.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      In Development
                    </span>
                    <span className="text-[12px] font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors">
                      Preview &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: AI-Assisted Apps */}
              <div
                data-reveal
                className={`transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '380ms' }}
              >
                <div className="group flex flex-col justify-between h-full rounded-[14px] border border-neutral-200/90 bg-[#fafafa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-400 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.07)] active:translate-y-0 active:scale-[0.98] select-none cursor-default">
                  <div>
                    {/* Simulated AI Interface Preview */}
                    <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 p-3 shadow-inner">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                          <span className="h-2 w-2 rounded-full bg-sky-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">model-ai.ts</span>
                      </div>
                      <div className="pt-2.5 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                          <div className="h-2 w-2/3 rounded bg-sky-400/50" />
                        </div>
                        <div className="h-2 w-5/6 rounded bg-neutral-700/60" />
                        <div className="h-6 rounded bg-neutral-800/90 border border-sky-500/30 p-1 flex items-center">
                          <div className="h-1.5 w-1/2 rounded bg-sky-300/40" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block text-[20px] transition-transform duration-300 group-hover:scale-115">
                        🤖
                      </span>
                      <h5 className="text-[16px] font-bold text-neutral-900 leading-tight">
                        AI-Assisted Apps
                      </h5>
                    </div>

                    <p className="text-[13px] leading-relaxed text-neutral-500">
                      Smart automated web tools, generative prompts &amp; AI-assisted development workflows.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
                      Conceptualizing
                    </span>
                    <span className="text-[12px] font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors">
                      Preview &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Gaming Utilities */}
              <div
                data-reveal
                className={`transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '510ms' }}
              >
                <div className="group flex flex-col justify-between h-full rounded-[14px] border border-neutral-200/90 bg-[#fafafa] p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-400 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.07)] active:translate-y-0 active:scale-[0.98] select-none cursor-default">
                  <div>
                    {/* Simulated Game Tracker Preview */}
                    <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-900 p-3 shadow-inner">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                          <span className="h-2 w-2 rounded-full bg-orange-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">super-sus.app</span>
                      </div>
                      <div className="pt-2.5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="h-2 w-1/3 rounded bg-orange-400/60" />
                          <span className="text-[9px] font-mono text-orange-400">LVL 23</span>
                        </div>
                        <div className="h-2 w-full rounded bg-neutral-700/60" />
                        <div className="h-5 rounded bg-neutral-800 border border-orange-500/20 flex items-center justify-between px-2">
                          <span className="text-[8px] font-mono text-neutral-400">ID: shill23</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block text-[20px] transition-transform duration-300 group-hover:scale-115">
                        🎮
                      </span>
                      <h5 className="text-[16px] font-bold text-neutral-900 leading-tight">
                        Gaming Utilities
                      </h5>
                    </div>

                    <p className="text-[13px] leading-relaxed text-neutral-500">
                      Companion utilities, player statistics &amp; custom tools tailored for the Super Sus community.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                      Planned
                    </span>
                    <span className="text-[12px] font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors">
                      Preview &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
