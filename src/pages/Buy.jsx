import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import shop6 from "../assets/shop6.webp";
import { LuMoveLeft } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" md:flex  justify-between w-full md:px-0 px-4 md:w-10/12 gap-5 md:py-20 py-16">
        {/* leftBar-Container */}
        <div className=" flex flex-col gap-4 md:flex-1 md:pb-0 pb-12">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-xl">express checkout</h1>
            <div className=" flex justify-between  gap-3 border border-gray-300 px-4 py-5">
              <h1 className=" hover:scale-105 duration-300 flex justify-center cursor-pointer bg-black text-white w-full py-2">
                E-SEWA
              </h1>
              <h1 className=" flex justify-center cursor-pointer hover:bg-black hover:text-white  duration-300 w-full py-2">
                CARD
              </h1>
              <h1 className=" flex justify-center cursor-pointer hover:bg-black hover:text-white duration-300 w-full py-2">
                CASH
              </h1>
            </div>
          </div>
          <div className=" border-b border-gray-300 md:py-6 md:pt-0 pt-5"></div>
          <div className=" flex justify-between items-center py-3">
            <h1>OR CONTINUE HERE</h1>
            <h1 className=" md:text-md text-sm text-gray-600">
              Already have an account{" "}
              <Link to={"/login"} className=" cursor-pointer underline text-blue-600 md:text-xl px-1">
                Login
              </Link>
            </h1>
          </div>
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            name="email"
            type="email"
            placeholder="Examples@ Gmail.com"
          />
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            name="text"
            type="text"
            placeholder="Ktm Outside The Roads"
          />
          <div className=" md:flex  justify-between gap-3">
            <div className=" flex-1   w-full md:py-0 py-3">
              <input
                className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
                type="text"
                placeholder=" First Name"
              />{" "}
            </div>
            <input
              className=" flex-1 w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder=" Last Name"
            />
          </div>
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            name="number"
            type="number"
            placeholder="Phone"
          />
          <div className=" flex justify-between gap-3">
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder=" Tole/City"
            />
            <input
              className=" w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder=" Address"
            />
          </div>
          <div className=" w-full md:pt-7">
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder="Notes"
            />
          </div>
          <button className=" bg-black py-3 text-white hover:scale-y-105 hover:duration-500">
            VERYFY PHONE NUMBER
          </button>
          <div className="  flex justify-center md:pt-9 pt-5">
            <h1>
              Verify your phone number,Check your phone for verification code.
            </h1>
          </div>
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="number"
            placeholder="Enter OTP"
          />
          <button className=" bg-black py-3 text-white hover:scale-y-105 hover:duration-500">
            VERYFY
          </button>
        </div>
        {/* rightBar-Container */}
        <div className=" flex flex-col gap-4 md:flex-1">
          <div className="div">
            <h1>YOUR PRODUCTS</h1>
            <div className=" flex justify-between px-6 py-2 border border-gray-300">
              <img
                className=" cursor-pointer h-16 w-16 object-cover"
                src={shop6}
                alt=""
              />
              <span className=" flex flex-col gap-1">
                <h1 className=" text-md text-black">Bomber Jacket</h1>
                <h1 className=" flex gap-5">
                  <h1 className=" text-gray-600">Qty</h1>
                  <h1 className=" cursor-pointer">-</h1>
                  <h1 className=" text-black font-bold text-xl">5</h1>
                  <h1 className=" cursor-pointer">+</h1>
                </h1>
                <h1 className=" flex gap-7">
                  <h1 className=" text-sm text-gray-600">Price</h1>
                  <h1>970</h1>
                </h1>
              </span>
              <span className=" text-red-600 cursor-pointer">
                <RiDeleteBin6Line />
              </span>
            </div>
          </div>
          <div className=" border-b border-gray-300 py-2"></div>
          <h1>ENTER COUPON CODE</h1>
          <h1 className=" text-sm text-gray-600">
            Enter your coupOn code to get extra discount.
          </h1>

          <div className=" flex">
            <input
              className=" border border-gray-300 w-full placeholder:px-2 placeholder:text-black py-2"
              type="text"
              placeholder="COUPON"
            />
            <button className=" hover:scale-105 duration-500 bg-black text-white py-2 px-14 ">
              APPLY
            </button>
          </div>
          <div className=" border-b border-gray-300 py-2"></div>
          <div className=" flex flex-col gap-2">
            <h1 className=" text-gray-600">PAYMENT DETAILS</h1>
            <div className=" flex justify-between items-center">
              <div className=" flex flex-col gap-1">
                <h1>Sub Total:</h1>
                <h1>Shipping Fee :</h1>
                <h1>Discount :</h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1>1450</h1>
                <h1>100</h1>
                <h1>130</h1>
              </div>
            </div>
          </div>
          <div className=" border-b border-gray-300 py-2"></div>
          <div className=" flex justify-between items-center">
            <h1>Grand Total :</h1>
            <h1>1420</h1>
          </div>
          <Link to={"/profile"} className=" flex hover:scale-y-105 duration-700 justify-center items-center gap-2 w-full bg-black text-white  py-2">
            <LuMoveLeft className=" bg-blue-600 text-white  rounded-sm cursor-pointer" />
            <button className="">EDIT SHIPPING ADDRESS</button>
          </Link>
          <div className=" flex hover:scale-y-105 duration-700 justify-center items-center gap-2 w-full bg-black text-white  py-2">
            <button className="">CHECK-OUT</button>
            <MdArrowRightAlt className=" bg-blue-600 text-white  rounded-sm cursor-pointer"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
