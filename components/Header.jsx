import axios from "axios";
import { assets } from "../Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("email", email);
      const res = await axios.post("/api/email", formData);
      
      if (res.data.success) {
        toast.success(res.data.message);
        setEmail("");
      } else {
        toast.error(res.data.message || "Error subscribing");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(error.response?.data?.message || "Error subscribing to newsletter");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          height={50}
          alt="logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] ">
          Get Started <Image src={assets.arrow} alt="arrow" width={20} />
        </button>
      </div>
      <div className="text-center my-8 ">
        <h1 className="text-3xl sm:text-5xl font-medium"> Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base ">
          Our goal is to provide readers with useful information and inspiration
          for their everyday lives. Whether you're looking for the latest tech
          reviews, practical lifestyle tips, exciting travel stories, or
          delicious recipes, you'll find it all here.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none w-full"
          />
          <button
            type="submit"
            className="py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white border-l border-black"
          >
            Subscribe{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
