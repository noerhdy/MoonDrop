import React, { useState, useEffect } from "react";
import HeadSection from "../fragments/Section/HeadSection";
import AboutSection from "../fragments/Section/AboutSection";
import ProductSection from "../fragments/Section/ProductSection";
import NavbarSection from "../fragments/Section/NavbarSection";
import FooterSection from "../fragments/Section/FooterSection";
import { Outlet } from "react-router-dom";
import ProductView from "../fragments/Section/ProductView";
import DetailsProduct from "../fragments/Section/DetailsProduct";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl overview-hidden";

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Menentukan batas ukuran mobile, di sini 640px (sm)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-screen">
      {/* start */}
      <div className="flex flex-col sm:flex-row w-full h-full fixed overflow-auto gap-2 px-2">
        <Outlet />
        {/* Mobile */}
        {isMobile && (
          <div className=" order-1">
            <NavbarSection />
          </div>
        )}
        {isMobile && (
          <div className=" order-last  ">
            {/* Footer Mobile */}
            <div className="flex flex-col py-2 gap-2 rounded-2xl h-screen ">
              <div className="bg-black rounded-2xl h-2/5">
                <div className={`${Tagline}`}>
                  <h1>MOONDROP</h1>
                </div>
              </div>
              <div className="bg-black rounded-2xl h-3/5">
                helo
                <FooterSection />
              </div>
            </div>
            {/* end Footer Mobile */}
          </div>
        )}
        {/* end Mobile */}

        <div className="order-3 sm:order-2 w-full sm:w-1/2 sm:sticky top-0 h-screen sm:py-2 py-0 relative sm:p-0 pt-16">
          <DetailsProduct isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

export default MainLayout;
