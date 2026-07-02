import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { DestinationCard } from '../components/DestinationCard';
import { Link } from 'react-router-dom';

const POPULAR_DESTINATIONS = [
  {
    id: '1',
    name: 'Santorini, Greece',
    location: 'Europe',
    price: 1200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop',
    description: 'Experience the stunning sunsets and white-washed architecture of this beautiful Greek island.'
  },
  {
    id: '2',
    name: 'Kyoto, Japan',
    location: 'Asia',
    price: 1500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    description: 'Immerse yourself in traditional Japanese culture, ancient temples, and beautiful gardens.'
  },
  {
    id: '3',
    name: 'Machu Picchu, Peru',
    location: 'South America',
    price: 900,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    description: 'Explore the breathtaking ruins of this ancient Incan citadel set high in the Andes Mountains.'
  }
];

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Discover Your Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">
                Great Adventure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Plan, book, and experience the world's most breathtaking destinations with TravelSync.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="w-full md:w-1/3">
              <Input 
                icon={MapPin} 
                label="Destination" 
                placeholder="Where are you going?" 
              />
            </div>
            <div className="w-full md:w-1/3">
              <Input 
                icon={Calendar} 
                label="Date" 
                type="date"
              />
            </div>
            <Button size="lg" className="w-full md:w-auto px-8 h-[42px] mb-[2px]">
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Popular Destinations
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Explore our most loved destinations and get inspired for your next journey.
              </p>
            </div>
            <Link to="/explore" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View all <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_DESTINATIONS.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DestinationCard {...dest} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/explore">
              <Button variant="outline" className="w-full">
                View all destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16">
            Why Travel With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Best Price Guarantee', desc: 'Find a lower price? We\'ll match it. We ensure you get the best deal.' },
              { title: 'Easy Booking', desc: 'Seamless and secure booking process. Get your tickets in minutes.' },
              { title: '24/7 Support', desc: 'Our dedicated team is here to help you anytime, anywhere in the world.' }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700/50">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
