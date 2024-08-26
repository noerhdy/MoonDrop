import React, { useState } from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavbarSection from "../NavbarSection";

const images = [
  { src: "img/img product/b_1.webp", alt: "Slide 1", category: "white" },
  { src: "img/img product/b_3.webp", alt: "Slide 2", category: "white" },
  { src: "img/img product/b_2.webp", alt: "Slide 3", category: "white" },
  { src: "img/img product/w_1.webp", alt: "Slide 4", category: "black" },
  { src: "img/img product/w_3.webp", alt: "Slide 5", category: "black" },
  { src: "img/img product/w_2.webp", alt: "Slide 6", category: "black" },
];

const SideProduct = ({ isMobile }) => {
  const [showColor, setShowColor] = useState("white");

  const filteredImages = images.filter((image) => image.category === showColor);

  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      {!isMobile && (
        <div className="absolute h-auto top-5 w-full">
          <div className="flex flex-col justify-center">
            <NavbarSection />
          </div>
        </div>
      )}
      <div className="flex justify-center h-full flex-col relative items-center overflow-hidden ">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]} // Ensure Autoplay module is included here
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative overflow-hidden"
        >
          {filteredImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-v  h-full sm:w-full sm:bg-none bg-[#e3e3e3] flex items-center justify-center overflow-hidden">
                <img
                  className="w-[300px] sm:w-full h-full object-cover bg-center"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1 sm:bottom-10 z-10 space-x-2">
          <button
            onClick={() => setShowColor("white")}
            className={`w-4 h-4 rounded-full border-2 border-zinc-800/50 ${
              showColor === "white"
                ? "bg-zinc-900 border-orange-500"
                : "bg-zinc-400"
            }`}
          ></button>
          <button
            onClick={() => setShowColor("black")}
            className={`w-4 h-4  rounded-full border-2 border-zinc-800/50 ${
              showColor === "black"
                ? "bg-zinc-50 border-orange-500 "
                : "bg-zinc-400  "
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SideProduct;
