import { PortfolioConfig } from "../types/portfolio";

export const portfolio: PortfolioConfig = {
  name: "Zunaid Sheikh",
  title: "Creative Developer",
  bio: "I craft digital experiences that blend creativity with functionality.",

skills: [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Sequelize ORM",
  "REST API Development",
  "Git & GitHub",
  "UI/UX"
],

projects: [
  {
    title: "Malta Processing and Guide",
    category: "Web Application",
    description: "Platform to book exams, access notes and assist with Malta visa processing.",
    color: "#ff6b6b",
    image: "/HomepageSS.PNG",
    github: "https://github.com/Sheikh-369/Malta-Processing-And-Guide-Client",
    live: "https://malta-processing-and-guide-client.vercel.app/"
  },
  {
    title: "PG Stay",
    category: "Full Stack App",
    description: "PG booking web app with clean UI, booking flow, and payment integration.",
    color: "#48dbfb",
    image: "/PGStay.PNG",
    github: "https://github.com/Sheikh-369/Home-Stay-Server",
    live: "https://pghomestay.vercel.app/"
  },
  {
    title: "Himalaya Chasma Ghar",
    category: "E-Commerce",
    description: "An e-commerce platform to browse, shop and purchase sunglasses online.",
    color: "#feca57",
    wide: true,
    image: "/HimalayaChasmaGhar.PNG",
    github: "https://github.com/Sheikh-369/Himalaya-Chasma-Client",
    live: "https://himalayachasmaghar.vercel.app/"
  }
]
}