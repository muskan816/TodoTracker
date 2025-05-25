import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-blue-700 to-blue-400 flex justify-center items-center'>
      <div className='w-[90%] max-w-4xl h-[500px] bg-white rounded-3xl shadow-2xl shadow-black flex overflow-hidden'>

        {/* Left Section */}
        <div className='w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center relative'>
          <h2 className='text-3xl font-bold mb-2'>WELCOME</h2>
          <p className='text-center text-sm max-w-xs'>
            Todo Tracker <br />
            Start your journey with us.
          </p>

          {/* Decorative Circles */}
          <div className='absolute w-36 h-36 bg-blue-500 rounded-full opacity-40 -bottom-10 left-20'></div>
          <div className='absolute w-24 h-24 bg-blue-300 rounded-full opacity-40 top-10 right-10'></div>
        </div>

        {/* Right Section (Login Form) */}
        <div className='w-1/2 p-10 flex flex-col justify-center'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Sign in</h2>

          <form className='space-y-5'>

            <div>
              <label className='block mb-1 text-gray-600'>Email</label>
              <input
                type='email'
                placeholder='Enter email'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
            </div>

            <div>
              <label className='block mb-1 text-gray-600'>Password</label>
              <input
                type='password'
                placeholder='Enter password'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              />
              <div className='text-right text-sm mt-1'>
                <a href='#' className='text-blue-600 hover:underline'>
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md'
            >
              Sign in
            </button>

            <p className='text-center text-sm text-gray-500 mt-4'>
              don&apos;t have an account?{" "}
              <Link href='/signup' className='text-blue-600 hover:underline'>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

// "use client"
// import axios
// import Link
// import {userRouter}
// const [data, setData] = useState("nothing")
// const logout = async() => {
//   try{
//     axios.get('/api/users/logout')
//     toast.success('logout successfully')
//     Router.push('/')
//   }catch(error: any){
//     console.log(error.message)
//     toast.error(error.message)
//   }
// }

// const getUserDetails = async() =>{
//   const res = await axios get('/api/users/me')
//   console.log(res.data)
//   setData(res.data.data._id)
// }

{/* 
  <h2>{data === "nothing"? "nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
  <button
onclick={logout}
>logout</button>
  <button
onclick={getUserDetails}
>get details</button> */}

