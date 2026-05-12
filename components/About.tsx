"use client";

import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "./profile-photo.png";
import ThreeBackground from "./ThreeBackground";
import { 
  Palette, 
  ClipboardList, 
  PenTool, 
  BarChart, 
  Terminal, 
  Code2, 
  Cloud, 
  Container, 
  Leaf, 
  Cat,
  X,
  ChevronRight
} from "lucide-react";
import { useEffect } from "react";

const skills = [
  "Product Management",
  "User Research",
  "Figma",
  "AI/ML",
  "React",
  "Data Analysis",
  "Technical Writing",
  "MVP Development"
];

const tools = [
  { name: "Figma", icon: <Palette size={20} /> },
  { name: "Miro", icon: <ClipboardList size={20} /> },
  { name: "Notion", icon: <PenTool size={20} /> },
  { name: "Google Analytics", icon: <BarChart size={20} /> },
  { name: "Python", icon: <Terminal size={20} /> },
  { name: "React", icon: <Code2 size={20} /> },
  { name: "AWS", icon: <Cloud size={20} /> },
  { name: "Docker", icon: <Container size={20} /> },
  { name: "Spring Boot", icon: <Leaf size={20} /> },
  { name: "NestJS", icon: <Cat size={20} /> },
];

const certifications = [
  {
    name: "Google AI Professional",
    issuer: "Google",
    year: "2024",
    color: "bg-blue-900/60",
  },
  {
    name: "MCP for LLM Apps",
    issuer: "Anthropic",
    year: "2024",
    color: "bg-sky-400/60",
  },
  {
    name: "System Design-Maven",
    issuer: "System Design Maven",
    year: "2024",
    color: "bg-indigo-900/60",
  },
];

interface AboutProps {
  className?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function About({ className = "", isExpanded = false, onToggle }: AboutProps) {
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpanded]);

  return (
    <>
      <div 
        id="about" 
        onClick={onToggle}
        className={`flex flex-col border-2 border-theme bg-secondary/50 p-6 md:p-8 overflow-hidden relative cursor-pointer group ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full gap-8 relative z-10"
        >
          <div className="flex items-center gap-6 mb-2">
            {/* Profile Image - Small Avatar Style for Grid */}
            <div className="w-20 h-20 rounded-full border-2 border-theme shadow-neo overflow-hidden flex-shrink-0">
              <img src={profilePhoto.src} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-indigo font-semibold block mb-1 flex items-center gap-2">
                About Me
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
              </span>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                AI Product Manager
              </h2>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Currently based in Riyadh, I specialize in building products at the
              intersection of AI, infrastructure, and User Research. My approach
              combines data-driven decision making with deep empathy for end users.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              I believe the best products solve real problems while feeling effortless to use.
            </p>
          </div>

          {/* Skills Tags */}
          <div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 border border-theme text-xs font-medium bg-primary/40 rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mt-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-3">
              Toolkit
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-2 border border-theme rounded-md bg-primary/40 hover:bg-primary transition-colors cursor-help group/tool relative"
                >
                  {tool.icon}
                  <div className="absolute bottom-full mb-2 hidden group-hover/tool:block whitespace-nowrap bg-indigo text-white text-xs px-2 py-1 rounded">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-sm"
            onClick={onToggle}
          >
            <motion.div
              layoutId="about-modal"
              className="bg-primary w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border-2 shadow-2xl relative flex flex-col"
              style={{ borderColor: "#3D3D9E" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-primary/95 backdrop-blur-md z-20 border-b-2 flex justify-between items-center p-6 md:px-8 md:py-6" style={{ borderColor: "#3D3D9E" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-theme overflow-hidden">
                    <img src={profilePhoto.src} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">Umar Zubair</h2>
                    <p className="text-sm text-muted mt-1">AI Product Manager</p>
                  </div>
                </div>
                <button 
                  onClick={onToggle}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex-1 space-y-12">
                
                <section>
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-indigo">
                    The Story
                  </h3>
                  <div className="prose prose-invert max-w-none text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                      Currently based in Riyadh, I specialize in building products at the
                      intersection of AI, infrastructure, and User Research. My approach
                      combines data-driven decision making with deep empathy for end users.
                    </p>
                    <p>
                      I believe the best products solve real problems while feeling effortless to use. 
                      Whether it's creating an autonomous QA agent or designing a frictionless email manager 
                      for students, I thrive on turning complex technical challenges into intuitive user experiences.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-indigo">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border-2 border-theme text-sm font-medium bg-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-indigo">
                    Tools & Technologies
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 p-3 border border-theme bg-secondary rounded-lg"
                      >
                        <span className="text-indigo">{tool.icon}</span>
                        <span className="text-sm font-medium">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-indigo">
                    Certifications
                  </h3>
                  <div className="flex flex-col gap-4">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className={`relative p-4 border border-theme overflow-hidden ${cert.color}`}
                      >
                        <div className="relative z-10">
                          <h4 className="font-semibold text-white">{cert.name}</h4>
                          <p className="text-sm text-white/80">{cert.issuer} • {cert.year}</p>
                        </div>
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          {/* Pattern or texture could go here */}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}