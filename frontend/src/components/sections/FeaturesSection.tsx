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
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : 0
      y: direction === "up" ? 50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom "OutQuart" easing for smooth arrival
      }
      }
    }
  });

  return (
    <section className="w-full py-[140px] flex justify-center relative overflow-hidden bg-transparent">
    <section className="w-full py-[140px] flex justify-center relative overflow-hidden bg-transparent">
  <div className="w-full max-w-[1442px] px-4 sm:px-6 lg:px-8 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-white">
        TRANSFORM THE WAY YOU
      </h2>
      <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-semibold text-orange-500">
        COMMUNICATE
      </h2>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-end justify-center gap-10"
    >
      <motion.div variants={cardVariants("left")}>
        <img src={Card1} alt="Card 1" className="rounded-[24px]" />
      </motion.div>

      <motion.div variants={cardVariants("up")}>
        <img src={Card3} alt="Card 2" className="rounded-[24px]" />
      </motion.div>

      <motion.div variants={cardVariants("right")}>
        <img src={Card2} alt="Card 3" className="rounded-[24px]" />
      </motion.div>
    </motion.div>

  </div> {/* ✅ THIS WAS MISSING */}

</section>
  )}

export default FeaturesSection;