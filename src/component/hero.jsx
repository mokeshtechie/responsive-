import React from 'react'
import {ReactTyped} from "react-typed"

const hero = () => {
  return (
    <div className='text-white border-2 border-red-500'>
  <div className='border-2 border-white max-w-[800px] w-full h-screen flex flex-col justify-center items-center mx-auto ' >
    <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
    <h1 className='md:text-7xl sm:text-6xl lg:text-4xl md:py-6 font-bold'>Grow with data</h1>
    <div className='flex justify-center items-center'>
       <p className='md:text-5xl sm:text-4xl text-xl font-bold p-4'>fast, fexible financing for</p>  
       <ReactTyped className='md:text-5xl  sm:text-4xl text-xl font-bold p-4' strings={['BTB','BTC','SASS']} typedSpeed={120} backSpeed={140} loop/>
    </div>
    <p className=' p-4 text-xl text-center md:text-2xl sm:text-2xl text-gray-500 font-bold'>Monitor your data analytics to increse revenue for BTB , BTC , & SASS platforms.</p>
    <button className='bg-[#00df9a] w-[180px] mt-7 py-2 rounded-md text-xl text-black font-bold'>Get started</button>
  </div>
    </div>
  )
}

export default hero