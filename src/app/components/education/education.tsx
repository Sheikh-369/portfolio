'use client';

export default function Education() {
  return (
    <section id="education" className="w-full py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-rose-500">Education</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '+2 Science',
              institution: 'Purwanchal Higher Secondary School, Birtamode',
              duration: '2011 - 2013',
            },
            {
              title: 'EPS TOPIK',
              institution: 'Korean Language Proficiency Exam (EPS-TOPIK)',
              duration: 'Passed in 2016',
            },
            {
              title: 'MERN Stack Training',
              institution: 'Digital Pathshala, Itahari',
              duration: '2024 - 2025 (8 Months)',
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-xl shadow-xl hover:shadow-2xl transition"
            >
              {/* Glowing border layer */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-slate-300 to-white/10 blur-sm opacity-20 pointer-events-none" />

              {/* Inner content */}
              <div className="relative z-10 bg-zinc-900 rounded-[11px] p-6 h-full">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.title}</h3>
                <p className="text-zinc-400">{edu.institution}</p>
                <p className="text-zinc-500 italic mt-1">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


