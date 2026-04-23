import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function Background() {

  // Load particles engine
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Cursor glow movement
  useEffect(() => {
    const move = (e) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* 🌌 Gradient Mesh Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-black"></div>

      {/* ✨ Floating Gradient Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[-200px] left-[-200px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-[-200px] right-[-200px]"></div>

      {/* 🌐 Particles Layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#3b82f6" },
            links: {
              enable: true,
              color: "#3b82f6",
              distance: 150,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
              },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* 🧊 Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🖱️ Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-3xl transition-all duration-100"
      ></div>

    </div>
  );
}

export default Background;