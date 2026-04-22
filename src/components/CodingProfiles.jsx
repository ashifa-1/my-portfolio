import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

function CodingProfiles() {
  const [active, setActive] = useState("leetcode");
  const [slide, setSlide] = useState(0);

  // Auto slide (only for leetcode)
  useEffect(() => {
    if (active !== "leetcode") return;

    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section
      id="CodingProfiles"
      className="min-h-screen bg-transparent text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Coding Dashboard 
      </h2>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6">
        
        {/* LEFT PANEL */}
        <div className="md:w-1/3">
          <div className="bg-gray-900 p-4 rounded-xl space-y-4">

            <button
              onClick={() => setActive("leetcode")}
              className={`w-full text-left p-4 rounded-lg transition ${
                active === "leetcode"
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
              }`}
            >
              <p className="font-semibold">LeetCode</p>
              <p className="text-sm text-gray-400">DSA Practice</p>
            </button>

            <button
              onClick={() => setActive("github")}
              className={`w-full text-left p-4 rounded-lg transition ${
                active === "github"
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
              }`}
            >
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-gray-400">Projects & Code</p>
            </button>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-2/3">

          {/* 🔥 LEETCODE WITH SLIDER */}
          {active === "leetcode" && (
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">

              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-semibold">LeetCode</h3>
                  <p className="text-gray-400 text-sm">@ashifaaa</p>
                </div>

                <a
                  href="https://leetcode.com/ashifaaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  View Profile ↗
                </a>
              </div>

              {/* SLIDER */}
              <div className="relative overflow-hidden">

                <div
                  className="flex transition-transform duration-1000 "
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >

                  {/* SLIDE 1 - STATS */}
                  <div className="w-full flex-shrink-0 space-y-6">

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">250+</p>
                        <p className="text-gray-400 text-sm">
                          Problems Solved
                        </p>
                      </div>

                      <div className="bg-black p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">Daily</p>
                        <p className="text-gray-400 text-sm">
                          Consistency
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm">Easy</p>
                        <div className="w-full bg-gray-700 h-2 rounded">
                          <div className="bg-green-500 h-2 rounded w-[24%]"></div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">Medium</p>
                        <div className="w-full bg-gray-700 h-2 rounded">
                          <div className="bg-yellow-500 h-2 rounded w-[14%]"></div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">Hard</p>
                        <div className="w-full bg-gray-700 h-2 rounded">
                          <div className="bg-red-500 h-2 rounded w-[0.4%]"></div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* SLIDE 2 - HEATMAP */}
                  <div className="w-full flex-shrink-0 flex justify-center items-center">
                    <a
                      href="https://leetcode.com/ashifaaa"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://leetcard.jacoblin.cool/ashifaaa?theme=dark&ext=heatmap"
                        alt="LeetCode Heatmap"
                        className="rounded-lg"
                      />
                    </a>
                  </div>

                </div>

                {/* DOT CONTROLS */}
                <div className="flex justify-center gap-4 mt-6">
                  {[0, 1].map((i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`w-3 h-3 rounded-full ${
                        slide === i ? "bg-yellow-400" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* 🔥 GITHUB */}
          {active === "github" && (
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">GitHub</h3>

                <a
                  href="https://github.com/ashifa-1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  View Profile ↗
                </a>
              </div>

              <div className="flex justify-center bg-gray-950 border border-gray-800 p-4 rounded-lg">
                <GitHubCalendar username="ashifa-1" />
              </div>

              <div className="flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ashifa-1&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="rounded-lg"
                />
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;