import React from "react";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import a3 from "../assets/a3.webp";
import a4 from "../assets/a4.webp";

const Contact = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex justify-center flex-col gap-6 md:w-10/12 w-full md:px-0 px-4 pb-5 md:pt-24 pt-16">
        <h1 className=" flex justify-center md:text-3xl text-2xl text-black border-b pb-4 border-gray-300 font-bold">
          OUR STORES
        </h1>
        <div className=" md:flex justify-between">
          {stories.map((storie, index) => (
            <div key={index}>
              <img
                className=" h-full md:h-72 w-full md:w-72 md:py-16 py-10 object-cover"
                src={storie.img}
                alt=""
              />
              <div className=" flex justify-center items-center flex-col gap-1">
                <h1 className=" text-xl text-black font-bold">
                  {storie.email}
                </h1>
                <h2 className=" text-gray-600">{storie.mobile}</h2>
                <h3 className=" text-xl text-black">{storie.location}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-4 md:pt-20 pt-10">
          <h1 className=" flex justify-center md:text-3xl text-2xl text-black  font-bold">
            CONTACT US
          </h1>
          <div className=" flex flex-col gap-6">
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="text"
              placeholder="Full Name"
            />{" "}
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="email"
              name="email"
              placeholder="Email Address"
            />{" "}
            <input
              className="  w-full border border-gray-300 py-2 placeholder:px-2 placeholder:text-gray-700"
              type="Number"
              placeholder="Phone NUmber"
            />{" "}
            <textarea className="  w-full border border-gray-300 py-2 h-[300px] "></textarea>
            <button className=" w-full bg-black  flex justify-center text-white py-2 hover:scale-y-105 duration-500 ">
             Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const stories = [
  {
    img: a1,
    email: "brocade.kathmandu@gmail.com",
    mobile: "9852163204",
    location: "Kathmandu Nepal",
  },
  {
    img: a2,
    email: "brocade.surkhet@gmail.com",
    mobile: "9811203750",
    location: "Surkhet Nepal",
  },
  {
    img: a3,
    email: "brocade.pokhara@gmail.com",
    mobile: "980512387",
    location: "Pokhara Nepal",
  },
  {
    img: a4,
    email: "brocade.nepaljung@gmail.com",
    mobile: "9866448209",
    location: "Nepaljung Nepal",
  },
];
