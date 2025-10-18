// 'use client';
// import Link from 'next/link';
// import React from 'react';

// function HomeComponent() {
//   return (
//     <section id="home" className="pt-0 pb-12 bg-[#083344] text-white min-h-[calc(100vh-64px)] flex flex-col justify-center">
//       <div className="max-w-screen-xl mx-auto lg:px-16 px-4 flex flex-col sm:flex-row items-center gap-6">
        
//         {/* Left Column: Text Content */}
//         <div className="w-full sm:w-1/2 flex flex-col">
//           <h4 className="text-lg font-semibold xl:text-xl mb-1">Hey There</h4>
//           <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
//             I'm <br />
//             <span className="text-rose-500">Zunaid</span>Sheikh
//           </h1>
//           <h4 className="text-rose-500 mt-2 text-lg md:text-xl">-- FullStack Developer</h4>
//           <p className="mt-4 text-sm md:text-base max-w-md leading-relaxed">
//             Full-stack web developer experienced in Next.js, React, Node.js and passionate about building scalable, user-friendly web applications.
//           </p>
//           <Link href="/#contact">
//           <button className="mt-6 px-5 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition text-base md:text-lg w-max">
//             Get In Touch
//           </button>
//           </Link>
          
//         </div>

//         {/* Right Column: Profile Image */}
//         <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
//           <img
//             src="/images/zportfolio.png"
//             alt="Zunaid Sheikh"
//             className="w-48 md:w-56 lg:w-64 max-w-full h-auto object-contain"
//           />
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-screen-xl mx-auto px-4 mt-12 flex justify-center gap-12 text-center">
//         {[
//           { number: '1', suffix: '+', label: 'Years in Web Development' },
//           { number: '8', suffix: ' Months', label: 'MERN Stack Training' },
//           { number: '3', suffix: '', label: 'Ongoing Internships' },
//           { number: '10+', suffix: '', label: 'Projects Built' },
//         ].map(({ number, suffix, label }) => (
//           <div key={label} className="flex flex-col items-center">
//             <div className="inline-flex items-baseline space-x-1">
//               <h2 className="text-4xl md:text-5xl font-semibold">{number}</h2>
//               <span className="text-rose-500 text-3xl md:text-4xl font-extrabold">{suffix}</span>
//             </div>
//             <p className="text-sm md:text-base">{label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HomeComponent;



'use client';
import Link from 'next/link';
import React from 'react';

function HomeComponent() {
  return (
    <section
      id="home"
      className="pt-20 pb-12 bg-[#083344] text-white min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="max-w-screen-xl mx-auto lg:px-16 px-4 flex flex-col sm:flex-row items-center gap-10">
        
        {/* Left Column: Text Content */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h4 className="text-lg font-semibold xl:text-xl mb-1">Hey There</h4>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            I'm <br />
            <span className="text-rose-500">Zunaid </span>Sheikh
          </h1>
          <h4 className="text-rose-500 mt-2 text-lg md:text-xl">-- FullStack Developer</h4>
          <p className="mt-4 text-sm md:text-base max-w-md leading-relaxed">
            Full-stack web developer experienced in Next.js, React, Node.js and passionate about building scalable, user-friendly web applications.
          </p>
          <Link href="/#contact">
            <button className="mt-6 px-5 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition text-base md:text-lg w-max">
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Right Column: Profile Image */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
          <img
            src="/images/zportfolio.png"
            alt="Zunaid Sheikh"
            className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-10 flex flex-wrap justify-center gap-8 text-center">
        {[
          { number: '1', suffix: '+', label: 'Years in Web Development' },
          { number: '8', suffix: ' Months', label: 'MERN Stack Training' },
          { number: '3', suffix: '', label: 'Ongoing Internships' },
          { number: '10+', suffix: '', label: 'Projects Built' },
        ].map(({ number, suffix, label }) => (
          <div key={label} className="flex flex-col items-center w-40">
            <div className="inline-flex items-baseline space-x-1">
              <h2 className="text-4xl md:text-5xl font-semibold">{number}</h2>
              <span className="text-rose-500 text-3xl md:text-4xl font-extrabold">{suffix}</span>
            </div>
            <p className="text-sm md:text-base mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeComponent;
