import React, { useEffect, useRef, useState } from "react";

const suggestions = [
  "Tell me about Aron.",
  "Work Experience",
  "Technical Skills",
  "Data Engineering Projects",
  "Full-Stack Experience",
  "Contact Aron",
];
const welcome = "Hi! 👋 I'm Aron's AI assistant. I can help you learn about his professional experience, technical skills, projects, and background. What would you like to know?";
const chatApiUrl = process.env.REACT_APP_CHAT_API_URL || "/api/chat";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: welcome }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);

  async function send(text = input) {
    const question = text.trim();
    if (!question || loading) return;
    setInput("");
    setMessages((current) => [...current, { role: "user", content: question }]);
    setLoading(true);
    try {
      const history = messages.filter((message) => message.role !== "assistant" || message.content !== welcome).slice(-10);
      const response = await fetch(chatApiUrl, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The assistant is temporarily unavailable. Please try again.");
      setMessages((current) => [...current, { role: "assistant", content: data.answer || data.reply }]);
    } catch (error) {
      setMessages((current) => [...current, { role: "assistant", content: error.message || "I couldn't connect just now. Please try again." }]);
    } finally { setLoading(false); }
  }

  return <div className="aj-chatbot">
    {open && <section className="aj-chat-panel" role="dialog" aria-label="Aron's AI Assistant" aria-modal="false">
      <header className="aj-chat-header"><div className="aj-chat-avatar">AJ</div><div><strong>Ask Aron AI</strong><span><i/> Ask me anything about Aron</span></div><button onClick={() => setOpen(false)} aria-label="Close chat">×</button></header>
      <div className="aj-chat-messages" aria-live="polite">
        {messages.map((message, index) => <div key={`${index}-${message.role}`} className={`aj-message ${message.role}`}><span>{message.content}</span></div>)}
        {messages.length === 1 && <div className="aj-suggestions"><small>Suggested questions</small>{suggestions.map((q) => <button key={q} onClick={() => send(q)}>{q}<b>↗</b></button>)}</div>}
        {loading && <div className="aj-message assistant"><span className="aj-typing" aria-label="Assistant is typing"><i/><i/><i/></span></div>}
        <div ref={endRef}/>
      </div>
      <form className="aj-chat-form" onSubmit={(event) => { event.preventDefault(); send(); }}><textarea ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} rows={1} placeholder="Ask about Aron’s work…" aria-label="Message" onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); } }}/><button disabled={!input.trim() || loading} aria-label="Send message">↑</button></form>
      <footer className="aj-chat-footer"><button onClick={() => setMessages([{ role: "assistant", content: welcome }])}>Clear conversation</button><span>Answers based on Aron’s portfolio</span></footer>
    </section>}
    <button className={`aj-chat-launcher ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Chat with Aron’s assistant"}>{open ? "×" : <><span className="aj-launcher-spark">✦</span><span>AJ</span></>}</button>
  </div>;
}
