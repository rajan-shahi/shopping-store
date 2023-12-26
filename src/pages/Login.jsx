import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin=()=>{
    toast.success("Login Success")

  }
  return (
    <div className=" flex justify-center">
      <div className=" md:flex md:px-0 px-4 justify-between gap-10 w-full md:w-10/12 md:py-24 py-12">
        <div className=" flex flex-col  gap-2 flex-1">
          <h1 className=" border-b border-gray-300 py-4 text-xl  text-black font-bold">
            NEW CUSTOMERS
          </h1>
          <h1 className=" text-md text-black">
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </h1>
          <Link to={"/register"} className=" bg-black  flex justify-center text-white py-2 hover:scale-y-105 duration-500 ">
            REGISTER
          </Link>
        </div>
        <div className=" flex-1 flex flex-col gap-2">
          <h1 className=" border-b border-gray-300 py-4 text-xl  text-black font-bold">
            LOGIN
          </h1>
          <div className=" flex flex-col gap-3 py-3">
            <input
              className="  outline-black border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              name="email"
              type="email"
              placeholder="Enter Email Address"
            />
            <input
              className="  outline-black px-2 border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              name="number"
              type="number"
              placeholder="Enter Phone Number"
            />
            <input
              className="  px-2 outline-black border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="password"
              placeholder="Pasword"
            />{" "}
          </div>
          <div className=" flex pb-3 justify-between">
            <h1 className=" cursor-pointer text-blue-700 underline">
              Forgot password
            </h1>
            <h1 className=" cursor-pointer underline">Login via Email</h1>
          </div>
          <button onClick={handleLogin} className=" bg-black text-white py-2 hover:scale-y-105 duration-500 ">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
