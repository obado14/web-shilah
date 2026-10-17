'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.507 14.307l-.009.075c-.338.908-1.558 1.636-2.483 1.834-.632.136-1.46.248-4.22-.897-3.529-1.465-5.807-5.048-5.983-5.281-.176-.233-1.436-1.91-1.436-3.644 0-1.734.908-2.588 1.232-2.94.324-.352.708-.44.944-.44.236 0 .472.002.678.013.22.011.513-.083.803.613.3.722 1.025 2.502 1.113 2.682.088.18.147.39.029.626-.118.236-.176.383-.352.59-.176.207-.37.463-.528.621-.176.176-.36.368-.155.72.205.352.912 1.503 1.956 2.433 1.343 1.196 2.476 1.567 2.828 1.743.352.176.558.147.764-.088.206-.235.882-1.027 1.117-1.379.235-.352.47-.294.793-.176.323.118 2.057.97 2.41 1.146.353.176.588.264.676.411.088.147.088.852-.25 1.76zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.408C8.423 21.498 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function SuperSusIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Astronaut Visor / Gaming Helmet */}
      <path d="M12 2C7.03 2 3 6.03 3 11v5c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4v-5c0-4.97-4.03-9-9-9zm-6 9c0-1.66 1.34-3 3-3h6c1.66 0 3 1.34 3 3s-1.34 3-3 3H9c-1.66 0-3-1.34-3-3zm1 7c-.55 0-1-.45-1-1v-1.2c.62.13 1.28.2 2 .2h8c.72 0 1.38-.07 2-.2V17c0 .55-.45 1-1 1H7z" />
      <path d="M8.5 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1z" opacity="0.75" />
    </svg>
  );
}

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
      className={`absolute left-0 right-0 top-0 z-[1000] w-full bg-[#111111]/85 backdrop-blur-md border-b border-white/10 transition-all duration-1000 ease-out ${
        isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[1040px] px-4 md:px-6">
        <div className="flex h-[62px] items-center justify-between min-[830px]:h-[92px]">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center transition-opacity duration-300 hover:opacity-85"
            title="Shilah Al Jakarti"
          >
            <div className="relative h-[38px] w-[38px] min-[830px]:h-[46px] min-[830px]:w-[46px] overflow-hidden rounded-[8px] bg-white shadow-md transition-transform duration-300 ease-out group-hover:scale-105 active:scale-95">
              <Image
                src="/images/logo-sa.png"
                alt="Shilah Al Jakarti Logo"
                fill
                priority
                sizes="(min-width: 830px) 46px, 38px"
                className="object-contain"
              />
            </div>
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
                <ul className="flex items-center space-x-2.5">
                  {/* WhatsApp */}
                  <li>
                    <a
                      href="https://wa.me/6285117215840"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp (085117215840)"
                      className="group flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#25D366] hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <WhatsAppIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-105" />
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </li>

                  {/* Instagram */}
                  <li>
                    <a
                      href="https://www.instagram.com/shilah_al_jakarti2"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram @shilah_al_jakarti2"
                      className="group flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E1306C] hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <InstagramIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-105" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>

                  {/* Super Sus */}
                  <li>
                    <Link
                      href="/contact"
                      title="Super Sus (ID: shill23)"
                      className="group flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FF8C00] hover:scale-110 active:scale-95 shadow-sm"
                    >
                      <SuperSusIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-105" />
                      <span className="sr-only">Super Sus ID</span>
                    </Link>
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
            <li className="py-5">
              <div className="flex items-center justify-center space-x-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285117215840"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#25D366] active:scale-95"
                >
                  <WhatsAppIcon className="h-[20px] w-[20px]" />
                  <span className="sr-only">WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shilah_al_jakarti2"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E1306C] active:scale-95"
                >
                  <InstagramIcon className="h-[20px] w-[20px]" />
                  <span className="sr-only">Instagram</span>
                </a>

                {/* Super Sus */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  title="Super Sus (ID: shill23)"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FF8C00] active:scale-95"
                >
                  <SuperSusIcon className="h-[20px] w-[20px]" />
                  <span className="sr-only">Super Sus ID</span>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
