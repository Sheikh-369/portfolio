// components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#083344] shadow-lg">
      <div className="lg:px-16 px-4 flex flex-wrap items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            className="sm:w-[10rem] w-[7rem] z-10"
            src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
            alt="Logo"
          />
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="fill-current text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 20 20"
            >
              {menuOpen ? (
                <path d="M6 6L14 14M6 14L14 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
        >
          <nav className="pt-4 md:pt-0">
            <ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <a
                  href="#home"
                  className="block md:inline md:p-4 py-3 px-0 text-rose-500 hover:text-rose-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block md:inline md:p-4 py-3 px-0 hover:text-rose-500"
                  onClick={() => setMenuOpen(false)}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block md:inline md:p-4 py-3 px-0 hover:text-rose-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block md:inline md:p-4 py-3 px-0 hover:text-rose-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block md:inline md:p-4 py-3 px-0 hover:text-rose-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block md:inline md:p-4 py-3 px-0 hover:text-rose-500 md:mb-0 mb-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
