import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm <span className="text-pink-500">Sunetra</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Web Developer | ML Specialist | Future Diplomat
      </motion.p>
    </section>
  )
}
