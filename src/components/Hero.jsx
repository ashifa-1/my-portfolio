import resume from "../assets/Ashifa_resume.pdf";

function Hero() {
  return (
    <section id="home" className="min-h-screen text-white flex items-center relative overflow-hidden">

      
      {/* 🌟 Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* 🔹 Availability Badge */}
        <div className="mb-6">
          <span className="inline-block border border-yellow-500 text-yellow-400 px-4 py-1 rounded-full text-sm">
            ● Available for opportunities
          </span>
        </div>

        {/* 🧠 Name (ONLY gold here) */}
        <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="text-yellow-600">
            Mohammed Ahmad Ashifa
          </span>
        </h1>

        {/* 💼 Tagline */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mb-6">
          Software Developer | MERN | AI/ML
        </h2>

        {/* 📖 About */}
        <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
          I am a Computer Science student focused on building scalable, real-world applications 
          and AI-driven systems. My work revolves around full-stack development, LLM-based solutions, 
          and performance-optimized architectures. I enjoy solving complex problems, designing efficient 
          systems, and continuously improving my technical depth through hands-on projects and DSA practice.
        </p>

        {/* 🔘 Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
          >
            View Resume
          </a>

          <a
            href={resume}
            download
            className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>

        {/* 🔗 Links */}
        <div className="flex gap-6 text-gray-400 text-lg">
          <a href="https://github.com/ashifa-1" target="_blank" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://leetcode.com/ashifaaa" target="_blank" className="hover:text-blue-400">
            LeetCode
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;