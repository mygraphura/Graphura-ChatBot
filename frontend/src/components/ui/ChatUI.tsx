import { useState } from "react";
import { motion } from "framer-motion";
import robot from "@/assets/robot-small.png";

export default function ChatUI() {
  const [input, setInput] = useState("");

  return (
    <div className="h-screen w-full flex bg-[#1f1f1f] text-white">

      {/* LEFT */}
      <div className="w-[60px] bg-[#2a2a2a] flex flex-col justify-between py-4 items-center">
        <div className="w-8 h-8 bg-gray-500 rounded-full" />

        <div className="flex flex-col gap-6 text-gray-400 text-lg mb-4">
          <span>🗑️</span>
          <span>🌙</span>
          <span>👤</span>
          <span>↗️</span>
          <span>⎋</span>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex-1 flex flex-col justify-between">

        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-3 text-2xl">
            <motion.img
              src={robot}
              className="w-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-gray-200">Evening, Shivam sir</span>
          </div>
        </div>

        <div className="pb-6 flex justify-center">
          <div className="w-[500px] bg-[#e5e5e5] rounded-full flex items-center px-4 py-2 text-black">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for ideas..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <span className="text-lg">🎤</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[260px] bg-[#2a2a2a] p-4" />
    </div>
  );
}