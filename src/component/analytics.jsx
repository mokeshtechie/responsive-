import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full border-2 border-red-500 py-16 bg-white px-4'>
        <div className='max-w-[1240px] grid  mx-auto lg:grid-cols-2  items-center'>
            <img src={Laptop} alt="/" className='p-9' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold ' >DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:text-4xl sm:3xl text-2xl py-2'>Manage Data Analytics Centerally</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, sint repudiandae deleniti in veritatis nobis unde vel obcaecati quaerat necessitatibus ex tempora facere quae molestiae harum. Odit quos officiis corrupti?
                </p>
                <button className='mt-6 w-[170px] font-bold bg-black text-[#00df9a] p-2 rounded-md mx-auto '>Get started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics