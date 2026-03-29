import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section id="pricing" className="w-full py-16 sm:py-24 md:py-[140px] flex justify-center relative">
      <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-white/60 text-sm sm:text-lg mb-2">
            FROM QUESTION TO SOLUTION
          </p>
          <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[56px] font-semibold text-white font-[Montserrat]">
            UNLOCK THE FULL <span className="text-orange-500">POWER OF AI</span>
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div 
          className="flex justify-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1a1a1a] rounded-full p-1 flex border border-white/5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition ${!isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition ${isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12">
          
          {/* BASIC */}
          <div className="w-full max-w-[330px] min-h-[400px] sm:min-h-[470px] bg-[#0d0d0d] rounded-[24px] border border-white/50 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl">Basic</h3>
              <p className="text-white text-3xl sm:text-4xl font-semibold mt-2">₹{isYearly ? "799" : "999"}<span className="text-sm sm:text-base font-normal text-white/50">/{isYearly ? "yr" : "mo"}</span></p>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-xs sm:text-sm">
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Custom AI Model Access</li>
                <li>✔ 24/7 Standard Support</li>
                <li>✔ Custom AI Model Access</li>
                <li>✔ 24/7 Standard Support</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Basic", isYearly ? "799" : "999")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2.5 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95 text-sm"
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* STANDARD (Highlighted) */}
          <div className="w-full max-w-[330px] min-h-[400px] bg-[#111] rounded-[24px] border border-white/50 shadow-[0_0_60px_#ff7a0025] overflow-hidden flex flex-col relative">
            <span className="absolute top-4 right-4 bg-orange-500 text-xs px-3 py-1 rounded-full">
              Best seller
            </span>
            <div className="bg-gradient-to-b from-orange-600/50 to-transparent p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl">Standard</h3>
              <p className="text-white text-3xl sm:text-4xl font-semibold mt-2">₹{isYearly ? "1,599" : "1,999"}<span className="text-sm sm:text-base font-normal text-white/50">/{isYearly ? "yr" : "mo"}</span></p>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-xs sm:text-sm">
                <li>✔ Everything in Basic</li>
                <li>✔ Priority API Access</li>
                <li>✔ Advanced Analytics Dashboard</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Standard", isYearly ? "1,599" : "1,999")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2.5 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95 text-sm"
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* BUSINESS */}
          <div className="w-full max-w-[330px] min-h-[400px] bg-[#0d0d0d] rounded-[24px] border border-white/50 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-5 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl">Business</h3>
              <p className="text-white text-3xl sm:text-4xl font-semibold mt-2">₹{isYearly ? "3,999" : "4,999"}<span className="text-sm sm:text-base font-normal text-white/50">/{isYearly ? "yr" : "mo"}</span></p>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <ul className="space-y-3 text-white/70 text-xs sm:text-sm">
                <li>✔ Multi-user Team License</li>
                <li>✔ Enterprise Security Features</li>
                <li>✔ Dedicated Account Manager</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Business", isYearly ? "3,999" : "4,999")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2.5 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95 text-sm"
              >
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;