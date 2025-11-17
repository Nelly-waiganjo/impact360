import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center px-8 fixed top-0 left-0 right-0 bg-[#FFFEF9]/95 backdrop-blur-md z-50 shadow-lg border-b border-[#306CEC]/10">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src="/logo2.png"
            alt="Impact360 Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-[#306CEC]">
          Impact360
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-[#306CEC] font-semibold">
        <li className="cursor-pointer hover:text-[#306CEC]/70 transition-all duration-300 relative group">
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#306CEC] group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="cursor-pointer hover:text-[#306CEC]/70 transition-all duration-300 relative group">
          <span>About</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#306CEC] group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="cursor-pointer hover:text-[#306CEC]/70 transition-all duration-300 relative group">
          <span>Programs</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#306CEC] group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="cursor-pointer hover:text-[#306CEC]/70 transition-all duration-300 relative group">
          <span>Events</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#306CEC] group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="cursor-pointer hover:text-[#306CEC]/70 transition-all duration-300 relative group">
          <span>Contact</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#306CEC] group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>

      {/* Join Button */}
      <motion.button
        className="hidden md:block bg-[#306CEC] text-[#FFFEF9] px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Join Community</span>
        <motion.div
          className="absolute inset-0 bg-[#000000]"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-[#FFFEF9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          Join Community
        </span>
      </motion.button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#306CEC] text-3xl"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#FFFEF9]/98 backdrop-blur-lg fixed top-20 left-0 right-0 py-6 px-8 space-y-6 text-[#306CEC] text-lg font-semibold shadow-2xl border-b border-[#306CEC]/10 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="hover:text-[#306CEC]/70 transition cursor-pointer">
            Home
          </p>
          <p className="hover:text-[#306CEC]/70 transition cursor-pointer">
            About
          </p>
          <p className="hover:text-[#306CEC]/70 transition cursor-pointer">
            Programs
          </p>
          <p className="hover:text-[#306CEC]/70 transition cursor-pointer">
            Events
          </p>
          <p className="hover:text-[#306CEC]/70 transition cursor-pointer">
            Contact
          </p>
          <button className="w-full bg-[#306CEC] text-[#FFFEF9] px-6 py-2.5 rounded-full font-bold shadow-xl">
            Join Community
          </button>
        </motion.div>
      )}
    </nav>
  );
}