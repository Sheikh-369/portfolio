'use client';

import Link from 'next/link';

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-rose-500">About Me</h2>

        <p className="text-lg leading-8 text-zinc-300">
          Hey, I'm a <span className="font-semibold text-white">full-stack web developer</span> who loves turning
          real-world problems into digital solutions.
        </p>

        <p className="text-lg leading-8 text-zinc-300 mt-4">
          I work with <span className="font-medium text-white">React</span>,{' '}
          <span className="font-medium text-white">Node.js</span>,{' '}
          <span className="font-medium text-white">TypeScript</span>,{' '}
          <span className="font-medium text-white">MongoDB</span>, and{' '}
          <span className="font-medium text-white">Next.js</span>. I'm currently interning at{' '}
          <Link
            href="https://www.digitalpathshalanepal.com/"
            target="_blank"
            className="text-rose-400 hover:underline hover:text-rose-300 transition"
          >
            Digital Pathshala
          </Link>{' '}
          and{' '}
          <Link
            href="https://kharaayo.com/"
            target="_blank"
            className="text-rose-400 hover:underline hover:text-rose-300 transition"
          >
            Kharaayo Inc
          </Link>
          .
        </p>

        <p className="text-lg leading-8 text-zinc-300 mt-4">
          Outside internships, I'm working on a full-featured{' '}
          <span className="font-medium text-white">eCommerce platform</span> to sharpen my skills across the stack.
        </p>

        <p className="text-lg leading-8 text-zinc-300 mt-4">
          I'm always curious, always building, and excited to collaborate on meaningful projects.
        </p>
      </div>
    </section>
  );
}
