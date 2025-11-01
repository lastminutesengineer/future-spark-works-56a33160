import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content: "Hi! I'm your Last Minutes Engineer assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setIsCheckingAuth(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Check authentication before sending
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to use the chat assistant.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    // Client-side validation
    if (input.length > 2000) {
      toast({
        title: "Message Too Long",
        description: "Please limit your message to 2000 characters.",
        variant: "destructive",
      });
      return;
    }

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: [...messages, { role: "user", content: userMessage }] },
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm sorry, I encountered an error. Please try again.",
          },
        ]);
      } else {
        const assistantMessage = data.choices[0].message.content;
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: assistantMessage },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button - Fixed positioning above navbar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full bg-gradient-primary text-white shadow-lg hover:scale-110 transition-bounce flex items-center justify-center glow-primary group"
      >
        {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
        <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-20 group-hover:opacity-40" />
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 animate-rotate-slow" />
      </button>

      {/* Chat Window - Above navbar */}
      {isOpen && (
        <Card className="fixed bottom-28 right-8 z-[60] w-96 h-[550px] glass-card flex flex-col animate-scale-in shadow-elevated">
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-card/40 to-card/60 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s` }}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl backdrop-blur-sm transition-smooth hover:scale-[1.02] ${
                    msg.role === "user"
                      ? "bg-gradient-primary text-white shadow-lg glow-soft"
                      : "glass-card text-foreground border border-primary/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="glass-card text-foreground border border-primary/20 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/20 bg-card/80 backdrop-blur-sm">
            {!isAuthenticated && !isCheckingAuth ? (
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <p className="text-sm">Sign in required to chat</p>
                </div>
                <Button
                  onClick={() => navigate("/auth")}
                  variant="hero"
                  className="w-full"
                >
                  Sign In to Chat
                </Button>
              </div>
            ) : (
              <>
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                    placeholder="Ask me anything..."
                    disabled={isLoading || !isAuthenticated}
                    className="flex-1 bg-background/50 border-primary/30 focus:border-primary transition-smooth disabled:opacity-50"
                    maxLength={2000}
                  />
                  <Button 
                    onClick={handleSend} 
                    size="icon" 
                    variant="hero" 
                    className="hover:scale-110"
                    disabled={isLoading || !isAuthenticated}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {isLoading ? "Thinking..." : `${input.length}/2000 • Ask about projects, components, or technical questions`}
                </p>
              </>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
