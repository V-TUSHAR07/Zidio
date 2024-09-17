import React from "react";
import { motion } from "framer-motion";

const stats = [
  { name: "Open roles", value: "50+" },
  { name: "Internships available", value: "20+" },
  { name: "Team members", value: "200+" },
];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Section5() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
        {/* Section heading */}
        <motion.h2
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          Join Our Team
        </motion.h2>
        <motion.p
          className="mt-4 text-xl leading-8 text-gray-600"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover exciting career opportunities and be a part of our dynamic
          team.
        </motion.p>

        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 text-center sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
            >
              <div className="flex justify-center items-center text-gray-900 text-6xl">
                {/* Replace with appropriate icons */}
                {stat.name === "Open roles" && (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 6h14v2H5zm0 4h14v2H5zm0 4h14v2H5z" />
                  </svg>
                )}
                {stat.name === "Internships available" && (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.75l7.5 3.75v7.5L12 18.25 4.5 13.5v-7.5L12 4.75z" />
                  </svg>
                )}
                {stat.name === "Team members" && (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6-4c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6zm-6 6c-3.33 0-6 2.67-6 6v1h12v-1c0-3.33-2.67-6-6-6zm-6 8v2h12v-2H6z" />
                  </svg>
                )}
              </div>
              <dt className="text-xl leading-8 text-gray-600">{stat.name}</dt>
              <dd className="text-2xl font-bold text-gray-900">{stat.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
