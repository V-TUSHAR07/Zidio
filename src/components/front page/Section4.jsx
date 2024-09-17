import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import image from "./images/portel.avif";

const features = [
  {
    name: "Easy job posting.",
    description:
      "Post your job listings in minutes and reach thousands of potential candidates quickly.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure applications.",
    description:
      "Ensure your data is safe with encrypted SSL certificates, safeguarding both companies and applicants.",
    icon: LockClosedIcon,
  },
  {
    name: "Candidate backups.",
    description:
      "Keep a backup of all your candidate data to ensure smooth workflows and data recovery.",
    icon: ServerIcon,
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function Section4() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            <div className="lg:max-w-lg">
              <motion.h2
                className="text-base font-semibold leading-7 text-indigo-600"
                variants={animationVariants}
              >
                Join our platform
              </motion.h2>
              <motion.p
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                variants={animationVariants}
                custom={1}
              >
                Streamline your hiring process
              </motion.p>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                variants={animationVariants}
                custom={2}
              >
                With our job portal, you can post jobs, manage applications, and
                hire top talent seamlessly.
              </motion.p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="relative pl-9"
                    variants={animationVariants}
                    custom={index + 3}
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.img
            alt="Product screenshot"
            src={image}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
