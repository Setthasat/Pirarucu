"use client";
import React, { useState } from "react";
import { FishSymbol, Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg">
            <FishSymbol color={"#0D9488"} size={32} />
            <p className="text-[#1E293B] font-semibold">AmazonFish</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg font-medium text-[#475569]">
            <a
              href="#What"
              className="hover:text-[#0D9488] transition-colors duration-200"
            >
              What
            </a>
            <a
              href="#Where"
              className="hover:text-[#0D9488] transition-colors duration-200"
            >
              Where
            </a>
            <a
              href="#Special"
              className="hover:text-[#0D9488] transition-colors duration-200"
            >
              Special
            </a>
            <a
              href="#Important"
              className="hover:text-[#0D9488] transition-colors duration-200"
            >
              Important
            </a>
          </div>

          {/* Desktop CTA Button */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#475569] hover:text-[#0D9488] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            <a
              href="#What"
              onClick={closeMenu}
              className="block text-lg font-medium text-[#475569] hover:text-[#0D9488] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
            >
              What
            </a>
            <a
              href="#Where"
              onClick={closeMenu}
              className="block text-lg font-medium text-[#475569] hover:text-[#0D9488] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Where
            </a>
            <a
              href="#Special"
              onClick={closeMenu}
              className="block text-lg font-medium text-[#475569] hover:text-[#0D9488] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Special
            </a>
            <a
              href="#Important"
              onClick={closeMenu}
              className="block text-lg font-medium text-[#475569] hover:text-[#0D9488] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Important
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
