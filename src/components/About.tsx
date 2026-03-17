"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#dc2626]">01.</span> Sobre Mim
        </h2>
        
        <div className="space-y-6 text-[#a1a1aa] text-lg leading-relaxed">
          <p>
            Meu nome é Gabriel, sou desenvolvedor júnior com foco em desenvolvimento web. 
            Trabalho principalmente com React, Next.js e C#.
          </p>
          <p>
            Estou no início da minha carreira e busco oportunidades para aprender e crecer 
            profissionalmente. Tenho interesse em construir aplicações web modernas e performáticas.
          </p>
          <p>
            Quando não estou programando, estou estudando novas tecnologias e tentando melhorar 
            minhas habilidades. Estou aberto a colaborações e oportunidades de trabalho.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
