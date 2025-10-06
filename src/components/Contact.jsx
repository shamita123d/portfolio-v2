import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiLeetcode, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <footer className="py-12 border-t border-neutral-800 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-6 md:space-y-0">
        {/* Left - Name */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          Shamita Deogade
        </motion.h2>

        {/* Center - Titles + Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="font-semibold text-white">
            WEB DEVELOPER | JAVA FULL STACK DEVELOPER | TECH ENTHUSIAST
          </p>
          <div className="flex justify-center md:justify-start items-center mt-3 text-white md:pl-20">
            <SiGmail className="text-blue-400 text-xl mr-2" />
            <a
              href="mailto:shamitadeogade93@gmail.com"
              className="hover:text-blue-400 transition-colors text-sm break-all"
            >
              shamitadeogade93@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right - Social Links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end items-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/shamita-deogade-95572a257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors text-2xl"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/shamita123d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors text-2xl"
          >
            <SiGithub />
          </a>
          <a
            href="https://leetcode.com/u/shamita_deogade/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors text-2xl"
          >
            <SiLeetcode />
          </a>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-neutral-400 mt-8">
        © 2025 Shamita Deogade. All Rights Reserved.
      </div>
    </footer>
  );
}
