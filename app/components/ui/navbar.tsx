"use client";  // This directive marks the component as a Client Component

import React from 'react';

const NavBar: React.FC = () => {
  // Function to scroll to the specified section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        left: '500px',     
        width: '772px',   
        height: '56px',    
        top: '8px',
      }} 
      className="bg-[#0a0a0a] p-4"
    >
      <ul className="flex items-center">
        <li>
          <button 
            onClick={() => scrollToSection('homepage')}
            className="text-white px-6 py-1 rounded-full hover:bg-[#FFFFFF17]"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('aboutpage')}
            className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full"
          >
            Events
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full"
          >
            Sponsors
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
