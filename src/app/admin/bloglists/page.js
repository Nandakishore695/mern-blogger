import Image from "next/image";
import React from "react";
import { assets } from "../../../../assets/assets";

export default function Bloglists() {
  const { profile_icon } = assets;
  console.log(assets);
  
  return (
    <div className="p-5">
      <h1 className="capitalize">All Blogs</h1>
      <div className="border-1 my-2 p-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="uppercase p-2 font-bold">author name</div>
          <div className="uppercase p-2 font-bold">blogtitle</div>
          <div className="uppercase p-2 font-bold">date</div>
          <div className="uppercase p-2 font-bold">action</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="lowercase p-2 flex"><Image src={profile_icon}/><p>Alex Bennett</p></div>
          <div className="lowercase p-2">Shaping the Future of statup ecosystem in the world</div>
          <div className="capitalize p-2">Fri Jun 21 2024</div>
          <div className="p-2">x</div>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4">
          <div className="lowercase p-2 flex"><Image src={profile_icon}/><p>Alex Bennett</p></div>
          <div className="lowercase p-2">Shaping the Future of statup ecosystem in the world</div>
          <div className="capitalize p-2">Fri Jun 21 2024</div>
          <div className="p-2">x</div>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4">
          <div className="lowercase p-2 flex"><Image src={profile_icon}/><p>Alex Bennett</p></div>
          <div className="lowercase p-2">Shaping the Future of statup ecosystem in the world</div>
          <div className="capitalize p-2">Fri Jun 21 2024</div>
          <div className="p-2">x</div>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4">
          <div className="lowercase p-2 flex"><Image src={profile_icon}/><p>Alex Bennett</p></div>
          <div className="lowercase p-2">Shaping the Future of statup ecosystem in the world</div>
          <div className="capitalize p-2">Fri Jun 21 2024</div>
          <div className="p-2">x</div>
        </div>
        <hr />
      </div>
    </div>
  );
}
