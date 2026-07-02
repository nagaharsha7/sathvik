import React from 'react';

export const PlaceholderPage = ({ title }) => (
  <div className="flex-grow flex items-center justify-center bg-slate-50 dark:bg-slate-900 py-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h1>
      <p className="text-slate-500 dark:text-slate-400">
        This page is currently under construction. Check back soon!
      </p>
    </div>
  </div>
);
