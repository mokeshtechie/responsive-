import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"


const card = () => {
  return (
    <div className='py-[18rem] bg-white w-full  '>
        <div className='max-w-[1240px]  grid lg:grid-cols-3 gap-12 mx-auto p-5'>
            <div className='w-full  shadow-2xl hover:scale-105 duration-150 flex flex-col  rounded-md my-4'>
              <img src={Single} className='w-20 mx-auto my-4 ' alt="" />
              <h2 className='font-bold text-2xl mx-auto py-8'>single User</h2>
              <p className='font-bold text-2xl text-center'>$149</p>
              <div className='w-full text-center font-meduin my-3'>
                <p className='py-3 border-b mx-8'>500gb storage</p>
                <p className='py-3 border-b mx-8'>1 granted user</p>
                <p className='py-3 border-b mx-8'>send up to 2 gb</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] mx-auto py-2 font-bold text-xl rounded-md my-4' >start trail</button>
            </div>
            <div className='w-full  shadow-2xl hover:scale-105 duration-150 flex flex-col  rounded-md my-4 bg-gray-100'>
              <img src={Double}className='w-20 mx-auto my-4 ' alt="" />
              <h2 className='font-bold text-2xl mx-auto py-8'>single User</h2>
              <p className='font-bold text-2xl text-center'>$149</p>
              <div className='w-full text-center font-meduin my-3'>
                <p className='py-3 border-b mx-8'>500gb storage</p>
                <p className='py-3 border-b mx-8'>1 granted user</p>
                <p className='py-3 border-b mx-8'>send up to 2 gb</p>
              </div>
              <button className='text-[#00df9a] bg-black w-[200px] mx-auto py-2 font-bold text-xl rounded-md my-4' >start trail</button>
            </div>
            <div className='w-full  shadow-2xl hover:scale-105 duration-150 flex flex-col  rounded-md my-4'>
              <img src={Triple} className='w-20 mx-auto my-4 ' alt="" />
              <h2 className='font-bold text-2xl mx-auto py-8'>single User</h2>
              <p className='font-bold text-2xl text-center'>$149</p>
              <div className='w-full text-center font-meduin my-3'>
                <p className='py-3 border-b mx-8'>500gb storage</p>
                <p className='py-3 border-b mx-8'>1 granted user</p>
                <p className='py-3 border-b mx-8'>send up to 2 gb</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] mx-auto py-2 font-bold text-xl rounded-md my-4' >start trail</button>
            </div>
           
        </div>
    </div>
  )
}

export default card