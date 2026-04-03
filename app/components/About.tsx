import SocialIcon from "./SocialIcon"
import { Github, Linkedin, Facebook } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="px-8 lg:px-16 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
    >
      {/* Left Side */}
      <div>
        <p className="text-sm uppercase tracking-widest text-red-400 mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Creative Developer
        </h2>

        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          With over 5 years of experience in digital design and
          development, I've had the privilege of working with
          startups, agencies, and growing businesses.
        </p>

        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          My approach combines technical expertise with creative
          thinking to deliver solutions that not only look great
          but also perform exceptionally.
        </p>

        <div className="flex gap-4">
          <SocialIcon 
            icon={<Github />} 
            href="https://github.com/Sheikh-369" 
          />
          
          <SocialIcon 
            icon={<Linkedin />} 
            href="https://www.linkedin.com/in/zunaid-sheikh/" 
          />
          
          <SocialIcon 
            icon={<Facebook />} 
            href="https://www.facebook.com/share/17Loqa1ntH/?mibextid=wwXIfr" 
          />
        </div>
      </div>

{/* Right Side */}
<div className="relative">
  {/* Photo Box */}
  <div className="aspect-square rounded-3xl overflow-hidden p-1">
    <img
      src="/Portfolio2.PNG"
      alt="My photo"
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>

  {/* Experience Card */}
  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1d585c] rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <p className="text-red-400 text-3xl font-bold">2+</p>
      <p className="text-gray-400 text-xs">Years Exp.</p>
    </div>
  </div>
</div>
    </section>
  )
}



git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sheikh-369/portfolio.git
git push -u origin main