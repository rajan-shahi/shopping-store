import React from "react";
import shop5 from "../assets/shop5.webp";
import shop2 from "../assets/shop2.webp";
import shop1 from "../assets/shop1.webp";
import { Link } from "react-router-dom";


const Customization = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex flex-col md:gap-0 gap-5 w-full md:px-0 px-4  md:w-10/12 justify-center items-center">
        {/* white */}
        <div className=" md:flex justify-start items-center">
          <img className=" flex-1" src={shop5} alt="" />
          <div className=" flex flex-col gap-4 flex-1">
            <h1 className=" md:text-4xl text-3xl text-black/80 font-bold flex-1">
              Speed Demons- White
            </h1>
            <h1 className=" text-md  text-White">
              Speed Demons sporting green jackets are a group of high-octane
              thrill-seekers who live for the adrenaline rush of fast cars and
              motorcycles. With a fierce determination and a love for speed,
              they race through the streets, their engines roaring, leaving a
              trail of awe and excitement behind them.
            </h1>
            <Link to={"/book"} className=" text-white bg-black w-max px-8 py-3 hover:scale-105 duration-500 ">
              REDEEM NOW
            </Link>{" "}
          </div>
        </div>
        {/* black */}
        <div className=" md:flex justify-end items-center">
          <img className=" flex-1 md:hidden flex" src={shop1} alt="" />
          <div className=" flex flex-col gap-4 flex-1">
            <h1 className=" md:text-4xl text-3xl text-black/80 font-bold flex-1">
              Speed Demons- Black
            </h1>
            <h1 className=" text-md  text-black">
              Speed Demons decked out in red jackets are a bold and fearless
              crew of speed freaks who live for the thrill of the race. With
              their high-performance vehicles revving, they tear up the roads
              with reckless abandon, pushing themselves to the limit and leaving
              a trail of excitement and danger in their wake.
            </h1>
            <Link to={"/book"} className=" text-white bg-black w-max px-8 py-3 hover:scale-105 duration-500 ">
              REDEEM NOW
            </Link>{" "}
          </div>
          <img className=" flex-1 md:flex  hidden" src={shop1} alt="" />
        </div>
        {/* green */}
        <div className=" md:flex justify-start items-center">
          <img className=" flex-1" src={shop2} alt="" />
          <div className=" flex flex-col gap-4 flex-1">
            <h1 className=" md:text-4xl text-3xl text-black/80 font-bold flex-1">
              Speed Demons- Green
            </h1>
            <h1 className=" text-md  text-White">
              Speed Demons wearing white jackets are a tight-knit community of
              speed enthusiasts who live for the rush of the open road. With a
              passion for high-performance vehicles, they push themselves and
              their machines to the limit, weaving through traffic and leaving a
              trail of excitement and awe in their wake.
            </h1>
            <Link to={"/book"} className=" text-white bg-black w-max px-8 py-3 hover:scale-105 duration-500 ">
              REDEEM NOW
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
