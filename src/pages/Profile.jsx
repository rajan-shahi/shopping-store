import React from "react";
import rajan from "../assets/rajan.jpg";

const Profile = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex  md:pt-24 pt-16 md:pb-10 flex-col gap-20 w-full md:px-0 px-4 md:w-10/12">
        {/* profile */}
        <div className="md:flex items-center gap-10">
          <img
            className=" h-32 w-32 rounded-full px-2 flex object-cover"
            src={rajan}
            alt=""
          />
          <div className=" flex flex-col gap-5">
            <h1 className=" md:text-3xl text-2xl text-black/80 font-bold">
              Hello , Rajan Bahadur Shahi.
            </h1>
            <div className=" flex gap-5">
              <button className=" hover:scale-105 duration-500 bg-black text-white px-6 py-1">
                LOGOUT
              </button>
              <button className=" hover:scale-105 duration-500 bg-black text-white px-6 py-1">
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
      </div>
    </div>
  );
};

export default Profile;
