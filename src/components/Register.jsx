import React from 'react'

function register() {
  return (
      <div className=' h-screen flex justify-center items-center'>
          <div className='bg-white h-[650px] w-[600px] flex flex-col rounded-[20px]'>
          <p className='text-lg mx-auto mt-7 font-bold'>Register</p>
              <label htmlFor="" className='ml-12 mt-8'>
                  full name
              <input type="text" className='mt-6 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='fullName...'/>
              </label>
              <label htmlFor="" className='ml-12 mt-8'>
                  user name
              <input type="text" className='mt-6 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='userName...'/>
              </label>
              <label htmlFor="" className='ml-12 mt-8'>
              email
              <input type="text" className='mt-6 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='email...'/>
            </label>
            <label htmlFor="" className='ml-12 mt-8'>
              password
              <input type="password" className='mt-6 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='password...'/>
            </label>
            <div className='flex justify-center items-center'>
                <button className='mt-8 w-[90px] bg-crypto-blue text-white p-3 rounded-[10px]'>register</button>
            </div>
        </div>
    </div>
  )
}

export default register