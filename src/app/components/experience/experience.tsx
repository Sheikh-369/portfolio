'use client';

export default function Experience() {
  return (
    <section className="w-full py-16 px-4 text-white" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Experience</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Full-Stack Developer</h4>
            <p className="text-md text-gray-300">ABC Tech Solutions — 2020 to Present</p>
            <p className="mt-2">Working on scalable web applications using Laravel and React/Nuxt.js.</p>
          </div>
          {/* Add more experiences if needed */}
        </div>
      </div>
    </section>
  );
}
