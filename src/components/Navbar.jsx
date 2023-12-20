import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const openClose = () => {
    setNav(!nav);
  };
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };

  <p>this is testing</p>;
  return (
    <div className=" flex  justify-center fixed left-0 right-0 top-0  z-10 bg-black">
      <div className=" flex justify-between w-full md:px-0 px-4  md:w-11/12 py-6 ">
        <span className=" flex  items-center text-white cursor-pointer hover:underline  hover:duration-700  text-xl ">
          <Link to={"/"}>
            <h1>SHOPING-STORE</h1>
          </Link>
        </span>
        <div className="flex items-center  md:gap-5 gap-2 text-gray-100 text-md font-bold">
          <span onClick={handleClick}>
            {!icon ? (
              <GoSun size={25} className=" cursor-pointer" />
            ) : (
              <IoMoonOutline size={25} className=" cursor-pointer" />
            )}{" "}
          </span>
          <Link to={"/cust"}>
            <h1 className=" md:flex hidden cursor-pointer hover:underline hover:duration-300">
              Customization
            </h1>
          </Link>
          <Link to={"/book"}>
            <h1 className=" md:flex hidden cursor-pointer hover:underline hover:duration-300">
              Booking
            </h1>
          </Link>
          <Link to={"/shop"}>
            <h1 className=" md:flex hidden cursor-pointer hover:underline hover:duration-300">
              Shop
            </h1>
          </Link>
          <Link to={"/excu"}>
            <h1 className=" md:flex hidden cursor-pointer hover:underline hover:duration-300">
              Exclusive
            </h1>
          </Link>
          <IoPeople size={20} className=" md:flex hidden cursor-pointer" />
          <span
            onClick={openClose}
            className="  cursor-pointer bg-gray-100 rounded-full hover:scale-105 duration-300 p-1"
          >
            <IoReorderThreeOutline
              size={30}
              className=" text-black font-bold "
            />
          </span>{" "}
        </div>
        {nav ? (
          <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
      </div>
      {/* {sideNabar} */}
      <div
        className={
          nav
            ? " px-5 fixed right-0 top-0 w-full  md:w-[350px] h-screen bg-white z-10 duration-300  "
            : "  px-5 fixed right-[-100%] top-0  w-[350px] h-screen bg-white z-10 duration-300  "
        }
      >
        <span
          onClick={openClose}
          className=" flex justify-end cursor-pointer py-4 "
        >
          <AiOutlineClose size={30} />
        </span>
        <div className=" border-t border-gray-400 py-5 flex flex-col gap-4">
          <Link onClick={openClose} to={"/"}>
            <h1 className=" text-xl  cursor-pointer hover:underline hover:duration-300">
              Home
            </h1>
          </Link>
          <Link onClick={openClose} to={"/cust"}>
            <h1 className=" text-xl  cursor-pointer hover:underline hover:duration-300">
              Customization
            </h1>
          </Link>
          <Link onClick={openClose} to={"/shop"}>
            <h1 className=" text-xl  cursor-pointer hover:underline hover:duration-300">
              Shop
            </h1>
          </Link>
          <Link onClick={openClose} to={"/excu"}>
            <h1 className=" text-xl  cursor-pointer hover:underline hover:duration-300">
              Exclusive
            </h1>
          </Link>
          <Link onClick={openClose} to={"/book"}>
            <h1 className=" text-xl  cursor-pointer hover:underline hover:duration-300">
              Booking
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
