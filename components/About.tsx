"use client";

import { motion } from "framer-motion";
import profilePhoto from "./profile-photo.png";
import ThreeBackground from "./ThreeBackground";

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
  { name: "Figma", icon: "🎨" },
  { name: "Miro", icon: "📋" },
  { name: "Notion", icon: "📝" },
  { name: "Google Analytics", icon: "📊" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "NestJS", icon: "🐱" },
];

const certifications = [
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    year: "2024",
    color: "bg-blue-900/60",
  },
  {
    name: "MCP for LLM Applications",
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

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 items-start"
        >
          {/* Profile Image */}
          <div className="aspect-square rounded-none border-4 shadow-neoLg overflow-hidden opacity-90">
            <img src={profilePhoto.src} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-widest text-indigo font-semibold mb-4 block">
                About Me
              </span>
              <h2 className="font-serif text-4xl mb-6 leading-tight">
                I&apos;m Umar an AI Product Manager who bridges{" "}
                <em className="text-indigo italic">technology</em> and{" "}
                <em className="text-indigo italic">human needs</em>.
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Currently based in Riyadh, I specialize in building products at the
                intersection of AI, infrastructure, and user research. My approach
                combines data-driven decision making with deep empathy for end users.
              </p>
              <p className="text-lg leading-relaxed mb-8">I believe the best products
                solve real problems while feeling effortless to use.
              </p>
            </motion.div>

            {/* Skills Tags */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-4">
                What I Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 border-2 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-4">
                Tools I Use
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`relative px-4 py-2 text-sm font-medium text-white h-8 ${cert.color} opacity-90`}
                  >
                    <ThreeBackground />
                    <span className="relative z-10">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}