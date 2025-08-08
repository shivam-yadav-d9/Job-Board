import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md transition-all duration-200 ${
      location.pathname === path
        ? "bg-white text-blue-600 font-semibold shadow-md"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Creuto
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <Link to="/add" className={linkClass("/add")}>
            Add Job
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/add" className={linkClass("/add")} onClick={() => setMenuOpen(false)}>
            Add Job
          </Link>
        </div>
      )}
    </nav>
  );
}
