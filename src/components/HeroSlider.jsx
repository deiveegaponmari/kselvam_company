import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const api = require("../api/apiConfig");

function HeroSlider() {
  const [imageSlides, setImageSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await api.get("/getslide");
      console.log(response.data);
      setImageSlides(response.data);
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 3000 }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {/* Slide 1 — HERO SECTION */}
      <SwiperSlide>
        <div className="bg-blue-600 text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between h-[450px]">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              K Selvam Sounds & Hollow Blocks
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Providing premium sound systems, event management, and
              construction-quality hollow blocks.
            </p>

            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200"
            >
              Contact Us
            </a>
          </div>

          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765348338/WhatsApp_Image_2025-12-08_at_15.19.34_f2d85b75_u6lcxz.jpg"
            className="w-64 md:w-80 rounded-full mt-8 md:mt-0 shadow-xl"
            alt="hero"
          />
        </div>
      </SwiperSlide>

      {/* Image Slides */}
      {imageSlides.map((img, index) => (
        <SwiperSlide key={img._id}>
          <img
            src={img.imageUrl}
            alt="slide"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
