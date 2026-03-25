import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHeroHead from "@/assets/about-hero-head.png";
import teamMarcus from "@/assets/team-marcus.png";
import teamElena from "@/assets/team-elena.png";
import teamJulian from "@/assets/team-julian.png";

const values = [
  { icon: "❤️", title: "Radical Trust", desc: "Privacy is not a feature; it is the absolute foundation of our architecture." },
  { icon: "🧠", title: "Cognitive Symbiosis", desc: "Enhancing human decision-making through intuitive, real-time feedback loops." },
  { icon: "🌍", title: "Inclusive Growth", desc: "Democratizing high-level intelligence for every scale of ambition." },
  { icon: "⚡", title: "Elegant Precision", desc: "Removing the friction between thought and execution through refined AI." },
];

const team = [
  { name: "Kartik Yadav", role: "Developer", image: teamMarcus },
  { name: "Mandira Datta", role: "Developer (Team Lead)", image: teamElena },
  { name: "Shri Ram", role: "Design Director,CEO,etc.", image: teamJulian },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden z-10">

      {/* GLOBAL BG */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-black"></div>

        {/* Glow 1 (top left soft) */}
        <div className="absolute w-[600px] h-[600px] bg-gray-400/10 blur-[160px] rounded-full top-[-150px] left-[-150px]"></div>

        {/* Glow 2 (bottom right soft) */}
        <div className="absolute w-[500px] h-[500px] bg-gray-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]"></div>

        {/* Center faint glow */}
        <div className="absolute w-[400px] h-[400px] bg-gray-300/10 blur-[120px] rounded-full top-[40%] left-[40%]"></div>

      </div>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 rounded-full bg-[#1a1a1a]/70 backdrop-blur-2xl border border-[#2f2f2f]/60 px-2 py-2">

          <Link to="/" className="px-4 py-2 text-sm text-[#a1a1a1] hover:text-white rounded-full hover:bg-[#2a2a2a] transition">
            Home
          </Link>

          <span className="px-4 py-2 text-sm text-white font-semibold rounded-full bg-[#2a2a2a]">
            About
          </span>

          <Link to="/#pricing" className="px-4 py-2 text-sm text-[#a1a1a1] hover:text-white rounded-full hover:bg-[#2a2a2a] transition">
            Pricing
          </Link>

          <Link to="/#contact" className="px-4 py-2 text-sm text-[#a1a1a1] hover:text-white rounded-full hover:bg-[#2a2a2a] transition">
            Contact
          </Link>

          <Link to="/chat" className="ml-2 px-5 py-2 text-sm font-semibold rounded-full 
          bg-orange-500 hover:bg-orange-600 transition shadow-md hover:shadow-orange-500/30">
            Get Started
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

          {/* TEXT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <p className="text-orange-500 uppercase tracking-widest text-xs mb-4">
              Humanity First
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              The Soul of <br />
              <span className="text-orange-500 italic">Intelligence.</span>
            </h1>

            <p className="mt-6 text-[#a1a1a1] max-w-md">
              We don't build tools to replace human creativity. We forge cognitive alloys that amplify the unique potential within every creator.
            </p>

            <button className="mt-8 px-6 py-3 rounded-full border border-[#2f2f2f] hover:bg-white hover:text-black transition text-sm uppercase tracking-wider">
              Our Philosophy
            </button>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative p-[2px] rounded-2xl">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 blur-[4px] opacity-40"></div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-500"></div>

              {/* Image */}
              <motion.img
                src={aboutHeroHead}
                className="relative w-80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"

                whileHover={{
                  scale: 1.05,
                  rotate: [0, -3, 3, -2, 2, 0],
                  x: [0, -2, 2, -1, 1, 0],
                }}

                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />

            </div>
          </motion.div>

        </div>
      </section>

      {/* Story */}
      <section className="relative z-10 py-24 border-t border-[#2f2f2f]/60 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
            <h2 className="text-4xl font-bold mb-8 relative inline-block">
              Our Story

              {/* Underline */}
              <span className="absolute left-0 -bottom-2 w-full h-[3px] overflow-hidden">
                <span className="block w-1/2 h-full bg-orange-500 animate-[slide_2s_linear_infinite]"></span>
              </span>
            </h2>
            <p className="text-[#a1a1a1] mb-4">
              Graphobot was born to bridge silicon logic and human intuition.
            </p>
            <p className="text-[#a1a1a1] italic">
              We built AI that understands context like a colleague, not a machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-24 border-t border-[#2f2f2f]/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-6">
          {values.map((v) => (
            <motion.div
              key={v.title}
              className="
                  text-center group p-6 rounded-xl
                  bg-[#1a1a1a]/60 backdrop-blur-xl
                  border border-[#2f2f2f]
                  hover:border-orange-500
                  hover:-translate-y-1
                  transition-all duration-300
                  hover:shadow-[0_0_25px_rgba(255,115,0,0.15)]
                  "
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                {v.icon}
              </div>

              <h3 className="text-sm font-bold uppercase mb-2 tracking-wider">
                {v.title}
              </h3>

              <p className="text-xs text-[#a1a1a1] leading-relaxed">
                {v.desc}
              </p>

            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="relative z-10 py-24 border-t border-[#2f2f2f]/60">
        <div className="container mx-auto px-6">

          <div className="flex justify-between mb-12">
            <h2 className="text-4xl font-bold italic">The Architects of Intent.</h2>
            <Link to="/chat" className="text-orange-500 hover:underline">Join →</Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2f2f2f] hover:border-orange-500 transition"
              >

                <div className="relative p-[2px] rounded-xl">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-orange-500 blur-[4px] opacity-40"></div>

                  {/* Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-orange-500"></div>

                  <motion.img
                    src={m.image}
                    className="relative w-full aspect-[3/4] object-cover rounded-xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.7)]"

                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, -1, 1, 0],
                      x: [0, -1, 1, -1, 1, 0],
                    }}

                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />

                </div>

                <div className="p-4">
                  <h3>{m.name}</h3>
                  <p className="text-orange-500 text-xs">{m.role}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 text-center border-t border-[#2f2f2f]/60">
        <h2 className="text-4xl font-bold">
          Forge your future <span className="text-orange-500 italic">with us.</span>
        </h2>

        <Link
          to="/chat"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition shadow-md hover:shadow-orange-500/30"
        >
          Start Chat
        </Link>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2f2f2f]/60 py-8 text-center text-[#a1a1a1]">
        © 2026 Graphobot AI
      </footer>

    </div>
  );
};

export default About;
export default About;