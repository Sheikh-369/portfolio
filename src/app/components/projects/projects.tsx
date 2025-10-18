'use client';

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-rose-500">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "EdTech SaaS Platform",
              description:
                "Multi-tenant learning management system for institutes, enabling profile switching, dashboard management, and ownership-based access.",
              stack: "MERN Stack • TypeScript • Next.js • Redux Toolkit",
              live: "#",
              code: "#",
            },
            {
              title: "Full-featured eCommerce Platform",
              description:
                "Complete eCommerce system with authentication, product management, cart, orders, and admin dashboard.",
              stack: "React • Node.js • MongoDB • Tailwind CSS",
              live: "#",
              code: "#",
            },
            {
              title: "Pahiran",
              description:
                "A clothing-focused online shopping website designed for local fashion brands, with user-friendly browsing and checkout experience.",
              stack: "Next.js • TypeScript • Tailwind CSS",
              live: "#",
              code: "#",
            },
            {
              title: "Hotel Management System",
              description:
                "Web app to manage hotel rooms, bookings, check-ins, and admin reports — streamlining day-to-day operations.",
              stack: "MERN Stack • Express.js • MongoDB",
              live: "#",
              code: "#",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="relative bg-zinc-900 rounded-xl p-[2px] shadow-xl hover:shadow-2xl transition duration-300"
            >
              {/* Silver glowing border layer */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-slate-300 to-white/10 blur-sm opacity-20 pointer-events-none" />

              {/* Actual content inside border */}
              <div className="relative z-10 bg-zinc-900 rounded-[11px] p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-3">{project.description}</p>
                  <p className="text-sm text-rose-400 font-medium mb-4">{project.stack}</p>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-rose-600 rounded hover:bg-rose-700 text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-zinc-700 rounded hover:bg-zinc-800 text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
