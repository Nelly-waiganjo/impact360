import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust path based on your folder structure

export default function HeroSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  
  const photos = [
    "/photo_1.jpg",
    "/photo_2.jpg",
    "/photo_3.jpg",
    "/photo_5.jpg",
    "/photo_6.jpg",
    "/photo7.jpg"
  ];
  
  // Auto-advance slideshow
 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);
  
  
  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    if (sectionId === 'Join Community') {
      setShowQR(true);
      return;
    }
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="font-sans">
      <Navbar />
      
      {/* WhatsApp QR Code Modal */}
      {showQR && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowQR(false)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
              <p className="text-gray-600">Scan the QR code to join our WhatsApp community</p>
              <div className="bg-gray-100 p-8 rounded-2xl flex items-center justify-center">
                <img 
                  src="/whatsapp-qr.png" 
                  alt="WhatsApp QR Code"
                  className="w-64 h-64 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">Or click below to join directly</p>
              <a
                href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300"
              >
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        
        {/* Photos background */}
        <div className="absolute inset-0">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${photo})`,
                zIndex: currentPhoto === index ? 1 : 0
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentPhoto === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/40 to-blue-800/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-purple-900/20 z-10" />
        </div>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPhoto === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  <span className="block text-white drop-shadow-2xl">Empowering</span>
                  <span className="block text-white drop-shadow-2xl">Innovation for</span>
                  <span className="block text-white drop-shadow-2xl">Real-World Impact</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl leading-relaxed text-white/95 drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform your ideas into sustainable, scalable solutions with our global-standard innovation pipeline.
              </motion.p>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                
                {/* Learn More Button */}
                <motion.button
                  onClick={handleLearnMore}
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>

                {/* Join Community Button - Updated to show QR modal */}
                <motion.button
                  onClick={() => setShowQR(true)}
                  className="bg-[#306CEC] text-white px-10 py-4 rounded-full font-bold shadow-2xl text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Join Community
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
