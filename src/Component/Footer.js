import React from 'react'
import { assets } from '../../assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const {logo_light, facebook_icon, twitter_icon, googleplus_icon} = assets;

  return (
    <div className='bg-black p-5'>
        <ul className='lg:flex justify-around items-center'>
            <li><Link href="/"><Image src={logo_light} alt="logs"/></Link></li>
            <li className='text-white my-4'>All right reserved. Copyright @blogger </li>
            <li>
                <ul className="flex text-start lg:my-4">
                    <li><Image src={facebook_icon} alt='logs'/></li>
                    <li><Image src={twitter_icon} alt='logs'/></li>
                    <li><Image src={googleplus_icon} alt='logs'/></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
