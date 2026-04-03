
'use client'
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // change color after 50px
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-8 py-6 lg:px-16 transition-colors duration-300 ${
        scrolled ? "bg-[#13131a]" : "bg-transparent"
      }`}
    >
      <div className="font-display font-bold text-2xl text-white">
        <span className="gradient-text">folio.</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <Menu className="md:hidden text-white" />
    </nav>
  )
}