import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Load full tsparticles engine
  };

  const particlesOptions = {
    fpsLimit: 120,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#2b0943"], // Particle color
      },
      shape: {
        type: ["star", "circle", "polygon", "square"], // Particle shape
      },
      opacity: {
        value: 0.2,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <div className="absolute z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

export default ParticleBackground;
