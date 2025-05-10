import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddBlogs from "./addblogs/page";
import Bloglists from "./bloglists/page";

export default function Admin() {
  return (
    <div>
      <div class="grid grid-flow-col grid-rows-3 gap-4">
        
      <div class="col-span-3 ... border-2 border-solid flex justify-between">
        <p>Admin Panel</p>
        <Image src="" alt="adminProfile" />
      </div>

        <div class="row-span-2 ... border-2 border-solid place-items-end px-1">
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 w-25" href="/admin/addblogs">Add blogs</Link>
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 w-25" href="/admin/bloglists">Blog lists</Link>
          <Link className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 w-25" href="/admin/subscriptions">Subscriptions</Link>
        </div>
        <div class="col-span-2 row-span-2 ... border-2 border-solid ">
          {/* <form action="post" className="p-5">
            <div>
              <label htmlFor="uploadThumbnail">Upload thumbnail</label>
              <input type="file" name="title" id="uploadThumbnail" />
            </div>
            <div>
              <label htmlFor="blogTitle" >Blog title</label>
              <input type="text" name="title" id="blogTitle" className="border-2" />
            </div>
            <div>
              <label htmlFor="blogDescription">Blog Descriptionl</label>
              <input type="message" name="title" id="blogDescription" className="border-2" />
            </div>
            <div>
              <label htmlFor="blogCategory">Blog category</label>
                <select id="blogCategory" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
            </div>
            <div>
              <button className="bg-black p-5 text-white">Add </button>          
            </div>
          </form> */}
          <AddBlogs />
          <Bloglists />
        </div>
      </div>
    </div>
  );
}
