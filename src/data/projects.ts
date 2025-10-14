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
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI integration, featuring sentiment analysis and smart replies. Built with React, Node.js, and OpenAI API.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    github: "https://github.com/username/ai-chat",
    demo: "https://ai-chat-demo.com",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Modern admin dashboard for e-commerce management with analytics, inventory tracking, and order management. Responsive and feature-rich.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com/username/ecommerce-dashboard",
    demo: "https://ecommerce-dashboard-demo.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.",
    techStack: ["React", "Firebase", "Material-UI", "React DnD"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.com",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Portfolio Website Builder",
    description: "No-code platform for creating stunning portfolio websites with customizable templates and drag-and-drop editor.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/username/portfolio-builder",
    demo: "https://portfolio-builder-demo.com",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecast, interactive maps, and location-based weather alerts.",
    techStack: ["React", "OpenWeather API", "Leaflet", "CSS3"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app-demo.com",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Fitness Tracking Platform",
    description: "Comprehensive fitness tracker with workout plans, progress tracking, and nutrition guidance. Social features included.",
    techStack: ["React Native", "Express", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    github: "https://github.com/username/fitness-tracker",
    demo: "https://fitness-tracker-demo.com",
    category: "Mobile"
  }
];
