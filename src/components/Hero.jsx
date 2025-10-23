// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a0f1f]" />

      {/* Blue breathing blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-700/30 blur-[150px] rounded-full top-1/3 left-1/4"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple breathing blob */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-800/40 blur-[180px] rounded-full bottom-1/4 right-1/4"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.9, 0.3],
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Optional glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] mix-blend-overlay"></div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Transform Your Business with AI Automation
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We bring cutting-edge AI solutions to life — E-commerce, SaaS, and
          more.
        </motion.p>

        <motion.button
          onClick={scrollToContact}
          className="bg-blue-600/90 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md text-lg transition border border-white/10 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
