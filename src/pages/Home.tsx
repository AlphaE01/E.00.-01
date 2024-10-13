import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'}}>
        <div className="container mx-auto px-6 py-32 md:py-40">
          <div className="flex flex-col items-center text-center animate-slideIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to the Engineering Society</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Empowering future engineers at Taylor's University ADP through innovation, collaboration, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/events" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                Upcoming Events
              </Link>
              <Link to="/join" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-blue-600 mb-4" />}
              title="Exciting Events"
              description="Participate in workshops, seminars, and competitions to enhance your skills and knowledge."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-blue-600 mb-4" />}
              title="Networking Opportunities"
              description="Connect with industry professionals and fellow engineering enthusiasts."
            />
            <FeatureCard
              icon={<Mail className="w-12 h-12 text-blue-600 mb-4" />}
              title="Mentorship Programs"
              description="Get guidance from experienced engineers and alumni to boost your career prospects."
            />
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Tech Talk: Future of AI in Engineering"
              date="May 15, 2024"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <EventCard
              title="Workshop: 3D Printing Fundamentals"
              date="June 2, 2024"
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <EventCard
              title="Industry Visit: Renewable Energy Plant"
              date="June 20, 2024"
              image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/events" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover-scale">
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventCard: React.FC<{ title: string; date: string; image: string }> = ({ title, date, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover-scale">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <Link to="/events" className="text-blue-600 hover:text-blue-800 font-semibold">Learn More</Link>
    </div>
  </div>
);

export default Home;