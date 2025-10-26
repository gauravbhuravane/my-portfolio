import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, User, Heart, Code, Rocket, Code2, Palette, Database, Cloud, Zap, Cpu, Briefcase, Github, ExternalLink, Filter, GraduationCap, Calendar, MapPin, Award, Download, Mail, Phone, Send, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { projects } from '@/data/projects';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast as reactToast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  const { toast: customToast } = useToast();
  const [displayedText, setDisplayedText] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const [flipped, setFlipped] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ADD THIS LINE:
  const form = useRef<HTMLFormElement>(null);

  const fullText = "I'm an IT Professional & Technology Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Building experiences that users love and enjoy',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
    },
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'neon-purple',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'neon-blue',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'Java / Spring Boot', level: 80 },
        { name: 'PostgreSQL / MongoDB', level: 85 },
        { name: 'REST / GraphQL APIs', level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'neon-pink',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'AWS / Vercel', level: 70 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  const additionalSkills = [
    { icon: Palette, name: 'Adobe Photoshop', color: 'neon-purple' },
    { icon: Zap, name: 'Filmora Video Editing', color: 'neon-blue' },
    { icon: Cpu, name: 'Microsoft Word', color: 'neon-pink' },
  ];

  const categories: string[] = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Finolex Academy of Management & Technology',
      location: 'Ratnagiri, Maharashtra, India',
      period: '2024 – 2026 (Pursuing Final Year)',
      description: 'Relevant coursework: Data Structures, Web Technologies.',
      achievements: ['Active participant in tech events', 'Consistently strong academic performance']
    },
    {
      degree: 'Bachelor of Science in Computer Science (B.Sc. CS)',
      institution: 'ASP College, Devrukh',
      location: 'Devrukh, Maharashtra, India',
      period: '2021 – 2024',
      description: 'Focused on programming fundamentals, databases, and web development.',
      achievements: ['Graduated with 9.56 CGPA', 'Runner-up at State-Level Web Development Competitions (2024 & 2025)']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Meenatai Thakare Science Jr. College, Sadavali',
      location: 'Ratnagiri, Maharashtra, India',
      period: '2020',
      description: 'Specialized in Science with Mathematics.',
      achievements: ['Scored 63.69%', 'Active participant in academic and science events']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Dadasaheb Sarfare Vidyalaya, Burambi',
      location: 'Ratnagiri, Maharashtra, India',
      period: '2018',
      description: 'Completed schooling under MSBSHSE board.',
      achievements: ['Scored 81.60%', 'Top performer in academics']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'June 2023',
      description: 'Professional certification for designing distributed systems on AWS.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps'],
      logo: '☁️',
    },
    {
      title: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      date: 'March 2023',
      description: 'Certified in Scrum framework and agile project management.',
      skills: ['Scrum', 'Agile', 'Project Management'],
      logo: '🎯',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'January 2023',
      description: 'Advanced certification in React and modern frontend development.',
      skills: ['React', 'JavaScript', 'Frontend'],
      logo: '⚛️',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'October 2022',
      description: 'Expertise in MongoDB database design and development.',
      skills: ['MongoDB', 'NoSQL', 'Database'],
      logo: '🍃',
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'August 2022',
      description: 'Professional certification in Google Cloud Platform services.',
      skills: ['GCP', 'Cloud', 'Infrastructure'],
      logo: '☁️',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      date: 'May 2022',
      description: 'Nanodegree program covering full stack web development.',
      skills: ['Full Stack', 'Web Dev', 'JavaScript'],
      logo: '💻',
    },
  ];

  // ADD THESE CONSTANTS:
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhuravanegaurav@example.com', // UPDATE WITH YOUR EMAIL
      href: 'mailto:bhuravanegaurav@example.com', // UPDATE WITH YOUR EMAIL
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9021042998', // UPDATE WITH YOUR PHONE
      href: 'tel:+91 9021042998', // UPDATE WITH YOUR PHONE
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ratnagiri, Maharashtra, IN',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gauravbhuravane', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-bhuravane', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/gauravbhuravane?t=qQd38oH4vyTcBsvRXO8wXg&s=08', label: 'Twitter' },
  ];

  const toggleFlip = (index: number) => {
    setFlipped(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) return;
    
    emailjs
      .sendForm(
        (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
        (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          reactToast.success('✅ Email sent successfully! I\'ll get back to you soon 😊');
          form.current?.reset();
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          reactToast.error('❌ Something went wrong. Please try again later.');
          console.error(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full">
      {/* HOME SECTION */}
   {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
            >
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">Welcome to my digital space</span>
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="text-5xl md:text-7xl font-bold font-poppins"
>
  Hi all, I'm{' '}
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
    Gaurav
  </span>
</motion.h1>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="text-xl md:text-3xl text-muted-foreground font-poppins min-h-[48px]"
>
  <span>{displayedText}</span>
  <span className="inline-block w-0.5 h-8 bg-purple-500 ml-1 animate-pulse"></span>
</motion.div>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="text-lg text-muted-foreground max-w-2xl mx-auto"
>
 A dedicated <strong className="text-foreground">IT professional</strong> 🌟 skilled in developing and maintaining software solutions, working with modern technologies and tools to deliver high-quality applications. Focused on problem-solving, efficient code, performance, and providing great user experiences.

</motion.p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="flex items-center justify-center gap-4 mb-6"
>
  {socialLinks.map((social) => {
    const Icon = social.icon;
    return (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-foreground text-background hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group hover:scale-110"
        aria-label={social.label}
      >
        <Icon className="w-6 h-6" />
      </a>
    );
  })}
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <a
    href="/Gaurav-Bhuravane-Resume.pdf"
    download="Gaurav-Bhuravane-Resume.pdf"
  >
    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white group">
      Download My Resume
      <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
    </Button>
  </a>

  <a href="#contact">
    <Button
      variant="outline"
      className="border-purple-500/50 text-foreground hover:bg-purple-500/10"
    >
      Contact Me
    </Button>
  </a>
</motion.div>



            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
              >
                <User className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                About <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-muted-foreground text-lg">Get to know who I am and what I do</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 mb-12 glow-border"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-purple-blue p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <User className="w-20 h-20 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center animate-glow-pulse">
                    <span className="text-xl">👋</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold font-poppins">Gaurav Bhuravane</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate IT professional with a strong foundation in software development and technology solutions. I enjoy solving complex problems and creating efficient, reliable, and user-friendly systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I am constantly exploring new tools and technologies to enhance my skills and deliver high-quality projects. I thrive in collaborative environments and am committed to building solutions that make a real impact.
                  </p>
                </div>
              </div>
            </motion.div>

           <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 transition-all duration-300 group border border-transparent hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 glass-card p-8"
            >
              <h3 className="text-2xl font-bold font-poppins mb-6">Quick Facts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Ratnagiri, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-muted-foreground">Fresher</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-muted-foreground">Master of Computer Application</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Interests</p>
                    <p className="text-muted-foreground">Artificial Intelligence, Data Science, Web Development, Database Management</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-muted-foreground text-lg">🧠 Technical Skills</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins">Languages</h3>
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">JavaScript</span>
                      <span className="text-xs text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Java</span>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Python</span>
                      <span className="text-xs text-muted-foreground">70%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins">Frameworks</h3>
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">React</span>
                      <span className="text-xs text-muted-foreground">80%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Node.js</span>
                      <span className="text-xs text-muted-foreground">70%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.55, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Express</span>
                      <span className="text-xs text-muted-foreground">65%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins">Tools</h3>
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Git</span>
                      <span className="text-xs text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">GitHub</span>
                      <span className="text-xs text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.65, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">VS Code</span>
                      <span className="text-xs text-muted-foreground">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Personal Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 mb-16"
            >
              <h3 className="text-2xl font-bold font-poppins mb-6 text-center">🤝 Personal Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Leadership</span>
                    <span className="text-xs text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Teamwork</span>
                    <span className="text-xs text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.95, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Communication</span>
                    <span className="text-xs text-muted-foreground">88%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Time Management</span>
                    <span className="text-xs text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.05, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="md:col-span-2 flex justify-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Adaptability</span>
                      <span className="text-xs text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 mb-16"
            >
              <h3 className="text-2xl font-bold font-poppins mb-6 text-center">Additional Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 transition-all">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-medium">Adobe Photoshop
</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 transition-all">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-medium">Filmora Video Editing</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 transition-all">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-medium">Microsoft Word
</span>
                </motion.div>
              </div>
            </motion.div>

            
           

            

            {/* Technologies Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-6">Constantly learning and adapting to new technologies</p>
              <div className="overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {['React', 'Node.js', 'TypeScript', 'Java', 'MongoDB', 'AWS', 'Docker', 'Git', 'React', 'Node.js', 'TypeScript', 'Java', 'MongoDB', 'AWS', 'Docker', 'Git'].map((tech, index) => (
                    <div
                      key={index}
                      className="inline-block mx-4 px-4 py-2 rounded-full glass-card text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     <section id="projects" className="min-h-screen py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
        >
          <Briefcase className="w-8 h-8 text-white" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
          My{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Showcasing my work and creative solutions
        </p>
      </div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter:</span>
        </div>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                : 'glass-card hover:bg-muted'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -8 }}
            className="glass-card overflow-hidden group"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-6 h-6 text-white" />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold font-poppins">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {project.category}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full glass-card text-muted-foreground border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Projects Found */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <p className="text-muted-foreground text-lg">
            No projects found in this category
          </p>
        </motion.div>
      )}
    </motion.div>
  </div>
</section>


      {/* EDUCATION SECTION */}
      <section id="education" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Education</span>
              </h2>
              <p className="text-muted-foreground text-lg">Academic journey and achievements</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"></div>

              <div className="space-y-12">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                      className="absolute left-[26px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"
                    ></motion.div>

                    <div className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border border-purple-500/30">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold font-poppins">{item.degree}</h3>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-medium">{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-purple-400">Key Achievements:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full glass-card border border-purple-500/30"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 glass-card p-8 text-center"
            >
              <h3 className="text-2xl font-bold font-poppins mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Education doesn't stop at formal degrees. I'm constantly learning through online courses, 
                workshops, and hands-on projects to stay current with the latest technologies and best practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                 My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Achievements & Certifications</span>
              </h2>
              <p className="text-muted-foreground text-lg">Professional achievements and credentials</p>
            </div>

            {/* Tab Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <button
                onClick={() => setFilter('certifications')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === 'certifications'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'glass-card hover:bg-muted'
                }`}
              >
                📜 Certifications
              </button>
              <button
                onClick={() => setFilter('achievements')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === 'achievements'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'glass-card hover:bg-muted'
                }`}
              >
                🏆 Achievements
              </button>
              <button
                onClick={() => setFilter('academics')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === 'academics'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'glass-card hover:bg-muted'
                }`}
              >
                📚 Academics
              </button>
            </motion.div>

            {/* Certifications Tab */}
            {filter === 'certifications' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Introduction to Front End Development',
                    issuer: 'Simplilearn',
                  },
                  {
                    title: 'Introduction to Artificial Intelligence',
                    issuer: 'IBM',
                  },
                  {
                    title: 'Getting Started with Artificial Intelligence',
                    issuer: 'IBM',
                  },
                  {
                    title: 'Instagram Clone Bootcamp (HTML & CSS)',
                    issuer: 'DevTown',
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border border-purple-500/30"
                  >
                    <h3 className="text-lg font-bold font-poppins mb-3">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      <strong>Issued by:</strong> {cert.issuer}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Achievements Tab */}
            {filter === 'achievements' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Runner-Up, National-Level Web Development Competition',
                    year: '2025',
                    description: 'Showcased strong skills in designing and developing innovative web applications.',
                  },
                  {
                    title: 'Runner-Up, State-Level Web Development Competition',
                    year: '2024',
                    description: 'Demonstrated creativity and technical expertise in web development.',
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border border-purple-500/30"
                  >
                    <h3 className="text-xl font-bold font-poppins mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.year}</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Academics Tab */}
            {filter === 'academics' && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Tech Carnival 2024 - Code IT Competition Head',
                    year: '2024',
                    description: 'Led and organized the PowerPoint presentation competition at Tech Carnival 2024.',
                  },
                  {
                    title: 'Outstanding Academic Performance',
                    year: '2024',
                    description: 'Achieved 9.56 CGPA in BSc Computer Science.',
                  },
                  {
                    title: 'Project Work & Industrial Training',
                    year: '2022-2024',
                    description: 'Completed multiple projects using React and PHP.',
                  },
                ].map((academic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border border-purple-500/30"
                  >
                    <h3 className="text-lg font-bold font-poppins mb-2">{academic.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{academic.year}</p>
                    <p className="text-muted-foreground text-sm">{academic.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-6"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <p className="text-muted-foreground">Certifications Earned</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <p className="text-muted-foreground">Competitions Won</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  3+
                </div>
                <p className="text-muted-foreground">Academic Achievements</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
<section id="contact" className="min-h-screen py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
        >
          <Mail className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Let's discuss your project or just say hi!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 flex items-center gap-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.a>
            );
          })}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold font-poppins mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass-card p-8 space-y-6 border border-purple-500/30"
          >
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                  className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="from_email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  required
                  className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Project Inquiry"
                required
                className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20 resize-none"
              />
            </div>

            {/* Hidden Timestamp */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] w-full group text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
<ToastContainer position="top-center" autoClose={3000} />


    </div>
  );
}
