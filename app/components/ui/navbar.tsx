import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
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
          <Link href={"/home"} className="text-white px-6 py-1 rounded-full hover:bg-[#FFFFFF17]">
            Home
          </Link>
        </li>
        <li>
          <button className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full">
            About
          </button>
        </li>
        <li>
          <button className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full">
            Events
          </button>
        </li>
        <li>
          <button className="text-white px-6 py-1 hover:bg-[#FFFFFF17] rounded-full">
            Sponsors
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
