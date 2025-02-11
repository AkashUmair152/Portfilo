'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  const box = useRef(null);

  return (
    <main ref={box} data-scroll-section>
       <Hero color="blue"/>
       
       
    </main>
  );
}