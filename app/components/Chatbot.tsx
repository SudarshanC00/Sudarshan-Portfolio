'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { searchKnowledgeBase, KnowledgeEntry } from '../data/knowledgeBase';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: KnowledgeEntry[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m an AI assistant that can answer questions about Sudarshan\'s portfolio. Try asking me about his projects, research, work experience, or skills!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = async (userMessage: string): Promise<Message> => {
    // Search knowledge base for relevant information
    const relevantEntries = searchKnowledgeBase(userMessage, 3);
    
    // Simple response generation based on query type
    let response = '';
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      const projectEntries = relevantEntries.filter(e => e.category === 'Projects');
      if (projectEntries.length > 0) {
        response = `Based on Sudarshan's portfolio:\n\n${projectEntries.map(e => `• ${e.content}`).join('\n\n')}`;
      } else {
        response = 'Sudarshan has worked on several AI/ML projects including RAG systems, computer vision pipelines, NLP applications, and LLM fine-tuning frameworks. Would you like to know more about a specific project?';
      }
    } else if (lowerMessage.includes('research') || lowerMessage.includes('publication')) {
      const researchEntries = relevantEntries.filter(e => 
        e.category === 'Research' || e.category === 'Publications'
      );
      if (researchEntries.length > 0) {
        response = `Here's information about Sudarshan's research:\n\n${researchEntries.map(e => `• ${e.content}`).join('\n\n')}`;
      } else {
        response = 'Sudarshan\'s research focuses on NLP, LLMs, RAG systems, and AI applications. He has published papers at top-tier conferences like NeurIPS, ACL, and EMNLP.';
      }
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      const expEntries = relevantEntries.filter(e => e.category === 'Experience');
      if (expEntries.length > 0) {
        response = `Here's Sudarshan's work experience:\n\n${expEntries.map(e => `• ${e.content}`).join('\n\n')}`;
      } else {
        response = 'Sudarshan has worked as an AI Research Intern at Tech Innovation Lab, ML Engineer at AI Solutions Inc., and is currently a Graduate Research Assistant at SJSU AI Lab.';
      }
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      const skillEntry = relevantEntries.find(e => e.category === 'Skills');
      if (skillEntry) {
        response = skillEntry.content;
      } else {
        response = 'Sudarshan is skilled in Python, PyTorch, TensorFlow, NLP, Computer Vision, LLMs, Deep Learning, RAG Systems, and GPU Computing.';
      }
    } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      response = 'You can download Sudarshan\'s resume from the Contact section. It includes his education, work experience, projects, and publications.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('linkedin')) {
      const contactEntry = relevantEntries.find(e => e.category === 'Contact');
      if (contactEntry) {
        response = contactEntry.content;
      } else {
        response = 'You can contact Sudarshan via email at sudarshan.chikkathimmaiah@sjsu.edu, or connect on LinkedIn and GitHub. Check the Contact section for links.';
      }
    } else if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      const aboutEntry = relevantEntries.find(e => e.category === 'About');
      if (aboutEntry) {
        response = aboutEntry.content;
      } else {
        response = 'Sudarshan Chikkathimmaiah is a Master\'s student in Artificial Intelligence at San José State University, specializing in NLP, Computer Vision, and Large Language Models.';
      }
    } else {
      // Use relevant entries if found
      if (relevantEntries.length > 0) {
        response = `Based on the portfolio:\n\n${relevantEntries.map(e => `• ${e.content}`).join('\n\n')}`;
      } else {
        response = 'I can help you learn about Sudarshan\'s projects, research, work experience, skills, or contact information. What would you like to know?';
      }
    }

    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      sources: relevantEntries,
    };
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay for better UX
    setTimeout(async () => {
      const response = await generateResponse(userMessage.content);
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:from-gray-600 hover:to-gray-500"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex flex-col border border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-700 to-gray-600 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Portfolio Assistant</h3>
                  <p className="text-white/80 text-xs">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-gray-500/20 rounded-lg p-1 transition-colors"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {message.role === 'user' ? (
                        <User size={16} />
                      ) : (
                        <Bot size={16} />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-gray-300 dark:border-gray-600">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Sources: {message.sources.map(s => s.category).join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <Bot size={16} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, research, experience..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

