import { useState } from "react";
import {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaJava
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiCplusplus, SiMongodb,
  SiMysql, SiDjango, SiFastapi, SiTailwindcss
} from "react-icons/si";

const skillSections = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaNodeJs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: "📊" },
      { name: "OOP", icon: "🧩" },
      { name: "OS", icon: "🖥️" },
      { name: "DBMS", icon: "💾" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "NLP", icon: "🗣️" },
      { name: "Deep Learning", icon: "🤖" },
      { name: "RAG", icon: "🔎" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

function Skills() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % skillSections.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? skillSections.length - 1 : prev - 1));

  const current = skillSections[index];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-400 mb-12">
          Full-stack + AI engineer with strong CS fundamentals
        </p>

        {/* Glass Card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-2xl"></div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl opacity-70 hover:opacity-100"
          >
            ›
          </button>

          {/* Content */}
          <div className="relative z-10 transition-all duration-500 ease-in-out">

            <h3 className="text-2xl font-semibold mb-8 text-yellow-500">
              {current.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">

              {current.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group w-28 h-28 flex flex-col items-center justify-center rounded-xl 
                  bg-black/40 border border-gray-700
                  hover:border-blue-500 hover:scale-110
                  transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:text-blue-400 transition">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 gap-2">
            {skillSections.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-yellow-500 w-4" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;