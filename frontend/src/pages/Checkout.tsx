import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planName = searchParams.get("plan") || "Standard";
  const price = searchParams.get("price") || "19.99";
  const interval = searchParams.get("interval") || "month";

  const [email, setEmail] = useState("mandiradatta22@gmail.com");
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Entrance Animation
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto min-h-screen flex flex-col md:flex-row border-x border-white/5"
      >
        
        {/* LEFT SIDE - Summary */}
        <div className="flex-1 p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a]">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/40 hover:text-orange-500 transition-all mb-12 text-sm font-medium group"
          >
            <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to pricing
          </button>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-[0_0_15px_rgba(234,88,12,0.4)]">G</div>
              <h1 className="text-2xl font-bold tracking-tight font-[Montserrat]">Graphobot</h1>
            </div>
            
            <p className="text-white/50 font-medium mb-2 uppercase tracking-wider text-xs">Subscribe to {planName}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold font-[Montserrat] text-white">${price}</span>
              <span className="text-white/40 font-medium italic">/ {interval}</span>
            </div>
          </header>

          <div className="space-y-6">
            <div className="flex justify-between items-start text-sm bg-white/5 p-4 rounded-xl border border-white/10">
              <div>
                <p className="font-semibold text-white">{planName} Plan</p>
                <p className="text-white/40">Billed {interval === 'year' ? 'yearly' : 'monthly'}</p>
              </div>
              <p className="font-bold text-orange-500">${price}</p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex justify-between text-sm">
                <p className="text-white/50">Subtotal</p>
                <p className="font-medium text-white/80">${price}</p>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1.5 text-white/50">
                  Tax 
                  <svg className="w-3.5 h-3.5 cursor-help opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                    <path d="M12 16v-4m0-4h.01" strokeWidth={2}/>
                  </svg>
                </div>
                <p className="text-white/30 italic">Calculated at next step</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
              <p className="text-white font-semibold text-lg">Total due today</p>
              <p className="text-3xl font-bold text-white font-[Montserrat]">${price}</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Payment Form */}
        <div className="flex-1 p-8 md:p-16 bg-black">
          <div className="max-w-[400px] mx-auto">
            
            <section className="mb-10">
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Contact Information</h2>
              <div className="relative group">
                <label className="absolute top-2 left-4 text-[10px] font-bold text-orange-500 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pt-7 pb-3 px-4 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm font-medium text-white group-hover:border-white/20"
                />
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Payment method</h2>
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a]">
                {/* Card Option */}
                <div 
                  onClick={() => setPaymentMethod("card")}
                  className={`p-5 flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'card' ? 'bg-orange-500/10 border-orange-500/20' : 'hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'card' ? 'border-orange-500' : 'border-white/20'}`}>
                      {paymentMethod === 'card' && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
                    </div>
                    <span className="text-sm font-semibold">Credit Card</span>
                  </div>
                  <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                     <div className="w-7 h-4 bg-blue-600 rounded-sm"></div>
                     <div className="w-7 h-4 bg-orange-600 rounded-sm"></div>
                  </div>
                </div>

                {/* UPI Option */}
                <div 
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-5 border-t border-white/5 flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'bg-orange-500/10' : 'hover:bg-white/5'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'upi' ? 'border-orange-500' : 'border-white/20'}`}>
                    {paymentMethod === 'upi' && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
                  </div>
                  <span className="text-sm font-semibold tracking-wider italic">UPI / GPay</span>
                </div>
              </div>
            </section>

            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 accent-orange-500 w-4 h-4 bg-[#111] border-white/20" />
                <span className="text-[11px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                  I agree to the <span className="text-orange-500">Terms of Service</span> and authorize Graphobot to charge my payment method for the amount of <span className="text-white">${price}</span> today and recurringly.
                </span>
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all text-base mb-6 font-[Montserrat] uppercase tracking-wider"
            >
              Complete Purchase
            </motion.button>

            <div className="flex flex-col items-center gap-4 text-[10px] text-white/20 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
                <span>Secured by 256-bit SSL Encryption</span>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Checkout;