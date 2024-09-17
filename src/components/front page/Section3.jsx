import { motion } from "framer-motion";
import React from "react";

const stats = [
  { name: "Job applications processed", value: "44 million" },
  { name: "Companies partnered", value: "5,000+" },
  { name: "New jobs posted annually", value: "120,000" },
];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function Section3() {
  return (
    <section id="stats-section" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-6 text-center">
        {/* Section heading */}
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          Job Portal Stats at a Glance
        </motion.h2>
        <motion.p
          className="mt-4 text-base leading-7 text-gray-600"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          custom={1}
        >
          Empowering your career with thousands of job opportunities worldwide.
        </motion.p>

        <motion.dl
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3"
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              variants={animationVariants}
              custom={index + 2}
            >
              <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
