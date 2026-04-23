import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Background from "./components/Background";

function App() {
  return (
    <div className=" text-white">

      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Contact />

    </div>
  );
}

export default App;