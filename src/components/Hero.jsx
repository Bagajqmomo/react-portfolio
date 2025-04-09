import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { animate, createSpring } from "animejs";

const Hero = () => {
  // Create a ref for the Typed.js instance
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedTextRef.current, {
      strings: ["front-end developer _"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    animate(".desc", {
      scale: [
        { to: 1.25, ease: "inOut(3)", duration: 200 },
        { to: 1, ease: createSpring({ stiffness: 300 }) },
      ],
      opacity: ["0", "1"],
      delay: 500,
    });

    // Cleanup on component unmount
    return () => typed.destroy();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh_-_112px)] mt-12 text-white flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="font-[retro] text-xl sm:text-3xl md:text-4xl xl:text-7xl mb-8 md:mb-16">
          <span ref={typedTextRef}></span>
        </h1>
        <p className="tracking-widest text-md md:text-lg xl:text-xl text-primary mt-4 xl:mt-8 opacity-0 desc">
          "Turning ideas into dynamic, interactive, and visually stunning web
          experiences."
        </p>
        {/* Buttons */}
        {/* <div className="flex justify-center gap-6">
          <Link
            to="#works"
            className="btn  btn-outline btn-wide text-lg shadow-lg hover:bg-[#16043f] hover:text-white transition-all duration-300"
          >
            Resume
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
