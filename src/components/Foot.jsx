import React from 'react'
import { TiSocialGithub, TiSocialFacebookCircular, TiSocialLinkedin, TiSocialSkype, TiSocialYoutube } from "react-icons/ti";

function Foot() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-left text-[#00df9a]'>React</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi doloribus aliquam odio. Minima est velit, totam ad unde, repellendus dolorum, quisquam error obcaecati qui eos autem expedita voluptate repudiandae debitis.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <TiSocialFacebookCircular size={30}  className='mx-2'></TiSocialFacebookCircular>
                <TiSocialGithub size={30} className='mx-2'></TiSocialGithub>
                <TiSocialLinkedin size={30} className='mx-2'></TiSocialLinkedin>
                <TiSocialSkype size={30} className='mx-2'></TiSocialSkype>
                <TiSocialYoutube size={30}  className='mx-2'></TiSocialYoutube> 
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Foot