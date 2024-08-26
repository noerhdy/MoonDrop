import React from "react";
import ButtonCta from "../../elements/button/ButtonCta";

function BodyHome() {
  return (
    <div className=" relative overflow-hidden leading-tight ">
      <div className="p-[1.1rem] font-semibold h-full text-[1rem] sm:text-[2rem]  text-zinc-50 space-y-10">
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
          <ButtonCta classname="px-12 bg-zinc-800 hover:bg-zinc-900  text-zinc-200 hover:text-orange-500">
            More
          </ButtonCta>
        </div>
      </div>
    </div>
  );
}

export default BodyHome;
