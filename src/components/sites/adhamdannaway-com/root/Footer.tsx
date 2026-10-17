'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="relative w-full bg-[#f5f5f5] pb-10 pt-10 text-[#757575]"
      style={{
        boxShadow: 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Top Gradient with "Back to top" button */}
      <div
        className="pointer-events-none absolute left-0 top-[-50px] h-[50px] w-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), #ffffff)',
        }}
      >
        <a
          href="#top"
          onClick={scrollToTop}
          className="pointer-events-auto absolute bottom-[-40px] left-1/2 block h-[90px] w-[118px] -translate-x-1/2 text-[0px] transition-all duration-300 hover:bottom-[-35px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-[20px]"
          title="Back to top"
          aria-label="Back to top"
          style={{
            backgroundImage: 'url(/images/sprite.png)',
            backgroundPosition: '0 -217px',
            backgroundRepeat: 'no-repeat',
          }}
        >
          Back to top
        </a>
      </div>

      <div className="mx-auto max-w-[1040px] px-4 md:px-6">
        <div className="flex flex-col items-center justify-between min-[830px]:flex-row">
          {/* Copyright */}
          <div className="text-center text-[16px] min-[830px]:text-left">
            <Link
              href="/"
              className="text-[#757575] no-underline transition-colors duration-300 hover:text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              &copy; 2026 Shilah Al Jakarti
            </Link>
          </div>

          {/* Footer Navigation (Desktop) */}
          <nav id="nav-footer" aria-label="Footer navigation" className="mt-4 min-[830px]:mt-0">
            <ul
              className="flex flex-wrap items-center justify-center space-x-5 text-[16px]"
              style={{
                fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              <li>
                <Link
                  href="/about"
                  className="text-[#757575] no-underline transition-colors duration-300 hover:text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#757575] no-underline transition-colors duration-300 hover:text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#757575] no-underline transition-colors duration-300 hover:text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#757575] no-underline transition-colors duration-300 hover:text-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1"
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
