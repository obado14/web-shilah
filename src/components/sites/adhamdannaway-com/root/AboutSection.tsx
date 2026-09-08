'use client';

import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="relative w-full border-b border-[#dddddd] bg-white px-6 py-16 min-[830px]:py-24">
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
            About Me
          </h3>
        </div>

        {/* About Bio Content */}
        <div className="mx-auto max-w-[760px] text-left">
          <p
            className="mb-8 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Hi! I’m a high school student who enjoys spending my free time playing games, especially{' '}
            <strong
              className="font-semibold text-[#111111]"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Super Sus
            </strong>
            . My daily life is pretty simple—eating, praying, sleeping, playing games, and studying when there’s something to study.
          </p>

          <p
            className="mb-8 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            After Maghrib prayer, I usually spend my time exercising until the Isya prayer call. It’s one of the activities I enjoy because it helps me stay active while taking a break from my usual routine.
          </p>

          <p
            className="mb-0 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            In my free time, I also enjoy playing games and relaxing. I’m interested in technology and learning new things, especially creating websites and coding. I’m still learning, but I’m always excited to improve my skills and try something new.
          </p>
        </div>
      </div>
    </section>
  );
}
