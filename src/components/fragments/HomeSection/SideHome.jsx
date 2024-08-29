import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavbarSection from "../NavbarSection";

// Import gambar dari assets
import imageProductBlack1 from "@/assets/imgProduct/b_1.webp";
import imageProductBlack2 from "@/assets/imgProduct/b_2.webp";
import imageProductBlack3 from "@/assets/imgProduct/b_3.webp";
import imageProductWhite1 from "@/assets/imgProduct/w_1.webp";
import imageProductWhite2 from "@/assets/imgProduct/w_2.webp";
import imageProductWhite3 from "@/assets/imgProduct/w_3.webp";

// Gabungkan gambar dalam array
const images = [
  { src: imageProductBlack1, alt: "Slide 1" },
  { src: imageProductBlack2, alt: "Slide 2" },
  { src: imageProductBlack3, alt: "Slide 3" },
  { src: imageProductWhite1, alt: "Slide 4" },
  { src: imageProductWhite2, alt: "Slide 5" },
  { src: imageProductWhite3, alt: "Slide 6" },
];

const SideHome = ({ isMobile, children }) => {
  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      {!isMobile && (
        <div className="absolute h-auto top-5 w-full">
          <div className="flex flex-col justify-center">
            <NavbarSection />
          </div>
        </div>
      )}
      <div className="flex justify-center flex-col relative h-full items-center overflow-hidden rounded-[1.5rem]">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative rounded-[1.5rem] overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full m-12 md:m-0 bg-center object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-0 h-full w-full flex flex-col justify-between p-6">
        <h2 className="font-semibold text-5xl text-zinc-950"></h2>
        <h2 className="font-bold text-[2rem] md:text-7xl text-black">
          {/* Product Section */}
        </h2>
        <div className="flex z-10 justify-end">{children}</div>
      </div>
    </div>
  );
};

export default SideHome;
