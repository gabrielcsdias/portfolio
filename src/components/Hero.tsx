"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <p className="text-[#a1a1aa] mb-4 text-lg">Olá, meu nome é</p>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Gabriel</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-[#a1a1aa] mb-8">
          Desenvolvedor <span className="text-white">Full Stack</span>
        </p>
        
        <p className="text-[#a1a1aa] text-lg max-w-2xl mb-12">
          Desenvolvo aplicações web com React, Next.js, Node.js e C#, focando em performance, organização de código e boas práticas de desenvolvimento.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="#projetos"
            className="px-8 py-3 border-2 border-[#9333ea] text-[#9333ea] rounded-lg hover:bg-[#9333ea] hover:text-white transition-all duration-300 glow-purple"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 bg-[#991b1b] text-white rounded-lg hover:bg-[#7f1d1d] transition-all duration-300 glow-red"
          >
            Contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}
