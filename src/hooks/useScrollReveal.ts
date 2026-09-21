'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for smooth, performant scroll-reveal animations using Intersection Observer.
 * Respects prefers-reduced-motion and gracefully degrades when JavaScript or IO is unavailable.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Fallback if IntersectionObserver is unsupported in the current environment
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    // 2. Accessibility: immediately reveal without motion if prefers-reduced-motion is active
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
