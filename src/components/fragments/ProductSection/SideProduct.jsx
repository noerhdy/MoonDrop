import React, { useState } from "react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NavbarSection from "../NavbarSection";
import { dataProducts } from "@/constants"; // Sesuaikan dengan path ke file dataProducts

const SideProduct = ({ isMobile, setSelectedColor }) => {
  const [selectedColor, setSelectedColorState] = useState("black");

  // Filter produk berdasarkan warna yang dipilih
  const filteredProduct = dataProducts.find((product) =>
    product.slug.includes(selectedColor)
  );
  const images = filteredProduct ? filteredProduct.images : [];

  const handleColorChange = (color) => {
    setSelectedColorState(color);
    setSelectedColor(color);
  };

  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      {!isMobile && (
        <div className="absolute h-auto top-5 w-full">
          <div className="flex flex-col justify-center">
            <NavbarSection />
          </div>
        </div>
      )}
      <div className="flex justify-center h-full flex-col relative items-center overflow-hidden">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          className="w-full h-full relative overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full rounded-[1.5rem] bg-[#e3e3e3] flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover bg-center"
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1 sm:bottom-10 z-10 space-x-2">
          {/* Button untuk mengubah warna */}
          <button
            onClick={() => handleColorChange("black")}
            className={`w-4 h-4 rounded-full border-2 ${
              selectedColor === "black"
                ? "bg-zinc-900 border-orange-500"
                : "bg-zinc-400"
            }`}
          ></button>
          <button
            onClick={() => handleColorChange("white")}
            className={`w-4 h-4 rounded-full border-2 ${
              selectedColor === "white"
                ? "bg-zinc-50 border-orange-500"
                : "bg-zinc-400"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SideProduct;
