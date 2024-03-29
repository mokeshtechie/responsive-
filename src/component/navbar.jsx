import React ,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose}from"react-icons/ai"

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const Handle =()=> {
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between  max-w-[1240px] h-24 items-center mx-auto px-4'>
        <h1 className='text-[#00df9a] text-4xl font-bold w-full'>React .</h1>
        <ul className='md:flex hidden'>
            <li className='p-4'>home</li>
            <li className='p-4'>company</li>
            <li className='p-4'>resource</li>
            <li className='p-4'>about</li>
            <li className='p-4'>contact</li>
        </ul>
      
        <div onClick={Handle} className='md:hidden lg:hidden' >
            {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/> }
            
        </div>
        <div className={!nav?'fixed left-0 top-0 h-full w-[60%] bg-black border-r border-r-white':'fixed left-[-100%]'}>
        <h1 className='text-[#00df9a] text-4xl font-bold w-full p-4'>React .</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-b-white '>home</li>
            <li className='p-4 border-b border-b-white'>company</li>
            <li className='p-4 border-b border-b-white'>resource</li>
            <li className='p-4 border-b border-b-white'>about</li>
            <li className='p-4 border-b border-b-white'>contact</li>
        </ul>
        </div>
     
       
    </div>
  )
}

export default Navbar