import React, { useState, useEffect } from "react";

// Array gambar yang akan dipilih secara acak
const images = ["./bg_homeW.webp", "./bg_homeB.webp"];

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
  const [imageLoaded, setImageLoaded] = useState(false); // State untuk melacak apakah gambar sudah dimuat

  useEffect(() => {
    // Pilih gambar dan teks secara acak dari array
    setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    setCurrentText(texts[Math.floor(Math.random() * texts.length)]);
  }, []);

  // Fungsi untuk menangani ketika gambar selesai dimuat
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      <img
        className={`w-full h-full object-cover duration-500 rounded-[1.5rem] ease-in-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={currentImage}
        alt="HeadImage"
        loading="lazy"
        onLoad={handleImageLoad}
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
