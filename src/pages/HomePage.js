import React from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LogoCarousel from "../component/LogoCarousel";
import WhatWeOffer from "../component/WhatWeDo";

// --- Reusable Components ---
const Stats = ({ items, bgColor = "#FFFEF9", textColor = "#306CEC" }) => (
  <div className="py-20" style={{ backgroundColor: bgColor }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((stat, i) => (
          <motion.div 
            key={i} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: textColor }}>
              {stat.number}
            </h3>
            <p className="text-lg md:text-xl opacity-70" style={{ color: textColor }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureCards = ({ features }) => (
  <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
    {features.map((item, i) => (
      <motion.div
        key={i}
        className="bg-gradient-to-br from-[#306CEC] to-[#000000] text-[#FFFEF9] p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.03 }}
      >
        <div className="text-6xl mb-6 relative z-10">{item.icon}</div>
        <h3 className="text-3xl font-bold mb-3 relative z-10">{item.title}</h3>
        <p className="text-[#FFFEF9]/90 text-lg relative z-10">{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>
);

export default function HomePage() {
  const statsData = [
    { number: "500+", label: "Startups Supported" },
    { number: "50+", label: "Programs Run" },
    { number: "10k+", label: "Community Members" },
  ];

  const featuresData = [
    { icon: "💡", title: "Innovation", desc: "Transform ideas into reality with cutting-edge tools" },
    { icon: "🤝", title: "Community", desc: "Connect with Africa's top changemakers" },
    { icon: "📈", title: "Growth", desc: "Scale your ventures with proven frameworks" },
  ];

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#FFFEF9]">
        {/* Background Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#306CEC]/10 to-transparent rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#306CEC]/10 to-transparent rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-[#306CEC]">Empowering</span>
                <span className="block text-[#306CEC]">Innovation for</span>
                <span className="block bg-gradient-to-r from-[#306CEC] to-[#000000] bg-clip-text text-transparent">
                  Real-World Impact
                </span>
              </h1>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-[#306CEC]/80"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform your ideas into sustainable, scalable solutions with our global-standard innovation pipeline.
              </motion.p>
              <div className="flex gap-4 flex-wrap">
                <motion.button
                  className="bg-[#306CEC] text-[#FFFEF9] px-10 py-4 rounded-full font-bold shadow-2xl text-lg hover:shadow-3xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="border-2 border-[#306CEC] text-[#306CEC] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#306CEC] hover:text-[#FFFEF9] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-sm mx-auto aspect-square">
                <LogoCarousel />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats items={statsData} bgColor="#306CEC" textColor="#FFFEF9" />

      {/* What We Offer Section */}
      <WhatWeOffer />

      {/* About Section */}
      <motion.section 
        className="min-h-screen bg-[#FFFEF9] text-[#306CEC] py-24 px-8 md:px-20 flex flex-col justify-center relative overflow-hidden" 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#306CEC]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#306CEC]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div 
            className="inline-block mb-8" 
            whileHover={{ scale: 1.1, rotate: 360 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#306CEC] to-[#000000] flex items-center justify-center shadow-xl">
              <span className="text-5xl">🚀</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#306CEC]">About Impact360</h2>
          <motion.p 
            className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-[#306CEC]/80 mb-8" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            viewport={{ once: true }}
          >
            Impact360 is a growth and innovation company shaping Africa's entrepreneurial landscape through structure, community, and execution. We empower founders, startups, and changemakers to move from ideas to scalable ventures by providing the systems, knowledge, and support they need to build and grow.
          </motion.p>
          <motion.p 
            className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-bold text-[#000000]" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }} 
            viewport={{ once: true }}
          >
            At Impact360, we believe real impact happens when ideas meet discipline, collaboration, and the right environment to thrive.
          </motion.p>

          {/* Feature Cards */}
          <FeatureCards features={featuresData} />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
