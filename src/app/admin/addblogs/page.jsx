"use client"
import React from "react";
import Image from "next/image";
import { assets } from "../../../../assets/assets";

export default function AddBlogs() {
    const { upload_area} = assets;   
    const [data, setData] = React.useState({blogImage: "", blogTitle: "", blogDescription: "", blogCategory: ""});

    const handleInput = (event) => {
        const { name, value, files } = event.target;
        if(files){
        setData({...data,[name]: files[0]});
        }
        setData({...data,[name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <div>
      <form action="post" onSubmit={handleSubmit} className="p-5"  >
        <label htmlFor="uploadThumbnail" className="cursor-pointer">Upload Thumbnail
        <Image src={!data.thumbnail ? upload_area: data.thumbnail} alt="thumbnail"  for="uploadThumbnail" /></label>
        <br />
        <input type="file" name="blogImage" id="uploadThumbnail" hidden onChange={handleInput} />
        <br />
        <label htmlFor="blogTitle" className="my-4">Blog Title</label>
        <br />
        <input type="text" name="blogTitle" id="blogTitle" className="border-2 pr-12 p-2 rounded" placeholder="Type here" autoComplete="off" onChange={handleInput} />
        <br />
        <label htmlFor="blogTitle">Blog Description</label>
        <br />
        <input type="message" name="blogDescription" id="blogTitle" className="border-2 pb-[64px] px-2 pr-12 rounded" placeholder="write content here" autoComplete="off" onChange={handleInput}/>
        <br />
        <label htmlFor="blogCategory">Blog Category</label>
        <br />
        <select id="blogCategory" name="blogCategory" className="border-2 px-8 rounded py-2 " onChange={handleInput} >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        <br />
        <button className="border-2 border-solid shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] block my-5 p-2 w-32 flex items-center justify-center rounded-xl" type="submit">Add Blog</button>
      </form>
    </div>
  );
}
