import React from 'react';
import { Icon } from './App'; // Import Icon component from App.js

const EddieProfile = ({ navigateTo }) => {
  return (
    <section className="py-20 bg-gray-100 p-4 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl space-y-12 bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-700">
        <button
          onClick={() => navigateTo('home', 'principals')} // CORRECTED: onClick is now inside the button tag
          className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300 font-semibold text-lg mb-8"
        >
          <Icon name="arrow-left" className="w-6 h-6 mr-2" /> Back to Principals
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0">
          <img
            src={`${process.env.PUBLIC_URL}/eddie.jpg`}
            alt="Eddie"
            className="rounded-full w-48 h-48 object-cover border-6 border-blue-200 shadow-lg flex-shrink-0"
          />
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 font-inter leading-tight">Eddie</h2>
            <p className="text-2xl font-semibold text-blue-700 font-inter">Strategic Leadership & Digital Transformation</p>
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              With over two decades of executive experience, Eddie is a visionary leader renowned for orchestrating large-scale digital product transformations and driving significant growth in dynamic media landscapes. His expertise spans content strategy, organizational design, and leveraging emerging technologies, including AI, to unlock new revenue streams and enhance user engagement.
            </p>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="space-y-6 pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 font-inter">Career Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-inter text-lg">
            <li>**VP of Experiences:** Led comprehensive digital product and content strategies, achieving [mention a specific quantifiable achievement if you have one, e.g., "30% audience growth" or "successful launch of X new platforms"].</li>
            <li>**Pulitzer & Webby Award Winner:** Recognized for innovative digital initiatives and groundbreaking content, demonstrating a commitment to excellence and impact.</li>
            <li>**Content Marketing & Newsroom Integration:** Spearheaded strategies to optimize content performance, streamline newsroom workflows, and integrate content marketing initiatives for broader reach.</li>
            <li>**Organizational Restructuring:** Designed and implemented new organizational structures to align teams with digital-first objectives, fostering agility and efficiency.</li>
            <li>**AI Strategy & Implementation:** Advised on and integrated artificial intelligence solutions to enhance content discovery, personalization, and operational efficiency within media organizations.</li>
          </ul>
        </div>

        {/* Key Skills */}
        <div className="space-y-6 pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 font-inter">Key Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Digital Transformation</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Product Strategy & Management</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">AI Integration</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Content Strategy & Development</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Organizational Design</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Executive Leadership</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Newsroom Operations</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Content Marketing</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Editing & Publishing</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Change Management</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Audience Growth Strategies</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">Strategic Partnerships</span>
          </div>
        </div>

        {/* Years in Industry */}
        <div className="space-y-4 pt-8 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 font-inter">Years in Industry</h3>
          <p className="text-lg text-gray-700 font-inter">
            Over 20 years of experience at the forefront of digital media and technology, adapting to and driving industry evolution.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EddieProfile;