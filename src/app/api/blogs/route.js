import connectDb from "@/library/config/db";
import { NewBlog } from "@/library/model/Blogs";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectDb();
    const { blogImage, blogTitle, blogDescription, blogCategory } = await request.json();
    const blog = await NewBlog.create({blogImage,blogTitle,blogDescription,blogCategory,});
    
    return NextResponse.json(
      {message: "Blog created successfully",blog},
      { status: 201 }
    );
  } catch (error) {
    console.log("Blog creation error:", error.message);
    return NextResponse.json(
      {message: "Error creating blog",error: error.message},
      { status: 500 }
    );
  }
}