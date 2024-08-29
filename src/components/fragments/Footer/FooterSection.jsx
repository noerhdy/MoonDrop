import React from "react";
import ButtonCta from "../../elements/button/ButtonCta";
import { NavLink } from "react-router-dom";

function FooterSection() {
  return (
    <div className=" p-[1.1rem] h-full flex flex-col justify-between">
      <div className=" font-semibold flex w-full sm:text-[0.875rem] text-[0.675rem] text-white ">
        <div className=" w-1/2 flex flex-col">
          <span>
            <NavLink to="/">Home</NavLink>
          </span>
          <span>
            <NavLink to="/about">About Us</NavLink>
          </span>
          <span>
            <NavLink to="/product">Product</NavLink>
          </span>
          <span>
            <NavLink to="/cart">Cart</NavLink>
          </span>
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
      <div className="font-medium flex  justify-end w-full sm:text-[0.875rem] text-[0.675rem] text-zinc-700 mt-12">
        <p>2024 NN</p>
      </div>
    </div>
  );
}

export default FooterSection;
