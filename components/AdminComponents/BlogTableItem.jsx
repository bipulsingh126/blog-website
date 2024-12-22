import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const blogDate = new Date(date);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {authorImg ? (
          <img
            src={authorImg}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <Image
            src={assets.profile_icon}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{blogDate.toDateString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 cursor-pointer hover:text-red-600 duration-300"
      >
        X
      </td>
    </tr>
  );
};

export default BlogTableItem;
