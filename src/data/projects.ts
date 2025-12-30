// Image Imports
import fishTankImg from "../assets/images/fish-tank.jpg";
import dispatchDailyImg from "../assets/images/dispatchdaily.jpg";
import movieExplorerImg from "../assets/images/movie-explorer.jpg";
import githubExplorerImg from "../assets/images/github-explorer.png";
import onlineArtGalleryImg from "../assets/images/online-art-gallery.jpg";
import eventBookingImg from "../assets/images/event-booking-system.jpg";

import qickblogImg from "../assets/images/qickblog.jpg";
import jalmitraImg from "../assets/images/jalmitra-chatbot.jpg";
import onlineQuizImg from "../assets/images/online-quiz-game.jpg";
import spamClassifierImg from "../assets/images/ai-spam-classifier.jpg";

// New images
import imagifyImg from "../assets/images/imagify.jpg";
import movieAppImg from "../assets/images/movie-app.jpg";

// Project Interface
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

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "Aquarium Life Cycle",
    description:
      "Explore aquatic species, fish care, diseases, and environment settings. Built to promote responsible fishkeeping and serve as an educational tool for fisheries students.",
    techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "PHP", "MySQL"],
    image: fishTankImg,
    github: "https://github.com/gauravbhuravane/aquarium-life-cycle",
    demo: "https://aquarium-life-cycle-1.onrender.com/",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "DispatchDaily - News Portal",
    description:
      "A PHP + MySQL based dynamic news portal for managing categorized news, with advanced search, bookmarks, and an admin panel.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: dispatchDailyImg,
    github: "https://github.com/gauravbhuravane/DispatchDaily",
    demo: "https://dispatchdaily.onrender.com",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Movie Explorer System",
    description:
      "A dynamic web app using OMDb API to explore, save, and manage favorite movies with user authentication and filters.",
    techStack: ["HTML", "CSS", "Bootstrap 5", "PHP", "MySQL", "OMDb API"],
    image: movieExplorerImg,
    github: "https://github.com/gauravbhuravane/movie-explorer-system",
    demo: "https://movie-explorer-system.onrender.com/",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "GitHub Explorer",
    description:
      "Interactive React.js app to explore GitHub repositories and profiles with dark/light mode, pagination, and responsive design.",
    techStack: ["React.js", "HTML", "CSS", "JavaScript", "GitHub API"],
    image: githubExplorerImg,
    github: "https://github.com/gauravbhuravane/github-explorer",
    demo: "https://github-explorer-omega-ten.vercel.app/",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Online Art Gallery",
    description:
      "ASP.NET-based web application that allows users to browse, add, and manage artworks with admin and user modules, CRUD operations, and SQL Server integration.",
    techStack: [
      "ASP.NET Web Forms",
      "C#",
      "ADO.NET",
      "SQL Server",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    image: onlineArtGalleryImg,
    github: "https://github.com/gauravbhuravane/OnlineArtGallery",
    demo: "",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Event Booking System",
    description:
      "Web-based event management application developed using ASP.NET to handle event listings, bookings, and user management with database connectivity via SQL Server.",
    techStack: [
      "ASP.NET Web Forms",
      "C#",
      "ADO.NET",
      "SQL Server",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    image: eventBookingImg,
    github: "https://github.com/gauravbhuravane/EventBookingSystem",
    demo: "",
    category: "Full Stack",
  },
  {
    id: 7,
    title: "QickBlog - Blogging Platform",
    description:
      "A full-featured blogging platform with authentication, rich text editor, categories, comments, and admin controls.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: qickblogImg,
    github: "https://github.com/gauravbhuravane/QickBlog.git",
    demo: "https://qick-blog.vercel.app/",
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Jalmitra Chatbot",
    description:
      "AI-powered chatbot focused on water conservation awareness, FAQs, and user interaction using NLP techniques.",
    techStack: ["Python", "Flask", "Machine Learning", "NLP"],
    image: jalmitraImg,
    github: "https://github.com/gauravbhuravane/Jalmitra-Chatbot.git",
    demo: "https://jalmitra-chatbot.vercel.app/",
    category: "AI / ML",
  },
  {
    id: 9,
    title: "Online Quiz Game",
    description:
      "A quiz application with categories, timers, and score tracking built using core web technologies.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: onlineQuizImg,
    github: "https://github.com/gauravbhuravane/online-quiz-game.git",
    demo: "https://online-quiz-game-pi.vercel.app/",
    category: "Frontend",
  },
  {
    id: 10,
    title: "AI Spam Classifier",
    description:
      "Machine learning based system that classifies messages as spam or non-spam using NLP techniques.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "NLP"],
    image: spamClassifierImg,
    github: "https://github.com/gauravbhuravane/ai-spam-classifier.git",
    demo: "",
    category: "AI / ML",
  },
  {
    id: 11,
    title: "Imagify – AI Image Generation Platform",
    description:
      "A full-stack AI image generation platform where users generate images from text prompts, manage credits, and make secure payments.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "ClipDrop API",
    ],
    image: imagifyImg,
    github: "https://github.com/gauravbhuravane/Imagify.git",
    demo: "https://imagify-nine-mocha.vercel.app/",
    category: "Full Stack",
  },
  {
    id: 12,
    title: "Movie-App – MERN Movie Management System",
    description:
      "A MERN-based movie application featuring movie browsing, search, sorting, pagination, and role-based admin dashboard.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OMDb API",
    ],
    image: movieAppImg,
    github: "https://github.com/gauravbhuravane/movie-app.git",
    demo: "https://movie-app-sooty-zeta-82.vercel.app/",
    category: "Full Stack",
  },
];
