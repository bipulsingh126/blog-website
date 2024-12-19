import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='ligth' width={120} />
        <p className='text-sm  text-white'>All right reserved. copyright @blogger </p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='facebook' width={40} />
            <Image src={assets.twitter_icon} alt='twitter' width={40} />
            <Image src={assets.googleplus_icon} alt='googleplplus' width={40} />
        </div>
    </div>
  )
}

export default Footer