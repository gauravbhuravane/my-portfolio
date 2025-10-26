export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  demo: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aquarium Life Cycle",
    description:
      "Explore aquatic species, fish care, diseases, and environment settings. Built to promote responsible fishkeeping and serve as an educational tool for fisheries students.",
    techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "PHP", "MySQL"],
    image: "/src/assets/images/fish-tank.jpg",
    github: "https://github.com/gauravbhuravane/aquarium-life-cycle",
    demo: "https://aquarium-life-cycle-1.onrender.com/",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "DispatchDaily - News Portal",
    description:
      "A PHP + MySQL based dynamic news portal for managing categorized news, with advanced search, bookmarks, and an admin panel.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/src/assets/images/dispatchdaily.jpg",
    github: "https://github.com/gauravbhuravane/DispatchDaily",
    demo: "https://dispatchdaily.onrender.com",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Movie Explorer System",
    description:
      "A dynamic web app using OMDb API to explore, save, and manage favorite movies with user authentication and filters.",
    techStack: ["HTML", "CSS", "Bootstrap 5", "PHP", "MySQL", "OMDb API"],
    image: "/src/assets/images/movie-explorer.jpg",
    github: "https://github.com/gauravbhuravane/movie-explorer-system",
    demo: "https://movie-explorer-system.onrender.com/",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "GitHub Explorer",
    description:
      "Interactive React.js app to explore GitHub repositories and profiles with dark/light mode, pagination, and responsive design.",
    techStack: ["React.js", "HTML", "CSS", "JavaScript", "GitHub API"],
    image: "/src/assets/images/github-explorer.png",
    github: "https://github.com/gauravbhuravane/github-explorer",
    demo: "https://github-explorer-omega-ten.vercel.app/",
    category: "Frontend"
  }
];
