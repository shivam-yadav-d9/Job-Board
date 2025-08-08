import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Job Board</h2>
          <p className="text-gray-200 text-sm">
            Your trusted platform for finding and posting jobs. 
            Connecting talent with opportunity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-100">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-100">Contact</Link></li>
            <li><Link to="/add" className="hover:text-gray-100">Add Job</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Email: support@jobboard.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 py-4 text-center text-sm text-gray-300 border-t border-white/10">
        © {new Date().getFullYear()} Job Board. All rights reserved.
      </div>
    </footer>
  );
}
