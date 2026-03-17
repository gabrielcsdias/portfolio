"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#dc2626]">04.</span> Contato
        </h2>
        
        <p className="text-[#a1a1aa] text-lg mb-12">
          Estou disponível para oportunidades de trabalho e colaborações. 
          Entre em contato!
        </p>
        
        <div className="flex justify-center gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#171717] rounded-lg text-[#a1a1aa] hover:text-white hover:border-[#9333ea] border border-transparent transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#171717] rounded-lg text-[#a1a1aa] hover:text-white hover:border-[#9333ea] border border-transparent transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={socials.email}
            className="p-4 bg-[#171717] rounded-lg text-[#a1a1aa] hover:text-white hover:border-[#9333ea] border border-transparent transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
