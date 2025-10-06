import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; // certificate icon
import { ACHIEVEMENT } from "../constants";

export default function Achievement() {
  return (
    <section className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-bold"
      >
        Achievements
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-12">
        {ACHIEVEMENT.map((qual, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-lg hover:shadow-purple-900/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {qual.title}
            </h3>
            {qual.institution && (
              <p className="text-neutral-300 text-sm mb-1">
                {qual.institution}
              </p>
            )}
            {qual.year && (
              <p className="text-neutral-400 text-sm mb-3">{qual.year}</p>
            )}

            {/* Grade / Certificate Icon */}
            <p className="text-neutral-400 text-sm mb-2 italic">
              {qual.grade ? (
                <a
                  href={qual.grade}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-purple-400 transition-colors text-2xl"
                  title="View Certificate"
                >
                  <FiExternalLink />
                </a>
              ) : (
                qual.grade
              )}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
