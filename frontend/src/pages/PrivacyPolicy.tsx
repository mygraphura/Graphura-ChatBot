import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import FooterEnhanced from "../components/layout/FooterEnhanced";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, phone number, and any messages you send through our contact form or chatbot. We also automatically collect usage data including IP address, browser type, pages visited, and interaction patterns.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to provide and improve our AI chatbot services, respond to inquiries, send service-related communications, analyse usage patterns, and ensure platform security. We do not sell your personal data to third parties.",
  },
  {
    title: "Data Storage & Security",
    content:
      "We employ industry-standard security measures including encryption, secure servers, and access controls to protect your data. All conversation data processed by our AI chatbots is encrypted in transit and at rest.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies and similar technologies to enhance your browsing experience, remember preferences, and analyse traffic. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may share data with trusted third-party services for analytics, payment processing, and infrastructure. All third-party providers are bound by data protection agreements and comply with applicable privacy laws.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You may also request data portability or object to processing. To exercise these rights, contact us at placement@graphura.online.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please reach out to us at placement@graphura.online or call +91 7378021327.",
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

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col font-sans">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[150px] rounded-full" />
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
              Privacy <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Last updated: March 2026. We value your privacy and are committed to protecting your personal data.
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

export default PrivacyPolicy;
