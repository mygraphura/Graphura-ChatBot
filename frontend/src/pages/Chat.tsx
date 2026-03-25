import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import robotSmall from "@/assets/robot-small.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const chatHistory = [
  { label: "Today", items: ["What's the best way to create", "What if we discovered that.."] },
  { label: "Yesterday", items: ["Generate a 3D scene of rain", "Help me write a professional letter"] },
  { label: "Previous 7 Days", items: ["Generate a 3D scene of rain", "Help me write a professional letter"] },
];

const botFloat = {
  animate: { y: [0, -8, 0] },
  transition: { y: { duration: 3, repeat: Infinity, ease: "easeInOut" as const } },
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  const hasMessages = messages.length > 0;

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours() % 12 || 12}.${now.getMinutes().toString().padStart(2, "0")}${now.getHours() >= 12 ? "pm" : "am"}`;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    return "Evening";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text, sender: "user", time: getCurrentTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: `Sure! 😊 Please provide more details about your request, and I'd be happy to assist!`,
        sender: "bot",
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <div className="h-screen flex bg-background text-foreground overflow-hidden">
      {/* Left Icon Sidebar */}
      <div className="hidden sm:flex w-14 flex-col items-center py-6 gap-6 border-r border-border bg-secondary/50">
        <div className="flex-1 flex flex-col items-center gap-5 mt-4">
          <Link to="/" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" title="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </Link>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" title="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 mb-4">
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" title="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors" title="Logout">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border sm:hidden">
          <Link to="/" className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </Link>
          <span className="text-sm text-muted-foreground">Assistant v2.6</span>
          <button onClick={() => setHistoryOpen(!historyOpen)} className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </button>
        </div>

        {/* Chat content */}
        <div className="flex-1 overflow-y-auto relative">
          {!hasMessages ? (
            <div className="flex flex-col items-center justify-center h-full px-4 py-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4"
              >
                <motion.img
                  src={robotSmall}
                  alt="Bot"
                  className="w-14 sm:w-16 drop-shadow-xl"
                  animate={botFloat.animate}
                  transition={botFloat.transition}
                />
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {getGreeting()}, <span className="text-gradient-orange">Shivam sir</span>
                </h2>
              </motion.div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] ${msg.sender === "bot" ? "flex gap-3" : ""}`}>
                      {msg.sender === "bot" && (
                        <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <div className={`px-4 py-3 rounded-2xl text-sm ${msg.sender === "user" ? "bg-muted text-foreground rounded-br-md" : "bg-secondary text-foreground rounded-bl-md"}`}>
                          {msg.text}
                        </div>
                        <p className={`text-xs text-muted-foreground mt-1 ${msg.sender === "user" ? "text-right" : ""}`}>{msg.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Floating bot when chatting */}
          {hasMessages && (
            <motion.div
              className="fixed bottom-24 right-4 sm:right-8 z-20"
              animate={botFloat.animate}
              transition={botFloat.transition}
            >
              <img src={robotSmall} alt="Bot" className="w-16 sm:w-20 drop-shadow-xl" />
              <div className="absolute -top-12 -left-32 bg-secondary border border-border rounded-xl px-3 py-2 text-xs text-foreground whitespace-nowrap">
                Stuck on something?<br />
                <span className="text-muted-foreground">Let me help, get a quick assist! 😊</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Search for ideas..."
              className="w-full pl-10 pr-12 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - History (desktop) */}
      <aside className="hidden lg:flex w-[240px] border-l border-border flex-col overflow-y-auto bg-secondary/30">
        <div className="p-4 flex items-center justify-end">
          <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border">Assistant v2.6</span>
        </div>
        <div className="px-4 pb-4">
          <button
            onClick={() => { setMessages([]); setInput(""); }}
            className="w-full py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            + New chat
          </button>
        </div>
        <div className="px-4 pb-4 space-y-4 flex-1">
          {chatHistory.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold text-foreground mb-2">{group.label}</h4>
              {group.items.map((item, i) => (
                <button key={i} className="text-xs text-muted-foreground py-1.5 text-left w-full hover:text-foreground transition-colors truncate block">
                  ◦ {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Right Sidebar - History (mobile overlay) */}
      <AnimatePresence>
        {historyOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-background/80 z-30 lg:hidden" onClick={() => setHistoryOpen(false)} />
            <motion.aside
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[240px] bg-secondary border-l border-border z-40 flex flex-col p-4 gap-4 overflow-y-auto lg:hidden"
            >
              <button onClick={() => setHistoryOpen(false)} className="text-muted-foreground hover:text-foreground text-sm py-2 text-right">✕</button>
              <button onClick={() => { setMessages([]); setInput(""); setHistoryOpen(false); }} className="w-full py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">+ New chat</button>
              {chatHistory.map((group) => (
                <div key={group.label}>
                  <h4 className="text-xs font-semibold text-foreground mb-2">{group.label}</h4>
                  {group.items.map((item, i) => (
                    <p key={i} className="text-xs text-muted-foreground py-1.5 truncate">◦ {item}</p>
                  ))}
                </div>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chat;

