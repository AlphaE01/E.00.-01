import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  const events = [
    {
      title: "Tech Talk: Future of AI in Engineering",
      date: "May 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      description: "Join us for an insightful discussion on how AI is shaping the future of engineering.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Workshop: 3D Printing Fundamentals",
      date: "June 2, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Engineering Lab, Taylor's University",
      description: "Learn the basics of 3D printing and create your first 3D printed object.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Industry Visit: Renewable Energy Plant",
      date: "June 20, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Kuala Lumpur Solar Farm",
      description: "Experience firsthand the operations of a large-scale solar energy plant.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        Upcoming Events
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover-scale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4 flex items-center">
                <Calendar size={18} className="mr-2" />
                {event.date}, {event.time}
              </p>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Register Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;