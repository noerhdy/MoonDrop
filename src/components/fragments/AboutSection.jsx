import React from "react";

function AboutSection() {
  return (
    <div className=" flex flex-col justify-between items-start h-full relative overflow-hidden    leading-4">
      <div className="p-[1.1rem] font-semibold h-full text-3xl  text-zinc-50 space-y-10">
        <p> The Moondrop Space Travel</p>
        <p>
          TWS earbuds deliver high-resolution audio with Bluetooth V5.3, 13mm
          dynamic drivers, and a Titanium Dome diaphragm.
        </p>
        <p>
          They also include low-latency gaming mode and effective Active Noise
          Cancellation (ANC) for an immersive listening experience.
        </p>
      </div>
      <div className="   m-4">
        <button className="px-8 py-2 rounded-full bg-white text-black">
          learn more
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
