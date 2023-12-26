import React from "react";
import w1 from "../assets/w1.webp";
import w2 from "../assets/w2.webp";
import w4 from "../assets/w4.webp";
import shop5 from "../assets/shop5.webp";
import { Link } from "react-router-dom";

const Exclusive = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className=" flex justify-center"
    >
      <div className=" flex flex-col md:px-0 px-4 w-full md:w-11/12">
        <div className=" md:flex justify-between items-center">
          <img
            data-aos="fade-down-right"  data-aos-duration="2000"
            className=" md:w-5/12"
            src={shop5}
            alt=""
          />
          <div
            data-aos="fade-up-left" data-aos-duration="2000"
            className=" flex flex-col gap-5 md:w-6/12"
          >
            <h1 className=" text-3xl text-gray-800 font-bold">
              Res Jump Suit Jacket
            </h1>
            <h1 className=" text-md  text-black">
              Res Jump Suit jacket is a classic and stylish piece of outerwear
              that has been popular for decades. It is a versatile garment that
              can be worn in a variety of settings, from casual outings to more
              formal occasions. Bomber jackets were originally designed for
              pilots during World War II, and they have since become a staple of
              mens fashion.Mens bomber jackets are suitable for all seasons,
              making them a great investment for any wardrobe. They are perfect
              for layering over a t-shirt or sweater in the cooler months or for
              wearing on their own during the warmer months.
            </h1>
            <Link to={"/book"}>
              <h1 className=" justify-start bg-black  text-white w-max px-8 py-2 hover:scale-105 hover:duration-500">
                <button className="">BOOK NOW</button>{" "}
              </h1>
            </Link>
          </div>
        </div>
        <div className=" md:flex justify-between">
          <img className=" md:w-4/12" src={w1} alt="" />
          <img className=" md:w-3/12" src={w4} alt="" />
          <img className=" md:w-4/12" src={w2} alt="" />
        </div>
        <div className=" md:hidden flex ">
          <Link
            to={"/book"}
            className=" flex justify-center bg-black w-full text-white  py-2"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
