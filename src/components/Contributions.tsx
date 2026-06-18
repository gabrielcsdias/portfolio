"use client";

import { motion } from "framer-motion";
import { contributions } from "@/lib/data";

export default function Contributions() {
  return (
    <section id="contribuicoes" className="min-h-screen py-20 px-6 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#991b1b]">03.</span> Contribuições
        </h2>

        <div className="flex flex-wrap gap-4">
          {contributions.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-1 min-w-[280px] bg-[#171717] rounded-lg p-5 border border-transparent hover:border-[#9333ea] transition-all duration-300 glow-hover"
            >
              <div className="flex gap-4">
                {item.image && <CardLogo url={item.image} />}
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CardLogo({ url }: { url: string }) {
  return (
    <div className="w-16 h-12 flex items-center justify-center shrink-0 rounded">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="max-h-full max-w-full object-contain" />
    </div>
  );
}
