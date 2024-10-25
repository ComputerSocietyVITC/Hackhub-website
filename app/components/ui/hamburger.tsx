"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House, Menu, Users, Calendar, Handshake } from "lucide-react";

const sections = [
  {
    id: "home",
    name: "Home",
    icon: <House className="h-4 w-4 text-gray-300" />,
  },
  {
    id: "about",
    name: "About",
    icon: <Users className="h-4 w-4 text-gray-300" />,
  },
  {
    id: "events",
    name: "Our Events",
    icon: <Calendar className="h-4 w-4 text-gray-300" />,
  },
  {
    id: "sponsors",
    name: "Sponsors",
    icon: <Handshake className="h-4 w-4 text-gray-300" />,
  },
];

export function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <button
        id="toggleButton"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 border rounded-full border-gray-600 hover:bg-gray-700 transition-all"
      >
        <Menu className="h-6 w-6 text-gray-300" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black p-4 rounded-lg shadow-lg mb-8"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                className={`w-full flex items-center p-2 rounded-md text-left justify-start transition-transform duration-200 ${
                  activeSection === section.id
                    ? "text-gray-300"
                    : "hover:bg-gray-600 hover:text-white"
                }`}
                style={{
                  fontSize: activeSection === section.id ? "inherit" : "1rem",
                  transform:
                    activeSection === section.id ? "none" : "scale(1.05)",
                }}
                onClick={() => {
                  setActiveSection(section.id);
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                {section.icon}
                <span className="ml-2">{section.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
