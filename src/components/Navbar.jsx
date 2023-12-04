import React, {useState} from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handNav = () =>{
        setNav(!nav)
    }
  return (
    <>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-left text-[#00df9a]'>React</h1>
            <ul className='text-left hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handNav} className='block md:hidden'>
                {!nav ? <IoMdMenu size={20}/>:<IoMdClose size={20}/>}
            
            </div>
            <div className={nav ? ' fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] px-4' : 'fixed left-[-100%] ease-in-out duration-500'}>
            <h1 className='w-full text-3xl font-bold text-left text-[#00df9a] m-4 mt-20 '>React</h1>

                <ul className=' p-4 text-left uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar