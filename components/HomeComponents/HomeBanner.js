"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { HomeBannerCardsData, HomeBannerSliderData } from "@/utils/data";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-4 left-10 z-10 cursor-pointer hover:bg-[#9f0a09] bg-white opacity-45 hover:opacity-100 text-black hover:text-white p-2 rounded-full shadow-md transition-all"
    onClick={onClick}
  >
    <FaChevronLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-4 left-20 z-10 cursor-pointer hover:bg-[#9f0a09] bg-white opacity-45 hover:opacity-100 text-black hover:text-white p-2 rounded-full shadow-md transition-all"
    onClick={onClick}
  >
    <FaChevronRight size={18} />
  </button>
);

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <div className="relative w-full h-screen">
      {/* Overlay Cards */}
      <div className="absolute lg:top-[75%] top-[65%] lg:p-0 p-5 lg:space-y-0 space-y-6 lg:left-[20%] transform -translate-y-1/2 lg:flex space-x-4 z-10">
        {HomeBannerCardsData.map((card, index) => (
          <div
            key={index}
            className="bg-[#FDFDF3] p-4 shadow-lg rounded-lg lg:w-[40%] w-full opacity-90 flex items-center gap-4"
          >
            <div>
              <Image
                src={card.imgUrl}
                alt="CM"
                width={card.imgWidth}
                height={card.imgHeight}
                className={card.imgClassName}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#9F0A09]">{card.title}</h3>
              <p className="text-lg font-bold pt-2">{card.subTitle}</p>
              <p className="text-md text-gray-600 pt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider */}
      <Slider {...settings} className="h-full">
        {HomeBannerSliderData.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <Image
              src={slide.imgUrl}
              alt={slide.imgAlt}
              layout="fill" // Covers full width & height
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
