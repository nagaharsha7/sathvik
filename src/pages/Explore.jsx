import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { DestinationCard } from '../components/DestinationCard';
import { Input } from '../components/ui/Input';

const DESTINATIONS = [
  {
    id: '1',
    name: 'Santorini, Greece',
    location: 'Europe',
    price: 1200,
    rating: 4.8,
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop',
    description: 'Experience the stunning sunsets and white-washed architecture of this beautiful Greek island.'
  },
  {
    id: '2',
    name: 'Kyoto, Japan',
    location: 'Asia',
    price: 1500,
    rating: 4.9,
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    description: 'Immerse yourself in traditional Japanese culture, ancient temples, and beautiful gardens.'
  },
  {
    id: '3',
    name: 'Machu Picchu, Peru',
    location: 'South America',
    price: 900,
    rating: 4.7,
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    description: 'Explore the breathtaking ruins of this ancient Incan citadel set high in the Andes Mountains.'
  },
  {
    id: '4',
    name: 'Banff National Park',
    location: 'Canada',
    price: 1100,
    rating: 4.9,
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1523428935409-5452d9213bc5?q=80&w=800&auto=format&fit=crop',
    description: 'Witness turquoise glacial lakes and majestic mountain peaks in the Canadian Rockies.'
  },
  {
    id: '5',
    name: 'Bali, Indonesia',
    location: 'Asia',
    price: 850,
    rating: 4.6,
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    description: 'Relax on pristine beaches, explore lush rice terraces, and discover vibrant local culture.'
  },
  {
    id: '6',
    name: 'Rome, Italy',
    location: 'Europe',
    price: 1300,
    rating: 4.8,
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
    description: 'Step back in time as you wander through ancient ruins and savor world-class Italian cuisine.'
  }
];

const CATEGORIES = ['All', 'Beach', 'Culture', 'Adventure', 'Nature', 'City'];

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Destinations</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover amazing places around the world. Filter by category or search for your dream destination.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="w-full md:w-1/3">
            <Input 
              icon={Search} 
              placeholder="Search destinations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DestinationCard {...dest} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No destinations found</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
