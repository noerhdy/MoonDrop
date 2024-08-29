import React, { useState, useEffect } from "react";
import { HeadHome, BodyHome, SideHome } from "../fragments/IndexHome";
import ButtonCta from "../elements/button/ButtonCta";
import IndexFooter from "../fragments/Footer/IndexFooter";
import NavbarSection from "../fragments/NavbarSection";

function LandingLayout() {
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
    <section className="h-dvh">
      {/* start */}
      <div className="flex flex-col sm:flex-row w-full h-full fixed overflow-auto gap-2 px-2">
        <div className="order-2 sm:order-2 w-full sm:w-1/2 h-full sm:py-2 py-0 ">
          <HeadHome />

          {/* Desktop */}
          {!isMobile && (
            <div className="h-screen">
              <div className="bg-[#e2e2e2] rounded-[1.5rem] h-fit mt-2 overflow-hidden">
                <BodyHome />
              </div>

              {/* Footer Desktop */}
              <IndexFooter />
              {/* endFooter Desktop */}
            </div>
          )}
          {/* end Desktop */}
        </div>

        {/* Mobile */}
        {isMobile && (
          <div className=" order-1 sm:mb-0 mb-16 ">
            <NavbarSection />
          </div>
        )}
        {isMobile && (
          <div className=" order-last  ">
            <div className="bg-[#e2e2e2] rounded-[1.5rem] h-fit ">
              <BodyHome />
            </div>

            {/* Footer Mobile */}
            <IndexFooter />
            {/* end Footer Mobile */}
          </div>
        )}
        {/* end Mobile */}

        <div className="order-3 sm:order-2 w-full sm:w-1/2 sm:sticky top-0 h-screen sm:py-2 py-0 relative">
          <SideHome isMobile={isMobile}>
            <ButtonCta
              linkPage="/product"
              classname="sm:px-12 sm:py-6 px-10 py-4"
            >
              View Details
            </ButtonCta>
          </SideHome>
        </div>
      </div>
    </section>
  );
}

export default LandingLayout;
