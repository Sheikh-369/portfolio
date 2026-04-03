// export type Project = {
//   title: string
//   category: string
//   description: string
//   color: string
//   wide?: boolean
// }

// export type PortfolioConfig = {
//   name: string
//   title: string
//   bio: string
//   skills: string[]
//   projects: Project[]
// }

export type Project = {
  title: string
  category: string
  description: string
  color: string
  gradient?: string
  icon?: React.ReactNode
  wide?: boolean
  image?: string     // add this
  github?: string    // add this
  live?: string 
}

export type PortfolioConfig = {
  name: string
  title: string
  bio: string
  skills: string[]
  projects: Project[]
}