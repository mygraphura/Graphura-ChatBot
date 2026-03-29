import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import FooterEnhanced from "../components/layout/FooterEnhanced";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using Graphobot services provided by Graphura India Pvt. Ltd., you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "Services",
    content:
      "Graphobot provides AI-powered chatbot solutions for businesses. Our services include chatbot integration, analytics, API access, and related support depending on your chosen plan.",
  },
  {
    title: "User Responsibilities",
    content:
      "You agree to use our services lawfully and not to misuse the platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
  },
  {
    title: "Payment & Billing",
    content:
      "Paid plans are billed monthly or yearly as selected. All fees are in Indian Rupees (₹) and are non-refundable unless stated otherwise. We reserve the right to modify pricing with 30 days' notice.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, branding, and technology on the Graphobot platform are the property of Graphura India Pvt. Ltd. You may not copy, modify, or distribute our materials without prior written consent.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Graphura India Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid by you in the preceding 12 months.",
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate your access if you violate these terms. Upon termination, your right to use the services ceases immediately, though certain provisions will survive.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of India. Any disputes shall be resolved in the courts of competent jurisdiction in India.",
  },
  {
    title: "Contact",
    content:
      "For any questions regarding these Terms, contact us at placement@graphura.online or call +91 7378021327.",
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden mb-4 transition-all duration-300 hover:border-orange-500/30">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent transition-colors"
      >
        <span className="font-bold text-lg text-white">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-500 flex-shrink-0 ml-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-gray-400 text-base leading-relaxed border-t border-white/5 pt-4 mt-2">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TermsConditions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col font-sans">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Terms & <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Last updated: March 2026. Please read these terms carefully before using our services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  title={section.title}
                  content={section.content}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <FooterEnhanced />
    </div>
  );
};

export default TermsConditions;
