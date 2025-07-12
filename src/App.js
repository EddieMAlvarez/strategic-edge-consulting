/*
 * Created by Eduardo Alvarez using Google Gemini, July 2025
 */
import React, { useState, useEffect } from 'react';

// Import the new profile components
import EddieProfile from './EddieProfile';
import CarolynProfile from './CarolynProfile';
import DanaProfile from './DanaProfile';

// Lucide React Icons (inline SVGs for guaranteed rendering)
export const Icon = ({ name, className }) => {
  switch (name) {
    case 'briefcase':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case 'mail':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'menu':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );
    case 'x':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      );
    default:
      return null;
  }
};

const Header = ({ scrollToSection, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg rounded-b-xl mx-auto max-w-7xl mt-4 px-4 py-3 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 font-roboto cursor-pointer" onClick={() => navigateTo('home')}>Strategic Edge Consulting</h1>
      <nav className="hidden md:flex space-x-8 font-roboto font-medium text-lg">
        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Home</button>
        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">About Us</button>
        <button onClick={() => scrollToSection('principals')} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Principals</button>
        <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Services</button>
        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Contact</button>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          <Icon name={isOpen ? 'x' : 'menu'} className="w-7 h-7" />
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl py-4 px-4 font-roboto text-lg">
          <button onClick={() => { scrollToSection('home'); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300">Home</button>
          <button onClick={() => { scrollToSection('about'); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300">About Us</button>
          <button onClick={() => { scrollToSection('principals'); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300">Principals</button>
          <button onClick={() => { scrollToSection('services'); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300">Services</button>
          <button onClick={() => { scrollToSection('contact'); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 transition-colors duration-300">Contact</button>
        </nav>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section id="home" className="relative h-screen bg-gradient-to-br from-blue-800 to-gray-900 text-white flex items-center justify-center text-center p-4">
    <div className="max-w-5xl space-y-8 px-6 py-12 bg-black bg-opacity-40 rounded-2xl shadow-2xl backdrop-blur-sm">
      <h2 className="text-5xl md:text-7xl font-extrabold leading-tight font-roboto tracking-tight">
        Elevate Your Enterprise.
        <br />
        Strategic Insight. Tangible Impact.
      </h2>
      <p className="text-xl md:text-2xl font-light font-roboto opacity-90 max-w-3xl mx-auto">
        Partner with us to navigate complex challenges, drive innovation, and achieve sustainable growth in the digital age.
      </p>
      <button className="bg-white text-blue-800 px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-100 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
        Discover Our Expertise
      </button>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-100 p-4">
    <div className="container mx-auto px-4 max-w-5xl text-center space-y-10">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto leading-tight">About Strategic Edge Consulting</h2>
      <p className="text-lg text-gray-700 leading-relaxed font-roboto max-w-3xl mx-auto">
        Strategic Edge Consulting is a premier advisory firm, bringing together a collective of seasoned executives with deep expertise in digital transformation, media strategy, and audience growth. We are committed to empowering organizations to thrive in dynamic markets by delivering bespoke, data-driven solutions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed font-roboto max-w-3xl mx-auto">
        Our approach is built on a foundation of rigorous analysis, innovative thinking, and a relentless focus on measurable outcomes. We pride ourselves on forging strong, collaborative partnerships with our clients, ensuring that every strategy is not only visionary but also practical, implementable, and aligned with your unique business objectives.
      </p>
    </div>
  </section>
);

const PrincipalsSection = ({ navigateTo }) => (
  <section id="principals" className="py-20 bg-white p-4">
    <div className="container mx-auto px-4 max-w-6xl text-center space-y-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto leading-tight">Meet Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Eddie's Card - NOW CLICKABLE */}
        <div
          className="bg-gray-50 rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-blue-700 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => navigateTo('eddieProfile')}
        >
          {/* Using PUBLIC_URL for images in the public folder */}
          <img src={`${process.env.PUBLIC_URL}/eddie.jpg`} alt="Eddie" className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-blue-300 shadow-md transform hover:scale-105 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-gray-900 font-roboto">Eddie</h3>
          <p className="text-blue-800 font-semibold text-lg font-roboto">Strategic Leadership & Digital Transformation</p>
          <p className="text-gray-700 text-base leading-relaxed font-roboto">
            Decades of executive leadership, specializing in large-scale digital product transformations, AI initiatives, content marketing, and organizational design. Proven ability to translate complex challenges into actionable plans and drive significant growth.
          </p>
          <Icon name="briefcase" className="w-9 h-9 text-blue-700 mx-auto mt-4 opacity-80" />
        </div>

        {/* Carolyn's Card - NOW CLICKABLE */}
        <div
          className="bg-gray-50 rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-green-700 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => navigateTo('carolynProfile')}
        >
          <img src={`${process.env.PUBLIC_URL}/carolyn.jpg`} alt="Carolyn" className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-green-300 shadow-md transform hover:scale-105 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-gray-900 font-roboto">Carolyn</h3>
          <p className="text-green-800 font-semibold text-lg font-roboto">User-Centric Product & Research</p>
          <p className="text-gray-700 text-base leading-relaxed font-roboto">
            Expert in user research, analytics, and drawing profound conclusions from user interviews and feedback sessions. Specializes in informing product decisions based on genuine user needs and behaviors, ensuring highly engaging and effective solutions.
          </p>
          <Icon name="users" className="w-9 h-9 text-green-700 mx-auto mt-4 opacity-80" />
        </div>

        {/* Dana's Card - NOW CLICKABLE */}
        <div
          className="bg-gray-50 rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-purple-700 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => navigateTo('danaProfile')}
        >
          <img src={`${process.env.PUBLIC_URL}/dana.jpg`} alt="Dana" className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-purple-300 shadow-md transform hover:scale-105 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-gray-900 font-roboto">Dana</h3>
          <p className="text-purple-800 font-semibold text-lg font-roboto">Audience Growth & SEO Excellence</p>
          <p className="text-gray-700 text-base leading-relaxed font-roboto">
            Decades of experience as a Director of SEO at a major media company, with a strong newsroom background. Specializes in comprehensive SEO strategy, content optimization, and driving organic audience growth through search expertise.
          </p>
          <Icon name="search" className="w-9 h-9 text-purple-700 mx-auto mt-4 opacity-80" />
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gray-100 p-4">
    <div className="container mx-auto px-4 max-w-6xl space-y-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center font-roboto leading-tight">Our Specialized Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Eddie's Pillar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-blue-700 transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-blue-800 font-roboto flex items-center">
            <Icon name="briefcase" className="w-8 h-8 mr-3 text-blue-700" /> Strategic Leadership & Digital Transformation
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-roboto text-lg">
            <li>Executive Strategic Roadmapping & Visioning</li>
            <li>Organizational Design & Reorganization Consulting</li>
            <li>Advanced Digital Product Vision & AI Integration</li>
            <li>High-Level Content Strategy & Newsroom Transformation</li>
            <li>Executive Mentorship & Leadership Coaching</li>
          </ul>
        </div>

        {/* Carolyn's Pillar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-green-700 transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-green-800 font-roboto flex items-center">
            <Icon name="users" className="w-8 h-8 mr-3 text-green-700" /> User-Centric Product & Research
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-roboto text-lg">
            <li>In-Depth User Research & Audience Insights</li>
            <li>User Experience (UX) & Product Design Guidance</li>
            <li>Audience Segmentation & Persona Development</li>
            <li>Analytics for User Behavior & Optimization</li>
          </ul>
        </div>

        {/* Dana's Pillar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5 border-t-4 border-purple-700 transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-purple-800 font-roboto flex items-center">
            <Icon name="search" className="w-8 h-8 mr-3 text-purple-700" /> Audience Growth & SEO Excellence
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 font-roboto text-lg">
            <li>Comprehensive SEO Strategy & Implementation</li>
            <li>Content Marketing & Digital Distribution</li>
            <li>Newsroom SEO Training & Workflow Integration</li>
            <li>Competitive Audience Analysis & Growth Opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white p-4">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto leading-tight">Get In Touch</h2>
        <p className="text-lg text-gray-700 font-roboto max-w-2xl mx-auto">
          Ready to elevate your organization's digital capabilities? Contact us today for a confidential discussion about your strategic needs.
        </p>
        <div className="mt-10 max-w-lg mx-auto bg-gray-50 p-4 rounded-2xl shadow-lg border border-gray-200">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc3NCoI-jCysiapF9EUVcrfx_1BTXXdj-5l6hCMVtT87bjA-w/viewform?embedded=true" // Your Google Form URL
            width="100%"
            height="850" // You might need to adjust this height based on your form's content
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            className="rounded-xl"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 px-4 rounded-t-xl mx-auto max-w-7xl mb-4">
    <div className="container mx-auto text-center font-roboto space-y-4">
      <p className="text-lg">&copy; {new Date().getFullYear()} Strategic Edge Consulting. All rights reserved.</p>
      <div className="text-base text-gray-400">
        <p>Empowering Leaders. Driving Transformation.</p>
      </div>
    </div>
  </footer>
);

function App() {
  // State to manage the current page view
  const [currentPage, setCurrentPage] = useState('home');
  // New state to hold the ID of the section to scroll to after navigating to 'home'
  const [pendingScrollId, setPendingScrollId] = useState(null);

  // Function to navigate to a different page or to a section on the home page
  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    setPendingScrollId(sectionId); // Store the section to scroll to
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Always scroll to top on page transition
  };

  // Function to scroll to a section on the main page, handling navigation if needed
  const scrollToSection = (id) => {
    if (currentPage !== 'home') {
      // If not on home, navigate to home first, then scroll
      navigateTo('home', id);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 120; // Match padding-top
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  // Effect to handle scrolling after 'home' page renders or when a pendingScrollId is set
  useEffect(() => {
    if (currentPage === 'home' && pendingScrollId) {
      const element = document.getElementById(pendingScrollId);
      if (element) {
        const headerOffset = 120; // Match padding-top
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth'
        });
        setPendingScrollId(null); // Clear after scrolling
      }
    }
  }, [currentPage, pendingScrollId]); // Re-run when currentPage or pendingScrollId changes

  // Render content based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
            <PrincipalsSection navigateTo={navigateTo} />
            <ServicesSection />
            <ContactSection />
          </>
        );
      case 'eddieProfile':
        return <EddieProfile navigateTo={navigateTo} />;
      case 'carolynProfile':
        return <CarolynProfile navigateTo={navigateTo} />;
      case 'danaProfile':
        return <DanaProfile navigateTo={navigateTo} />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <PrincipalsSection navigateTo={navigateTo} />
            <ServicesSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 font-roboto text-gray-900"> {/* Changed font-inter to font-roboto */}
      {/* The style block remains in App.js as it's component-specific styling */}
      <style>
        {`
        body {
          font-family: 'Roboto', sans-serif; /* Changed font-family to Roboto */
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }
        html {
          scroll-behavior: smooth;
        }
        /* Ensure sections have enough padding to not be hidden by fixed header */
        section:not(#home) {
          padding-top: 120px; /* Adjusted for new header height/padding */
        }
        `}
      </style>

      <Header scrollToSection={scrollToSection} navigateTo={navigateTo} />
      <main className="pt-[100px] md:pt-[120px]"> {/* Adjusted main padding to account for fixed header */}
        {renderPage()} {/* Render the current page */}
      </main>
      <Footer />
    </div>
  );
}

export default App;