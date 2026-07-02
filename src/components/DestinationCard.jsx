import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Button } from './ui/Button';

export const DestinationCard = ({ id, image, name, location, rating, price, description }) => {
  return (
    <div className="card group flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop"} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-sm font-semibold text-slate-900 shadow-sm">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span>{rating}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
              <MapPin size={14} className="mr-1 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">From</span>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">${price}</span>
          </div>
        </div>
        
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 flex-grow">
          {description}
        </p>
        
        <Link to={`/explore/${id}`} className="mt-4 block w-full">
          <Button variant="outline" className="w-full">
            Explore Details
          </Button>
        </Link>
      </div>
    </div>
  );
};
