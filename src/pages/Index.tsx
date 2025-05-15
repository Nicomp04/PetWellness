
import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import ViewSelector from '../components/landing/ViewSelector';
import WishlistForm from '../components/landing/WishlistForm';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      {/* Partners section hidden for now - uncomment when needed 
      <section className="py-10 overflow-hidden border-y bg-white border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center mb-6 text-gray-500">Trusted by pet care providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-36 h-16 flex-shrink-0 rounded-md flex items-center justify-center bg-gray-100"
              >
                <div className="font-medium text-gray-500">
                  Partner {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <Features />
      <ViewSelector />
      <WishlistForm />
      <Footer />
    </div>
  );
};

export default Index;
