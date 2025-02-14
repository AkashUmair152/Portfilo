"use client"
import Link from 'next/link';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFiverr, SiUpwork } from "react-icons/si";

const Header = () => {
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from([logoRef.current, ...(navRef.current?.children || [])], {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <header className='bg-black flex justify-between items-center h-[10vh] sm:h-[6vh] text-white uppercase px-4 md:px-8 z-20 sticky top-0'>
      <div className="logo" ref={logoRef}>
        <h1 className='text-xl md:text-2xl font-bold'>Akash Umair</h1>
      </div>
      
      <nav 
        className="social-links flex flex-col items-between absolute top-[10vw] right-[5vw] md:gap-[3vw] sm:gap-[3vw]"
        ref={navRef}
      >
        <Link 
          href="mailto:akashumair922@gmail.com" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <MdEmail/>
        </Link>
        <Link 
          href="https://wa.me/923084583415" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <FaWhatsapp/>
        </Link>
        <Link 
          href="https://www.linkedin.com/in/akashumair/" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <FaLinkedin/>
        </Link>
        <Link 
          href="https://www.fiverr.com/AkashUmair" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <SiFiverr/>
        </Link>
        <Link 
          href="https://www.upwork.com/freelancers/~015265c427d4613b86" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <SiUpwork/>
        </Link>
        <Link 
          href="https://t.me/Warrior" 
          target="_blank"
          className='hover:text-yellow-600 transition-colors text-3xl md:text-4xl'
        >
          <FaTelegram/>
        </Link>
      </nav>
    </header>
  )
}

export default Header;