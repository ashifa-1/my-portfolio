import { useEffect } from "react";

function Background() {
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

      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-black"></div>

      {/* Animated blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

      {/* Cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-3xl transition-all duration-100"
      ></div>

    </div>
  );
}

export default Background;