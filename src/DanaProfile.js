import React from 'react';
import { Icon } from './App'; // Import Icon component from App.js

const DanaProfile = ({ navigateTo }) => {
  return (
    <section className="py-20 bg-gray-100 p-4 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl space-y-12 bg-white rounded-2xl shadow-xl p-10 border-t-4 border-purple-700">
        <button
          onClick={() => navigateTo('home', 'principals')} // CORRECTED: onClick is now inside the button tag
          className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors duration-300 font-semibold text-lg mb-8"
        >
          <Icon name="arrow-left" className="w-6 h-6 mr-2" /> Back to Principals
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0">
          <img
            src={`${process.env.PUBLIC_URL}/dana.jpg`}
            alt="Dana"
            className="rounded-full w-48 h-48 object-cover border-6 border-purple-200 shadow-lg flex-shrink-0"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 font-inter leading-tight">Dana</h2>
            <p className="text-2xl font-semibold text-purple-700 font-inter">Audience Growth & SEO Excellence</p>
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              Dana's detailed profile content will go here. She has decades of experience as a Director of SEO at a major media company, with a strong newsroom background. She specializes in comprehensive SEO strategy and driving organic audience growth.
            </p>
          </div>
        </div>

        {/* Key Skills */}
        <div className="space-y-6 pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 font-inter">Key Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">SEO Strategy</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Content Optimization</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Audience Acquisition</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Newsroom SEO Training</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Competitive Analysis</span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Digital Marketing</span>
          </div>
        </div>

        {/* Years in Industry */}
        <div className="space-y-4 pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 font-inter">Years in Industry</h3>
          <p className="text-lg text-gray-700 font-inter">
            [Add Dana's years of experience here]
          </p>
        </div>

      </div>
    </section>
  );
};

export default DanaProfile;