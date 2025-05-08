"use client";

import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";

const Header = () => {
  const { logo, arrow } = assets;
  return (
    <header className="flex p-4 justify-around">
      <Image src={logo} />
      <button className="border-solid border-2 shadow p-4 flex ">Get Started<Image src={arrow} /></button>
    </header>
  );
};
export default Header;