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
            <span className="text-[14px] text-[#888888]">March 2026</span>
          </div>

          <h2
            className="mb-4 text-[26px] font-normal leading-[1.3] text-[#222222] min-[830px]:text-[32px]"
            style={{
              fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            My First Experience Learning to Build a Website with AI Assistance
          </h2>

          <div
            className="space-y-5 text-[17px] leading-[1.75] text-[#444444] min-[830px]:text-[19px]"
            style={{
              fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
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

          <div className="mt-8 border-t border-[#e0e0e0] pt-4 text-right">
            <span className="text-[14px] italic text-[#757575]">— Written by Shilah Al Jakarti</span>
          </div>
        </article>
      </div>
    </section>
  );
}
