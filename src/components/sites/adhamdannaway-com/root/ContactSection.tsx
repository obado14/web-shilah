'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const handleCopyGameId = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('shill23');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = 'shill23';
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
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
        <div className="mx-auto max-w-[700px] text-center">
          {/* Main Heading: Fade-in and slide-up */}
          <h2
            data-reveal
            className={`mb-4 text-[32px] font-normal text-[#222222] min-[830px]:text-[42px] tracking-tight transition-all duration-700 ease-out ${
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
            className={`mb-10 text-[18px] leading-[1.65] text-[#666666] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '200ms',
            }}
          >
            Have a question about web development or just want to say hi? Feel free to reach out via the contacts below, or add my Super Sus account if you want to play together!
          </p>

          {/* Contact Cards Grid: Sequential short-delay stagger & equal height */}
          <div className="grid grid-cols-1 gap-6 text-left min-[720px]:grid-cols-3">
            {/* 1. WhatsApp Card */}
            <a
              data-reveal
              href="https://wa.me/6285117215840"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between h-full rounded-[16px] border border-[#e2e2e2] bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#25D366] hover:shadow-[0_8px_20px_rgba(37,211,102,0.18)] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none no-underline ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F8EE] text-[22px] transition-transform duration-300 group-hover:scale-110">
                  💬
                </div>
                <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#757575]">WhatsApp</span>
                <p className="mt-1 text-[19px] font-bold text-[#222222] group-hover:text-[#25D366] transition-colors">
                  085117215840
                </p>
                <p className="mt-1 text-[13px] text-neutral-500">Quick direct message</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] text-[#25D366] font-semibold">
                Chat on WhatsApp &rarr;
              </span>
            </a>

            {/* 2. Instagram Card */}
            <a
              data-reveal
              href="https://www.instagram.com/shilah_al_jakarti2"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between h-full rounded-[16px] border border-[#e2e2e2] bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#E1306C] hover:shadow-[0_8px_20px_rgba(225,48,108,0.18)] focus-visible:ring-2 focus-visible:ring-[#E1306C] focus-visible:outline-none no-underline ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '380ms' }}
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCEBF1] text-[22px] transition-transform duration-300 group-hover:scale-110">
                  📸
                </div>
                <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#757575]">Instagram</span>
                <p className="mt-1 text-[19px] font-bold text-[#222222] group-hover:text-[#E1306C] transition-colors">
                  @shilah_al_jakarti2
                </p>
                <p className="mt-1 text-[13px] text-neutral-500">Personal social updates</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] text-[#E1306C] font-semibold">
                Follow Instagram &rarr;
              </span>
            </a>

            {/* 3. Super Sus Gaming Card */}
            <div
              data-reveal
              className={`flex flex-col justify-between h-full rounded-[16px] border border-[#e2e2e2] bg-white p-6 shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#FF8C00] hover:shadow-[0_8px_20px_rgba(255,140,0,0.18)] ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: '480ms' }}
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4E5] text-[22px]">
                  🎮
                </div>
                <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#757575]">Super Sus ID</span>
                <p className="mt-1 text-[21px] font-bold text-[#FF8C00]">
                  shill23
                </p>
                <p className="mt-1 text-[13px] text-neutral-500">Add me in-game to play</p>
              </div>
              <button
                type="button"
                onClick={handleCopyGameId}
                aria-label="Copy Super Sus game ID shill23"
                className={`mt-5 w-full inline-flex items-center justify-center rounded-xl border px-3.5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                  copied
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                    : 'border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-400'
                }`}
              >
                {copied ? '✅ ID Copied to Clipboard!' : '📋 Copy Game ID'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
