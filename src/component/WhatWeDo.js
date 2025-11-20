
import React from "react";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Incubation & Acceleration",
      description:
        "We support founders from idea to execution through mentorship, structured programs, and strategic resources.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      title: "Events",
      description:
        "We run workshops, bootcamps, and founder meetups to help innovators learn, connect, and grow.",
      icon: "📅",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-[#FFFEF9]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#306CEC] mb-4">
          What We Offer
        </h2>
        <p className="text-[#306CEC]/70 text-lg md:text-xl max-w-2xl mx-auto">
          Clear, structured pathways for founders to grow
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                       transition-all duration-300 overflow-hidden group"
            whileHover={{ y: -12, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#306CEC] to-[#1a4d9e]">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 
                           group-hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-6 left-6 text-6xl drop-shadow-lg">
                {offer.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#306CEC] mb-4">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {offer.description}
              </p>
              <motion.button
                className="rounded-full px-8 py-3.5 font-semibold text-base
                           bg-gradient-to-r from-[#306CEC] to-[#1a4d9e] text-white
                           hover:from-[#1a4d9e] hover:to-[#306CEC]
                           shadow-md hover:shadow-xl transition-all duration-300
                           relative overflow-hidden group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More →</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
