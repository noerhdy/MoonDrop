import React, { useState, useEffect } from "react";
import HeadSection from "../../components/fragments/Section/HeadSection";
import NavbarSection from "../../components/fragments/Section/NavbarSection";
import FooterSection from "../../components/fragments/Section/FooterSection";
import AboutSection from "../../components/fragments/Section/AboutSection";
import ProductView from "../../components/fragments/Section/ProductView";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl overview-hidden";

function ProductPage() {
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
    <div className="order-4 sm:order-2 w-full sm:w-1/2 h-full sm:py-2 py-0 ">
      <ProductView />
      {/* Desktop */}
      {!isMobile && (
        <div className="h-svh">
          <div className="bg-zinc-500 rounded-2xl h-fit mt-2 overflow-hidden"></div>

          {/* Footer Desktop */}
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
          {/* endFooter Desktop */}
        </div>
      )}
      {/* end Desktop */}
    </div>
  );
}

export default ProductPage;
