import React from "react";
import AccordionProduct from "./AccordionProduct";

function HeadProduct({ selectedColor }) {
  return (
    <section className="relative gap-2 flex flex-col">
      <div className="overflow-hidden leading-loose bg-zinc-800 w-full h-full rounded-[1.5rem] ">
        <div className="p-[1.5rem] font-normal h-fit text-justify  text-[0.75rem] sm:text-[1rem]  text-zinc-100 ">
          <div className="flex w-full justify-between items-start">
            <div className="flex  text-start flex-col">
              <div className=" leading-normal">
                <h1 className="font-semibold text-[1.2rem]">
                  MOONDROP SPACE TRAVEL
                </h1>
                <p className="font-semibold text-[0.675rem]">
                  True Wireless Stereo
                </p>
              </div>
              <p className="font-semibold text-[0.875rem]">
                {selectedColor === "white" ? "White" : "Black"}
                {/* state awal text hitam / black */}
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-[1.2rem] normal-nums">
                $24.99
              </h1>
              <p className="font-semibold text-[0.875rem] text-end normal-nums line-through">
                $29.99
              </p>
            </div>
          </div>
          <div>
            <AccordionProduct />
          </div>
          <p>
            Chengdu Shuiyueyu Technology Co., Ltd. Founded in 2015, this Chinese
            company integrates creativity, design, R&D, mass production, and
            marketing, earning trust for its MOONDROP brand's performance and
            design.
          </p>
        </div>
      </div>
      {/* <div className="overflow-hidden relative leading-loose bg-zinc-800 w-full h-full rounded-[1.5rem]">
        <div className="absolute bg-black/40 w-full h-full"></div>
        <div className="p-[1.5rem] absolute  font-normal text-[0.75rem] h-full sm:text-[1rem]  text-zinc-100 space-y-4">
          <h1 className="font-semibold text-[1.2rem]">
            Dedication And Commitment of MOONDROP
          </h1>
          <p className="text-justify">
            MOONDROP focuses on integrating diverse technologies in product R&D,
            exploring new materials and processes. With several patents in
            telecommunications and design, the company aims to boost innovation,
            explore technological frontiers, and support the industry's
            sustainable development.
          </p>
        </div>
        <img
          className=" object-cover w-full h-full aspect-video duration-500 ease-in-out"
          src="./22.jpg"
          alt="HeadImage"
        />
      </div> */}
    </section>
  );
}

export default HeadProduct;
