'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full border-b border-[#dddddd] bg-white px-6 py-16 min-[830px]:py-24"
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
            className="absolute left-1/2 top-[-8px] block w-[240px] -translate-x-1/2 bg-white text-center text-[14px] font-normal uppercase tracking-[0.2rem] text-[#757575]"
            style={{
              fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              textShadow: '0px 1px 1px #ffffff',
            }}
          >
            About Me
          </h3>
        </div>

        {/* About Bio Content: Smooth gradual paragraph reveals */}
        <div className="mx-auto max-w-[760px] text-left">
          <p
            data-reveal
            className={`mb-8 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '150ms',
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
            data-reveal
            className={`mb-8 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '300ms',
            }}
          >
            After Maghrib prayer, I usually spend my time exercising until the Isya prayer call. It’s one of the activities I enjoy because it helps me stay active while taking a break from my usual routine.
          </p>

          <p
            data-reveal
            className={`mb-0 text-[18px] leading-[1.7] text-[#333333] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '450ms',
            }}
          >
            In my free time, I also enjoy playing games and relaxing. I’m interested in technology and learning new things, especially creating websites and coding. I’m still learning, but I’m always excited to improve my skills and try something new.
          </p>
        </div>
      </div>
    </section>
  );
}
