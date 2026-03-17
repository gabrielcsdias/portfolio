"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiDotnet, SiNodedotjs } from "react-icons/si";
import { VscSymbolMisc } from "react-icons/vsc";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  git: FaGitAlt,
  csharp: VscSymbolMisc,
  dotnet: SiDotnet,
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#991b1b]">03.</span> Skills
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaGithub;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#171717] p-4 rounded-lg flex flex-col items-center gap-3 border border-transparent hover:border-[#9333ea] transition-all duration-300 glow-hover"
              >
                <Icon className="w-8 h-8 text-[#9333ea]" />
                <span className="text-[#a1a1aa] text-sm font-[family-name:var(--font-jetbrains-mono)]">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
