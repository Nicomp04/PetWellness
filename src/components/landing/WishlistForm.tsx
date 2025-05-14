
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const WishlistForm = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"pet-owner" | "vet">("pet-owner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call - in a real application, you would send this data to your backend
    setTimeout(() => {
      toast({
        title: "Thank you for joining our wishlist!",
        description: "We'll notify you when our pet health tracker launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="wishlist" className="py-20 bg-petBlue-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-petBlue-800">
            Join Our Wishlist
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be the first to know when our pet health tracking platform launches. 
            We'll notify you as soon as it's available.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email address</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-left text-sm font-medium text-gray-700 mb-1">I am a:</label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="pet-owner"
                    name="userType"
                    value="pet-owner"
                    checked={userType === "pet-owner"}
                    onChange={() => setUserType("pet-owner")}
                    className="w-4 h-4 text-petBlue-600 focus:ring-petBlue-500"
                  />
                  <label htmlFor="pet-owner" className="ml-2">Pet Owner</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="vet"
                    name="userType"
                    value="vet"
                    checked={userType === "vet"}
                    onChange={() => setUserType("vet")}
                    className="w-4 h-4 text-petBlue-600 focus:ring-petBlue-500"
                  />
                  <label htmlFor="vet" className="ml-2">Veterinarian</label>
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-petBlue-500 hover:bg-petBlue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Wishlist"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WishlistForm;
