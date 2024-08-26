import React from "react";
import TaglineSection from "./TaglineSection";
import FooterSection from "./FooterSection";

function IndexFooter() {
  return (
    <div className="flex flex-col py-2 gap-2 h-svh">
      <div className="bg-black rounded-[1.5rem] h-2/5 w-full">
        <TaglineSection />
      </div>
      <div className="bg-black rounded-[1.5rem] h-3/5 overflow-hidden">
        <FooterSection />
      </div>
    </div>
  );
}

export default IndexFooter;
