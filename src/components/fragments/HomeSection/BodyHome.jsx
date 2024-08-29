import React from "react";
import ButtonCta from "../../elements/button/ButtonCta";

function BodyHome() {
  return (
    <div className=" relative overflow-hidden leading-loose ">
      <div className="p-[1.1rem] font-semibold h-full text-[1rem] text-justify sm:text-[1.2rem]  text-black space-y-4">
        <p> The Moondrop Space Travel</p>
        <p>
          TWS earbuds deliver high-resolution audio with Bluetooth V5.3, 13mm
          dynamic drivers, and a Titanium Dome diaphragm.
        </p>
        <p>
          They also include low-latency gaming mode and effective Active Noise
          Cancellation (ANC) for an immersive listening experience.
        </p>
        <div className="w-full flex sm:justify-start justify-end pb-2">
          <ButtonCta linkPage="/about" classname="sm:px-12 sm:py-6 px-10 py-4">
            More
          </ButtonCta>
        </div>
      </div>
    </div>
  );
}

export default BodyHome;
