import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Last Minutes Engineer assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I can help you find projects, components, and answer technical questions!",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Chat Button - Fixed positioning with proper z-index */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-primary text-white shadow-lg hover:scale-110 transition-bounce flex items-center justify-center glow-primary group"
      >
        {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
        <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-20 group-hover:opacity-40" />
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 animate-rotate-slow" />
      </button>

      {/* Chat Window - Proper z-index to stay below navbar */}
      {isOpen && (
        <Card className="fixed bottom-28 right-8 z-40 w-96 h-[550px] glass-card flex flex-col animate-scale-in shadow-elevated">
          {/* Header with Gradient */}
          <div className="p-5 border-b border-primary/20 bg-gradient-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative z-10">
              <h3 className="font-bold text-lg text-primary-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                AI Assistant
              </h3>
              <p className="text-xs text-primary-foreground/90 mt-1">Powered by advanced AI • Instant responses</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-card/40 to-card/60">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl backdrop-blur-sm transition-smooth hover:scale-[1.02] ${
                    msg.role === "user"
                      ? "bg-gradient-primary text-primary-foreground shadow-lg glow-soft"
                      : "glass-card text-foreground border border-primary/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/20 bg-card/80 backdrop-blur-sm">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-background/50 border-primary/30 focus:border-primary transition-smooth"
              />
              <Button onClick={handleSend} size="icon" variant="hero" className="hover:scale-110">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Try asking about projects, components, or technical questions
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
