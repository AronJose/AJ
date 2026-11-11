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
const chatApiUrl = process.env.REACT_APP_CHAT_API_URL || "https://aj-server-seven.vercel.app/api/chat";

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
      let response;
      try {
        response = await fetch(chatApiUrl, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: question, history }),
        });
      } catch (error) {
        console.error("Ask Aron AI network request failed", { name: error.name });
        throw new Error("I couldn't connect to Ask Aron AI. Check your connection and try again.");
      }

      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.error("Ask Aron AI returned invalid JSON", { status: response.status });
        throw new Error("Ask Aron AI returned an invalid response. Please try again.");
      }

      if (!response.ok) {
        const visitorMessage = data.error || (response.status === 429
          ? "Too many messages. Please wait a minute and try again."
          : response.status >= 500
            ? "Ask Aron AI is temporarily unavailable. Please try again later."
            : "I couldn't process that message. Please try again.");
        console.error("Ask Aron AI request rejected", { status: response.status, code: data.code });
        throw new Error(visitorMessage);
      }

      const answer = data.answer || data.reply;
      if (typeof answer !== "string" || !answer.trim()) {
        console.error("Ask Aron AI returned an invalid response shape", { status: response.status });
        throw new Error("Ask Aron AI returned an invalid response. Please try again.");
      }
      setMessages((current) => [...current, { role: "assistant", content: answer }]);
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
