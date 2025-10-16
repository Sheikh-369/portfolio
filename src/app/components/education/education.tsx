'use client';

export default function Education() {
  return (
    <section className="w-full py-16 px-4 text-white bg-[#0a2e3f]" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Education</h2>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-semibold">BSc in Computer Science</h4>
            <p className="text-md text-gray-300">XYZ University - 2015 to 2019</p>
          </li>
          {/* Add more education items if needed */}
        </ul>
      </div>
    </section>
  );
}
