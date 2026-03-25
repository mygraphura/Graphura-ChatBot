import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);
  const navigate = useNavigate();

  const handleGetStarted = (plan: string, price: string) => {
    navigate(`/checkout?plan=${plan}&price=${price}&interval=${isYearly ? 'year' : 'month'}`);
  };

  return (
    <section className="w-full py-[140px] flex justify-center relative">
      <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-lg mb-2">
            FROM QUESTION TO SOLUTION
          </p>
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white font-[Montserrat]">
            UNLOCK THE FULL <span className="text-orange-500">POWER OF AI</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1a1a1a] rounded-full p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm transition ${!isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
              className={`px-6 py-2 rounded-full text-sm transition ${!isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm transition ${isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
              className={`px-6 py-2 rounded-full text-sm transition ${isYearly ? "bg-orange-500 text-white" : "text-white/60"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-18">

          {/* BASIC */}
          <div className="w-[330px] min-h-[470px] bg-[#0d0d0d] rounded-[24px] border border-white/50 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-6">
              <h3 className="text-white text-xl">Basic</h3>
              <p className="text-white text-4xl font-semibold mt-2">
                ${isYearly ? "9.99" : "12.99"}
              </p>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 text-center md:text-left">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Basic", isYearly ? "9.99" : "12.99")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* STANDARD (Highlighted) */}
          <div className="w-[330px] min-h-[400px] bg-[#111] rounded-[24px] border border-white/50 shadow-[0_0_60px_#ff7a0025] overflow-hidden flex flex-col relative">
            <span className="absolute top-4 right-4 bg-orange-500 text-xs px-3 py-1 rounded-full">
              Best seller
            </span>
            <div className="bg-gradient-to-b from-orange-600/50 to-transparent p-6">
              <h3 className="text-white text-xl">Standard</h3>
              <p className="text-white text-4xl font-semibold mt-2">
                ${isYearly ? "19.99" : "24.99"}
              </p>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 text-center md:text-left">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Standard", isYearly ? "19.99" : "24.99")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* BUSINESS */}
          <div className="w-[330px] min-h-[400px] bg-[#0d0d0d] rounded-[24px] border border-white/50 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-b from-orange-700/40 to-transparent p-6">
              <h3 className="text-white text-xl">Business</h3>
              <p className="text-white text-4xl font-semibold mt-2">
                ${isYearly ? "49.99" : "59.99"}
              </p>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 text-center md:text-left">
              <ul className="space-y-3 text-white/70 text-sm">
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
                <li>✔ Unlimited transfer with priority processing</li>
              </ul>
              <button 
                onClick={() => handleGetStarted("Business", isYearly ? "49.99" : "59.99")}
                className="mt-6 bg-[#2a2a2a] border border-white/30 text-white py-2 rounded-full transition-all duration-300 ease-out hover:bg-orange-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_20px_rgba(234,88,12,0.3)] active:scale-95"
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