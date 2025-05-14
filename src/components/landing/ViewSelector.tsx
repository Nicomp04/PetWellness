
import React from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Pill } from "lucide-react";

const ViewSelector = () => {
  return (
    <section id="views" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-petBlue-800"
          >
            Tailored Experience For Everyone
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Our platform provides specialized views for pet owners and veterinarians
          </motion.p>
        </div>

        <Tabs defaultValue="pet-owner" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pet-owner" className="py-3">
              <User className="mr-2 h-4 w-4" /> Pet Owner View
            </TabsTrigger>
            <TabsTrigger value="vet" className="py-3">
              <Pill className="mr-2 h-4 w-4" /> Veterinarian View
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pet-owner" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="bg-petBlue-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <div className="ml-4 text-sm text-gray-500">Pet Owner Dashboard</div>
                </div>
              </div>
              <div className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Pet Owner Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-petBlue-700">For Pet Owners</h3>
                <p className="text-gray-600 mb-4">
                  Monitor your pet's health metrics, vaccination schedules, and medication reminders. 
                  Share records with veterinarians and set up appointments easily.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Track vaccinations and medical history
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Set medication reminders
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Communicate with veterinarians
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="vet" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="bg-petBlue-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <div className="ml-4 text-sm text-gray-500">Veterinarian Dashboard</div>
                </div>
              </div>
              <div className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Veterinarian Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-petBlue-700">For Veterinarians</h3>
                <p className="text-gray-600 mb-4">
                  Access and update complete pet health records, treatment plans, and medical history. 
                  Communicate directly with pet owners through our secure platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Update medical records and treatments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Manage appointment schedules
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 mr-2 text-petGreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Verify and approve health records
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ViewSelector;
