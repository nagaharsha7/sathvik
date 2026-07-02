import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Heart } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { generateItinerary } from '../services/ai';
import toast from 'react-hot-toast';

export const AiPlanner = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '3',
    interests: '',
  });
  const [itinerary, setItinerary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!formData.destination || !formData.days || !formData.interests) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsGenerating(true);
    setItinerary('');
    try {
      const result = await generateItinerary(formData.destination, formData.days, formData.interests);
      setItinerary(result);
      toast.success('Your AI itinerary is ready!');
    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Sparkles className="text-purple-600 dark:text-purple-400" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">AI Travel Planner</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let our Gemini AI generate a personalized, day-by-day travel itinerary based on your unique interests and timeframe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Trip Preferences</h2>
              
              <form onSubmit={handleGenerate} className="space-y-5">
                <Input 
                  label="Destination"
                  icon={MapPin}
                  placeholder="e.g. Tokyo, Japan"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  required
                />
                
                <Input 
                  label="Number of Days"
                  icon={Calendar}
                  type="number"
                  min="1"
                  max="14"
                  placeholder="e.g. 5"
                  value={formData.days}
                  onChange={(e) => setFormData({...formData, days: e.target.value})}
                  required
                />

                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Interests
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-2.5 pointer-events-none text-slate-400">
                      <Heart size={18} />
                    </div>
                    <textarea
                      className="flex w-full rounded-lg border border-slate-300 bg-white px-4 py-2 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 min-h-[100px]"
                      placeholder="e.g. Food, History, Adventure, Museums..."
                      value={formData.interests}
                      onChange={(e) => setFormData({...formData, interests: e.target.value})}
                      required
                    ></textarea>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 h-12" 
                  isLoading={isGenerating}
                >
                  <Sparkles size={18} className="mr-2" />
                  Generate Itinerary
                </Button>
              </form>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {isGenerating ? (
              <div className="card p-12 flex flex-col items-center justify-center h-full min-h-[400px] bg-slate-50 dark:bg-slate-800/50">
                <div className="animate-spin mb-6">
                  <Sparkles size={48} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Crafting your perfect trip...
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
                  Our AI is curating the best activities, dining spots, and experiences for you.
                </p>
              </div>
            ) : itinerary ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-8 lg:p-10 prose prose-slate dark:prose-invert max-w-none"
              >
                <ReactMarkdown>{itinerary}</ReactMarkdown>
              </motion.div>
            ) : (
              <div className="card p-12 flex flex-col items-center justify-center h-full min-h-[400px] border-dashed border-2 border-slate-300 dark:border-slate-700 bg-transparent shadow-none">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-6">
                  <MapPin size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No Itinerary Yet
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
                  Fill out your preferences on the left and hit generate to see the magic happen!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
