'use client';
import React from 'react';

export const runtime = "edge";

const NavBar: React.FC = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Prizes',id:'prizes'},
    {name: 'Team', id: 'team'},

    
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
        zIndex: 50,
        backdropFilter: 'blur(10px)', // Added blur effect
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background color
        borderRadius:'50px',
        overflow:'hidden'
      }}
      className="p-4 rounded-lg"
    >
      <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0">
        {navItems.map(({ name, id }) => (
          <li key={name} className="flex justify-center w-full md:w-auto">
            <button
              onClick={() => scrollToSection(id)}
              className="text-white w-full md:w-auto px-6 py-1 rounded-full font-bold duration-300 hover:bg-[#FFFFFF17] text-center"
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
