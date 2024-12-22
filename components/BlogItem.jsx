import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[-8px_8px_0px_rgba(0,0,0,0.9)] hover:translate-x-[3px] hover:-translate-y-[3px]">
      <Link href={`/blogs/${id}`} className="block overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <p className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-black rounded-full">
          {category}
        </p>
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 hover:text-gray-700">
          {title}
        </h5>
        <div
          className="mb-4 text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 150) + "...",
          }}
        />
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors group"
        >
          Read more
          <Image
            width={16}
            height={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
            src={assets.arrow}
            alt="read more"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
