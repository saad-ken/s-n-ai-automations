import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const sectorsData = [
  {
    title: "E-commerce",
    description:
      "Streamline operations with AI-driven inventory and sales management.",
    icon: "🛒",
  },
  {
    title: "IT & SaaS",
    description:
      "Automate software workflows, support tickets, and cloud tasks.",
    icon: "💻",
  },
  {
    title: "Marketing & Sales",
    description: "Boost engagement and conversions with AI-powered campaigns.",
    icon: "📈",
  },
  {
    title: "Customer Support",
    description: "Provide instant responses and resolve queries efficiently.",
    icon: "🎧",
  },
  {
    title: "AI & Automation Agencies",
    description: "Deliver innovative AI solutions to clients faster.",
    icon: "🤖",
  },
  {
    title: "Content & Media",
    description: "Generate content, captions, and media assets with AI.",
    icon: "🎬",
  },
  {
    title: "Schools & Colleges",
    description: "Automate admissions, grading, and communication processes.",
    icon: "🏫",
  },
];

const Sectors = () => {
  return (
    <section
      id="sectors"
      className="relative py-20 overflow-hidden bg-gray-950 text-white"
    >
      {/* Liquid Glass Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.25),transparent_70%),radial-gradient(circle_at_70%_70%,rgba(255,0,255,0.25),transparent_70%)] blur-3xl opacity-70"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sectorsData.map((sector, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotateX: 5,
                rotateY: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative p-6 rounded-2xl shadow-xl bg-white/10 border border-white/20 backdrop-blur-lg overflow-hidden group"
            >
              {/* Liquid shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              ></motion.div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                <p className="text-gray-200">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
