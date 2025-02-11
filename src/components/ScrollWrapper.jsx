'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

const LocomotiveScroll = dynamic(
  () => import('locomotive-scroll').then((mod) => mod.default),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWrapper({ children }) {
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    
    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        multiplier: 0.8,
        smartphone: { smooth: false },
        tablet: { smooth: false }
      });

      locomotiveScrollRef.current = locomotiveScroll;

      // GSAP integration
      locomotiveScroll.on('scroll', (args) => {
        ScrollTrigger.update(args);
      });

      ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
        scrollTop(value) {
          return arguments.length ? 
            locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true }) : 
            locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
      ScrollTrigger.refresh();
    };

    initScroll();

    return () => {
      if (locomotiveScroll) {
        ScrollTrigger.removeEventListener('refresh', locomotiveScroll.update);
        locomotiveScroll.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  // Handle responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      } else if (window.innerWidth > 1024 && locomotiveScrollRef.current) {
        locomotiveScrollRef.current.init();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
}