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
  },
  {
  id: 5,
  title: "Online Art Gallery",
  description:
    "ASP.NET-based web application that allows users to browse, add, and manage artworks with admin and user modules, CRUD operations, and SQL Server integration.",
  techStack: ["ASP.NET Web Forms", "C#", "ADO.NET", "SQL Server", "HTML", "CSS", "Bootstrap"],
  image: "/src/assets/images/online-art-gallery.png",
  github: "https://github.com/gauravbhuravane/OnlineArtGallery",
  demo: "",
  category: "Full Stack"
},
{
  id: 6,
  title: "Event Booking System",
  description:
    "Web-based event management application developed using ASP.NET to handle event listings, bookings, and user management with database connectivity via SQL Server.",
  techStack: ["ASP.NET Web Forms", "C#", "ADO.NET", "SQL Server", "HTML", "CSS", "Bootstrap"],
  image: "/src/assets/images/event-booking-system.png",
  github: "https://github.com/gauravbhuravane/EventBookingSyste",
  demo: "",
  category: "Full Stack"
},
{
  id: 7,
  title: "SkinFusion Net – AI Skin Analyzer",
  description:
    "An AI-powered skin analysis system that detects skin conditions, identifies issues like acne, dryness, pigmentation, and provides personalized skincare insights. Built using FastAPI, deep learning image models, and a clean React frontend.",
  techStack: ["React", "JavaScript", "Tailwind CSS", "FastAPI", "Python", "Deep Learning", "OpenCV"],
  image: "/src/assets/images/skinfusion.jpg",
  github: "https://github.com/gauravbhuravane/SkinFusion-Net",
  demo: "",
  category: "Full Stack"
}


];
