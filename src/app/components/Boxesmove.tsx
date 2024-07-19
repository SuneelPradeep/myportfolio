// components/Card.js
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Card = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      className="super bg-teal-500 dark:bg-gray-800 p-4 rounded-lg shadow-lg w-64 mb-6"
      style={{ background: "blue" }}
      initial={{ opacity: 0, x: -50, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0, ease: "easeInOut" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4"
        initial={{ opacity: 0, x: -50, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0, ease: "easeInOut" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.h3
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0, x: -50, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0, ease: "easeInOut" }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, x: -50, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0, ease: "easeInOut" }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const skills = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites.",
    imageSrc: "path/to/web-development.jpg"
  },
  {
    title: "Graphic Design",
    description: "Creating visual content to communicate messages.",
    imageSrc: "path/to/graphic-design.jpg"
  },
  {
    title: "Photography",
    description: "Capturing moments through the lens.",
    imageSrc: "path/to/photography.jpg"
  }
];

const App = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < skills.length; i++) {
        await controls.start((index) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: index * 0.5, ease: "easeInOut" }
        }));
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="flex flex-col items-start">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            custom={index}
          >
            <Card
              title={skill.title}
              description={skill.description}
              imageSrc={skill.imageSrc}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
