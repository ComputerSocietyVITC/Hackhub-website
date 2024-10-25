"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const sections = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "events",
    name: "Events",
  },
  {
    id: "sponsors",
    name: "Sponsors",
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
        className="md:hidden p-2 border rounded-full border-gray-600 hover:bg-gray-200 transition-all fixed top-4 right-4 z-50"
      >
        <Menu className="h-8 w-8 text-gray-300 hover:text-black" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-lg z-40"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-white text-xl flex items-center p-4 rounded-md justify-center w-full max-w-sm transition-transform duration-200 ${
                  activeSection === section.id
                    ? "text-gray-300"
                    : "hover:bg-gray-600 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section.id);
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                <span className="ml-4">{section.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
