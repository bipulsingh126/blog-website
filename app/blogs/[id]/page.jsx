"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const res = await axios.get("/api/blog", { params: { id: params.id } });
    setData(res.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            {" "}
            <Image
              src={assets.logo}
              width={180}
              alt="blooger"
              className="w-[130px] sm:w-auto "
            />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started
            <Image
              src={assets.arrow}
              alt="arrow"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto  ">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full "
            src={assets.profile_icon}
            width={60}
            height={60}
            alt="author"
            priority
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}{" "}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 ">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={780}
          alt="image"
        />

        <div
          className=" blog-content "
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media{" "}
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="facebook" width={50} />
            <Image src={assets.googleplus_icon} alt="facebook" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
