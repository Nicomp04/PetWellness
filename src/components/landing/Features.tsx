
import React from 'react';
import { motion } from "framer-motion";
import { Shield, Clock, Users, Syringe, Bell, FileText } from "lucide-react";

const features = [
  {
    icon: <Syringe className="h-10 w-10 text-petBlue-500" />,
    title: "Vaccination Tracking",
    description: "Keep track of all vaccinations and get reminders for upcoming shots."
  },
  {
    icon: <Clock className="h-10 w-10 text-petBlue-500" />,
    title: "Appointment Scheduling",
    description: "Schedule and manage veterinary appointments with ease."
  },
  {
    icon: <FileText className="h-10 w-10 text-petBlue-500" />,
    title: "Medical Records",
    description: "Store and access complete medical history in one secure location."
  },
  {
    icon: <Bell className="h-10 w-10 text-petBlue-500" />,
    title: "Medication Reminders",
    description: "Never miss a dose with timely medication reminders."
  },
  {
    icon: <Users className="h-10 w-10 text-petBlue-500" />,
    title: "Veterinarian Portal",
    description: "Special access for vets to update records and communicate with owners."
  },
  {
    icon: <Shield className="h-10 w-10 text-petBlue-500" />,
    title: "Health Insights",
    description: "Get valuable insights about your pet's overall health and wellness."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-petBlue-800"
          >
            Everything You Need For Your Pet's Health
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Our comprehensive platform connects all aspects of your pet's healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-petBlue-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block bg-petBlue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-petBlue-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
