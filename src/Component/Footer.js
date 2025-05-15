import React from 'react'
import { assets } from '../../assets/assets';
import Image from 'next/image';

export default function Footer() {
    const {logo_light, facebook_icon, twitter_icon, googleplus_icon} = assets;

  return (
    <div className='bg-black p-2'>
        <ul className='flex justify-around items-center'>
            <li><Image src={logo_light} alt="logs"/></li>
            <li className='text-white'>All right reserved. Copyright @blogger </li>
            <li>
                <ul className="flex text-start my-4">
                    <li><Image src={facebook_icon} alt='logs'/></li>
                    <li><Image src={twitter_icon} alt='logs'/></li>
                    <li><Image src={googleplus_icon} alt='logs'/></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
