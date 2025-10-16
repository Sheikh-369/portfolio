'use client';

export default function Projects() {
  return (
    <section className="w-full py-16 px-4 text-white bg-[#0a2e3f]" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#112e42] p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Project Name</h4>
            <p className="text-md text-gray-300 mt-2">Short project description and technologies used.</p>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </section>
  );
}
