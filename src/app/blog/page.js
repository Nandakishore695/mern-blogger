import Image from "next/image";
import React from "react";
import { assets, blog_data } from "../../../assets/assets";

export default function BlogView() {
    const { profile_icon, facebook_icon, twitter_icon, googleplus_icon
 } = assets;
  
  return (
    <article className="text-center items-center my-8">
      <h1 className="text-4xl font-bold text-wrap my-8">Bevond the Ordinary: Crafting Your Exceptional Lifestyle</h1>
      <Image src={profile_icon} className="m-auto mt-8"/>
      <p>Alex Bennett</p>
      <div className="my-8">
        <Image src={blog_data[0].image} width={800} className="border-4 border-neutral-300 m-auto"/>
        <h2 className="mt-4 text-2xl px-[440px] text-justify font-bold">Introduction :</h2>
        <p className="mt-4 px-[440px] text-justify"> 
          In a world that often celebrates the ordinary, there exists a realm
          where the extraordinary thrives. It's a place where creativity knows
          no bounds, where passion fuels innovation, and where the pursuit of
          excellence is a way of life. Welcome to the extraordinary lifestyle, a
          journey that transcends the mundane and embraces the remarkable.
          <br />
             In a world that often celebrates the ordinary, there exists a realm
          where the extraordinary thrives. It's a place where creativity knows
          no bounds, where passion fuels innovation, and where the pursuit of
          excellence is a way of life. Welcome to the extraordinary lifestyle, a
          journey that transcends the mundane and embraces the remarkable.
             In a world that often celebrates the ordinary, there exists a realm
          where the extraordinary thrives. It's a place where creativity knows
          no bounds, where passion fuels innovation, and where the pursuit of
          excellence is a way of life. Welcome to the extraordinary lifestyle, a
          journey that transcends the mundane and embraces the remarkable.
          <br />
             In a world that often celebrates the ordinary, there exists a realm
          where the extraordinary thrives. It's a place where creativity knows
          no bounds, where passion fuels innovation, and where the pursuit of
          excellence is a way of life. Welcome to the extraordinary lifestyle, a
          journey that transcends the mundane and embraces the remarkable.
        </p>
      </div>
      <div className="px-[440px] my-8">
        <p className="text-start font-bold">Share this article on social media</p>
        <ul className="flex text-start my-4">
          <li><Image src={facebook_icon}/></li>
          <li><Image src={twitter_icon}/></li>
          <li><Image src={googleplus_icon}/></li>
        </ul>
      </div>
    </article>
  );
}
