'use client';

import React from 'react';

export function PortfolioThumbs() {
  return (
    <section
      id="portfolio"
      className="relative w-full border-b border-[#dddddd] bg-[#fafafa] px-6 py-16 min-[830px]:py-24"
      style={{
        boxShadow: 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mx-auto max-w-[1040px]">
        <div id="content-detail">
          {/* Centered Header with Divider Line */}
          <div className="relative mb-12 h-[1px] border-b border-white bg-[#dddddd]">
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

          {/* Coming Soon Card */}
          <div className="mx-auto max-w-[760px] rounded-[16px] border border-[#e0e0e0] bg-white p-8 text-center shadow-[0_1px_4px_0px_rgba(0,0,0,0.1)] min-[830px]:p-12">
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
              className="mx-auto max-w-[540px] text-[18px] leading-[1.6] text-[#757575]"
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Saat ini saya sedang asyik belajar coding dan membuat berbagai eksperimen website dengan bantuan AI. Karya dan proyek menarik akan segera dipajang di sini!
            </p>

            {/* Visual Decorative Placeholder Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 pt-4 min-[600px]:grid-cols-3">
              <div className="rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center">
                <span className="text-[24px]">💻</span>
                <p className="mt-2 text-[14px] text-[#888888]">Web Experiments</p>
              </div>
              <div className="rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center">
                <span className="text-[24px]">🤖</span>
                <p className="mt-2 text-[14px] text-[#888888]">AI-Assisted Apps</p>
              </div>
              <div className="rounded-[10px] border border-dashed border-[#cccccc] bg-[#fcfcfc] p-6 text-center">
                <span className="text-[24px]">🎮</span>
                <p className="mt-2 text-[14px] text-[#888888]">Gaming Utilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
