import { portfolio } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="px-8 lg:px-16 py-10 max-w-6xl mx-auto flex flex-wrap gap-3">
      {portfolio.skills.map((skill) => (
        <span
          key={skill}
          className="px-5 py-2 rounded-full text-sm bg-red-400/20 text-red-400"
        >
          {skill}
        </span>
      ))}
    </section>
  )
}