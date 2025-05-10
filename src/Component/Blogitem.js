import React from "react";
import Image from "next/image";

import { assets, blog_data } from "../../assets/assets";
import Link from "next/link";

const BlogItems = () => {
  const { arrow } = assets;

  return (
    <>
      <main className="px-4 text-center">
        <h1 className="font-medium text-4xl ">Latest Blogs</h1>
        <p className="mt-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <form className="flex justify-center ">
          <input
            type="text"
            placeholder="Enter your email..."
            className="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
          <button className="border-solid border-2 p-4 shadow-[-2px_8px_0px_0px_rgba(0,0,0,1)]">Subscribe</button>
        </form>
      </main>

      <section className="flex justify-center mt-8">  
        <p className="px-4 mx-2 bg-black text-white cursor-pointer">All</p>
        <p className="px-4 mx-2cursor-pointer">React JS</p>
        <p className="px-4 mx-2cursor-pointer">Next JS</p>
        <p className="px-4 mx-2cursor-pointer">Express Js</p>
        <p className="px-4 mx-2 cursor-pointer">Git</p>
      </section>
      <section className="flex p-5 ">
        <div className="border-solid border-2 m-1 h-auto">
          <Image src={blog_data[0].image} width={500} alt={blog_data[0].image}/>
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2">{blog_data[0].category}</p>
            <h2 className="my-2">{blog_data[0].title}</h2>
            <p className="my-2">
            {blog_data[0].description}
            </p>
            <p className="flex gap-2">
            <Link href="/blog">Read more </Link> 
            <Image src={arrow} alt="arrow"/>
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-auto">
        <Image src={blog_data[1].image} width={500} alt={blog_data[1].image}/>
        <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2">{blog_data[1].category}</p>
            <h2 className="my-2">{blog_data[1].title}</h2>
            <p className="my-2">
            {blog_data[1].description}
            </p>
            <p className="flex gap-2">
            <Link href="/blog">Read more </Link><Image src={arrow} alt="arrow"/>
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-auto">
        <Image src={blog_data[2].image} width={500} alt={blog_data[2].image}/>
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2">{blog_data[2].category}</p>
            <h2 className="my-2">{blog_data[2].title}</h2>
            <p className="my-2">
            {blog_data[2].description}
            </p>
            <p className="flex gap-2">
            <Link href="/blog">Read more </Link><Image src={arrow} alt="arrow"/>
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-auto">
        <Image src={blog_data[3].image} width={500} alt={blog_data[3].image}/>
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2  my-2">{blog_data[3].category}</p>
            <h2 className="my-2">{blog_data[3].title}</h2>
            <p className="my-2">
            {blog_data[3].description}
            </p>
            <p className="flex gap-2">
            <Link href="/blog">Read more </Link><Image src={arrow} alt="arrow"/>
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItems;
