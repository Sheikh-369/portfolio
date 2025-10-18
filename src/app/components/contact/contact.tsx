'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-rose-500">Contact</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <p className="text-lg text-zinc-300">
              I'm open to opportunities, collaborations, or just tech talk. Feel free to reach out!
            </p>

            <div className="space-y-3 mt-6 text-zinc-400">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-rose-400" />
                <span>sheikhzalam@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-rose-400" />
                <span>+977-9804951369</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-rose-400" />
                <span>Birtamode, Jhapa, Nepal</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-2xl">
              <a href="https://github.com/Sheikh-369" target="_blank" className="hover:text-rose-400 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/zunaid-sheikh/" target="_blank" className="hover:text-rose-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/share/17Loqa1ntH/?mibextid=wwXIfr" target="_blank" className="hover:text-rose-400 transition">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 text-white"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 text-white"
              required
            />
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
