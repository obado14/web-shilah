'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Entrance animation
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      id="header"
      className={`absolute left-0 right-0 top-0 z-[1000] w-full bg-[#111111] transition-all duration-1000 ease-out ${
        isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[1040px] px-4 md:px-6">
        <div className="flex h-[62px] items-center justify-between min-[830px]:h-[92px]">
          {/* Logo */}
          <Link
            href="/"
            className="block text-[0px] leading-[0] opacity-100 transition-opacity duration-300 hover:opacity-50"
            title="Shilah Al Jakarti"
          >
            {/* Desktop Logo */}
            <span
              className="hidden h-[92px] w-[62px] min-[830px]:inline-block"
              style={{
                backgroundImage: 'url(/images/sprite.png)',
                backgroundPosition: '0px -93px',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Shilah Al Jakarti
            </span>
            {/* Mobile Logo */}
            <span
              className="inline-block h-[62px] w-[40px] min-[830px]:hidden"
              style={{
                backgroundImage: 'url(/images/sprite-mobile.png)',
                backgroundPosition: '0px -63px',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Shilah Al Jakarti
            </span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            className={`block h-[62px] w-[27px] text-[0px] transition-opacity duration-300 min-[830px]:hidden ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-100'
            }`}
            style={{
              backgroundImage: 'url(/images/sprite-mobile.png)',
              backgroundPosition: '-42px -63px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            navigation
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center min-[830px]:flex">
            <ul className="flex items-center space-x-1" style={{ fontFamily: 'var(--font-sans, "proxima nova light", sans-serif)' }}>
              <li>
                <Link
                  href="/about"
                  className="block px-4 text-[18px] leading-[92px] text-white transition-colors duration-300 hover:text-[#757575]"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-ui-design"
                  className="block px-4 text-[18px] leading-[92px] text-white transition-colors duration-300 hover:text-[#757575]"
                >
                  learn
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block px-4 text-[18px] leading-[92px] text-white transition-colors duration-300 hover:text-[#757575]"
                >
                  portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-4 text-[18px] leading-[92px] text-white transition-colors duration-300 hover:text-[#757575]"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 text-[18px] leading-[92px] text-white transition-colors duration-300 hover:text-[#757575]"
                >
                  contact
                </Link>
              </li>

              {/* Social Icons */}
              <li className="pl-6">
                <ul className="flex items-center space-x-3">
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      className="block h-[32px] w-[32px] text-[0px] opacity-100 transition-opacity duration-300 hover:opacity-50"
                      style={{
                        backgroundImage: 'url(/images/sprite.png)',
                        backgroundPosition: '-32px -186px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      className="block h-[32px] w-[32px] text-[0px] opacity-100 transition-opacity duration-300 hover:opacity-50"
                      style={{
                        backgroundImage: 'url(/images/sprite.png)',
                        backgroundPosition: '-96px -186px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                      className="block h-[32px] w-[32px] text-[0px] opacity-100 transition-opacity duration-300 hover:opacity-50"
                      style={{
                        backgroundImage: 'url(/images/sprite.png)',
                        backgroundPosition: '0px -186px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      className="block h-[32px] w-[32px] text-[0px] opacity-100 transition-opacity duration-300 hover:opacity-50"
                      style={{
                        backgroundImage: 'url(/images/sprite.png)',
                        backgroundPosition: '-163px -186px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      instagram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav className="w-full border-t border-[#212121] bg-[#222222] text-center min-[830px]:hidden">
          <ul className="text-[24px]">
            <li className="border-b border-[#363636] border-t border-[#212121] leading-[64px]">
              <Link href="/about" className="block text-white lowercase">
                about
              </Link>
            </li>
            <li className="border-b border-[#363636] border-t border-[#212121] leading-[64px]">
              <Link href="/learn-ui-design" className="block text-white lowercase">
                learn
              </Link>
            </li>
            <li className="border-b border-[#363636] border-t border-[#212121] leading-[64px]">
              <Link href="/portfolio" className="block text-white lowercase">
                portfolio
              </Link>
            </li>
            <li className="border-b border-[#363636] border-t border-[#212121] leading-[64px]">
              <Link href="/blog" className="block text-white lowercase">
                blog
              </Link>
            </li>
            <li className="border-b border-[#363636] border-t border-[#212121] leading-[64px]">
              <Link href="/contact" className="block text-white lowercase">
                contact
              </Link>
            </li>
            <li className="py-4">
              <ul className="flex items-center justify-center space-x-4">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="inline-block h-[32px] w-[32px] text-[0px]"
                    style={{
                      backgroundImage: 'url(/images/sprite.png)',
                      backgroundPosition: '-32px -186px',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="inline-block h-[32px] w-[32px] text-[0px]"
                    style={{
                      backgroundImage: 'url(/images/sprite.png)',
                      backgroundPosition: '-96px -186px',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="inline-block h-[32px] w-[32px] text-[0px]"
                    style={{
                      backgroundImage: 'url(/images/sprite.png)',
                      backgroundPosition: '0px -186px',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="inline-block h-[32px] w-[32px] text-[0px]"
                    style={{
                      backgroundImage: 'url(/images/sprite.png)',
                      backgroundPosition: '-163px -186px',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    instagram
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
