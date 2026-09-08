'use client';

import React from 'react';

export function BlogSection() {
  return (
    <section id="blog" className="relative w-full border-b border-[#dddddd] bg-white px-6 py-16 min-[830px]:py-24">
      <div className="mx-auto max-w-[1040px]">
        {/* Centered Section Header with Line */}
        <div className="relative mb-12 h-[1px] border-b border-white bg-[#dddddd]">
          <h3
            className="absolute left-1/2 top-[-8px] block w-[240px] -translate-x-1/2 bg-white text-center text-[14px] font-normal uppercase tracking-[0.2rem] text-[#757575]"
            style={{
              fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textShadow: '0px 1px 1px #ffffff',
            }}
          >
            Blog
          </h3>
        </div>

        {/* Blog Article Container */}
        <article className="mx-auto max-w-[760px] rounded-[16px] border border-[#e8e8e8] bg-[#fafafa] p-6 shadow-[0_1px_4px_0px_rgba(0,0,0,0.06)] min-[830px]:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full bg-[#111111] px-3 py-1 text-[12px] font-medium text-white"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Technology & Learning
            </span>
            <span className="text-[14px] text-[#888888]">Maret 2026</span>
          </div>

          <h2
            className="mb-4 text-[26px] font-normal leading-[1.3] text-[#222222] min-[830px]:text-[32px]"
            style={{
              fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Pengalaman Pertama Kali Belajar Bikin Website Pakai Bantuan AI
          </h2>

          <div
            className="space-y-5 text-[17px] leading-[1.75] text-[#444444] min-[830px]:text-[19px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <p>
              Sebagai anak SMA yang kesehariannya cukup simpel—mulai dari sekolah, ibadah, istirahat, olahraga rutin setelah Maghrib, dan sesekali santai push rank main <strong>Super Sus</strong>—dunia pemrograman awalnya berasa asing dan rumit banget di mata saya.
            </p>

            <p>
              Tapi belakangan ini saya mulai tertarik dengan dunia teknologi, terutama cara kerja website. Ketika mendengar soal AI yang bisa membantu coding dan pengembangan web, rasa penasaran saya langsung muncul. Akhirnya saya putuskan untuk langsung mencoba belajar membuat website sendiri.
            </p>

            <p>
              Ternyata prosesnya seru banget! Bareng AI, saya belajar memahami konsep dasar Next.js, bagaimana cara menata tampilan dengan Tailwind CSS, sampai menerapkan efek interaktif split-face yang responsif. AI bukan sekadar menulis kode buat saya, tapi jadi teman diskusi yang menjelaskan fungsi tiap komponen ketika saya menemui error atau bingung mengatur tata letak.
            </p>

            <p>
              Bisa melihat website buatan sendiri berhasil di-compile, di-push ke GitHub, dan live di internet memberikan kepuasan tersendiri. Saya sadar perjalanan belajar saya masih panjang dan masih pemula, tapi ini adalah langkah awal yang bikin saya makin bersemangat untuk terus mengasah skill dan menciptakan karya-karya baru ke depannya!
            </p>
          </div>

          <div className="mt-8 border-t border-[#e0e0e0] pt-4 text-right">
            <span className="text-[14px] italic text-[#757575]">— Ditulis oleh Shilah Al Jakarti</span>
          </div>
        </article>
      </div>
    </section>
  );
}
