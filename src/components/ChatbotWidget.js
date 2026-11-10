import React, { useEffect, useRef, useState } from "react";

const suggestions = [
  "Who is Aron Jose?",
  "Tell me about his Data Engineering experience.",
  "Explain his Snowflake insurance project.",
  "What is Medallion Architecture?",
  "How does he use Apache Airflow and dbt?",
  "What is his experience with Python and PySpark?",
  "Tell me about his Full-Stack development experience.",
  "What mobile applications has he developed?",
  "What technologies is he currently learning?",
  "How can I contact Aron?",
];
const welcome = "Hi there! 👋 I'm Aron's AI Assistant.\n\nWelcome to Aron's portfolio! I'm here to answer questions about his professional experience, Data Engineering skills, projects, and technical journey.\n\nWhat would you like to know about Aron?";

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
      const response = await fetch(`${process.env.REACT_APP_CHAT_API_URL || ""}/api/chat`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The assistant is temporarily unavailable. Please try again.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages((current) => [...current, { role: "assistant", content: error.message || "I couldn't connect just now. Please try again." }]);
    } finally { setLoading(false); }
  }

  return <div className="aj-chatbot">
    {open && <section className="aj-chat-panel" role="dialog" aria-label="Aron's AI Assistant">
      <header className="aj-chat-header"><div className="aj-chat-avatar">AJ</div><div><strong>Aron's AI Assistant</strong><span><i/> Here to help with Aron’s profile</span></div><button onClick={() => setOpen(false)} aria-label="Close chat">×</button></header>
      <div className="aj-chat-messages" aria-live="polite">
        {messages.map((message, index) => <div key={`${index}-${message.role}`} className={`aj-message ${message.role}`}><span>{message.content}</span></div>)}
        {messages.length === 1 && <div className="aj-suggestions"><small>Suggested questions</small>{suggestions.map((q) => <button key={q} onClick={() => send(q)}>{q}<b>↗</b></button>)}</div>}
        {loading && <div className="aj-message assistant"><span className="aj-typing" aria-label="Assistant is typing"><i/><i/><i/></span></div>}
        <div ref={endRef}/>
      </div>
      <form className="aj-chat-form" onSubmit={(event) => { event.preventDefault(); send(); }}><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} maxLength={2000} placeholder="Ask about Aron…" aria-label="Message"/><button disabled={!input.trim() || loading} aria-label="Send message">↑</button></form>
      <footer className="aj-chat-footer"><button onClick={() => setMessages([{ role: "assistant", content: welcome }])}>Clear conversation</button><span>Answers based on Aron’s portfolio</span></footer>
    </section>}
    <button className={`aj-chat-launcher ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Chat with Aron’s assistant"}>{open ? "×" : <><span className="aj-launcher-spark">✦</span><span>AJ</span></>}</button>
  </div>;
}
