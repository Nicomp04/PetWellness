
import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import ViewSelector from '../components/landing/ViewSelector';
import WishlistForm from '../components/landing/WishlistForm';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Horizontal scrolling logos section */}
      <section className="py-10 overflow-hidden bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-6">Trusted by pet care providers</p>
          <div className="flex space-x-12 animate-pulse-slow">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
              className="flex space-x-12 items-center"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-32 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                  <div className="text-gray-400 font-medium">Partner {i + 1}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <ViewSelector />
      <WishlistForm />
      <Footer />
    </div>
  );
};

export default Index;
