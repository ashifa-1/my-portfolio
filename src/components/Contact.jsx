import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERROR:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-transparent text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Let's Connect ✨
          </h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Whether it's an opportunity, collaboration, or just a tech conversation,
            feel free to reach out. I'm always open to meaningful discussions.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>mdashifa12@gmail.com</p>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="flex gap-6 mt-6 text-2xl text-gray-400">

          <a
            href="https://github.com/ashifa-1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashifa-mohammed/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/ashifaaa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 hover:scale-110 transition"
          >
            <SiLeetcode />
          </a>
        </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#111111] border border-gray-800 p-6 rounded-xl space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* SUCCESS TOAST */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Message sent successfully!!
        </div>
      )}
    </section>
  );
}

export default Contact;