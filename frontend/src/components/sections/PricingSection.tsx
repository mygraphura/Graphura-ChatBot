import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  // Animation Variants
  const cardVariants = (i: number): Variants => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered entrance
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  });

  return (
    <section className="w-full py-[140px] flex justify-center relative overflow-hidden">
      <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading - Fades in from top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/60 text-lg mb-2">FROM QUESTION TO SOLUTION</p>
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white">
            UNLOCK THE FULL <span className="text-orange-500">POWER OF AI</span>
          </h2>
        </motion.div>

        {/* Toggle - Fades in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-[#1a1a1a] rounded-full p-1 flex border border-white/5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                !isYearly ? "bg-orange-500 text-white shadow-lg" : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                isYearly ? "bg-orange-500 text-white shadow-lg" : "text-white/60 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-12">
          
          {/* BASIC */}
          <motion.div
            variants={cardVariants(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-[330px] min-h-[470px] bg-[#0d0d0d] rounded-[24px] border border-white/20 overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/30"
          >
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-6">
              <h3 className="text-white text-xl">Basic</h3>
              <p className="text-white text-4xl font-semibold mt-2">${isYearly ? "9.99" : "12.99"}</p>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Custom AI Model Access</li>
                <li>✔ 24/7 Standard Support</li>
              </ul>
              <button className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* STANDARD (Highlighted) */}
          <motion.div
            variants={cardVariants(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-[330px] min-h-[470px] bg-[#111] rounded-[24px] border border-orange-500/50 shadow-[0_0_60px_#ff7a0015] overflow-hidden flex flex-col relative z-20 scale-105 lg:scale-110 transition-all duration-300"
          >
            <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
              Best seller
            </span>
            <div className="bg-gradient-to-b from-orange-600/50 to-transparent p-6">
              <h3 className="text-white text-xl">Standard</h3>
              <p className="text-white text-4xl font-semibold mt-2">${isYearly ? "19.99" : "24.99"}</p>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Everything in Basic</li>
                <li>✔ Priority API Access</li>
                <li>✔ Advanced Analytics Dashboard</li>
              </ul>
              <button className="mt-6 bg-orange-500 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.4)] active:scale-95">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* BUSINESS */}
          <motion.div
            variants={cardVariants(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-[330px] min-h-[470px] bg-[#0d0d0d] rounded-[24px] border border-white/20 overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/30"
          >
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-6">
              <h3 className="text-white text-xl">Business</h3>
              <p className="text-white text-4xl font-semibold mt-2">${isYearly ? "49.99" : "59.99"}</p>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Multi-user Team License</li>
                <li>✔ Enterprise Security Features</li>
                <li>✔ Dedicated Account Manager</li>
              </ul>
              <button className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95">
                Get Started
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;