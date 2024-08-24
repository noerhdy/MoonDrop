import React, { useState, useEffect } from "react";
import HeadSection from "../fragments/HeadSection";
import AboutSection from "../fragments/AboutSection";
import ProductSection from "../fragments/ProductSection";
import NavbarSection from "../fragments/NavbarSection";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl";

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
      <div className="flex flex-col sm:flex-row w-full h-full fixed overflow-auto gap-2 px-2">
        {/* HeadSection dan elemen-elemen di bawahnya untuk layar mobile */}
        <div className="order-2 sm:order-2 w-full sm:w-1/2 h-full sm:py-2 py-0 sm:p-0 pt-16">
          <HeadSection />
          {/* Menampilkan elemen ini hanya pada layar desktop */}
          {!isMobile && (
            <div className="h-svh">
              <div className="bg-zinc-500 rounded-2xl h-fit mt-2 overflow-hidden">
                <AboutSection />
              </div>
              <div className="flex flex-col py-2 gap-2 rounded-2xl h-full">
                <div className="bg-black rounded-2xl h-2/5 overflow-hidden">
                  <div className={`${Tagline}`}>
                    <h1>MOONDROP</h1>
                  </div>
                </div>
                <div className="bg-black rounded-2xl h-3/5">5</div>
              </div>
            </div>
          )}
        </div>
        {/* Menampilkan elemen ini hanya pada layar mobile */}
        {isMobile && (
          <div className=" order-1   ">
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
              <div className="bg-black rounded-2xl h-3/5">5</div>
            </div>
          </div>
        )}

        {/* HeadSection untuk layar lebih besar */}
        <div className="order-3  sm:order-2 w-full sm:w-1/2 sm:sticky top-0 h-screen sm:py-2 py-0 relative">
          <ProductSection isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
