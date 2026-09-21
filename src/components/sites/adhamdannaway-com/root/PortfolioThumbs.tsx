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
        boxShadow: 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mx-auto max-w-[1040px]">
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
            className={`mx-auto max-w-[760px] rounded-[16px] border border-[#e0e0e0] bg-white p-8 text-center shadow-[0_1px_4px_0px_rgba(0,0,0,0.1)] min-[830px]:p-12 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span
              className="mb-4 inline-block rounded-full border border-[#dddddd] bg-[#f5f5f5] px-4 py-1 text-[13px] font-semibold uppercase tracking-wider text-[#555555]"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Coming Soon
            </span>

            <h4
              className="mb-3 text-[28px] font-normal text-[#333333] min-[830px]:text-[34px]"
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Projects in the Works
            </h4>

            <p
              data-reveal
              className={`mx-auto max-w-[540px] text-[18px] leading-[1.6] text-[#757575] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                transitionDelay: '200ms',
              }}
            >
              I am currently having fun learning coding and building various website experiments with AI assistance. Exciting projects and creations will be featured here soon!
            </p>

            {/* Portfolio Cards Grid: Staggered Animation */}
            <div className="mt-8 grid grid-cols-1 gap-4 pt-4 min-[600px]:grid-cols-3">
              {/* Card 1 */}
              <div
                data-reveal
                className={`rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center transition-all duration-500 ease-out hover:border-[#999999] hover:bg-white hover:shadow-sm ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                <span className="text-[24px]">💻</span>
                <p className="mt-2 text-[14px] font-medium text-[#777777]">Web Experiments</p>
              </div>

              {/* Card 2 */}
              <div
                data-reveal
                className={`rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center transition-all duration-500 ease-out hover:border-[#999999] hover:bg-white hover:shadow-sm ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '380ms' }}
              >
                <span className="text-[24px]">🤖</span>
                <p className="mt-2 text-[14px] font-medium text-[#777777]">AI-Assisted Apps</p>
              </div>

              {/* Card 3 */}
              <div
                data-reveal
                className={`rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center transition-all duration-500 ease-out hover:border-[#999999] hover:bg-white hover:shadow-sm ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ transitionDelay: '510ms' }}
              >
                <span className="text-[24px]">🎮</span>
                <p className="mt-2 text-[14px] font-medium text-[#777777]">Gaming Utilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
