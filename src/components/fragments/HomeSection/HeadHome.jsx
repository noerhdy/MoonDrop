import React from "react";

function HeadHome() {
  return (
    <div className="w-full h-full rounded-[1.5rem] relative overflow-hidden">
      <img
        className="w-full h-dvh object-cover duration-500 ease-in-out"
        src="./21.jpg"
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
