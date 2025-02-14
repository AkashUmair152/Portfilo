import React from 'react'
import Link from 'next/link'

const Btn = ({btnText}) => {
  return (
  <>
  
  
  <button className='border-2 rounded-full text-xl font-semibold border-white text-white max-w-fit py-2 px-6 hover:scale-105 duration-200 hover:border-yellow-600'>
    {btnText}
  </button>
    
  </>
  )
}

export default Btn