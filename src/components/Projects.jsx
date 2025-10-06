import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; // icon for button
import { PROJECTS } from "../constants";

export default function Project() {
  return (
    <div className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="p-5 md:p-0">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap justify-center">
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={155}
                height={155}
                alt={project.title}
                className="mb-6 rounded-lg shadow-md"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold ">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Tech stack */}
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
