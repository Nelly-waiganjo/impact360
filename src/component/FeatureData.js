import { motion } from "framer-motion";

const featuresData = [
  { icon: "💡", title: "Innovation", desc: "Transform ideas into reality with cutting-edge tools" },
  { icon: "🤝", title: "Community", desc: "Connect with Africa's top changemakers" },
  { icon: "📈", title: "Growth", desc: "Scale your ventures with proven frameworks" },
];

const FeatureCards = () => (
  <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
    {featuresData.map((item, i) => (
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

export default FeatureCards;
