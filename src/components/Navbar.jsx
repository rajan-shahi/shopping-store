import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const openClose = () => {
    setNav(!nav);
  };
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
  };

  const [profile, setProfile] = useState(true);
  const profileOpenClose = () => {
    setProfile(!profile);
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" flex  justify-center fixed left-0 right-0 top-0  z-10 bg-black">
      <div className=" flex justify-between w-full md:px-0 px-4  md:w-11/12  py-5 items-center ">
        <span className="cursor-pointer text-white font-bold hover:underline hover:duration-300">
          <Link to={"/"}>
            <h1>SHOPPING-STORE</h1>
          </Link>
        </span>
        <div className="flex items-center  md:gap-5  gap-1 text-gray-100 text-md font-bold">
          <span onClick={handleClick}>
            {!icon ? (
              <GoSun size={25} className=" cursor-pointer" />
            ) : (
              <IoMoonOutline size={25} className=" cursor-pointer" />
            )}{" "}
          </span>
          <Link to={"/"}>
            <h1
              className={`${
                location.pathname === "/" ? " underline font-bold" : ""
              } md:flex hidden cursor-pointer hover:underline hover:duration-300`}
            >
              Home
            </h1>
          </Link>
          <Link to={"/cust"}>
            <h1
              className={`${
                location.pathname === "/cust" ? " underline font-bold" : ""
              } md:flex hidden cursor-pointer hover:underline hover:duration-300`}
            >
              Customization
            </h1>
          </Link>
          <Link to={"/book"}>
            <h1
              className={`${
                location.pathname === "/book" ? " underline font-bold" : ""
              } md:flex hidden cursor-pointer hover:underline hover:duration-300`}
            >
              Booking
            </h1>
          </Link>
          <Link to={"/shop"}>
            <h1
              className={`${
                location.pathname === "/shop" ? " underline font-bold" : ""
              } md:flex hidden cursor-pointer hover:underline hover:duration-300`}
            >
              Shop
            </h1>
          </Link>
          <Link to={"/excu"}>
            <h1
              className={`${
                location.pathname === "/excu" ? " underline font-bold" : ""
              } md:flex hidden cursor-pointer hover:underline hover:duration-300`}
            >
              Exclusive
            </h1>
          </Link>
          <span className=" text-white font-bold md:pr-0 pr-3">
            <PiShoppingCart size={25} className=" cursor-pointer" />
          </span>
          <IoPeople
            onClick={profileOpenClose}
            size={25}
            className=" relative md:flex hidden cursor-pointer"
          />
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
        <div className=" absolute top-20 right-20 ">
          {!profile && (
            <div className=" border border-gray-300 rounded-lg  bg-white flex flex-col gap-2  px-4 pr-8 py-5 z-10 ">
              <Link
                onClick={profileOpenClose}
                to={"/profile"}
                className=" cursor-pointer hover:underline"
              >
                Prifile
              </Link>
              <Link
                onClick={profileOpenClose}
                to={"/login"}
                className=" cursor-pointer hover:underline"
              >
                Login
              </Link>
              <Link
                onClick={profileOpenClose}
                to={"/register"}
                className=" cursor-pointer hover:underline"
              >
                Register
              </Link>
            </div>
          )}
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
        <div className=" border-t border-b  border-gray-400 py-4 flex flex-col gap-4">
          <Link onClick={openClose} to={"/"}>
            <h1
              className={`${
                location.pathname === "/"
                  ? " text-black font-bold underline"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Home
            </h1>
          </Link>
          <Link onClick={openClose} to={"/shop"}>
            <h1
              className={`${
                location.pathname === "/shop"
                  ? " underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Shop
            </h1>
          </Link>
          <Link onClick={openClose} to={"/excu"}>
            <h1
              className={`${
                location.pathname === "/excu"
                  ? " underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Exclusive
            </h1>
          </Link>
          <Link onClick={openClose} to={"/cust"}>
            <h1
              className={`${
                location.pathname === "/cust"
                  ? " underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Customization
            </h1>
          </Link>
          <Link onClick={openClose} to={"/contact"}>
            <h1
              className={`${
                location.pathname === "/contact"
                  ? " underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Contact
            </h1>
          </Link>

          <Link onClick={openClose} to={"/about"}>
            <h1
              className={`${
                location.pathname === "/about"
                  ? "underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              About Us
            </h1>
          </Link>

          <Link onClick={openClose} to={"/book"}>
            <h1
              className={`${
                location.pathname === "/book"
                  ? " underline text-black font-bold"
                  : ""
              } cursor-pointer hover:underline hover:duration-300`}
            >
              Booking
            </h1>
          </Link>
        </div>
        <Link onClick={openClose} to={"/profile"}>
          <h1
            className={`${
              location.pathname === "/profile"
                ? " underline text-black font-bold"
                : ""
            } cursor-pointer hover:underline hover:duration-300 py-2`}
          >
            Profile
          </h1>
        </Link>
        <Link onClick={openClose} to={"/login"}>
          <h1
            className={`${
              location.pathname === "/login"
                ? " underline text-black font-bold"
                : ""
            } cursor-pointer hover:underline pb-2 hover:duration-300`}
          >
            Login
          </h1>
        </Link>

        <Link onClick={openClose} to={"/register"}>
          <h1
            className={`${
              location.pathname === "/register"
                ? " underline text-black font-bold"
                : ""
            } cursor-pointer hover:underline pb-2 hover:duration-300`}
          >
            Register
          </h1>
        </Link>
        <div className=" flex flex-col gap-3 border-t border-gray-300 py-5">
          <Link
            onClick={openClose}
            to={"/privacy"}
            className={`${
              location.pathname === "/privacy"
                ? " underline text-black font-bold"
                : ""
            } cursor-pointer hover:underline hover:duration-300`}
          >
            Privacy Policy
          </Link>
          <Link
            onClick={openClose}
            to={"/terms"}
            className={`${
              location.pathname === "/terms"
                ? " underline text-black font-bold"
                : ""
            } cursor-pointer hover:underline hover:duration-300`}
          >
            Terms and Conditions
          </Link>
        </div>
        <Link onClick={openClose} to={"/excu"} className=" py-6">
          <button className=" bg-black text-white w-full py-2">
            EXCLUSIVE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
