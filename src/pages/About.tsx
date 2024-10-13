import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-8" variants={itemVariants}>
        About Engineering Society
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        <motion.p className="text-lg text-gray-600 mb-6" variants={itemVariants}>
          The Engineering Society at Taylor's University ADP is a vibrant community of aspiring engineers, dedicated to fostering innovation, collaboration, and professional growth. Our mission is to bridge the gap between academic learning and real-world engineering challenges.
        </motion.p>
        <motion.p className="text-lg text-gray-600 mb-6" variants={itemVariants}>
          Founded in 2010, our society has grown to become a hub for engineering enthusiasts, providing a platform for students to explore their passions, develop crucial skills, and network with industry professionals.
        </motion.p>
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4" variants={itemVariants}>
          Our Vision
        </motion.h2>
        <motion.p className="text-lg text-gray-600 mb-6" variants={itemVariants}>
          To empower the next generation of engineers with the knowledge, skills, and connections needed to drive technological advancements and solve global challenges.
        </motion.p>
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4" variants={itemVariants}>
          What We Do
        </motion.h2>
        <motion.ul className="list-disc list-inside text-lg text-gray-600 mb-6" variants={itemVariants}>
          <li>Organize workshops and seminars on cutting-edge engineering topics</li>
          <li>Host networking events with industry leaders</li>
          <li>Conduct hands-on projects and competitions</li>
          <li>Provide mentorship programs for junior members</li>
          <li>Collaborate with other universities and engineering societies</li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default About;