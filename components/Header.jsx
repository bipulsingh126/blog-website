import { assets } from "../Assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] ">
          Get Started <Image src={assets.arrow} alt="arrow" width={20} />
        </button>
      </div>
      <div className="text-center my-8 ">
        <h1 className="text-3xl sm:text-5xl font-medium"> Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aliquid dicta eveniet blanditiis voluptates quam, quidem reiciendis aspernatur praesentium atque, suscipit explicabo esse, optio architecto veniam non a. Asperiores, odit!</p>
      </div>
    </div>
  );
};

export default Header;
