import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Map, Heart, Compass, Settings } from 'lucide-react';
import { DestinationCard } from '../components/DestinationCard';

export const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container-custom">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Ready for your next adventure? Here's your travel overview.
            </p>
          </div>
          <button className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-primary-600 shadow-sm border border-slate-100 dark:border-slate-700">
            <Settings size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Heart size={28} />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Saved Trips</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">4</p>
            </div>
          </div>
          <div className="card p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
              <Map size={28} />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Trips Planned</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">1</p>
            </div>
          </div>
          <div className="card p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Compass size={28} />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Places Visited</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
            </div>
          </div>
        </div>

        {/* Saved Trips & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recently Saved</h2>
              <a href="#" className="text-primary-600 text-sm font-medium hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DestinationCard 
                id="1"
                name="Santorini, Greece"
                location="Europe"
                price={1200}
                rating={4.8}
                image="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop"
                description="Experience the stunning sunsets and white-washed architecture."
              />
              <DestinationCard 
                id="2"
                name="Kyoto, Japan"
                location="Asia"
                price={1500}
                rating={4.9}
                image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
                description="Immerse yourself in traditional Japanese culture and temples."
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Budget Summary</h2>
            <div className="card p-6 bg-primary-600 text-white">
              <h3 className="text-primary-100 mb-1">Upcoming Trip: Paris</h3>
              <p className="text-3xl font-bold mb-4">$3,250</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-primary-100">Saved so far</span>
                    <span className="font-medium">$1,500</span>
                  </div>
                  <div className="w-full bg-primary-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
