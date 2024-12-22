import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/blog.model";
import fs from "fs";

const LoadDb = async () => {
  await ConnectDB();
};

LoadDb();

//Api endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}
// API ENDpoint for uploading blog
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    image: `${imgUrl}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, message: "Blog Add" });
}

//creating api endipoint delete blog
export async function DELETE(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    if (blog.image) {
      const imagePath = `./public${blog.image}`;
      try {
        fs.unlinkSync(imagePath);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    await BlogModel.findByIdAndDelete(blogId);

    return NextResponse.json({ success: true, message: "Blog Deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting blog" },
      { status: 500 }
    );
  }
}
