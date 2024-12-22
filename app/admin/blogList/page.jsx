"use client";

import BlogTableItem from "@/components/AdminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    try {
      const res = await axios.delete("/api/blog", { params: { id: mongoId } });
      if (res.data.success) {
        toast.success(res.data.message);
        fetchBlogs();
      } else {
        toast.error(res.data.message || "Error deleting blog");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.response?.data?.message || "Error deleting blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <h1>All blogs </h1>
      <div className=" relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400  scrollbar-hide ">
        <table className="w-full text-sm text-gray-500 ">
          <thead className=" text-sm  text-gray-700 text-left bg-gray-50 ">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name{" "}
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog title{" "}
              </th>
              <th scope="col" className=" px-6 py-3">
                Date{" "}
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.flatMap((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImg={item.authorImg}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
