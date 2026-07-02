import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Mail, MapPin, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="bg-primary-500 p-2 rounded-lg text-white group-hover:bg-primary-600 transition-colors">
                <Plane size={24} className="transform -rotate-45" />
              </div>
              <span className="text-xl font-bold text-white">
                TravelSync
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Your ultimate travel companion. Discover, plan, and book your perfect trip with our all-in-one platform designed for modern explorers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/explore" className="hover:text-primary-400 transition-colors">Destinations</Link></li>
              <li><Link to="/hotels" className="hover:text-primary-400 transition-colors">Hotels & Stays</Link></li>
              <li><Link to="/activities" className="hover:text-primary-400 transition-colors">Activities</Link></li>
              <li><Link to="/budget" className="hover:text-primary-400 transition-colors">Budget Planner</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>123 Travel Blvd, Suite 400<br/>San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>hello@travelsync.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TravelSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
