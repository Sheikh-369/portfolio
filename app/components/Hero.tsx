import { ArrowRight } from "lucide-react"
import { portfolio } from "../data/portfolio"

export default function Hero() {
  const nameParts = portfolio.name.split(" ")

  return (
    <section className="relative z-10 px-8 lg:px-16 pt-16 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <p className="font-display font-medium text-sm tracking-widest uppercase mb-6 text-[#ff6b6b]">
          {portfolio.title}
        </p>

        {/* Name */}
        <h1 className="font-display font-bold text-6xl md:text-8xl leading-none mb-8 text-white">
          {nameParts[0]}
          <br />
          <span className="gradient-text">
            {nameParts.slice(1).join(" ")}
          </span>
        </h1>

        {/* Bio */}
        <p className="text-lg md:text-xl max-w-xl leading-relaxed mb-12 text-gray-400">
          {portfolio.bio}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          {/* View Work */}
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-sm rounded-full transition-all hover:scale-105 bg-[#ff6b6b] text-black"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Get In Touch */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-sm rounded-full border-2 border-white text-white transition-all hover:bg-white hover:text-black"
          >
            Get In Touch
          </a>

        </div>
      </div>
    </section>
  )
}