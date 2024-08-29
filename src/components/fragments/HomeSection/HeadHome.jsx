import React, { useState, useEffect } from "react";

function HeadHome() {
  // Array gambar yang akan dipilih secara acak
  const images = ["./21.jpg", "./23.jpg", "./24.jpg"];

  // State untuk menyimpan gambar yang dipilih
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    // Pilih gambar secara acak dari array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);
  }, []);

  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      <img
        className="w-full h-dvh object-cover duration-500 ease-in-out"
        src={currentImage}
        alt="HeadImage"
      />
      <div className="absolute top-0 h-full w-full flex flex-col justify-between p-6">
        <h2 className="font-semibold text-[1.75rem] sm:text-5xl text-zinc-50">
          Accurate Performance <br />
          Wireless Experience
        </h2>
        <h2 className="font-bold text-[3rem] sm:text-7xl  text-zinc-50">
          MOONDROP
        </h2>
      </div>
    </div>
  );
}

export default HeadHome;
