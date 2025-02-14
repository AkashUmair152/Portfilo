import React from 'react'
import Image from 'next/image'
import ixperience from '@/images/ixperience.png'
import Btn from '../Btn/Btn'
import Link from 'next/link';

const LatestWork = () => {
  return (
    <section className='border-t-2  border-white text-white uppercase'>
      {/* Repeated Work Items */}
      {[1, 2, 3].map((item) => (
        <div 
          key={item}
          className='group flex flex-col md:flex-row justify-between border-b-2 border-white items-center h-fit py-6 md:py-[4vw] px-4 md:px-[2vw] relative hover:cursor-pointer'
        >
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-0 text-center md:text-left'>
            Latest Work
          </h1>
          <h5 className='text-lg md:text-xl mb-4 md:mb-0'>2024</h5>
          <Image 
            width={500} 
            height={300}  
            src={ixperience} 
            className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 md:w-64 lg:w-[22vw] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none' 
            alt="Project Preview" 
          />
        </div>
      ))}
      
      <div className='flex justify-center mt-8 md:mt-12'>
        
      </div>
      <Link href='/Work'>
      <Btn btnText='view all work' link='/Work'/>
      </Link>
    </section>
  )
}

export default LatestWork