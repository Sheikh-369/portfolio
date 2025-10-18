'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Mathematics Teacher',
      company: 'Vidya Niketan Secondary School',
      place: 'Baniyani, Jhapa, Nepal',
      duration: '2013 - 2017',
      description:
        'Taught mathematics to secondary level students, creating engaging lessons and improving student performance.',
    },
    {
      title: 'CNC Operator',
      company: '(JU) JEONG ILTEKEU JEONGEUPGONGJANG',
      place: 'Cheonju, South Korea',
      duration: '2017 - 2021',
      description:
        'Operated CNC machines for precision manufacturing, ensuring quality and efficiency in production processes.',
    },
    {
      title: 'Korean Language Instructor',
      company: 'Xangam Korean Bhasha Kendra',
      place: 'Birtamode, Jhapa, Nepal (Ongoing)',
      duration: '2021 - Present',
      description:
        'Teaching Korean language to aspiring learners, helping them prepare for proficiency exams and cultural understanding.',
    },
    {
      title: 'Full Stack Intern',
      company: 'Digital Pathshala - Itahari & Kharaayo Inc - Birtamode',
      place: '',
      duration: '2024 - Present',
      description:
        'Working on full-stack web development projects with MERN stack and Next.js, actively learning and applying modern web technologies.',
    },
  ];

  return (
    <section id="experience" className="w-full py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-rose-500">Experience</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-xl shadow-xl hover:shadow-2xl transition h-full"
            >
              {/* Silver glowing border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-slate-300 to-white/10 blur-sm opacity-20 pointer-events-none" />

              {/* Card content */}
              <div className="relative z-10 bg-zinc-900 rounded-[11px] p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-rose-400 font-medium mb-2">{exp.company}</p>
                  {exp.place && <p className="text-zinc-400 mb-2">{exp.place}</p>}
                  <p className="text-zinc-500 italic mb-4">{exp.duration}</p>
                  <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


