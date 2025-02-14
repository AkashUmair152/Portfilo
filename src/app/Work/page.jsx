import React from 'react'
import Header from "@/components/Header/Header"
import Projects from '../Work/Projects'
import Footer from '@/components/Footer/Footer'
const AboutPage = () => {
  return (
    <> 
    <section className='bg-black text-white flex flex-col '>
      <Header/>
      <div className='flex justify-start items-center w-fit h-[60vh] uppercase'>
        <h1 className='text-[12vw] ml-[5vw] opacity-[0.6] font-semibold'>Work</h1>
      </div>
      <Projects/>
      <Footer/>
    </section>
    </>
  )
}

export default AboutPage