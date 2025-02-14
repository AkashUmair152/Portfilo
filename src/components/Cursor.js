"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const xPrev = useRef(0);
  const yPrev = useRef(0);
  const timeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(timeout.current);

      const xScale = gsap.utils.clamp(0.8, 1.2, e.clientX - xPrev.current);
      const yScale = gsap.utils.clamp(0.8, 1.2, e.clientY - yPrev.current);

      xPrev.current = e.clientX;
      yPrev.current = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = 
          `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale}, ${yScale})`;
      }

      timeout.current = setTimeout(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = 
            `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
        }
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div 
      id="minicircle"
      ref={cursorRef}
      className="fixed w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[99999] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
    />
  );
};

export default Cursor;