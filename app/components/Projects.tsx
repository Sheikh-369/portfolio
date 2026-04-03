import { portfolio } from "../data/portfolio"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="work" className="px-8 lg:px-16 py-24 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-16">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}