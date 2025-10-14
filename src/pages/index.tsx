import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, User, Heart, Code, Rocket, Code2, Palette, Database, Cloud, Zap, Cpu, Briefcase, Github, ExternalLink, Filter, GraduationCap, Calendar, MapPin, Award, Download, Mail, Phone, Send, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { projects } from '@/data/projects';

export default function Index() {
  const { toast } = useToast();
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

  const fullText = "I'm a Full Stack Developer & IT Enthusiast";
  
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
    { icon: Palette, name: 'UI/UX Design', color: 'neon-purple' },
    { icon: Zap, name: 'Performance Optimization', color: 'neon-blue' },
    { icon: Cpu, name: 'AI/ML Integration', color: 'neon-pink' },
  ];

  const categories: string[] = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2021 - 2023',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with distinction.',
      achievements: ['GPA: 3.9/4.0', 'Dean\'s List', 'Research Assistant'],
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2017 - 2021',
      description: 'Comprehensive study of computer science fundamentals, software engineering, and web development.',
      achievements: ['GPA: 3.7/4.0', 'Honors Program', 'Student Council Member'],
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      location: 'City, Country',
      period: '2015 - 2017',
      description: 'Focus on Mathematics and Computer Science. Participated in various coding competitions.',
      achievements: ['Top 5% of class', 'Programming Club President', 'Regional Olympiad Winner'],
    },
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const toggleFlip = (index: number) => {
    setFlipped(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
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
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Your Name
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
              Crafting innovative solutions with cutting-edge technologies. 
              Passionate about creating beautiful, functional, and user-centric applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#projects">
                <Button className="neon-button group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-neon-purple/50 text-foreground hover:bg-neon-purple/10">
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
                  <h3 className="text-2xl font-bold font-poppins">Your Name</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Full Stack Developer specializing in building exceptional digital experiences. 
                    With a strong foundation in both frontend and backend technologies, I love turning complex problems 
                    into simple, beautiful, and intuitive solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently focused on React, Node.js, and modern web technologies. I'm always eager to learn new things 
                    and take on challenging projects that push my skills to the next level.
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
                    <p className="text-muted-foreground">Your City, Country</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-muted-foreground">X+ years in IT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-muted-foreground">Bachelor's in Computer Science</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="font-semibold">Interests</p>
                    <p className="text-muted-foreground">AI, Web3, Open Source</p>
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
              <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {skillCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="glass-card p-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-bold font-poppins">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold font-poppins mb-6 text-center">Additional Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {additionalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 transition-all">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-6">Constantly learning and adapting to new technologies</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'Node.js', 'TypeScript', 'Java', 'MongoDB', 'AWS', 'Docker', 'Git'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
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
                My <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="text-muted-foreground text-lg">Professional achievements and credentials</p>
              <p className="text-sm text-muted-foreground mt-2">Hover over cards to see details</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-64 perspective-1000"
                  onMouseEnter={() => toggleFlip(index)}
                  onMouseLeave={() => toggleFlip(index)}
                >
                  <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flipped.includes(index) ? 'rotate-y-180' : ''}`}>
                    <div className="absolute inset-0 glass-card p-6 backface-hidden flex flex-col items-center justify-center text-center">
                      <div className="text-6xl mb-4">{cert.logo}</div>
                      <h3 className="text-xl font-bold font-poppins mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Award className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 glass-card p-6 backface-hidden rotate-y-180 flex flex-col">
                      <h3 className="text-lg font-bold font-poppins mb-3">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm">
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-sm">
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-6"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  {certifications.length}+
                </div>
                <p className="text-muted-foreground">Certifications Earned</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <p className="text-muted-foreground">Major Platforms</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold font-poppins bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <p className="text-muted-foreground">Hours of Learning</p>
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
          Get In{' '}
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
        {/* Contact Info */}
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
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
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
            <h3 className="text-lg font-bold font-poppins mb-4">Connect With Me</h3>
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 border border-purple-500/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry"
                required
                className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="bg-input border-border focus:border-purple-500 focus:ring-purple-500/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] w-full group text-white"
            >
              {isSubmitting ? (
                'Sending...'
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

    </div>
  );
}
