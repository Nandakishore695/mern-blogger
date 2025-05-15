"use client";
import React, { useState } from "react";
import Image from "next/image";

import { assets, blog_data } from "../../assets/assets";
import Link from "next/link";
import axios from "axios";

const BlogItems = () => {
  const { arrow } = assets;
  const [emailId, setEmailId] = useState({"isEmailId":""});
  const [isError, setError] = useState();
  const url = "http://localhost:3000"
  const handleEmailSubscribe = (event) => {
    const {name, value } = event.target;
    setEmailId({...emailId, [name]: value});
  };
  const handleSubmitEmailSubscribe = async (event) => {
    event.preventDefault();
    try {
     await axios.post(`${url}/api/email` , emailId,
        {
    headers: {
      'Content-Type': 'application/json', //  Important:  Tell the server what type of data you're sending
      
    },}
      )
      
    } catch (error) {
      setError(error.message)
    }
    
  };
  return (
    <>
      <main className="px-4 text-center my-8">
        <h1 className="font-medium text-6xl ">Latest Blogs</h1>
        <p className="text-clip my-8">
          A powerful app for professional publishers to create, share, and grow
          a business around their content.
        </p>
        <form
          className="flex justify-center gap-4"
          action="post"
          onSubmit={handleSubmitEmailSubscribe}
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl focus:outline-0"
            name="isEmailId"
            onChange={handleEmailSubscribe}
          />
          <button
            className="border-solid border-2 p-4 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </main>

      <section className="flex justify-center mt-8">
        <p className="p-4 mx-2 bg-black text-white cursor-pointer rounded-2xl ">
          All
        </p>
        <p className="p-4 mx-2 cursor-pointer">React JS</p>
        <p className="p-4 mx-2 cursor-pointer">Next JS</p>
        <p className="p-4 mx-2 cursor-pointer">Express Js</p>
        <p className="p-4 mx-2 cursor-pointer">Git</p>
      </section>
      <section className="xl:flex p-5 ">
        <div className="border-solid border-2 m-2 h-auto hover:shadow-[-8px_8px_5px_0px_rgba(0,0,0,1)] rounded">
          <Image
            src={blog_data[0].image}
            width={500}
            alt={blog_data[0].image}
          />
          <div className="p-4">
            <p className="bg-black w-30 text-white p-2 my-2 flex items-center justify-center rounded-2xl">
              {!blog_data[0].category} React JS
            </p>
            <h2 className="my-2 py-2">{blog_data[0].title}</h2>
            <p className="my-2 py-2">{blog_data[0].description}</p>
            <p className="flex gap-2 border-2 w-34 p-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <Link href="/blog">Read more </Link>
              <Image src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="border-solid border-2 m-2 h-auto hover:shadow-[-8px_8px_5px_0px_rgba(0,0,0,1)] rounded">
          <Image
            src={blog_data[1].image}
            width={500}
            alt={blog_data[1].image}
          />
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2 flex items-center justify-center rounded-2xl">
              {!blog_data[1].category} Next JS
            </p>
            <h2 className="my-2 py-2">{blog_data[1].title}</h2>
            <p className="my-2 py-2">{blog_data[1].description}</p>
            <p className="flex gap-2 border-2 w-34 p-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <Link href="/blog">Read more </Link>
              <Image src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="border-solid border-2 m-2 h-auto hover:shadow-[-8px_8px_5px_0px_rgba(0,0,0,1)] rounded">
          <Image
            src={blog_data[2].image}
            width={500}
            alt={blog_data[2].image}
          />
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2 flex items-center justify-center rounded-2xl">
              {!blog_data[2].category} Express JS
            </p>
            <h2 className="my-2 py-2">{blog_data[2].title}</h2>
            <p className="my-2 py-2">{blog_data[2].description}</p>
            <p className="flex gap-2 border-2 w-34 p-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <Link href="/blog">Read more </Link>
              <Image src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="border-solid border-2 m-2 h-auto hover:shadow-[-8px_8px_5px_0px_rgba(0,0,0,1)] rounded">
          <Image
            src={blog_data[3].image}
            width={500}
            alt={blog_data[3].image}
          />
          <div className="p-4">
            <p className="bg-black w-24 text-white p-2 my-2 flex items-center justify-center rounded-2xl">
              {!blog_data[3].category}Git
            </p>
            <h2 className="my-2 py-2">{blog_data[3].title}</h2>
            <p className="my-2 py-2">{blog_data[3].description}</p>
            <p className="flex gap-2 border-2 w-34 p-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
              <Link href="/blog">Read more </Link>
              <Image src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItems;
