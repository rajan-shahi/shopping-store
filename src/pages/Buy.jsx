import React from "react";

const Buy = () => {
  return (
    <div className=" flex justify-center">
      {/* container */}
      <div className=" flex justify-between w-full md:px-0 px-4 md:w-11/12 gap-2 py-20">
        {/* leftBar-Container */}
        <div className=" flex flex-col gap-4 md:flex-1">
          <div className=" flex flex-col gap-1">
            <h1>express checkout</h1>
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
          <div className=" border-b border-gray-300 py-6"></div>
          <div className=" flex justify-between items-center py-3">
            <h1>OR CONTINUE HERE</h1>
            <h1 className=" md:text-md text-sm text-gray-600">
              Already have an account{" "}
              <span className=" cursor-pointer underline text-blue-600 md:text-xl px-1">
                Login
              </span>
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
          <div className=" w-full pt-7">
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder="Notes"
            />
          </div>
          <button className=" bg-black py-3 text-white hover:scale-y-105 hover:duration-500">
            VERYFY PHONE NUMBER
          </button>
          <div className="  flex justify-center pt-9">
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
        <div className=" md:flex-1"></div>
      </div>
    </div>
  );
};

export default Buy;
