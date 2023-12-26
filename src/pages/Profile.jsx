import React, { useState } from "react";
import rajan from "../assets/rajan.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const openclose = () => {
    setEdit(!edit);
  };

  const haldleProfile = () => {
    toast.success("Success Edit Profile");
  };

  const handleLogOut = () => {
    toast.success("Logout Success");
  };
  return (
    <div className=" flex justify-center">
      <div className=" flex  md:pt-24 pt-16 md:pb-10 flex-col gap-20 w-full md:px-0 px-4 md:w-10/12">
        {/* profile */}
        <div className="md:flex items-center gap-10">
          <img
            className=" h-32 w-32  cursor-pointer rounded-full  flex object-cover"
            src={rajan}
            alt=""
          />
          <div className=" flex flex-col gap-5">
            <h1 className=" md:text-3xl text-2xl text-black/80 font-bold">
              Hello , Rajan Bahadur Shahi.
            </h1>
            <div className=" flex gap-5">
              <button
                onClick={handleLogOut}
                className=" hover:scale-105 duration-500 bg-black text-white px-6 py-1"
              >
                LOGOUT
              </button>
              <button
                onClick={openclose}
                className=" relative  hover:scale-105 duration-500 bg-black text-white px-6 py-1"
              >
                EDIT PROFILE
              </button>{" "}
            </div>
          </div>
        </div>
        {/* contact */}
        <div className=" flex flex-col">
          <h1 className=" text-3xl py-5">PROFILE</h1>
          <div className=" flex md:gap-40 gap-16 border-b border-gray-300 py-3 text-gray-700">
            <h1 className=" text-md">Full Name</h1>
            <h2 className=" text-md">Rajan Bahadur Shahi</h2>
          </div>
          <div className=" flex md:gap-48 gap-24 border-b border-gray-300 py-3 text-gray-700">
            <h1 className=" text-md">Email</h1>
            <h2 className=" text-md">rajanshahi1367@gmail.com</h2>
          </div>
          <div className=" flex md:gap-44 gap-16 border-b border-gray-300 py-3 text-gray-700">
            <h1 className=" text-md">Address</h1>
            <h2 className=" text-md">Baneshwor 05 Kathmandu Nepal</h2>
          </div>
          <div className=" flex  md:gap-44 gap-16 border-b border-gray-300 py-3 text-gray-700">
            <h1 className=" text-md">Contact</h1>
            <h2 className=" text-md">9866448606</h2>
          </div>
        </div>
        {/* profile edit */}
        {!edit && (
          <div className="md:top-6 top-7 right-1  md:right-72 absolute bg-white z-20  border border-gray-300 py-8 px-5 rounded-2xl md:w-4/12 w-full">
            <div className=" flex flex-col gap-5">
              <h1 className=" flex justify-center text-xl text-gray-600">
                UPDATE YOUR INFORMATION
              </h1>
              <input
                className="  outline-black  px-2 border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="  outline-black  px-2 border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="   outline-black px-2 border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
                type="number"
                placeholder="Phone Number"
              />

              <h1>Profile Picture</h1>
              <input type="file" />

              <div className=" flex gap-3">
                <Link
                  onClick={openclose}
                  to={"/profile"}
                  className=" flex justify-center border-2 border-black w-full bg-gray-100 py-1"
                >
                  Close
                </Link>
                <button
                  onClick={haldleProfile}
                  className=" w-full bg-black text-white py-1"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
