'use client';

import React, { useState } from 'react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyGameId = () => {
    navigator.clipboard.writeText('shill23');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full border-b border-[#dddddd] bg-[#fafafa] px-6 py-16 min-[830px]:py-24">
      <div className="mx-auto max-w-[1040px]">
        {/* Centered Section Header with Line */}
        <div className="relative mb-12 h-[1px] border-b border-white bg-[#dddddd]">
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
          <h2
            className="mb-4 text-[32px] font-normal text-[#222222] min-[830px]:text-[40px]"
            style={{
              fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Let&apos;s Connect &amp; Mabar!
          </h2>
          <p
            className="mb-10 text-[18px] leading-[1.6] text-[#757575] min-[830px]:text-[20px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Punya pertanyaan seputar web atau sekadar ingin menyapa? Silakan hubungi saya melalui kontak di bawah, atau add akun Super Sus kalau mau main bareng!
          </p>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 gap-6 text-left min-[720px]:grid-cols-3">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/6285117215840"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-[0_4px_12px_rgba(37,211,102,0.15)] no-underline"
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
                Chat di WhatsApp &rarr;
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/shilah_al_jakarti2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C] hover:shadow-[0_4px_12px_rgba(225,48,108,0.15)] no-underline"
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

            {/* Super Sus Gaming Card */}
            <div className="flex flex-col justify-between rounded-[14px] border border-[#e2e2e2] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300">
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
                {copied ? '✅ ID Tersalin!' : '📋 Salin ID Mabar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
