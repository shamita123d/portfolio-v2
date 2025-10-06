import { QUALIFICATIONS } from "../constants";
import { motion } from "framer-motion";

export default function Qualification() {
  return (
    <section className="border-b border-neutral-900 pb-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-bold"
      >
        Qualification
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 mt-15">
        {/* Vertical center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-neutral-800 -translate-x-1/2 "></div>

        {QUALIFICATIONS.map((qual, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Connector dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-neutral-900 z-10"></div>

              {/* Spacer for alignment (only desktop) */}
              {isLeft ? <div className="hidden md:block md:w-1/2"></div> : null}

              {/* Card */}
              <div
                className={`relative w-full md:w-1/2 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-900/30 transition-all duration-300 ${
                  isLeft
                    ? "md:mr-auto md:ml-0 md:text-right"
                    : "md:ml-auto md:mr-0 md:text-left"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-1">
                  {qual.title}
                </h3>
                <p className="text-neutral-300 text-sm mb-1">
                  {qual.institution}
                </p>
                <p className="text-neutral-400 text-sm mb-1">{qual.year}</p>
                <p className="text-neutral-400 text-sm italic mb-2">
                  Grade: {qual.grade}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {qual.description}
                </p>

                {/* small connector line from dot to card */}
                <div
                  className={`absolute top-6 ${
                    isLeft ? "right-[-24px]" : "left-[-24px]"
                  } hidden md:block w-6 h-[2px] bg-purple-500`}
                ></div>
              </div>

              {!isLeft ? (
                <div className="hidden md:block md:w-1/2"></div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
