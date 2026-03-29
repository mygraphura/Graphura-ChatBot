
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import FooterEnhanced from "../components/layout/FooterEnhanced";

const socialLinks = [
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/graphura.in/", 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/company/graphura-india-private-limited/", 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  },
  { 
    label: "Twitter / X", 
    href: "https://x.com/Graphura", 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
  },
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/Graphura.in/", 
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = `mailto:placement@graphura.online?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      <div className="pt-8">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-20 sm:pb-32 relative">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-900/10 blur-[100px] rounded-full -z-10" />

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            We'd Love to Hear From You
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-[Montserrat] leading-tight">
            Get in <span className="text-orange-500 italic">Touch</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start max-w-5xl mx-auto">

          {/* Left Column: Contact Info + Social */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Details Card */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-white font-[Montserrat]">Contact Details</h3>
              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+917378021327" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="text-sm">+91 7378021327</span>
                </a>
                <a href="mailto:placement@graphura.online" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span className="text-sm break-all">placement@graphura.online</span>
                </a>
              </div>
            </div>

            {/* Follow Us Card */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 space-y-4 sm:space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-white font-[Montserrat]">Follow Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all text-sm text-gray-400 hover:text-white"
                  >
                    <span className="text-orange-500">{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0a0a] border border-white/10 rounded-[24px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-white/40 mb-8 max-w-xs text-sm sm:text-base">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-orange-500 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-bold text-white font-[Montserrat] mb-2">Send a Message</h3>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Rahul Sharma"
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="rahul@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg shadow-orange-900/20 transition-all text-base sm:text-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <FooterEnhanced />
    </div>
  );
};

export default Contact;