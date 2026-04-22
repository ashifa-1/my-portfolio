import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#020617] via-[#020617] to-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <CodingProfiles />
      <Contact />

    </div>
  );
}

export default App;