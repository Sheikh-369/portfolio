'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#083344] shadow-xl">
      <div className="lg:px-16 px-4 flex flex-wrap items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 sm:h-6 w-auto object-contain"
          />


          {/* Mobile Toggle */}
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
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Me', href: '#about' },
                { name: 'Education', href: '#education' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' }, // ✅ Added
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block md:inline md:p-3 py-2 px-0 transition duration-300 hover:text-rose-400 hover:underline underline-offset-4 decoration-rose-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
