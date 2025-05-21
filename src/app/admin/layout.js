import React from 'react'
import Image from 'next/image'  
import Link from 'next/link'
import { assets } from '../../../assets/assets'

export default function layout({children}) {
  const { add_icon, blog_icon, email_icon } = assets;
  return (
    <div>
      <div className="grid xl:grid-cols-4  gap-1 my-4">
        <div className="flex justify-around lg:block border-2 xl:place-items-end place-items-center">
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start  rounded-xl" href="/admin/addblogs" title="Add Blog"><Image src={add_icon} alt="addBlog" className='lg:mx-2'/>Add Blog</Link> 
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start rounded-xl" href="/admin/bloglists"><Image src={blog_icon} alt="addBlog" className='lg:mx-2'/>Blogger List</Link>
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 lg:p-2 p-1 lg:w-48 flex items-center justify-start rounded-xl" href="/admin/subscriptions"><Image src={email_icon} alt="addBlog" className='lg:mx-2'/>Subscriber</Link>
        </div>
      <div className='xl:col-span-3 xl:col-end-5 border-2'>
        {children}
        </div>
    </div>
    </div>
  )
}