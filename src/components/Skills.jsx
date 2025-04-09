import React from "react";
import adobe from "../assets/adobe.png";

const Skills = ({ img, title, desc }) => {
  return (
    <div className="p-4 border-[#30363d] rounded-lg border flex gap-x-4 items-center bg-[#161b22] hover:scale-105 transition skill">
      <img className="w-10 h-10" src={img} />
      <div>
        <h4 className="font-bold text-base mb-1 capitalize">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Skills;
