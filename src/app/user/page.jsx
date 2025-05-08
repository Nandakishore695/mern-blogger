import React from "react";
import Image from "next/image";

import { assets } from "../../../assets/assets";
import Link from "next/link";

const Search = () => {
  const { arrow } = assets;

  return (
    <>
      <main className="px-4 text-center">
        <h1 className="font-medium text-4xl ">Latest Blogs</h1>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam,
        </p>
        <form className="flex gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter your email..."
            className="border-solid border-2 p-4"
          />
          <button className="border-solid border-2 p-4">Subscribe</button>
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
        <div className="border-solid border-2 m-1 h-96">
          {/* <Image src={blog_pic_1} width={200} /> */}
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2">Technology</p>
            <h2>How to desing an online learning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam,
            </p>
            <p className="flex gap-2">
            <Link href="/admin">Read more </Link> 
            <Image src={arrow} />
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-96">
          {/* <Image src={blog_pic_1} width={200} /> */}
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2">Technology</p>
            <h2>How to desing an online learning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam,
            </p>
            <p className="flex gap-2">
            <Link href="/admin">Read more </Link><Image src={arrow} />
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-96">
          {/* <Image src={blog_pic_1} width={200} /> */}
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2">Technology</p>
            <h2>How to desing an online learning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam,
            </p>
            <p className="flex gap-2">
            <Link href="/admin">Read more </Link><Image src={arrow} />
          </p>
          </div>
        </div>
        <div className="border-solid border-2 m-1 h-96">
          {/* <Image src={blog_pic_1} width={200} /> */}
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2">Technology</p>
            <h2>How to desing an online learning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam,
            </p>
            <p className="flex gap-2">
            <Link href="/admin">Read more </Link><Image src={arrow} />
          </p>
          </div>
        </div>
        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

      </section>
    </>
  );
};

export default Search;
