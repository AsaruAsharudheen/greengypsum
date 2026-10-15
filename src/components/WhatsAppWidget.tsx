'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import Image from 'next/image';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false);
  const phoneNumber = '919645862654';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-8 z-[90] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 focus:outline-none flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing background effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:hidden"></span>
            
            <svg 
              className="w-8 h-8 relative z-10" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-8 sm:left-8 w-[90vw] sm:w-[350px] bg-white rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shrink-0">
                  <Image 
                    src="/images/logo.webp" 
                    alt="Green Gypsum Logo" 
                    fill 
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Green Gypsum Interiors</h4>
                  <p className="text-xs text-white/80">Typically replies within minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#E5DDD5] p-4 h-[250px] overflow-y-auto flex flex-col relative">
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10H10z' fill='%23000'/%3E%3C/svg%3E")`,
                  backgroundSize: '20px'
                }}
              />
              <div className="bg-white p-3 rounded-tr-xl rounded-b-xl max-w-[85%] shadow-sm relative z-10 self-start text-sm text-gray-800">
                Hi there! 👋 <br/>
                Welcome to Green Gypsum Interiors.<br/>
                How can we help you today?
                <span className="text-[10px] text-gray-400 block text-right mt-1">Just now</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#F0F0F0] flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-white border-none rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#25D366] text-gray-700"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={`p-2.5 rounded-full flex items-center justify-center transition-colors ${
                  message.trim() 
                    ? 'bg-[#25D366] text-white hover:bg-[#128C7E]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
