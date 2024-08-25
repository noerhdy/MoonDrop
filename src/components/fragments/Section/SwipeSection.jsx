import React from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  { src: "carousel/4.webp", alt: "Slide 1" },
  { src: "carousel/2.webp", alt: "Slide 2" },
  { src: "carousel/1.webp", alt: "Slide 3" },
  { src: "carousel/3.webp", alt: "Slide 4" },
];

const SwipeSection = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
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
        <button
          onClick={() => handleClick("https://www.instagram.com/Oatside")}
          className="absolute group bottom-0 w-full  z-[20] flex items-center  ease-in-out duration-500 justify-center sm:rounded-none rounded-xl"
        >
          <div className="justify-center flex flex-col w-full py-4 items-center  group-hover:scale-125 group-hover:bg-blue-500/80 group-hover:text-[#fee6e5] ease-in-out duration-500 bg-neutral-800/70 text-white font-semibold text-[1rem] ">
            <h1>Join Community</h1>
            <h1>@Oatside</h1>
          </div>
        </button>
      </div>
    </>
  );
};

export default SwipeSection;
