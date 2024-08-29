import React, { useState, useEffect } from "react";
import IndexFooter from "../../components/fragments/Footer/IndexFooter";
import HeadAbout from "../../components/fragments/About/HeadAbout";

function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

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
    <>
      <div className="order-2 lg:order-2 w-full lg:w-1/2 lg:h-full h-fit lg:py-2 py-0 ">
        <HeadAbout />
        {/* Desktop */}
        {!isMobile && (
          <div className="h-screen">
            {/* Footer Desktop */}
            <IndexFooter />
            {/* endFooter Desktop */}
          </div>
        )}
      </div>
    </>
  );
}

export default AboutPage;
