'use client';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-rose-500">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Programming Languages */}
          <div className="bg-zinc-900 border border-slate-300 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
            <ul className="text-zinc-400 list-disc list-inside space-y-1">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>SQL Databases (MySQL, PostgreSQL)</li>
              <li>Basic Python</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-zinc-900 border border-slate-300 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-4">Frameworks & Libraries</h3>
            <ul className="text-zinc-400 list-disc list-inside space-y-1">
              <li>React.js & Redux Toolkit</li>
              <li>Next.js</li>
              <li>Node.js & Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools & Other Skills */}
          <div className="bg-zinc-900 border border-slate-300 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-4">Tools & Concepts</h3>
            <ul className="text-zinc-400 list-disc list-inside space-y-1">
              <li>Git & GitHub</li>
              <li>REST APIs & JSON</li>
              <li>Responsive Web Design</li>
              <li>Basic Korean Language (EPS TOPIK certified)</li>
              <li>Team Collaboration & Agile Workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
