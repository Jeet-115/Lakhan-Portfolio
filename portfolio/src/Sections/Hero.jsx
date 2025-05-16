import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer | Python, Django, Angular",
        "GenAI Health App Developer | OpenAI & LLaMA",
        "LMS Architect | Django, Zoom Integration, Automation",
        "Data Science & Visualization Enthusiast",
        "FastAPI, Docker, Kubernetes | Backend Pro",
        "BBPS Developer | Django, Angular, REST APIs",
        "Cloud Experience | Azure, AWS-S3, GCP, MinIO",
        "DSA & System Design Learner | Problem Solver",
      ],

      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="w-full mt-14 py-10 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={popupVariants}
        className="max-w-6xl pt-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-md rounded-xl dark:shadow-gray-400/50 shadow-xl shadow-black/60  bg-gray-400/50 dark:bg-black"
      >
        {/* Left: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 h-72 md:h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={popupVariants}
        >
          <img
            src="/profile/profilebg.png"
            alt="Lakhan Shrivastav"
            className="w-full lg:h-[600px] md:h-[500px] h-[300px] object-contain object-center rounded-xl drop-shadow-md drop-shadow-emerald-700 dark:drop-shadow-emerald-300"
          />
        </motion.div>

        {/* Right: Hero Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={popupVariants}
        >
          <h1 className="md:text-4xl text-xl font-bold outfit text-gray-900 dark:text-white mb-4">
            Lakhan Shrivastav
          </h1>
          <p className="md:text-xl text-md pb-2 md:pb-0 inter text-gray-700 dark:text-gray-300">
            <span className="typed" ref={typedRef} />
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
