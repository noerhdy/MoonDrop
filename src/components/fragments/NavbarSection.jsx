import React from "react";
import ButtonNav from "../elements/ButtonNav";

function NavbarSection() {
  return (
    <div className="">
      <nav className="fixed inset-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-black ml-2 mr-6 sm:top-0 top-0 sm:relative z-50 my-2 p-1  sm:border-none border border-zinc-500 sm:rounded-2 xl rounded-full">
        <div className="flex gap-2  ">
          <ButtonNav OnClick="">Home</ButtonNav>
          <ButtonNav OnClick="">Product</ButtonNav>
          <ButtonNav OnClick="">About Us</ButtonNav>
          <ButtonNav OnClick="">Cart</ButtonNav>
        </div>
      </nav>
    </div>
  );
}

export default NavbarSection;
