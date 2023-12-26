import shop1 from "../assets/shop1.webp";
import shop2 from "../assets/shop2.webp";
import shop3 from "../assets/shop3.webp";
import shop4 from "../assets/shop4.webp";
import shop5 from "../assets/shop5.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className=" md:py-0 md:px-0 px-4  pt-16 flex justify-center">
      <div className=" flex  md:w-11/12 w-full justify-center ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {Ticets.map((Ticet, index) => (
            <SwiperSlide>
              <div
                key={index}
                className=" md:flex items-center justify-between md:px-14 px-1"
              >
                <div
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  className=" flex flex-1   flex-col gap-4"
                >
                  <h1 className=" flex justify-center md:text-3xl text-2xl text-black font-bold">
                    {Ticet.type}
                  </h1>
                  <h2 className=" md:text-2xl  text-xl text-black/80">
                    {Ticet.name}
                  </h2>
                  <Link to="/book">
                    <div className=" flex justify-center  cursor-pointer  ">
                      <span className=" bg-black text-white px-8 py-3  text-md hover:scale-105 duration-300  border rounded-sm">
                        {Ticet.btn}
                      </span>
                    </div>
                  </Link>
                </div>
                <img
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className=" flex-1 bg-transparent "
                  src={Ticet.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

const Ticets = [
  {
    img: shop1,
    type: "BROCARDE 1.0",
    name: " Our values include the evolution development togetherness customer satisfaction,empowering.",
    btn: "PRE-ORDER",
  },
  {
    img: shop2,
    type: "BROCADE 2.0",
    name: " Growth is our philosophy change is our  community is our passion,and you at the heart.",
    btn: "PRE-ORDER",
  },
  {
    type: "BROCARDE 3.0",
    img: shop3,
    name: " We belive in chnage,we believe in growth, we believe in you we believe in growth.",
    btn: "PRE-ORDER",
  },
  {
    type: "BROCARDE 4.0",
    img: shop4,
    name: " We foster progress  growth cherish inclusivity put  first and empower the next generation.",
    btn: "PRE-ORDER",
  },
  {
    type: "BROCARDE 5.0",
    img: shop5,
    name: " At our belief in transformation in advancement in collabration in serving you.",
    btn: "PRE-ORDER",
  },
];
