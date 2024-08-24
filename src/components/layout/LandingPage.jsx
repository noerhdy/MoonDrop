import React, { useState, useEffect } from "react";
import HeadSection from "../fragments/HeadSection";
import AboutSection from "../fragments/AboutSection";
import ProductSection from "../fragments/ProductSection";
import NavbarSection from "../fragments/NavbarSection";

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
              <div className="bg-blue-500 rounded-2xl h-3/4 mt-2 overflow-hidden">
                <AboutSection />
              </div>
              <div className="flex flex-col py-2 gap-2 rounded-2xl h-full">
                <div className="bg-zinc-900 rounded-2xl h-2/5 overflow-hidden">
                  <div className="w-full h-full items-start  font-semibold mx-4 text-zinc-200 flex flex-col  justify-center text-8xl">
                    <h1>MOON</h1>
                    <h1>DROP</h1>
                  </div>
                </div>
                <div className="bg-zinc-900 rounded-2xl h-3/5">5</div>
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
            <div className="bg-blue-500 rounded-2xl h-1/2 ">About</div>
            <div className="flex flex-col py-2 gap-2 rounded-2xl h-screen ">
              <div className="bg-yellow-700 rounded-2xl h-2/5">4</div>
              <div className="bg-yellow-500 rounded-2xl h-3/5">5</div>
            </div>
          </div>
        )}

        {/* HeadSection untuk layar lebih besar */}
        <div className="order-3  sm:order-2 w-full sm:w-1/2 sm:sticky top-0 h-screen sm:py-2 py-0 relative">
          <ProductSection />
          {!isMobile && (
            <div className="absolute top-5 w-full bg-zinc-100 ">
              <NavbarSection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
