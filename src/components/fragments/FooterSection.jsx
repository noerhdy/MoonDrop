import React from "react";
import ButtonCta from "../elements/button/ButtonCta";

function FooterSection() {
  return (
    <div className=" p-[1.1rem] h-auto">
      <div className=" font-semibold flex w-full sm:text-[0.875rem] text-[0.675rem] text-white ">
        <div className=" w-1/2 flex flex-col">
          <span>Home</span>
          <span>Product</span>
          <span>About Us</span>
          <span>Cart</span>
        </div>
        <div className=" w-1/2 flex flex-col">
          <span>Facebook</span>
          <span>X</span>
          <span>Instagram</span>
          <span>Youtube</span>
          <span>Threads</span>
        </div>
      </div>
      <div className="font-medium flex w-full sm:text-[0.875rem] text-[0.675rem] text-white mt-12">
        <p>
          MOONDROP expands through strategic partnerships and invests in R&D to
          enhance sound quality, collaborating with industry leaders and
          academia to drive innovation and fair competition.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
