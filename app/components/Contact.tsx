import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="px-8 lg:px-16 py-24 text-center">

      <h2 className="text-5xl text-white font-bold mb-6">
        Let's Create Something Amazing
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-12">
        I'm always open to discussing new projects, collaborations,
        or opportunities. Feel free to reach out.
      </p>

      {/* Contact buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">

        <a
          href="mailto:sheikhzalam@gmail.com"
          className="flex items-center gap-2 px-6 py-3 bg-red-400 text-black rounded-full font-semibold hover:scale-105 transition"
        >
          <Mail size={18} />
          sheikhzalam@gmail.com
        </a>

        <div className="flex items-center gap-2 px-6 py-3 bg-[#13131a] text-white rounded-full">
          <Phone size={18} />
          +977 9804951369
        </div>

        <div className="flex items-center gap-2 px-6 py-3 bg-[#13131a] text-white rounded-full">
          <MapPin size={18} />
          Birtamode, Jhapa, Nepal
        </div>

      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-12">

        <a
          href="https://github.com/Sheikh-369"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#13131a] rounded-full hover:scale-110 transition"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/zunaid-sheikh/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#13131a] rounded-full hover:scale-110 transition"
        >
          <Linkedin size={20} />
        </a>
          <a
            href="https://wa.me/9779804951369"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#13131a] rounded-full hover:scale-110 transition"
          >
            <MessageCircle size={20} />
          </a>

      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Sheikh Zunaid — Built with Next.js & TypeScript
      </footer>

    </section>
  )
}