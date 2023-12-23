import React, { useState } from "react";
import shop2 from "../assets/shop2.webp";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

const Booking = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const [done, setDone] = useState(false);
  const doneSucess = () => {
    setDone(!done);
  };

  return (
    <div className=" flex justify-center">
      <div className="md:flex md:px-0 px-4 justify-between md:w-11/12 w-full">
        <div className=" w-full md:w-5/12">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {BookImages.map((BookImage, index) => (
              <SwiperSlide>
                <div key={index}>
                  <img src={BookImage.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" flex flex-col gap-4 md:py-20  flex-1">
          <h1 className=" md:text-4xl text-3xl text-black">Bomber Jacket</h1>
          <h1 className=" text-md text-gray-800">
            Stylish and versatile jacket that is typically short in length, with
            a front zip closure
          </h1>
          <div className=" flex gap-5 items-center">
            <h1 className=" text-2xl text-black ">Colors:</h1>
            <span className=" bg-black h-5 w-5 cursor-pointer"></span>
            <span className="  bg-green-700 h-5 w-5 cursor-pointer"></span>
            <span className="  bg-red-700 h-5 w-5 cursor-pointer"></span>
            <span className="  bg-blue-700 h-5 w-5 cursor-pointer"></span>
            <span className=" bg-gray-700 h-5 w-5 cursor-pointer"></span>
          </div>
          <h1 className=" md:text-3xl  text-2xl text-black">NPR. 3700</h1>
          <span className=" flex  gap-4 items-center">
            <h1 className=" text-xl  text-black">Qty: </h1>
            <h1 onClick={decrease} className=" text-xl cursor-pointer">
              -
            </h1>
            <h1 className=" text-2xl">{count}</h1>
            <h1 onClick={increase} className=" text-xl cursor-pointer">
              +
            </h1>
          </span>
          <h1 className=" md:text-3xl text-2xl text-black">
            PRODUCTION DETAILS
          </h1>
          <span className=" text-md text-black">
            {" "}
            Speed Demons sporting green jackets are a group of high-octane
            thrill-seekers who live for the adrenaline rush of fast cars and
            motorcycles. With a fierce determination and a love for speed, they
            race through the streets, their engines roaring, leaving a trail of
            awe and excitement behind them.
          </span>
          <div className=" flex gap-5 md:pt-0 pt-4">
            <button
              onClick={doneSucess}
              className=" w-full flex-1 bg-black text-white py-2 hover:scale-105 hover:duration-500"
            >
              ADD TO CART
            </button>

            <Link
              to={"/buy"}
              className=" flex justify-center  items-center w-full flex-1 bg-black text-white  py-2 hover:scale-105 hover:duration-500"
            >
              BUY NOW
            </Link>
          </div>
          <div  onClick={doneSucess} className="  text-2xl text-green-600">
            {" "}
            {done && " Success Added To Cart"}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

const BookImages = [
  {
    img: shop2,
  },
  {
    img: b1,
  },
  {
    img: b2,
  },
];
