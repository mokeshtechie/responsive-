import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full px-4 py-16 text-white'>
        <div className='grid lg:grid-cols-2 max-w-[1240px] mx-auto gap-4'>
        <div className='p-7'>
            <h1 className='text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>sign-up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4 sm:mx-11'>
        <div className='flex  items-center sm:flex-row flex-col w-full justify-between'>
            <input type="text" placeholder="enter email"className='text-black rounded-md p-3 w-full '/>
            <button className='w-[200px] rounded-md bg-[#00df9a] text-black font-medium ml-4 my-6 px-6 py-3'>notify news</button>           
        </div>
        <p>we care bout protection of your data .read our<br/> <span className='text-[#00df9a]'>privacy policy</span></p>
        </div>
        </div>
        
    </div>
  )
}

export default NewsLetter