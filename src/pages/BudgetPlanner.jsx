import React, { useState } from 'react';
import { Calculator, Wallet, Plane, Home, Utensils, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const BudgetPlanner = () => {
  const [formData, setFormData] = useState({
    days: 1,
    destination: '',
    hotelType: 'budget', // budget, mid, luxury
    foodType: 'street', // street, mid, fine
    activities: 'few', // few, moderate, many
  });

  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const costs = {
    hotel: { budget: 40, mid: 120, luxury: 350 },
    food: { street: 20, mid: 60, fine: 150 },
    activity: { few: 15, moderate: 45, many: 100 },
    flight: 400 // Base estimated flight cost
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const days = parseInt(formData.days) || 1;
      const hotelCost = costs.hotel[formData.hotelType] * days;
      const foodCost = costs.food[formData.foodType] * days;
      const activityCost = costs.activity[formData.activities] * days;
      const flightCost = costs.flight; // simplistic for now
      
      const total = hotelCost + foodCost + activityCost + flightCost;
      
      setEstimate({
        hotel: hotelCost,
        food: foodCost,
        activities: activityCost,
        flight: flightCost,
        total,
        perDay: Math.round((total - flightCost) / days)
      });
      setIsCalculating(false);
    }, 800);
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Budget Planner</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Estimate your trip costs instantly and plan your finances better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calculator className="text-primary-600" />
              <span>Trip Details</span>
            </h2>
            
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Destination"
                  placeholder="e.g. Paris"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  required
                />
                <Input 
                  label="Number of Days"
                  type="number"
                  min="1"
                  value={formData.days}
                  onChange={(e) => setFormData({...formData, days: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Accommodation Style
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'budget', label: 'Budget', icon: Home },
                    { id: 'mid', label: 'Mid-Range', icon: Home },
                    { id: 'luxury', label: 'Luxury', icon: Home },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, hotelType: type.id})}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.hotelType === type.id 
                          ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400' 
                          : 'border-slate-200 text-slate-600 hover:border-primary-200 dark:border-slate-700 dark:text-slate-400'
                      }`}
                    >
                      <type.icon size={20} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Dining Preference
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'street', label: 'Street/Fast', icon: Utensils },
                    { id: 'mid', label: 'Restaurants', icon: Utensils },
                    { id: 'fine', label: 'Fine Dining', icon: Utensils },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, foodType: type.id})}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.foodType === type.id 
                          ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400' 
                          : 'border-slate-200 text-slate-600 hover:border-primary-200 dark:border-slate-700 dark:text-slate-400'
                      }`}
                    >
                      <type.icon size={20} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  Activities & Tours
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'few', label: 'Minimal', icon: Activity },
                    { id: 'moderate', label: 'Moderate', icon: Activity },
                    { id: 'many', label: 'Action Packed', icon: Activity },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, activities: type.id})}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.activities === type.id 
                          ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400' 
                          : 'border-slate-200 text-slate-600 hover:border-primary-200 dark:border-slate-700 dark:text-slate-400'
                      }`}
                    >
                      <type.icon size={20} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-lg" isLoading={isCalculating}>
                Calculate Estimate
              </Button>
            </form>
          </div>

          {/* Results */}
          <div className="h-full">
            {estimate ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-8 bg-gradient-to-br from-primary-600 to-blue-800 text-white h-full flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-primary-100 mb-2">Estimated Total Cost</h3>
                  <div className="text-5xl font-bold flex items-baseline gap-2">
                    <span>${estimate.total.toLocaleString()}</span>
                    <span className="text-lg font-normal text-primary-200">USD</span>
                  </div>
                  <p className="mt-4 text-primary-100 bg-white/10 p-3 rounded-lg inline-block backdrop-blur-sm">
                    Avg. Daily Cost: <strong className="text-white">${estimate.perDay}/day</strong> (excl. flights)
                  </p>
                </div>

                <div className="space-y-4 flex-grow">
                  <h4 className="text-lg font-semibold border-b border-white/20 pb-2 mb-4">Cost Breakdown</h4>
                  
                  <div className="flex justify-between items-center bg-black/10 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Plane size={20} className="text-blue-300" />
                      <span>Flights (Est.)</span>
                    </div>
                    <span className="font-semibold">${estimate.flight}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-black/10 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home size={20} className="text-blue-300" />
                      <span>Accommodation</span>
                    </div>
                    <span className="font-semibold">${estimate.hotel}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-black/10 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Utensils size={20} className="text-blue-300" />
                      <span>Food & Dining</span>
                    </div>
                    <span className="font-semibold">${estimate.food}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-black/10 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Activity size={20} className="text-blue-300" />
                      <span>Activities</span>
                    </div>
                    <span className="font-semibold">${estimate.activities}</span>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-white text-primary-700 hover:bg-slate-100">
                  <Wallet size={20} className="mr-2" /> Save this Budget
                </Button>
              </motion.div>
            ) : (
              <div className="card p-8 h-full flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-300 dark:border-slate-700 bg-transparent shadow-none">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <Calculator size={32} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No Estimate Yet</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                  Fill out the trip details form and click calculate to see your estimated budget breakdown here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
