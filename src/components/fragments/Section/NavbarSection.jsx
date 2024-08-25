import React from "react";
import ButtonNav from "../../elements/ButtonNav";

function NavbarSection() {
  return (
    <nav className="fixed left-2 sm:right-0 sm:left-0 right-2 sm:mx-4 mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 sm:bg-transparent bg-black sm:top-0 top-0 sm:relative z-50 my-2 p-1 sm:border-none border border-zinc-500/40  rounded-2xl">
      <div className="flex gap-2 sm:justify-end justify-center">
        <ButtonNav linkPage="/" classname="active-class">
          Home
        </ButtonNav>
        <ButtonNav linkPage="product" classname="active-class">
          Product
        </ButtonNav>
        <ButtonNav linkPage="/b" classname="active-class">
          About Us
        </ButtonNav>
        <ButtonNav linkPage="/a" classname="active-class">
          Cart
        </ButtonNav>
      </div>
    </nav>
  );
}

export default NavbarSection;
