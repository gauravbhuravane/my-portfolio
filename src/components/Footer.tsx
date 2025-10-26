import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/gauravbhuravane', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-bhuravane', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/gauravbhuravane?t=qQd38oH4vyTcBsvRXO8wXg&s=08 ', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gaurav Bhuravane | All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
