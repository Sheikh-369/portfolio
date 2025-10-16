'use client';
import React from 'react';

function HomeComponent() {
  return (
    <section id="home" className="pt-24 relative overflow-hidden bg-[#083344] text-white">
      {/* Profile Image */}
      <div className="absolute hidden sm:block md:top-16 sm:top-[8%] top-[10%] xl:top-4 xl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] left-[10%] overflow-hidden">
        <img
          className="2xl:h-[760px] xl:h-[600px] md:h-[450px] sm:h-[480px] object-contain"
          src="/images/profile.png"
          alt="Samuel Abera"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center mt-10 sm:mt-0 z-10 relative">
        {/* Column 1 */}
        <div className="w-full flex flex-col">
          <h4 className="text-lg font-semibold xl:text-2xl">Hey There</h4>
          <h1 className="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-2">
            I'm <br />
            <span>Samuel</span>
          </h1>
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-semibold font-serif">Abera</h1>
          <h4 className="text-rose-500 mt-4 lg:text-2xl xl:text-3xl">-- FullStack Developer</h4>
          <p className="lg:w-[70%] w-full text-md mt-4 md:text-lg 2xl:text-2xl">
            Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android,
            and some Flutter experience.
          </p>
          <div>
            <button className="mt-6 px-6 py-2 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl hover:bg-rose-600 transition-all">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full flex sm:flex-col justify-center mt-4 sm:mt-0 sm:gap-8 gap-4 bg-gray-700/60 sm:bg-transparent p-4 rounded-lg">
          <div className="flex flex-col sm:items-end items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">5</h2>
              <h2 className="text-rose-500 xl:text-6xl md:text-7xl sm:text-4xl text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="text-sm sm:text-lg xl:text-2xl text-center">Years of Experience</h4>
          </div>

          <div className="flex flex-col sm:items-end items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">55</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="text-sm sm:text-lg xl:text-2xl text-center">Component Contribution</h4>
          </div>

          <div className="flex flex-col sm:items-end items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">127K</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="text-sm sm:text-lg xl:text-2xl text-center">Users Got Help</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
