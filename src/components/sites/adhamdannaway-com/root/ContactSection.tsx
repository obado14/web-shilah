'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const handleCopyGameId = () => {
    navigator.clipboard.writeText('shill23');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full border-b border-[#dddddd] bg-[#fafafa] px-6 py-16 min-[830px]:py-24"
    >
      <div className="mx-auto max-w-[1040px]">
        {/* Centered Section Header with Line: Fade-in and slide-up */}
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
            Contact
          </h3>
        </div>

        {/* Intro */}
        <div className="mx-auto max-w-[680px] text-center">
          {/* Main Heading: Fade-in and slide-up */}
          <h2
            data-reveal
            className={`mb-4 text-[32px] font-normal text-[#222222] min-[830px]:text-[40px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '100ms',
            }}
          >
            Let&apos;s Connect &amp; Play!
          </h2>

          {/* Intro Paragraph: Smooth transition */}
          <p
            data-reveal
            className={`mb-10 text-[18px] leading-[1.6] text-[#757575] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '200ms',
            }}
          >
            Have a question about web development or just want to say hi? Feel free to reach out via the contacts below, or add my Super Sus account if you want to play together!
          </p>

          {/* Contact Cards Grid: Sequential short-delay stagger */}
          <div className="grid grid-cols-1 gap-6 text-left min-[720px]:grid-cols-3">
            {/* 1. WhatsApp Card */}
            <a
              data-reveal
              href="https://wa.me/6285117215840"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#25D366] hover:shadow-[0_4px_12px_rgba(37,211,102,0.15)] no-underline ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F8EE] text-[20px]">
                  💬
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#757575]">WhatsApp</span>
                <p className="mt-1 text-[18px] font-semibold text-[#222222] group-hover:text-[#25D366] transition-colors">
                  085117215840
                </p>
              </div>
              <span className="mt-4 inline-block text-[14px] text-[#25D366] font-medium">
                Chat on WhatsApp &rarr;
              </span>
            </a>

            {/* 2. Instagram Card (Short delay after WhatsApp) */}
            <a
              data-reveal
              href="https://www.instagram.com/shilah_al_jakarti2"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#E1306C] hover:shadow-[0_4px_12px_rgba(225,48,108,0.15)] no-underline ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '380ms' }}
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FCEBF1] text-[20px]">
                  📸
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#757575]">Instagram</span>
                <p className="mt-1 text-[18px] font-semibold text-[#222222] group-hover:text-[#E1306C] transition-colors">
                  @shilah_al_jakarti2
                </p>
              </div>
              <span className="mt-4 inline-block text-[14px] text-[#E1306C] font-medium">
                Follow Instagram &rarr;
              </span>
            </a>

            {/* 3. Super Sus Gaming Card (Short delay after Instagram) */}
            <div
              data-reveal
              className={`flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E5] text-[20px]">
                  🎮
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#757575]">Super Sus ID</span>
                <p className="mt-1 text-[20px] font-bold text-[#FF8C00]">
                  shill23
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyGameId}
                className="mt-4 inline-flex items-center justify-center rounded-lg border border-[#e0e0e0] bg-[#f9f9f9] px-3 py-2 text-[13px] font-medium text-[#444444] transition-all hover:bg-[#ececec] active:scale-95 cursor-pointer"
              >
                {copied ? '✅ ID Copied!' : '📋 Copy Game ID'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
