import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import toast from "react-hot-toast";

const Footer = () => {
  const handleFooter = () => {
    toast.success("Success Send Coolstuff");
  };
  return (
    <div className=" flex flex-col justify-center px-4 md:px-10 bg-gray-100">
      <div className=" md:hidden flex  pt-10 justify-center flex-col gap-4">
        <h1 className=" pt-2">Email Address</h1>
        <input
          className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
          type="email"
          name="email"
          placeholder="Example@gmail.com"
        />{" "}
        <button
          onClick={handleFooter}
          className=" flex justify-center bg-black text-white py-2"
        >
          SEND ME COOLSTUFF
        </button>
      </div>
      <div className=" flex justify-between md:pt-12 pt-8 pb-3 md:pb-5">
        <h1 className=" cursor-pointer md:flex  hidden">NEWSLETTER</h1>
        <h2 className=" cursor-pointer">©2023 ONLINE SHOPING</h2>
        <span className=" flex gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=61553993524947"
            target="-blank"
          >
            <FaFacebookF
              size={20}
              className=" text-black cursor-pointer  hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rajan-shahi-b63139282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="-blank"
          >
            <BiLogoLinkedin
              size={20}
              className=" text-black cursor-pointer  hover:scale-110 duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/rajanshahi862?igshid=YTQwZjQ0NmI0OA=="
            target="-blank"
          >
            <FaInstagram
              size={20}
              className=" text-black cursor-pointer  hover:scale-110 duration-300"
            />
          </a>
        </span>
      </div>
      <div className=" flex flex-wrap justify-center md:pb-7 pb-6 py-3 text-sm text-gray-600">
        <span>Designed & Developed By </span>
        <a
          target="-blank"
          href="https://github.com/rajan-shahi?tab=overview&from=2023-12-01&to=2023-12-20"
          className=" px-1 text-blue-500 cursor-pointer underline"
        >
          Rajan Bahadur Shahi
        </a>
        No Right
        <span> Reserved, Free To Use .</span>
      </div>
    </div>
  );
};

export default Footer;
