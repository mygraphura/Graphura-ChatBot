import { motion, type Variants } from "framer-motion";
import { motion, type Variants } from "framer-motion";
import Card1 from "../../assets/Card front.png";
import Card2 from "../../assets/Card front(1).png";
import Card3 from "../../assets/Card front(2).png";

const FeaturesSection = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each card by 0.2s for a "wave" effect
      },
    },
  };

  const cardVariants = (direction: "left" | "right" | "up"): Variants => ({
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom "OutQuart" easing for smooth arrival
      } 
    }
  });

  return (
    <section className="w-full py-[140px] flex justify-center relative overflow-hidden bg-transparent">
    <section className="w-full py-[140px] flex justify-center relative overflow-hidden bg-transparent">
      <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading - Fades in from top */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Repeatedly animates
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white font-[Montserrat] leading-tight">
        
        {/* Heading - Fades in from top */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Repeatedly animates
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white font-[Montserrat] leading-tight">
            TRANSFORM THE WAY YOU
          </h2>
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-orange-500 font-[Montserrat] leading-tight">
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-orange-500 font-[Montserrat] leading-tight">
            COMMUNICATE
          </h2>
        </motion.div>

        {/* Cards Container with Staggering */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the container is visible
          className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 lg:gap-15"
        >
          
          {/* LEFT CARD - Intelligence */}
          <motion.div 
            variants={cardVariants("left")}
            className="group bg-[#0f0f0f] rounded-[32px] p-6 w-[340px] h-[505px] text-center border border-white/10 flex flex-col justify-between shadow-lg transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] cursor-pointer"
          >
            <img src={Card1} alt="Brain Icon" className="rounded-[24px] w-full" />
          </motion.div>

          {/* CENTER CARD - Conversation */}
          <motion.div 
            variants={cardVariants("up")}
            className="group bg-[#0f0f0f] rounded-[32px] p-6 w-[340px] h-[505px] text-center border border-white/10 flex flex-col justify-between shadow-lg transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] cursor-pointer"
          >
            <img src={Card3} alt="Robot Hand" className="rounded-[24px] w-full" />
          </motion.div>

          {/* RIGHT CARD - Automation */}
          <motion.div 
            variants={cardVariants("right")}
            className="group bg-[#0f0f0f] rounded-[32px] p-6 w-[340px] h-[505px] text-center border border-white/10 flex flex-col justify-between shadow-lg transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] cursor-pointer"
          >
            <img src={Card2} alt="AI Logo" className="rounded-[24px] w-full" />
          </motion.div>
          
        </motion.div>
      </div>

</section>
  )}

export default FeaturesSection;