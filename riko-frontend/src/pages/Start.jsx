// import React from 'react'
// import { Link } from 'react-router-dom'


// const Start = () => {
//   return (
//     <div>
//         <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1514749204155-24e484635226?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
//             {/* <img className='w-16 ml-8' src="https://see.fontimg.com/api/rf5/lgZ6e/NTk3YmU1OWJlN2EzNDlhN2EzMDBmNTA1MGU3MWZjOWQub3Rm/Umlrbw/montserrat-medium.png?r=dw&h=98&w=1500&fg=000000&bg=FFFFFF&s=65" alt="" /> */}

            
//             <h1 className='text-4xl flex items-center justify-center px-6 py-3 bg-slate-900 w-fit font-semibold text-white ml-4 rounded-full'>Riko <span className='text-green-600 text-[50px] font-bold mb-3 '>.</span></h1>
            
//             <div className='bg-white pb-8 py-4 px-4'>
//                 <h2 className='text-[25px] font-semibold'>Get Started with <span className='text-green-600 text-[30px]'>Riko</span></h2>
//                 <Link to='/login' className='flex items-center justify-center w-full bg-orange-500 text-black py-3 font-semibold rounded-full mt-5'>Continue</Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Start


import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-900 via-black to-gray-900 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Blur Layers */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587149623021-daf8b95fdaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1887')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl px-6 py-8 w-11/12 max-w-sm text-center border border-white/20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-extrabold text-white">
            Riko<span className="text-green-400">.</span>
          </h1>
        </div>

        {/* Tagline */}
        <h2 className="text-xl font-semibold text-white tracking-wide">
          Your Ride, Simplified.
        </h2>
        <p className="mt-2 text-gray-300 text-sm">
          Affordable, reliable, and hassle-free ride-sharing at your fingertips.
        </p>

        {/* Illustration */}
        <div className="mt-6 flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/846/846449.png"
            alt="Car Icon"
            className="w-14 h-14"
          />
        </div>

        {/* Call-to-Action Button */}
        <Link
          to="/login"
          className="mt-8 block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-md transition-all duration-300"
        >
          Login to Continue
        </Link>

        {/* Additional Info */}
        <p className="mt-4 text-gray-400 text-xs">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-green-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default Start;


