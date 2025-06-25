import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col items-center text-center">
      <motion.h2 className="text-4xl font-bold mb-6">About Me</motion.h2>
      <motion.p className="max-w-3xl text-lg text-gray-300">
        I'm a final-year Computer Science student passionate about Machine Learning, Full-Stack Development, and exploring international relations. I love solving real-world problems and building impactful tools.
      </motion.p>
    </section>
  );
}
