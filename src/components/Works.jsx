import React from "react";
import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import pokedex from "../assets/portfolio/pokedex.png";
import aiqode from "../assets/portfolio/aiqode.png";
import bee from "../assets/portfolio/bee.png";
import store from "../assets/portfolio/comfy-store.png";
import histopia from "../assets/portfolio/histopia.png";
import harrypotter from "../assets/portfolio/harrypotter.png";
import { animate, utils, onScroll, stagger } from "animejs";

const projects = [
  {
    title: "Pokedex",
    image: pokedex,
    stack: ["NuxtJS", "VueJS", "SCSS"],
    description:
      "This is a Pokédex project built with Vue and styled using SCSS, designed to provide information on various Pokémon. The site includes interactive filtering by type, a search feature, and detailed Pokémon profiles with evolution chains. Images and data load dynamically to ensure a smooth browsing experience.",
    link: "https://pokedex-one-rosy-10.vercel.app/",
    imageClass: "h-full",
  },
  {
    title: "AiQode",
    image: aiqode,
    stack: ["NuxtJS", "VueJS", "SCSS"],
    description:
      "Empowering businesses with cutting-edge AI solutions to drive innovation, enhance efficiency, and unlock new opportunities. From smart automation to intelligent insights, AIQode delivers tailored technology for a smarter tomorrow.",
    link: "https://uat.aiqode.com/",
    imageClass: "h-64",
  },
  {
    title: "Beesness Empire",
    image: bee,
    stack: ["NuxtJS", "VueJS", "SCSS"],
    description:
      "Beesness Empire: Empowering entrepreneurs with innovative tools, strategies, and resources to build and grow successful businesses in the digital age.",
    link: "https://uat.beesnessempire.com/",
    imageClass: "h-64",
  },
  {
    title: "Comfy Store",
    image: store,
    stack: ["ReactJS", "Tailwind"],
    description:
      "React Training Project Welcome to Comfy Store, a React-based e-commerce project created as part of my React training journey! This app demonstrates essential React concepts and patterns, including state management, custom hooks, context API, and integration with third-party APIs.",
    link: "https://comfy-store-31r7uf1r6-cys-projects-66803da9.vercel.app/",
    imageClass: "h-64",
  },
  // {
  //   title: "Histopia",
  //   image: histopia,
  //   stack: ["Figma", "Unity", "C#"],
  //   description:
  //     "Histopia is an educational app incorporating Augmented Reality (AR), designed specifically for Standard 4 students. Developed as a group project for my final year, I was responsible for the UI/UX design and the coding aspects in Unity.",
  //   link: "https://www.youtube.com/watch?v=gmpOd7TS0RM",
  //   imageClass: "h-64",
  // },
  // {
  //   title: "Chamber Of Secret",
  //   image: harrypotter,
  //   stack: ["Figma", "Unity", "C#"],
  //   description:
  //     "Chamber of Secret is a short VR escape game where players must discover clues, solve puzzles, and complete tasks using spells. I was responsible for the coding aspects in Unity.",
  //   link: "https://youtu.be/_3OMY2C1Ebo",
  //   imageClass: "h-64",
  // },
];

const [container] = utils.$("#works");

const Works = () => {
  useEffect(() => {
    animate(".right", {
      translateX: ["1000", "1"],
      opacity: ["0", "1"],
      autoplay: onScroll({ container }),
    });
    animate(".left", {
      translateX: ["-1000", "1"],
      opacity: ["0", "1"],
      autoplay: onScroll({ container }),
    });
  }, []);

  return (
    <section className="container pb-32 pt-60">
      <SectionTitle text="Works" />
      <div className="grid grid-cols-1 gap-24">
        {projects.map(
          ({ title, image, stack, description, link, imageClass }, index) => (
            <div
              key={index}
              id="works"
              className={`works gap-4 flex-col lg:flex lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } `}
            >
              <div
                className={`p-6 border-[#30363d] rounded-lg border bg-[#161b22] basis-1/2 xxl:basis-1/3 flex items-center ${
                  index % 2 !== 0 ? "right" : "left"
                } `}
              >
                <img
                  className={`object-cover w-full ${imageClass} min-h-[350px]`}
                  src={image}
                  alt={title}
                />
              </div>
              <div
                className={`p-12 flex flex-col justify-center items-start basis-1/2 xxl:basis-2/3 ${
                  index % 2 !== 0 ? "left" : "right"
                } `}
              >
                <h4 className="text-2xl font-bold text-primary">{title}</h4>
                <ul className="flex text-lg justify-center gap-x-2 mt-2 text-gray-400">
                  {stack.map((tech, i) => (
                    <li key={i} className="tracking-wider text-sm">
                      - {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-lg ">{description}</p>
                <a href={link} className="p-2 mt-4 relative">
                  Demo
                  <span className="absolute left-2 top-10 w-1/2 h-[2px] bg-[#939AFF]" />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Works;
