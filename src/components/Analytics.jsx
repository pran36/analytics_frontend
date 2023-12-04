import React from 'react'
import Tech from '../assets/4k-tech-8ud1fgpt22qs67c7.jpg'
function Analytics() {
  return (
    <>
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[800px] mx-auto my-4' src={Tech} alt="/" />
                <div className='flex flex-col justify-center ml-10'>
                    <p className='text-[#00df9a] font-bold'>Data Analytics</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at consectetur totam, nulla aspernatur illum reprehenderit pariatur voluptatibus laboriosam nostrum hic delectus impedit eum ducimus, laborum quas cumque aut expedita.</p>
                    <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-white'>Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Analytics