import React from 'react'
import Admin from './page'
import Image from 'next/image'  
import Link from 'next/link'
import { assets } from '../../../assets/assets'

export default function layout({children}) {
  const { add_icon, blog_icon, email_icon } = assets;
  return (
    <div>
      <div className="grid xl:grid-cols-4  gap-1">
        <div className="border-2 xl:place-items-end place-items-center">
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 w-48 flex items-center justify-start  rounded-xl" href="/admin/addblogs"><Image src={add_icon} alt="addBlog" className='mx-2'/>Add blogs</Link>
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 w-48 flex items-center justify-start rounded-xl" href="/admin/bloglists"><Image src={blog_icon} alt="addBlog" className='mx-2'/>Blog lists</Link>
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 w-48 flex items-center justify-start rounded-xl" href="/admin/subscriptions"><Image src={email_icon} alt="addBlog" className='mx-2'/>Subscriptions</Link>
        </div>
      <div className='xl:col-span-3 xl:col-end-5 border-2'>
        {children}
        </div>
    </div>
    </div>
  )
}
