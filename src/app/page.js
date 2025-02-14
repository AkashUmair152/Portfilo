'use client';
import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import LatestWork from '@/components/LatestWork/LatestWork';
import Skills from '@/components/Skills/Skills';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
const Cursor = dynamic(() => import('../components/Cursor'), {
  ssr: false
});
export default function Home() {
  

  return (
    
    <>
    <Cursor />
    <main data-scroll-section className='bg-black min-h-screen overflow-hidden px-[3vw] flex flex-col gap-y-[5vw]' data-scroll-container=''>
        <Header/>
        <Hero/>
        <LatestWork/>
        <Skills/>
        <About/>
        <Footer/> 
      
    </main>
    </>
  );
}