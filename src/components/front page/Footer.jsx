import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaTwitter, FaFacebookF, FaDribbble, FaGithub } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.footer
      className="relative pt-8 pb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
      initial="hidden"
      animate={controls}
      variants={footerVariants}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              Let's Keep in Touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms. We respond within 1-2 business
              days.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Free Resources
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
