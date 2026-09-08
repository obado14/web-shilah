'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroFace() {
  const faceRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // xp represents the split x position (center is 520 out of 1040)
  const [xp, setXp] = useState<number>(520);
  const targetXp = useRef<number>(520);
  const isHovered = useRef<boolean>(false);
  const animFrameId = useRef<number | null>(null);

  // Initial load animation state
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation loop using requestAnimationFrame for smooth spring damping
  const updatePhysicsRef = useRef<() => void>(() => {});

  useEffect(() => {
    function loop() {
      setXp((prev) => {
        const diff = targetXp.current - prev;
        if (Math.abs(diff) < 0.1) {
          if (!isHovered.current && prev === 520) {
            animFrameId.current = null;
            return 520;
          }
          if (!isHovered.current) {
            return 520;
          }
        }
        return prev + diff / 12;
      });

      animFrameId.current = requestAnimationFrame(loop);
    }

    updatePhysicsRef.current = loop;

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!faceRef.current) return;
    const rect = faceRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    // Bound relX between 0 and 1040
    targetXp.current = Math.max(0, Math.min(1040, relX));

    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    targetXp.current = 520;
    if (!animFrameId.current) {
      animFrameId.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  // Calculate dynamic properties matching original formula:
  // designerImg: width: 420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1
  // coderImg: width: 420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1
  // designerBg: left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp) / 520)
  // coderBg: right: 100 + (xp - 520) * 0.05, opacity: (xp / 520)
  // designerDesc: opacity: ((1040 - xp) / 520)
  // coderDesc: opacity: (xp / 520)
  const designerImgWidth = 420 + (520 - xp) * 0.5;
  const designerImgLeft = 100 + (520 - xp) * 0.1;

  const coderImgWidth = 420 + (xp - 520) * 0.5;
  const coderImgRight = 100 - (520 - xp) * 0.1;

  const designerBgLeft = 100 + (520 - xp) * 0.05;
  const designerBgOpacity = Math.max(0, Math.min(1, (1040 - xp) / 520));

  const coderBgRight = 100 + (xp - 520) * 0.05;
  const coderBgOpacity = Math.max(0, Math.min(1, xp / 520));

  const designerDescOpacity = Math.max(0, Math.min(1, (1040 - xp) / 520));
  const coderDescOpacity = Math.max(0, Math.min(1, xp / 520));

  return (
    <section
      id="section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-t border-white bg-white pt-[62px] min-[830px]:pt-[92px]"
      style={{
        borderBottom: '#dddddd solid 1px',
      }}
    >
      <div className="mx-auto max-w-[1040px] px-0">
        <div className="relative w-full">
          {/* Main Face Container */}
          <div
            id="face"
            ref={faceRef}
            className="relative mx-auto w-full min-[1140px]:h-[600px] min-[1140px]:w-[1040px]"
          >
            {/* Left Half Link: Designer */}
            <Link
              href="/portfolio"
              className="group absolute bottom-0 left-0 top-0 z-10 block h-[20%] w-[40%] text-[#757575] no-underline min-[768px]:h-[44%] min-[768px]:w-[30%] min-[900px]:w-[32%] min-[1024px]:w-[30%] min-[1140px]:h-[600px] min-[1140px]:w-[520px]"
              style={{
                margin: 'auto 0',
              }}
            >
              <div
                id="designer"
                className="h-full w-full"
              >
                <div
                  id="designer-desc"
                  className="px-4 text-left transition-opacity duration-300 min-[1140px]:absolute min-[1140px]:left-0 min-[1140px]:top-[180px] min-[1140px]:w-[290px] min-[1140px]:px-0"
                  style={{ opacity: designerDescOpacity }}
                >
                  <h1
                    className="m-0 text-[22px] font-normal leading-[1.1] tracking-[-0.06em] text-[#333333] transition-colors group-hover:text-[#757575] min-[375px]:text-[26px] min-[414px]:text-[30px] min-[500px]:text-[36px] min-[600px]:text-[46px] min-[768px]:text-[56px] min-[900px]:text-[64px] min-[1024px]:text-[72px] min-[1140px]:text-[82px]"
                    style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    designer
                  </h1>
                  <p
                    className="hidden text-[#757575] min-[768px]:mt-2 min-[768px]:block min-[768px]:text-[16px] min-[1024px]:text-[18px] min-[1024px]:leading-[1.4]"
                    style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Product designer specialising in UI design and design systems.
                  </p>
                </div>
              </div>
            </Link>

            {/* Right Half Link: Coder */}
            <Link
              href="/about"
              className="group absolute bottom-0 right-0 top-0 z-10 block h-[20%] w-[40%] text-right text-[#757575] no-underline min-[768px]:h-[44%] min-[768px]:w-[30%] min-[900px]:w-[32%] min-[1024px]:w-[30%] min-[1140px]:h-[600px] min-[1140px]:w-[520px] min-[1140px]:text-left"
              style={{
                margin: 'auto 0',
              }}
            >
              <div
                id="coder"
                className="h-full w-full"
              >
                <div
                  id="coder-desc"
                  className="px-4 text-right transition-opacity duration-300 min-[1140px]:absolute min-[1140px]:right-0 min-[1140px]:top-[180px] min-[1140px]:w-[290px] min-[1140px]:px-0 min-[1140px]:text-left"
                  style={{ opacity: coderDescOpacity }}
                >
                  <h1
                    className="m-0 text-[22px] font-normal leading-[1.1] tracking-[-0.06em] text-[#333333] transition-colors group-hover:text-[#757575] min-[375px]:text-[26px] min-[414px]:text-[30px] min-[500px]:text-[36px] min-[600px]:text-[46px] min-[768px]:text-[56px] min-[900px]:text-[64px] min-[1024px]:text-[72px] min-[1140px]:text-[82px]"
                    style={{ fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    <span className="pr-[0.1em] leading-none">&lt;</span>coder<span className="pl-[0.14em] leading-none">&gt;</span>
                  </h1>
                  <p
                    className="hidden text-[#757575] min-[768px]:mt-2 min-[768px]:block min-[768px]:text-[16px] min-[1024px]:text-[18px] min-[1024px]:leading-[1.4]"
                    style={{ fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Front end developer who writes clean, elegant and efficient code.
                  </p>
                </div>
              </div>
            </Link>

            {/* Responsive Fallback Portrait (< 1140px) */}
            <div className="relative mx-auto block w-full max-w-[1040px] min-[1140px]:hidden">
              <Image
                id="face-img"
                src="/images/adham-dannaway-designer-coder.jpg"
                alt="Adham Dannaway UI designer"
                width={1040}
                height={600}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* Desktop Dynamic Interactive Split Face Layers (>= 1140px) */}
            <div className="hidden min-[1140px]:block">
              {/* Designer Image Layer */}
              <div
                id="designer-img"
                className={`pointer-events-none absolute top-0 z-[1] h-[600px] transition-opacity duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: 'url(/images/sprite-home.png)',
                  backgroundPosition: '0px -600px',
                  backgroundRepeat: 'no-repeat',
                  width: `${designerImgWidth}px`,
                  left: `${designerImgLeft}px`,
                  overflow: 'hidden',
                }}
              />

              {/* Coder Image Layer */}
              <div
                id="coder-img"
                className={`pointer-events-none absolute top-0 z-[1] h-[600px] transition-opacity duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: 'url(/images/sprite-home.png)',
                  backgroundPosition: '100% 0px',
                  backgroundRepeat: 'no-repeat',
                  width: `${coderImgWidth}px`,
                  right: `${coderImgRight}px`,
                  overflow: 'hidden',
                }}
              />

              {/* Designer Background Shade Layer */}
              <div
                id="designer-bg"
                className={`pointer-events-none absolute bottom-0 h-[200px] w-[420px] transition-transform duration-300`}
                style={{
                  backgroundImage: 'url(/images/sprite-home.png)',
                  backgroundPosition: '0px -1300px',
                  backgroundRepeat: 'no-repeat',
                  left: `${designerBgLeft}px`,
                  opacity: designerBgOpacity,
                }}
              />

              {/* Coder Background Shade Layer */}
              <div
                id="coder-bg"
                className={`pointer-events-none absolute bottom-0 h-[200px] w-[420px] transition-transform duration-300`}
                style={{
                  backgroundImage: 'url(/images/sprite-home.png)',
                  backgroundPosition: '100% -1300px',
                  backgroundRepeat: 'no-repeat',
                  right: `${coderBgRight}px`,
                  opacity: coderBgOpacity,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
