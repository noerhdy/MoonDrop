import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SideProduct } from "../fragments/IndexProduct";
import IndexFooter from "../fragments/Footer/IndexFooter";
import NavbarSection from "../fragments/NavbarSection";

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
            <IndexFooter />
            {/* end Footer Mobile */}
          </div>
        )}
        {/* end Mobile */}

        <div className="order-3 sm:order-2 w-full sm:w-1/2  sm:sticky top-0 h-1/2 sm:h-screen sm:py-2 py-0 relative sm:p-0 pt-16">
          <SideProduct isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

export default MainLayout;
