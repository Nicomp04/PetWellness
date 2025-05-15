
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-800 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-10 w-10 mr-2 bg-petBlue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
              <span className="font-bold text-xl text-petBlue-800 dark:text-white">
                PetHealth
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-800 dark:text-gray-200 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors">
              Features
            </a>
            <a href="#views" className="text-gray-800 dark:text-gray-200 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors">
              View Modes
            </a>
            <a href="#wishlist" className="text-gray-800 dark:text-gray-200 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors">
              Join Wishlist
            </a>
            <Button variant="outline" className="border-petBlue-500 text-petBlue-500 dark:border-petBlue-300 dark:text-petBlue-300 hover:bg-petBlue-50 dark:hover:bg-petBlue-900/30">
              <User className="h-4 w-4 mr-2" /> Log In
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-800 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shadow-lg">
          <div className="container px-4 mx-auto py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 dark:text-gray-300 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#views" 
                className="text-gray-700 dark:text-gray-300 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Modes
              </a>
              <a 
                href="#wishlist" 
                className="text-gray-700 dark:text-gray-300 hover:text-petBlue-500 dark:hover:text-petBlue-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Wishlist
              </a>
              <Button variant="outline" className="border-petBlue-500 text-petBlue-500 dark:border-petBlue-300 dark:text-petBlue-300 hover:bg-petBlue-50 dark:hover:bg-petBlue-900/30 w-full">
                <User className="h-4 w-4 mr-2" /> Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
