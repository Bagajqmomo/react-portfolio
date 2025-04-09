import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Skills from "./Skills";
import adobe from "../assets/adobe.png";
import web from "../assets/web.png";
import keyframe from "../assets/keyframe.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { animate, utils, onScroll, stagger } from "animejs";

const [container] = utils.$("#about");
const debug = true;

const About = () => {
  useEffect(() => {
    animate(".intro", {
      translateX: ["1000", "1"],
      opacity: ["0", "1"],
      autoplay: onScroll({ container }),
    });
    animate(".aboutImg", {
      translateX: ["-1000", "1"],
      opacity: ["0", "1"],
      autoplay: onScroll({ container }),
    });
    animate(".skill", {
      opacity: ["0", "1"],
      delay: stagger(100),
      autoplay: onScroll({ container }),
    });
  }, []);

  return (
    <section className="container my-auto relative" id="about">
      <SectionTitle text="About" />
      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-8 items-center">
        <DotLottieReact
          className="w-full aboutImg"
          src="https://lottie.host/c5319d02-d644-4af9-a191-33d0ceac7a68/xu1C5bp0Hn.lottie"
          loop
          autoplay
        />
        <div className="flex flex-col gap-y-4 intro">
          <h3 className="text-xl text-light font-semibold">Hang Chang Yun</h3>
          <p className="text-base leading-8">
            I'm a passionate Frontend Developer focused on creating interactive,
            visually appealing web experiences. With a strong emphasis on modern
            design and user-friendly interfaces, I bring ideas to life through
            clean code and innovative solutions. Let's collaborate and build
            something extraordinary!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        <Skills
          img={adobe}
          title="Adobe & Figma"
          desc="Design and edit visuals, create vector graphics, and build interactive prototypes using Adobe Suites and Figma."
        />
        <Skills
          img={web}
          title="Web Development"
          desc="Build responsive and dynamic websites using HTML, CSS, JavaScript, Vue.js, React.js"
        />
        <Skills
          img={keyframe}
          title="Web Animation & Motion Design"
          desc="Create engaging animations with CSS, JavaScript, and Lottie for enhanced user experiences."
        />
      </div>
    </section>
  );
};

export default About;
