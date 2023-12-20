import React from "react";
import shop1 from "../assets/shop1.webp";
const Booking = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex justify-between md:w-11/12 w-full">
        <div className=" flex-1">
          <img src={shop1} alt="" />
        </div>
        <div className=" flex flex-col gap-5 py-20  flex-1">
          <h1>Bomber Jacket</h1>
          <h1>Stylish and versatile jacket that is typically short in length, with a front zip closure</h1>
          <div className=" flex gap-5">
            <h1>Colors:</h1>
            <span className=" bg-black h-5 w-5 cursor-pointer"></span>
            <span className="  bg-green-700 h-5 w-5 cursor-pointer"></span>
            <span className="  bg-red-700 h-5 w-5 cursor-pointer"></span>
            <span className="  bg-blue-700 h-5 w-5 cursor-pointer"></span>
            <span className=" bg-gray-700 h-5 w-5 cursor-pointer"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
