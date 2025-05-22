'use client'
import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import Link from "next/link";

const Header = () => {
  const { logo, arrow } = assets;

  return (
    <header className="lg:flex p-5 justify-around">
      <Link href="/"><Image src={logo} alt="logo-blogger" height={53} width={186}/></Link>
      <Link className="gap-2 border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 lg:w-48 flex items-center justify-center rounded-xl" href="/">Get Started<Image src={arrow} alt="arrow" width={18} height={16}/></Link>
      <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 lg:w-48 flex items-center justify-center rounded-xl" href="/admin/addblogs">Admin Dashboard</Link>
    </header>
  );
};
export default Header;