import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 text-[#FFFEF9]/80 bg-gradient-to-br from-[#306CEC] to-[#000000] border-t border-[#FFFEF9]/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFEF9] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Updated: responsive 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
          {/* Left column: brand + description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-4 md:col-span-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-18 h-18 flex items-center justify-center bg-white/5 rounded-full p-2">
                <img
                  src="/logo4.png"
                  alt="Impact360 Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#FFFEF9]">
                  Impact360
                </div>
                <div className="text-sm text-[#FFFEF9]/70">
                  Empowering innovation across Africa
                </div>
              </div>
            </div>

            <p className="max-w-md text-[#FFFEF9]/80">
              We help founders move from ideas to scalable ventures by providing
              the systems, community and support they need to grow.
            </p>

            
          </motion.div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-full text-center md:text-left">
              <h4 className="text-lg font-semibold text-[#FFFEF9] mb-2">
                Contact Us
              </h4>
              <div className="text-sm text-[#FFFEF9]/90 space-y-1">
                <a
                  href="mailto:info@impact360.africa"
                  className="block hover:underline"
                >
                  info@impact360.africa
                </a>
                <a
                  href="tel:+2348000000000"
                  className="block hover:underline"
                >
                  +234 800 000 0000
                </a>
                <span className="block">Nakuru, Kenya</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-6">
             <h4 className="text-lg font-semibold text-[#FFFEF9] mb-2">
                Quick links
              </h4>
            <div className="flex flex-col text-sm text-[#FFFEF9]/80 space-y-1">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Programs
              </a>
              <a href="#" className="hover:underline">
                Events
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
          </div>

          {/* Column 4: Subscribe + Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-lg font-semibold text-[#FFFEF9] mb-2">
                Follow Us
              </h4>
            {/* Socials aligned to right on md, centered on mobile */}
            <div className="self-center md:self-end flex gap-4 mt-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:opacity-90"
              >
                <svg
                  className="w-9 h-9 fill-[#FFFEF9]/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.1 9.03a12.72 12.72 0 0 1-9.23-4.68 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.6 4.39c-.4.11-.82.17-1.25.17-.31 0-.6-.03-.89-.08a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.37-.02-.56a9.1 9.1 0 0 0 2.24-2.31z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-90"
              >
                <svg
                  className="w-9 h-9 fill-[#FFFEF9]/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-90"
              >
                <svg
                  className="w-9 h-9 fill-[#FFFEF9]/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.292 2.394 1.272 3.374.98.98 2.092 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.292 3.374-1.272.98-.98 1.213-2.092 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.292-2.394-1.272-3.374-.98-.98-2.092-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-90"
              >
                <svg
                  className="w-9 h-9 fill-[#FFFEF9]/80"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z" />
                </svg>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-[#FFFEF9] mb-2">
                Stay Updated
              </h4>
              <p className="text-sm text-[#FFFEF9]/80 max-w-xs">
                Subscribe to our newsletter for program updates and events.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Subscribe email"
                className="w-full md:w-60 px-3 py-2 rounded-md bg-white/5 text-white placeholder:text-[#FFFEF9]/60 outline-none"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-[#FFFEF9] text-[#000] rounded-md font-semibold">
                Subscribe
              </button>
            </form>

            
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-10 border-t border-[#FFFEF9]/10 pt-6 text-center">
          <p className="text-[#FFFEF9]/90 font-semibold text-sm">
            © 2025 Impact360. All Rights Reserved.
          </p>
          <p className="mt-2 text-xs text-[#FFFEF9]/60">
            Building Africa's Entrepreneurial Future 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
