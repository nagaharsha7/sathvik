import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, CloudSun, Calendar, ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Using the same data for demo purposes. In a real app, this would be fetched from an API.
const DESTINATIONS = {
  '1': {
    name: 'Santorini, Greece',
    location: 'Europe',
    price: 1200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1600&auto=format&fit=crop',
    description: 'Experience the stunning sunsets and white-washed architecture of this beautiful Greek island. Santorini is considered to be the most sought after place for a romantic getaway in Greece, since there are not many places in the world where you can enjoy exquisitely clear waters while perched on the rim of a massive active volcano in the middle of the sea!',
    weather: '24°C / Sunny',
    bestTime: 'May to October',
    duration: '5 Days',
    attractions: ['Oia Sunset View', 'Red Beach', 'Akrotiri Archaeological Site']
  }
};

export const DestinationDetails = () => {
  const { id } = useParams();
  const destination = DESTINATIONS[id] || DESTINATIONS['1']; // Fallback for demo

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        
        <div className="absolute top-6 left-6 z-10">
          <Link to="/explore">
            <Button variant="secondary" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
              <ArrowLeft size={20} />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="container-custom pb-10 pt-20">
            <div className="flex items-center gap-2 text-primary-400 mb-2 font-medium">
              <MapPin size={18} />
              <span>{destination.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-200">
              <div className="flex items-center gap-1.5">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <span className="font-semibold text-white">{destination.rating}</span>
                <span>(2.4k reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={18} />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign size={18} />
                <span>Starting from ${destination.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Top Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attr, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{attr}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Trip Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                    <CloudSun size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Current Weather</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{destination.weather}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Best Time to Visit</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{destination.bestTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500 dark:text-slate-400">Total Price</span>
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">${destination.price}</span>
                </div>
                <Button className="w-full text-lg h-12">
                  Plan This Trip
                </Button>
                <Button variant="outline" className="w-full mt-3">
                  Save to Wishlist
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
