import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SideProduct } from "../fragments/IndexProduct";
import IndexFooter from "../fragments/Footer/IndexFooter";
import NavbarSection from "../fragments/NavbarSection";
import ScrollToTop from "../fragments/ScrollToTop";

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black"); // state awal warna hitam

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Menentukan batas ukuran mobile, di sini 640px (sm)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-screen">
      <ScrollToTop />
      <div className="flex flex-col lg:flex-row w-full h-full fixed overflow-auto gap-2 px-2">
        <Outlet context={{ isMobile, selectedColor, setSelectedColor }} />
        {isMobile && (
          <div className="order-1 mb-16 lg:mb-0">
            <NavbarSection />
          </div>
        )}
        {isMobile && (
          <div className=" order-last  ">
            <IndexFooter />
          </div>
        )}

        <div className="order-3 lg:order-2 w-full lg:w-1/2  lg:sticky top-0 h-1/2 lg:h-screen lg:py-2 py-0 relative ">
          <SideProduct
            isMobile={isMobile}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
    </section>
  );
}

export default MainLayout;
