import React from "react";

function HeadAbout() {
  return (
    <section className="relative gap-2 flex flex-col">
      <div className="overflow-hidden leading-loose bg-zinc-800 w-full sm:h-dvh h-fit rounded-[1.5rem] flex flex-col justify-center items-center">
        <div className="p-[1.5rem] font-normal h-fit text-justify  text-[0.75rem] sm:text-[1rem]  text-zinc-100 space-y-4 ">
          <h1 className="font-semibold text-[1.5rem]">MOONDROP</h1>
          <p>
            Chengdu Shuiyueyu Technology Co., Ltd. Founded in 2015, this Chinese
            company integrates creativity, design, R&D, mass production, and
            marketing, earning trust for its MOONDROP brand's performance and
            design.
          </p>
          <p>
            The company offers smart and portable audio equipment, digital
            DAC/AMPs, software services, and ACGN products, with top-tier R&D
            labs and a global presence in over 20 countries.
          </p>
          <p>
            MOONDROP produces in-ear earphones, earbuds, and custom earphones,
            earning international awards and recognition as a top Hi-Fi audio
            brand in China in 2021.
          </p>
          <p>
            MOONDROP focuses on constant innovation through science and
            technology, aiming to advance electronic audio equipment and smart
            wearable devices for consumer benefit.
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative leading-loose bg-zinc-800 w-full h-full rounded-[1.5rem]">
        <div className="absolute bg-black/40 w-full h-full"></div>
        <div className="p-[1.5rem] absolute  font-normal text-[0.75rem] h-full w-full sm:text-[1rem] flex justify-center flex-col items-center text-zinc-100 space-y-4">
          <h1 className="font-semibold text-[1.2rem] w-full ">
            Dedication And Commitment of MOONDROP
          </h1>
          <p className="text-justify ">
            MOONDROP focuses on integrating diverse technologies in product R&D,
            exploring new materials and processes. With several patents in
            telecommunications and design, the company aims to boost innovation,
            explore technological frontiers, and support the industry's
            sustainable development.
          </p>
        </div>
        <img
          className=" object-cover w-full h-full sm:aspect-video aspect-square duration-500 ease-in-out"
          src="./22.jpg"
          alt="HeadImage"
        />
      </div>
    </section>
  );
}

export default HeadAbout;
