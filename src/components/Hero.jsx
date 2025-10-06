import { motion } from "framer-motion";
import Typed from "react-typed-component";
import aboutImg from "../assets/profile.png";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-10 border-b border-neutral-900 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-4">
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl sm:text-4xl"
          >
            Hi, I'm
          </motion.span>

          <motion.h1
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-gray-400 via-white to-blue-400 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            Shamita Deogade
          </motion.h1>

          <motion.div
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              <Typed
                strings={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Coder",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </motion.div>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-sm sm:text-base md:text-lg font-light tracking-tight leading-relaxed text-gray-300 px-2 sm:px-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={container(2.0)}
            initial="hidden"
            animate="visible"
            href="/Resume.pdf"
            download
            className="relative border-2 animate-pulse rounded-lg border-white bg-transparent py-2.5 px-6 font-medium uppercase text-white transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-300 before:transition-transform before:duration-300 hover:text-black before:hover:scale-x-100 dark:text-white dark:border-gray-700 dark:hover:text-gray-800 dark:before:bg-gray-300"
          >
            Download Resume
          </motion.a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-full lg:w-1/2"
        >
          <img
            src={aboutImg}
            alt="profile"
            className="rounded-full w-56 sm:w-72 md:w-80 lg:w-96 shadow-sm border-4 border-violet-200 hover:border-violet-700 hover:shadow-blue-800 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
