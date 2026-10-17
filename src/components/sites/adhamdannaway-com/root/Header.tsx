'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Entrance animation
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);

    // Scroll state listener for dynamic navbar elevation
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 inset-x-0 z-[1000] w-full transition-all duration-500 ease-out ${
        isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'bg-[#090909]/92 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.65)] border-b border-white/[0.1]'
          : 'bg-[#0a0a0a]/75 backdrop-blur-md border-b border-white/[0.06]'
      }`}
    >
      <div className="mx-auto flex h-[64px] min-[830px]:h-[76px] max-w-[1240px] items-center justify-between px-5 min-[830px]:px-8">
        {/* 1. Left: Brand Identity (Luxury Monogram Emblem & Typography) */}
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline transition-all duration-300"
          title="Shilah Al Jakarti Portfolio"
        >
          {/* Custom Crafted Dark Luxury Emblem Badge */}
          <div className="relative flex h-[38px] w-[38px] min-[830px]:h-[44px] min-[830px]:w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#222222] via-[#161616] to-[#0c0c0c] p-1.5 border border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 active:scale-95">
            <div className="relative h-full w-full">
              <Image
                src="/images/logo-sa-white.png"
                alt="SA Monogram"
                fill
                priority
                sizes="(min-width: 830px) 44px, 38px"
                className="object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>

          {/* Name & Subtitle Brand Signature */}
          <div className="flex flex-col text-left">
            <span
              className="text-[14px] min-[830px]:text-[15px] font-bold tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-neutral-200 leading-tight"
              style={{
                fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Shilah Al Jakarti
            </span>
            <span className="hidden min-[480px]:inline-block font-mono text-[9px] tracking-[0.22em] uppercase text-neutral-400 leading-tight mt-0.5">
              Portfolio
            </span>
          </div>
        </Link>

        {/* 2. Middle/Right: Desktop Navigation Menu */}
        <nav className="hidden items-center min-[830px]:flex">
          <ul className="flex items-center gap-1.5 rounded-full bg-white/[0.04] p-1.5 border border-white/[0.07] backdrop-blur-sm shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative block px-4 py-1.5 rounded-full text-[13px] min-[1024px]:text-[14px] font-medium tracking-[0.04em] transition-all duration-300 ease-out ${
                      isActive
                        ? 'text-white font-semibold bg-white/[0.12] shadow-sm'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                    style={{
                      fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-[14px] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-white shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Vertical Divider */}
          <div className="mx-4 h-5 w-[1px] bg-white/[0.12]" />

          {/* Social Icon Buttons (WhatsApp, Instagram, Super Sus) */}
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285117215840"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (085117215840)"
              className="group flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.09] text-neutral-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 hover:text-[#25D366] hover:shadow-[0_0_12px_rgba(37,211,102,0.25)] active:scale-95"
            >
              <WhatsAppIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/shilah_al_jakarti2"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @shilah_al_jakarti2"
              className="group flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.09] text-neutral-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#E1306C]/15 hover:border-[#E1306C]/40 hover:text-[#E1306C] hover:shadow-[0_0_12px_rgba(225,48,108,0.25)] active:scale-95"
            >
              <InstagramIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">Instagram</span>
            </a>

            {/* Super Sus */}
            <Link
              href="/contact"
              title="Super Sus Gamer (ID: shill23)"
              className="group flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.09] text-neutral-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#FF8C00]/15 hover:border-[#FF8C00]/40 hover:text-[#FF8C00] hover:shadow-[0_0_12px_rgba(255,140,0,0.25)] active:scale-95"
            >
              <SuperSusIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">Super Sus ID</span>
            </Link>
          </div>
        </nav>

        {/* 3. Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMobileMenuOpen}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.1] text-white transition-all duration-300 hover:bg-white/[0.12] active:scale-95 min-[830px]:hidden cursor-pointer"
        >
          <div className="flex h-3.5 w-4.5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-200 ease-out ${
                isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* 4. Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-[999] border-b border-white/[0.1] bg-[#0c0c0c]/95 px-6 py-6 backdrop-blur-2xl shadow-2xl min-[830px]:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium transition-all duration-200 active:scale-98 ${
                    isActive
                      ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.15]'
                      : 'text-neutral-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                  style={{
                    fontFamily: '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Drawer Social Links */}
          <div className="mt-6 pt-5 border-t border-white/[0.08]">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3 text-center">
              Connect With Me
            </p>
            <div className="flex items-center justify-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6285117215840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#25D366]/20 hover:border-[#25D366]/50 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shilah_al_jakarti2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 active:scale-95"
              >
                <InstagramIcon className="h-4 w-4 text-[#E1306C]" />
                <span>Instagram</span>
              </a>

              {/* Super Sus */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#FF8C00]/20 hover:border-[#FF8C00]/50 active:scale-95"
              >
                <SuperSusIcon className="h-4 w-4 text-[#FF8C00]" />
                <span>Super Sus</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
