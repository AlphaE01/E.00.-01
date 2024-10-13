import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Sharat",
      role: "President",
      image: "https://drive.google.com/file/d/1gDKh18IkcMdFl87XL0wRqJ7f9gIKTe07/view?usp=drive_link",
      bio: "Engineering Student"
    },
    {
      name: "Hrithvik",
      role: "Vice President",
      image: "https://drive.google.com/file/d/17w0h--gJ-8BMex_6_m405N7KlANFfDnp/view?usp=drive_link",
      bio: "Computer Science Student"
    },
    {
      name: "Khujaev",
      role: "Secretary",
      image: "https://drive.google.com/file/d/1mbDCYEVHXPcFp38l7yhnk7id_5nPlipE/view?usp=drive_link",
      bio: "Computer Science Student"
    },
    {
      name: "Lohith",
      role: "Treasurer",
      image: "",
      bio: "Engineering Student"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Team
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover-scale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h2>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
