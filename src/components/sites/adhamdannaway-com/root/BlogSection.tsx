'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function BlogSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="blog"
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
            Blog
          </h3>
        </div>

        {/* Blog Article Card: Smooth slide-up with enhanced reading ergonomics */}
        <article
          data-reveal
          className={`mx-auto max-w-[780px] rounded-[20px] border border-[#e5e5e5] bg-[#fafafa] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.05)] min-[830px]:p-11 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Article Cover Banner (Editorial Tech Aesthetic) */}
          <div className="mb-8 overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-[#18181b] via-[#111113] to-[#09090b] p-6 text-white shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-mono tracking-wider text-emerald-400 uppercase">
                  First Step in Coding
                </span>
              </div>
              <span className="text-[12px] font-mono text-neutral-400">Next.js &bull; Tailwind &bull; AI</span>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">Article Subject</p>
                <p className="text-[17px] font-semibold text-white tracking-tight mt-0.5">Building Websites with AI Pair Programming</p>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-[24px]">
                🚀
              </div>
            </div>
          </div>

          {/* Metadata Row */}
          <div
            data-reveal
            className={`mb-4 flex flex-wrap items-center gap-3 transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <span
              className="rounded-full bg-[#111111] px-3.5 py-1 text-[12px] font-semibold text-white tracking-wide shadow-sm"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Technology &amp; Learning
            </span>
            <span className="text-[13.5px] text-[#777777] font-medium">March 2026</span>
            <span className="text-[13.5px] text-[#aaaaaa]">&bull;</span>
            <span className="text-[13.5px] text-[#777777] font-medium">⏱️ 3 min read</span>
          </div>

          {/* Article Title */}
          <h2
            data-reveal
            className={`mb-6 text-[27px] font-normal leading-[1.3] text-[#1a1a1a] min-[830px]:text-[34px] tracking-tight transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '320ms',
            }}
          >
            My First Experience Learning to Build a Website with AI Assistance
          </h2>

          {/* Body Paragraphs: Optimized line-height and contrast */}
          <div
            data-reveal
            className={`space-y-6 text-[18px] leading-[1.85] text-[#333333] min-[830px]:text-[19.5px] transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              transitionDelay: '400ms',
            }}
          >
            <p>
              As a high school student with a fairly simple daily routine—going to school, worshipping, resting, exercising regularly after Maghrib, and occasionally relaxing by pushing rank in <strong>Super Sus</strong>—the world of programming initially felt very unfamiliar and complicated to me.
            </p>

            <p>
              However, lately I&apos;ve become interested in technology, especially in how websites work. When I heard about AI that could help with coding and web development, my curiosity immediately grew. So, I decided to start learning how to build my own website.
            </p>

            <p>
              It turned out to be a really fun experience! With the help of AI, I learned the basics of Next.js, how to organize designs using Tailwind CSS, and how to implement responsive interactive effects such as a split-face effect. AI wasn&apos;t just writing code for me—it became a discussion partner that helped explain what each component did whenever I encountered an error or had trouble arranging the layout.
            </p>

            <p>
              Being able to see my own website successfully compile, get pushed to GitHub, and go live on the internet gave me a great sense of satisfaction. I realize that I still have a long way to go and that I&apos;m still a beginner, but this is a first step that has made me even more excited to keep improving my skills and creating new projects in the future!
            </p>
          </div>

          {/* Signature */}
          <div
            data-reveal
            className={`mt-10 border-t border-[#e2e2e2] pt-5 text-right transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{ transitionDelay: '520ms' }}
          >
            <span className="text-[14.5px] italic text-[#666666] font-medium">— Written by Shilah Al Jakarti</span>
          </div>
        </article>
      </div>
    </section>
  );
}
