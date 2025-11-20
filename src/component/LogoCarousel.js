import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

export default function LogoCarousel() {
  const [progress, setProgress] = useState(0);

  // Loop 0 → 3 for exactly 3 logos
  useAnimationFrame((t) => {
    setProgress((t / 3000) % 3);
  });

  const fade = (index) => {
    const diff = Math.abs(progress - index);
    return diff < 0.8 ? 1 - diff / 0.8 : 0;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square">

      {/* Logo 1 */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black rounded-3xl shadow-2xl transition-opacity duration-300"
        style={{ opacity: fade(0) }}
      >
        <img src="/logo3.png" className="w-4/5 h-4/5 object-contain" />
      </div>

      {/* Logo 2 */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-[#306CEC] rounded-3xl shadow-2xl transition-opacity duration-300"
        style={{ opacity: fade(1) }}
      >
        <img src="/logo4.png" className="w-4/5 h-4/5 object-contain" />
      </div>

      {/* Logo 3 */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-[#FFFEF9] rounded-3xl shadow-2xl transition-opacity duration-300"
        style={{ opacity: fade(2) }}
      >
        <img src="/logo5.png" className="w-4/5 h-4/5 object-contain" />
      </div>

    </div>
  );
}


