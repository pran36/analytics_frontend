import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className=' text-white'>{/*md:bg-[url("../public/Images/Banner3.jpg")] bg-center bg-contain bg-no-repeat*/}
        <div className='max-w-[1300px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Growing with Analytics</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <Typed
                className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' 
                strings={["Customer", "Company", "Clients"]} 
                typeSpeed={120} 
                backSpeed={140} 
                loop></Typed>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400 '>Monitor Your Data Analytics to increase revenue for all.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero