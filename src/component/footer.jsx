import React from 'react'
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from"react-icons/fa"
const footer = () => {
  return (
    <div className='max-w-[1240px] py-16 grid lg:grid-cols-3 px-4 gap-8 text-gray-300 mx-auto'>
 <div className='w-full'>
 <h1 className='text-[#00df9a] text-4xl font-bold w-full'>React .</h1>
 <p className='mt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus repellendus tenetur soluta quidem dolor, voluptatibus officia debitis nulla. </p>
 <div className='flex w-[70%] justify-evenly p-5 mx-auto mt-4'>
    <FaDribbbleSquare size={30 }/>
    <FaFacebookSquare size={30 }/>
    <FaGithubSquare size={30 }/>
    <FaInstagram size={30 }/>
    <FaTwitterSquare size={30 }/>
 </div>
 </div>
    </div>
  )
}

export default footer