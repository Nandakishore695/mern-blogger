'use client'
import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import Link from "next/link";

const Header = () => {
  const { logo, arrow } = assets;


  return (
    <header className="flex p-4 justify-around">
      <Link href="/"><Image src={logo} alt="logo-blogger"/></Link>
      <Link className="border-solid border-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex" href="#">Get Started<Image src={arrow} alt="arrow"/></Link>
      <Link className="border-solid border-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex" href="/admin">Admin Dashboard</Link>
    </header>
  );
};
export default Header;