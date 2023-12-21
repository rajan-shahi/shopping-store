import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col w-10/12 py-24 gap-4">
        <h1 className="  border-b border-gray-300 pb-4">CREATE ACCOUNT</h1>
        <div className=" grid grid-cols-2 gap-4 ">
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="name"
            placeholder="First Name"
          />
          <input
            className=" border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="email"
            name="email"
            placeholder="Email Address"
          />{" "}
          <input
            className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="number"
            placeholder=" Enter Phone Number"
          />{" "}
          <input
            className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="password"
            placeholder="Password"
          />{" "}
          <input
            className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
            type="password"
            placeholder="Confirm Password"
          />{" "}
        </div>
        <div className=" flex gap-4">
          <input type="checkbox" />
          <h1 className=" text-md text-black">
            I agree to terms and conditions.
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <button className=" w-full bg-black  flex justify-center text-white py-2 hover:scale-y-105 duration-500 ">
            REGISTER
          </button>
          <h1 className=" flex justify-center">
            <Link to={"/login"} className=" underline">Back to Login</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
