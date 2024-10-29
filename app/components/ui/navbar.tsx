'use client';
import React from 'react';

const NavBar: React.FC = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Sponsors', id: 'sponsors' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '8px',
        maxWidth: '100%',
        width: '772px',
      }}
      className="p-4 rounded-lg"
    >
      <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0">
        {navItems.map(({ name, id }) => (
          
          <li key={name} className="flex justify-center w-full md:w-auto">
            <button
              onClick={() => scrollToSection(id)}
              className="text-white w-full md:w-auto px-6 py-1 rounded-full border border-gray-400 hover:bg-[#FFFFFF17] text-center"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
