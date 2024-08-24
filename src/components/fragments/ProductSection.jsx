import React from "react";

function ProductSection() {
  return (
    <div className="w-full sm:h-full h-full rounded-2xl relative overflow-hidden">
      <img
        className="w-full h-full object-cover duration-500 ease-in-out"
        src="./src/assets/2.jpg"
        alt="Head Section Image"
      />
      <div className="absolute top-0 h-full w-full flex flex-col justify-between p-6">
        <h2 className="font-semibold text-5xl text-zinc-950"></h2>
        <h2 className="font-bold text-[2rem] sm:text-7xl text-white">
          Product Section
        </h2>
      </div>
    </div>
  );
}

export default ProductSection;
