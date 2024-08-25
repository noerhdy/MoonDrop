import React from "react";

function HeadSection() {
  return (
    <div className="w-full sm:h-full h-full rounded-2xl relative overflow-hidden">
      <img
        className="w-full h-full object-cover duration-500 ease-in-out"
        src="./21.jpg"
        alt="Head Section Image"
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

export default HeadSection;
