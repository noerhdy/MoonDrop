import React from "react";
import NavbarSection from "./NavbarSection";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  { src: "img/img product/b(1).webp", alt: "Slide 1" },
  { src: "img/img product/b(2).webp", alt: "Slide 2" },
  { src: "img/img product/b(3).webp", alt: "Slide 3" },
  { src: "img/img product/w(2).png", alt: "Slide 4" },
  { src: "img/img product/w(2).webp", alt: "Slide 5" },
  { src: "img/img product/w(3).webp", alt: "Slide 6" },
];

const ProductSection = ({ isMobile }) => {
  return (
    <div className="w-full sm:h-full h-full rounded-2xl relative border-2 overflow-hidden">
      {!isMobile && (
        <div className="absolute top-5 w-full ">
          <div className="flex flex-col justify-center ">
            <NavbarSection />
          </div>
        </div>
      )}
      <div className="flex justify-center flex-col relative items-center overflow-hidden rounded-2xl">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative rounded-2xl overflow-hidden "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden ">
                <img
                  className="w-full h-full aspect-square object-cover "
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
        <h2 className="font-bold text-[2rem] sm:text-7xl text-white">
          Product Section
        </h2>
      </div>
    </div>
  );
};

export default ProductSection;
