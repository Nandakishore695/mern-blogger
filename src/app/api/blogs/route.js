import connectDb from "@/library/config/db";
import { NewBlog } from "@/library/model/Blogs";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectDb();
    const { blogImage, blogTitle, blogDescription, blogCategory } = await request.json();
    const blog = await NewBlog.create({blogImage,blogTitle,blogDescription,blogCategory,});
    return NextResponse.json({message: "Blog created successfully",success: true, blog});
  } catch (error) {
    return NextResponse.json(
      {message: "Error creating blog",error: error.message, success: false  });
  }
}

export async function GET() {
  try {
    await connectDb();
     const response = await NewBlog.find();
     return NextResponse.json({message: "Blog created successfully",success: true, response});
  } catch (error) {
    return NextResponse.json({message: error.message, success: false})
  }
}