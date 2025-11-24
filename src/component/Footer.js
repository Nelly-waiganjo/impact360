import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/subscription");
  };

  return (
    <footer className="py-20 bg-gradient-to-br from-[#1D2B64] via-[#306CEC] to-[#000000] text-[#FFFEF9]/90 border-t border-[#FFFEF9]/10 relative overflow-hidden">
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-[#306CEC]/30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FFFEF9]/10 rounded-full blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Decorative divider */}
        <div className="w-20 h-1 mx-auto mb-10 bg-gradient-to-r from-[#306CEC] via-[#FFFEF9] to-[#306CEC] rounded-full opacity-70"></div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 items-start">

          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full shadow-lg border border-[#306CEC]/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/logo4.png"
                  alt="Impact360 Logo"
                  className="w-10 h-10 object-contain"
                />
              </motion.div>
              <div>
                <div className="text-2xl font-extrabold text-[#FFFEF9] tracking-wide drop-shadow-md">
                  Impact360
                </div>
                <div className="text-xs text-[#FFFEF9]/70 font-medium">
                  Empowering innovation across Africa
                </div>
              </div>
            </div>
            <p className="max-w-xs text-[#FFFEF9]/80 text-base font-medium leading-relaxed">
              We help founders move from ideas to scalable ventures by providing
              the systems, community, and support they need to grow.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h4 className="text-xl font-bold text-[#FFFEF9] tracking-wide">
              Contact Us
            </h4>
            <div className="text-sm text-[#FFFEF9]/90 space-y-3 font-medium">
              <motion.a
                href="mailto:info@impact360.africa"
                className="flex items-center gap-2 hover:text-[#FFFEF9] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <span>📧</span>
                <span>info@impact360.africa</span>
              </motion.a>
              <motion.a
                href="tel:+2348000000000"
                className="flex items-center gap-2 hover:text-[#FFFEF9] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <span>📞</span>
                <span>+234 800 000 0000</span>
              </motion.a>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Nakuru, Kenya</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h4 className="text-xl font-bold text-[#FFFEF9] tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col text-sm text-[#FFFEF9]/80 space-y-2 font-medium">
              <motion.a 
                href="/" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → Home
              </motion.a>
              <motion.a 
                href="/about" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → About
              </motion.a>
              <motion.a 
                href="/programs" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → Programs
              </motion.a>
              <motion.a 
                href="/events" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → Events
              </motion.a>
              <motion.a 
                href="/subscription" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → Subscription
              </motion.a>
              <motion.a 
                href="/contact" 
                className="hover:text-[#FFFEF9] transition-colors duration-200 inline-block"
                whileHover={{ x: 5 }}
              >
                → Contact
              </motion.a>
            </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h4 className="text-xl font-bold text-[#FFFEF9] tracking-wide">
              Follow Us
            </h4>

            <div className="flex gap-3">
              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-[#FFFEF9]/20 hover:bg-white/20"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="w-5 h-5 text-[#FFFEF9]" />
              </motion.a>

              <motion.a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-[#FFFEF9]/20 hover:bg-white/20"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="w-5 h-5 text-[#FFFEF9]" />
              </motion.a>

              <motion.a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-[#FFFEF9]/20 hover:bg-white/20"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="w-5 h-5 text-[#FFFEF9]" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-[#FFFEF9]/20 hover:bg-white/20"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5 text-[#FFFEF9]" />
              </motion.a>
            </div>

            <div className="mt-4 text-left">
              <h4 className="text-xl font-bold text-[#FFFEF9] mb-2 tracking-wide">
                Stay Updated
              </h4>
              <p className="text-sm text-[#FFFEF9]/80 max-w-xs">
                Subscribe to our newsletter for program updates and events.
              </p>
            </div>

            <motion.button
              onClick={handleSubscribe} 
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-br from-[#306CEC] to-[#1D2B64] text-[#FFFEF9] text-sm rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#FFFEF9]/10 pt-6 text-center">
          <p className="text-[#FFFEF9]/90 font-semibold text-base tracking-wide">
            © 2025 Impact360. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm text-[#FFFEF9]/60">
            Building Africa's Entrepreneurial Future 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
