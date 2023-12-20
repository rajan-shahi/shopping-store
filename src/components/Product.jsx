import React from "react";
import shop1 from "../assets/shop1.webp";
import shop2 from "../assets/shop2.webp";
import shop3 from "../assets/shop3.webp";
import shop4 from "../assets/shop4.webp";
import shop5 from "../assets/shop5.webp";
import shop6 from "../assets/shop6.webp";
import shop7 from "../assets/shop7.webp";
import shop8 from "../assets/shop8.webp";
import { GoPlus } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const Product = () => {
  return (
    <div className=" flex  md:px-0 px-4 justify-center md:py-28 py-16">
      <div className=" flex flex-col w-full md:w-11/12">
        <div className=" md:text-3xl text-2xl text-black font-bold">
          RANGE EDITION SERIES
        </div>
        <div className=" grid md:grid-cols-4 sm:grid-cols-3">
          {products.map((Product, index) => (
            <div
              key={index}
              className=" group hover:border duration-300 hover:border-gray-200 relative border border-transparent rounded-md py-2"
            >
              <div className=" flex flex-col absolute pt-4 ml-64 group-hover:opacity-100 opacity-0  gap-2 text-2xl object-cover">
                <span className=" flex bg-black text-white font-bold p-1 hover:scale-110 duration-500 rounded cursor-pointer">
                  {Product.iconP}
                </span>
                <span className=" flex bg-black text-white font-bold p-1 hover:scale-110  duration-500 rounded  cursor-pointer">
                  {Product.iconE}
                </span>
              </div>
              <img className=" " src={Product.img} alt="" />
              <div className=" flex flex-col justify-center items-center">
                <h1 className="md:text-xl font-bold  hover:border-b-2  hover:border-black border-b-2 border-transparent duration-500 cursor-pointer">
                  {Product.name}
                </h1>
                <h1 className=" text-md hover:border-b-2  hover:border-black border-b-2 border-transparent duration-500 cursor-pointer">
                  {Product.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

const products = [
  {
    img: shop6,
    name: "SPEED DEMONS-BLACK",
    price: "NRP 3200",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop2,
    name: "SPEED DEMONS-GREEN",
    price: "NRP 3600",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop3,
    name: "SPEED DEMONS-YELLOW",
    price: "NRP 3100",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop4,
    name: "SPEED DEMONS-ORANGE",
    price: "NRP 3400",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop5,
    name: "SPEED DEMONS-WHITE",
    price: "NRP 3000",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop1,
    name: "SPEED DEMONS-Black",
    price: "NRP 3900",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop7,
    name: "SPEED DEMONS-BROWN",
    price: "NRP 3500",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
  {
    img: shop8,
    name: "SPEED DEMONS-BLUE",
    price: "3800",
    iconP: <GoPlus />,
    iconE: <IoEyeOutline />,
  },
];
