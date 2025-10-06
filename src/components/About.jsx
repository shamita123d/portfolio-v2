import { motion } from "framer-motion";
import { ABOUT_TECH, ABOUT_TEXT } from "../constants";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-extrabold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      {/* About Text + Technologies */}
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-center">
        {/* About Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center lg:w-1/2"
        >
          <p className="max-w-xl text-sm sm:text-base md:text-lg font-light tracking-tight text-center lg:text-left py-5 leading-relaxed text-gray-300 px-2 sm:px-0">
            {ABOUT_TEXT}
          </p>
        </motion.div>

        {/* Technologies Badges */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center gap-3 mt-6 lg:mt-0 lg:ml-10"
        >
          {ABOUT_TECH.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-neutral-900 text-purple-400 font-medium text-sm hover:bg-purple-800 hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
