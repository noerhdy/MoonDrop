import React, { useState, useEffect } from "react";

// Array gambar yang akan dipilih secara acak
const images = ["./23.jpg", "./24.jpg"];

// Array teks yang akan dipilih secara acak
const texts = [
  "Elevate Your Sound to Galactic Heights",
  "Experience the Cosmos in Every Note",
  "Navigate Space with Unmatched Audio Precision",
  "Accurate Performance Wireless Experience",
];

function HeadHome() {
  // State untuk menyimpan gambar dan teks yang dipilih
  const [currentImage, setCurrentImage] = useState("");
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    // Pilih gambar dan teks secara acak dari array
    setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
  }, []);

  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      <img
        className="w-full h-dvh object-cover duration-500 ease-in-out"
        src={currentImage}
        alt="HeadImage"
      />
      <div className="absolute top-0 h-full w-full flex flex-col justify-between p-6">
        <h2 className="font-semibold text-[1.75rem] sm:text-5xl text-zinc-50  antialiased">
          {currentText}
        </h2>
        <h2 className="font-bold text-[3rem] sm:text-7xl text-zinc-50">
          MOONDROP
        </h2>
      </div>
    </div>
  );
}

export default HeadHome;
