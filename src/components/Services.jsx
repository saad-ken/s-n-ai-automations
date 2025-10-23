import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and streamline workflows for efficiency.",
    icon: "⚙️",
  },
  {
    title: "AI Chatbots",
    description: "Enhance customer engagement with intelligent chatbots.",
    icon: "🤖",
  },
  {
    title: "Predictive Analytics",
    description: "Make data-driven decisions using advanced AI predictions.",
    icon: "📊",
  },
  {
    title: "Content Generation",
    description:
      "Generate high-quality content automatically for media and marketing.",
    icon: "✍️",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our AI Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md
                         hover:bg-white/20 hover:backdrop-blur-lg
                         transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
