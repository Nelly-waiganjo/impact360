import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Incubation & Acceleration",
      description: "We support founders from idea to execution through mentorship, structured programs, and strategic resources.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      link: "/programs",
    },
    {
      title: "Events",
      description: "We run workshops, bootcamps, and founder meetups to help innovators learn, connect, and grow.",
      icon: "📅",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      link: "/events",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FFFEF9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#306CEC] mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-[#306CEC]/70">
            Clear, structured pathways for founders to grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#306CEC]/80 to-transparent flex items-end p-8">
                  <span className="text-6xl">{offer.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#306CEC] mb-4">
                  {offer.title}
                </h3>
                <p className="text-[#306CEC]/70 text-lg mb-6">
                  {offer.description}
                </p>
                <Link
                  to={offer.link}
                  className="inline-flex items-center text-[#306CEC] font-semibold hover:gap-3 gap-2 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
