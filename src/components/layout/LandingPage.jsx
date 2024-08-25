import React, { useState, useEffect } from "react";
import HeadSection from "../fragments/HeadSection";
import AboutSection from "../fragments/AboutSection";
import ProductSection from "../fragments/ProductSection";
import NavbarSection from "../fragments/NavbarSection";
import FooterSection from "../fragments/FooterSection";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl overview-hidden";

function LandingPage() {
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
        <div className="order-2 sm:order-2 w-full sm:w-1/2 h-full sm:py-2 py-0 sm:p-0 pt-16">
          <HeadSection />
          {/* Desktop */}
          {!isMobile && (
            <div className="h-svh">
              <div className="bg-zinc-500 rounded-2xl h-fit mt-2 overflow-hidden">
                <AboutSection />
              </div>
              <div className="flex flex-col py-2 gap-2 rounded-2xl h-full">
                <div className="bg-black rounded-2xl h-2/5">
                  <div className={`${Tagline}`}>
                    <h1>MOONDROP</h1>
                  </div>
                </div>
                <div className="bg-black rounded-2xl h-3/5 overflow-hidden">
                  <FooterSection />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Mobile */}
        {isMobile && (
          <div className=" order-1">
            <NavbarSection />
          </div>
        )}
        {isMobile && (
          <div className=" order-last  ">
            <div className="bg-zinc-500 rounded-2xl h-fit ">
              <AboutSection />
            </div>
            <div className="flex flex-col py-2 gap-2 rounded-2xl h-screen ">
              <div className="bg-black rounded-2xl h-2/5">
                <div className={`${Tagline}`}>
                  <h1>MOONDROP</h1>
                </div>
              </div>
              <div className="bg-black rounded-2xl h-3/5">
                <FooterSection />
              </div>
            </div>
          </div>
        )}
        {/* end */}
        <div className="order-3  sm:order-2 w-full sm:w-1/2 sm:sticky top-0 h-screen sm:py-2 py-0 relative">
          <ProductSection isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
