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

        {/* About Bio Content: Balanced max-width, comfortable line-height & font sizing */}
        <div className="mx-auto max-w-[780px] text-left">
          <p
            data-reveal
            className={`mb-7 text-[18px] leading-[1.8] text-[#2c2c2c] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
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
            className={`mb-7 text-[18px] leading-[1.8] text-[#2c2c2c] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '280ms',
            }}
          >
            After Maghrib prayer, I usually spend my time exercising until the Isya prayer call. It’s one of the activities I enjoy because it helps me stay active while taking a break from my usual routine.
          </p>

          <p
            data-reveal
            className={`mb-0 text-[18px] leading-[1.8] text-[#2c2c2c] min-[830px]:text-[20px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '400ms',
            }}
          >
            In my free time, I also enjoy playing games and relaxing. I’m interested in technology and learning new things, especially creating websites and coding. I’m still learning, but I’m always excited to improve my skills and try something new.
          </p>

          {/* Meaningful Visual Pillar Cards: Supporting text content with zero clutter */}
          <div
            data-reveal
            className={`mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '520ms' }}
          >
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 rounded-xl border border-neutral-200/90 bg-[#fafafa] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[22px]">
                🏃‍♂️
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Daily Habit</p>
                <p className="text-[14px] font-semibold text-neutral-900 leading-snug">Post-Maghrib Workout</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 rounded-xl border border-neutral-200/90 bg-[#fafafa] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[22px]">
                🎮
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Gaming</p>
                <p className="text-[14px] font-semibold text-neutral-900 leading-snug">Super Sus (shill23)</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 rounded-xl border border-neutral-200/90 bg-[#fafafa] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[22px]">
                ⚡
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Learning</p>
                <p className="text-[14px] font-semibold text-neutral-900 leading-snug">Web Dev with AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
