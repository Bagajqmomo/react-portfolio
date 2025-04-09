import { useEffect } from "react";
import logo from "../assets/logo.png";
import { animate, createSpring } from "animejs";

const Navbar = () => {
  useEffect(() => {
    animate(".logo", {
      scale: [
        { to: 1.25, ease: "inOut(3)", duration: 200 },
        { to: 1, ease: createSpring({ stiffness: 300 }) },
      ],
      opacity: ["0", "1"],
    });
  });
  return (
    <nav className="flex justify-center p-4 items-center relative top-12 font-semibold bg-opacity-20 w-11/12 mx-auto rounded-2xl transition">
      <ul className="flex gap-x-8 md:gap-x-16 items-center text-md md:text-xl">
        <li>
          <a href="#home" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-primary">
            About
          </a>
        </li>
        <img src={logo} className="w-16 h-16 hidden sm:block logo" />
        <li>
          <a href="#works" className="hover:text-primary">
            Works
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
