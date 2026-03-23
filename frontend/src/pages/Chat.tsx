
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import robot from "@/assets/robot-small.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const Chat = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours() % 12 || 12}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}${now.getHours() >= 12 ? "pm" : "am"}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: `🤖 Thinking... "${text.slice(0, 40)}..."`,
        sender: "bot",
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="h-screen w-full flex bg-[#1f1f1f] text-white">

      {/* LEFT SIDEBAR */}
      <div className="w-[60px] bg-[#2a2a2a] flex flex-col justify-between py-4 items-center">
        
        {/* TOP */}
        <div className="w-8 h-8 bg-gray-500 rounded-full" />

        {/* BOTTOM ICONS */}
        <div className="flex flex-col gap-4 mb-4">

  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2f2f2f] hover:bg-orange-500 transition-all duration-200 hover:scale-110">
    🗑️
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2f2f2f] hover:bg-orange-500 transition-all duration-200 hover:scale-110">
    🌙
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2f2f2f] hover:bg-orange-500 transition-all duration-200 hover:scale-110">
    👤
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2f2f2f] hover:bg-orange-500 transition-all duration-200 hover:scale-110">
    ↗️
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2f2f2f] hover:bg-orange-500 transition-all duration-200 hover:scale-110">
    ⎋
  </button>

</div>
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* 🔙 TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
        >
        ← Back
      </button>

  <span className="text-sm text-gray-400">Chat</span>

</div>

        {/* CHAT + INPUT */}
        <div className="flex-1 flex flex-col justify-between">

          {/* CHAT */}
          <div className="flex-1 overflow-y-auto px-6 py-6">

            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
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
            ) : (
              <div className="space-y-4 max-w-3xl mx-auto">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm max-w-[75%] ${
                        msg.sender === "user"
                          ? "bg-orange-500 text-white"
                          : "bg-[#2a2a2a]"
                      }`}
                    >
                      {msg.text}
                      <div className="text-[10px] mt-1 opacity-60 text-right">
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <img src={robot} className="w-6 animate-pulse" />
                    Bot is typing...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="pb-6 flex justify-center">
            <div className="w-[500px] bg-[#e5e5e5] rounded-full flex items-center px-4 py-2 text-black">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Search for ideas..."
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button
                onClick={() => sendMessage(input)}
                className="text-lg hover:scale-110 transition"
              >
                🎤
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-[260px] bg-[#2a2a2a] p-4 flex flex-col gap-4">
        <div className="flex justify-end">
          <span className="text-xs bg-gray-300 text-black px-3 py-1 rounded-full">
            Assistant v2.6
          </span>
        </div>

        <button className="bg-orange-500 py-2 rounded-full text-sm hover:scale-105 transition">
          + New chat
        </button>

        <div className="text-sm text-gray-300">
          <p className="font-semibold">Today</p>
          <p className="text-xs mt-1">• What's the best way to create</p>
          <p className="text-xs">• What if we discovered that..</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
