// components/Navbar.tsx
'use client';

export default function Navbar() {
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg fixed top-0 left-0 w-full z-50 bg-[#083344]">
      <div className="flex-1 flex justify-between items-center">
        <img
          className="sm:w-[10rem] w-[7rem] z-10"
          src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
          alt="Logo"
        />
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden md:flex md:items-center md:w-auto w-full z-10"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
            <li><a href="#home" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">Home</a></li>
            <li><a href="#about" className="md:p-4 py-3 px-0 block hover:text-rose-500">About Me</a></li>
            <li><a href="#education" className="md:p-4 py-3 px-0 block hover:text-rose-500">Education</a></li>
            <li><a href="#experience" className="md:p-4 py-3 px-0 block hover:text-rose-500">Experience</a></li>
            <li><a href="#projects" className="md:p-4 py-3 px-0 block hover:text-rose-500">Projects</a></li>
            <li><a href="#contact" className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
