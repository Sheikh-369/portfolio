
// import { Eye, ExternalLink } from "lucide-react"
// import { Project } from "../types/portfolio"

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <div
//       className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#13131a] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
//         project.wide ? "md:col-span-2" : ""
//       }`}
//     >
//       {/* Preview / Image Area */}
//       <div className={`relative ${project.wide ? "aspect-21/9" : "aspect-4/3"}`}>
//         {project.image && (
//           <img
//             src={project.image}
//             alt={project.title}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         )}

//         {/* Hover Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,10,15,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="flex gap-4">
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full flex items-center justify-center"
//                 style={{ background: project.color }}
//               >
//                 <Eye className="w-5 h-5 text-black" />
//               </a>
//             )}
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white"
//               >
//                 <ExternalLink className="w-5 h-5 text-white" />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className={`${project.wide ? "p-8" : "p-6"}`}>
//         <p
//           className="text-xs font-medium tracking-wider uppercase mb-2"
//           style={{ color: project.color }}
//         >
//           {project.category}
//         </p>

//         <h3 className={`font-bold mb-2 text-white ${project.wide ? "text-2xl" : "text-xl"}`}>
//           {project.title}
//         </h3>

//         <p className="text-sm text-gray-400">{project.description}</p>
//       </div>
//     </div>
//   )
// }

//2nd
"use client" // <--- ADD THIS LINE AT THE VERY TOP

import { Eye, ExternalLink } from "lucide-react"
import { Project } from "../types/portfolio"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      tabIndex={0} 
      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#13131a] outline-none transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
        project.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Preview / Image Area */}
      <div className={`relative ${project.wide ? "aspect-21/9" : "aspect-4/3"}`}>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,10,15,0.8)] opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto group-focus:pointer-events-auto transition-all duration-300">
          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
                style={{ background: project.color }}
                onClick={(e) => e.stopPropagation()} 
              >
                <Eye className="w-5 h-5 text-black" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transition-transform hover:scale-110 active:scale-90"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${project.wide ? "p-8" : "p-6"}`}>
        <p
          className="text-xs font-medium tracking-wider uppercase mb-2"
          style={{ color: project.color }}
        >
          {project.category}
        </p>

        <h3 className={`font-bold mb-2 text-white ${project.wide ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>

        <p className="text-sm text-gray-400">{project.description}</p>
      </div>
    </div>
  )
}