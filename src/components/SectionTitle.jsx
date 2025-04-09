import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="relative inline-block mb-16">
      <h2 className="text-2xl font-bold tracking-widest">{text}</h2>
      <span className="absolute left-0 top-12 w-1/2 h-[5px] bg-[#939AFF] "></span>
    </div>
  );
};

export default SectionTitle;
