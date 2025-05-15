
import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import ViewSelector from '../components/landing/ViewSelector';
import WishlistForm from '../components/landing/WishlistForm';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <Hero />

      {/* Theme toggle */}
      <div className="fixed top-20 right-4 z-50 flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
        <Sun className="h-4 w-4" />
        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        <Moon className="h-4 w-4" />
      </div>

      {/* Static partners section */}
      <section className={`py-10 overflow-hidden border-y ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="container mx-auto px-4">
          <p className={`text-center mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Trusted by pet care providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`w-36 h-16 flex-shrink-0 rounded-md flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}
              >
                <div className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                  Partner {i}
                </div>
              </div>
            ))}
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
