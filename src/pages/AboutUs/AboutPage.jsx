import React, { useState, useEffect } from "react";
import HeadProduct from "../../components/fragments/ProductSection/HeadProduct";
import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import HeadAbout from "../../components/fragments/About/HeadAbout";

export const Tagline =
  "w-full h-full items-center font-bold  text-white flex flex-col  justify-center text-[3rem] sm:text-8xl overview-hidden";

function AboutPage() {
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
    <div className="order-2 sm:order-2 w-full sm:w-1/2 sm:h-full h-fit sm:py-2 py-0 ">
      <HeadAbout />
      {/* Desktop */}
      {!isMobile && (
        <div className="h-svh">
          {/* Footer Desktop */}
          <IndexFooter />
          {/* endFooter Desktop */}
        </div>
      )}
      {/* end Desktop */}
    </div>
  );
}

export default AboutPage;
