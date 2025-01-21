import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1514749204155-24e484635226?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            {/* <img className='w-16 ml-8' src="https://see.fontimg.com/api/rf5/lgZ6e/NTk3YmU1OWJlN2EzNDlhN2EzMDBmNTA1MGU3MWZjOWQub3Rm/Umlrbw/montserrat-medium.png?r=dw&h=98&w=1500&fg=000000&bg=FFFFFF&s=65" alt="" /> */}

            
            <h1 className='text-4xl flex items-center justify-center px-6 py-3 bg-slate-900 w-fit font-semibold text-white ml-4 rounded-full'>Riko <span className='text-green-600 text-[50px] font-bold mb-3 '>.</span></h1>
            
            <div className='bg-white pb-8 py-4 px-4'>
                <h2 className='text-[25px] font-semibold'>Get Started with <span className='text-green-600 text-[30px]'>Riko</span></h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-orange-500 text-black py-3 font-semibold rounded-full mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home