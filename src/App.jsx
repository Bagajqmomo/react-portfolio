// import RoomThreeD from "./components/RoomThreeD";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import ParticleBackground from "./components/ParticleBackground";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
      </div>
    </>
  );
}

export default App;
