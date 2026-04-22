function Projects() {
  const projectList = [
    {
        title: "RAG-Based Document Q&A System",
        desc: "Built a scalable retrieval pipeline using FAISS/Pinecone to handle large document datasets and reduce hallucinations by ~30%.",
        tech: "FastAPI, Python, FAISS, Pinecone, LLMs",
        github: "https://github.com/ashifa-1/rag-doc-qa",
        live: "#"
    },
    {
        title: "Real-Time Sentiment Analysis Dashboard",
        desc: "Developed a real-time sentiment analysis system using LSTM & transformers with ~90% accuracy and live data streaming.",
        tech: "Python, Deep Learning, React",
        github: "https://github.com/ashifa-1/sentiment-platform",
        live: "#"
    },
    {
        title: "LLM-Powered Prompt Router",
        desc: "Designed an intelligent routing system to classify intents and dispatch queries across multi-step AI workflows.",
        tech: "Python, LLMs, Prompt Engineering",
        github: "https://github.com/ashifa-1/llm-prompt-router",
        live: "#"
    },
    {
        title: "Semantic Document Search Engine",
        desc: "Built a vector-based semantic search system for context-aware document retrieval with efficient indexing.",
        tech: "Vector Embeddings, Python, Search Systems",
        github: "https://github.com/ashifa-1/semantic-document-search-engine",
        live: "#"
    }
    ];
  return (
    <section
    id="projects"
    className="min-h-screen px-6 py-16 md:py-20 bg-transparent text-white flex flex-col"
    >
    <h2 className="text-4xl font-bold text-center mb-10">
        My Projects 
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 max-w-6xl mx-auto">

            {projectList.map((project, index) => (
            <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-800 flex flex-col justify-between h=full"
            >
                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-3">
                    {project.desc}
                </p>

                <p className="text-sm mb-4">
                    {project.tech}
                </p>
                </div>

                <div className="flex gap-4 mt-auto">
                <a href={project.github} className="text-blue-400 hover:underline">
                    GitHub
                </a>
                <a href={project.live} className="text-green-400 hover:underline">
                    Live
                </a>
                </div>
            </div>
            ))}

        </div>
    </section>
  );
}

export default Projects;