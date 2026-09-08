'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortfolioCard } from '@/types/portfolio';

const portfolioItems: PortfolioCard[] = [
  {
    id: 'figma-design-system',
    title: 'My Figma design system',
    category: 'Design system',
    imageSrc: '/images/feature-figma-design-system.webp',
    href: '#',
    altText: 'Figma design system',
  },
  {
    id: 'ui-design-book',
    title: 'My UI design book',
    category: 'Book',
    imageSrc: '/images/feature-ui-design-book.webp',
    href: '#',
    altText: 'UI design book',
  },
  {
    id: 'creating-a-lean-design-system',
    title: 'Creating a lean design system',
    category: 'Design system',
    imageSrc: '/images/feature-william-hill-design-system.jpg',
    href: '#',
    altText: 'Creating a lean design system',
  },
];

export function PortfolioThumbs() {
  return (
    <section
      className="relative w-full border-b border-[#dddddd] bg-[#fafafa] px-4 py-16 min-[830px]:py-24"
      style={{
        boxShadow: 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="mx-auto max-w-[1040px]">
        <div id="content-detail">
          {/* Centered Header with Divider Line */}
          <div className="relative mb-8 h-[1px] border-b border-white bg-[#dddddd]">
            <h3
              className="absolute left-1/2 top-[-8px] block w-[320px] -translate-x-1/2 bg-[#fafafa] text-center text-[14px] font-normal uppercase tracking-[0.2rem] text-[#757575]"
              style={{
                fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                textShadow: '0px 1px 1px #ffffff',
              }}
            >
              Some of my latest work
            </h3>
          </div>

          {/* Thumbnails Grid */}
          <ul id="thumbs" className="grid grid-cols-1 gap-8 min-[630px]:grid-cols-2 min-[830px]:grid-cols-3">
            {portfolioItems.map((item) => (
              <li
                key={item.id}
                className="group relative rounded-[12px] bg-white p-[5%] shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] min-[630px]:p-[1.666%] min-[830px]:p-[0.769%]"
              >
                <Link
                  href={item.href}
                  className="block no-underline"
                >
                  <div className="relative overflow-hidden rounded-[8px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.altText}
                      width={628}
                      height={368}
                      className="block h-auto w-full rounded-[8px]"
                    />
                  </div>

                  <div className="relative overflow-hidden px-4 py-4 min-[1140px]:pr-10">
                    {/* Hover Arrow Indicator (Desktop) */}
                    <span
                      className="pointer-events-none absolute right-[10px] top-[24px] hidden h-[32px] w-[32px] opacity-0 transition-all duration-500 ease-out group-hover:right-0 group-hover:opacity-100 min-[1140px]:block"
                      style={{
                        backgroundImage: 'url(/images/sprite.png)',
                        backgroundPosition: '-63px -107px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />

                    <h4
                      className="mb-1 truncate text-[18px] font-normal leading-[1.2] text-[#333333]"
                      style={{
                        fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="m-0 truncate text-[16px] leading-[1.2] text-[#757575]"
                      style={{
                        fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
