import React, { useState } from "react";
import { motion } from "framer-motion";

function JoinCommunity() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      {/* Join Community Button */}
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
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQR(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
              <p className="text-gray-600">
                Scan the QR code to join our WhatsApp community
              </p>

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
    </>
  );
}

export default JoinCommunity;


