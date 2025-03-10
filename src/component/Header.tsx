import React, { useState } from 'react';
import logo from "../assets/ews-full.png";
import school from "../assets/school.jpg"; // Import the background image
import vdo from "../assets/banner.mp4";
import { Menu, X } from 'lucide-react'; // Import icons for the hamburger menu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div 
      style={{
        backgroundImage: `url(${school})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <header className="sticky top-0 left-0 w-full z-50 bg-white text-[#126666] pt-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center font-bold text-xl">
            <div className="flex items-center justify-center mr-2">
              <img src={logo} alt="logo" width={180} height={35} />
            </div>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#126666] focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation links */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row">
              <li className="ml-6 py-2 md:py-0"><a href="#home" className="hover:text-[#126666]">Home</a></li>
              <li className="ml-6 py-2 md:py-0"><a href="#services" className="hover:text-[#126666]">Services</a></li>
              <li className="ml-6 py-2 md:py-0"><a href="#projects" className="hover:text-[#126666]">Projects</a></li>
              <li className="ml-6 py-2 md:py-0"><a href="#about" className="hover:text-[#126666]">About</a></li>
              <li className="ml-6 py-2 md:py-0"><a href="#contact" className="hover:text-[#126666]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section with Padding to Account for Fixed Header */}
      <section id="home" className="text-white pt-24 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hire the best <br/> <span className="text-[#126666] bg-white">Marketing Team.</span>
            </h1>
            <p className="mb-6">We help businesses grow through strategic marketing and innovative solutions.</p>
            <a 
              href="#contact" 
              className="bg-white text-[#126666] px-6 py-3 rounded font-semibold inline-block hover:bg-purple-100 transition duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
          </div>
          <div className="mt-10 md:mt-0 md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full bg-gray-800 flex items-center justify-center m-5">
            {/* Video Embed */}
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src={vdo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;