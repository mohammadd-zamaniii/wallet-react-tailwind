import React from 'react'

const Login = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='bg-white h-[650px] w-[600px] flex flex-col rounded-[20px]'>
            <p className='text-lg mx-auto mt-16 font-bold'>Login</p>
            <label htmlFor="" className='ml-12 mt-20'>
              email
              <input type="text" className='mt-5 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='email...'/>
            </label>
            <label htmlFor="" className='ml-12 mt-28'>
              password
              <input type="password" className='mt-5 w-[500px] mr-14 border p-2 border-black rounded-lg placeholder:text-black' placeholder='password...'/>
            </label>
            <div className='flex justify-center items-center'>
                <button className='mt-20 w-[90px] bg-crypto-blue text-white p-3 rounded-[10px]'>login</button>
            </div>
        </div>
    </div>
  )
}

export default Login