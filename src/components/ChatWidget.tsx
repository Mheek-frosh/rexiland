'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineChatBubbleLeftRight, HiOutlineXMark, HiOutlinePaperAirplane } from 'react-icons/hi2';

type Msg = { id: string; role: 'user' | 'bot'; text: string };

const uid = () => Math.random().toString(16).slice(2) + Date.now().toString(16);

export default function ChatWidget({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: uid(),
      role: 'bot',
      text: 'Hi! I’m RexiPay support. Ask about payments, offline transactions, merchants, or crypto liquidity.'
    }
  ]);
  const [input, setInput] = useState('');

  const quickReplies = useMemo(
    () => ['How does offline payment work?', 'Do you support crypto-to-cash?', 'How can my business get started?'],
    []
  );

  useEffect(() => {
    if (!open) return;
    // small UX: focus input
    const el = document.getElementById('rexipay-chat-input') as HTMLInputElement | null;
    el?.focus();
  }, [open]);

  const botReply = (userText: string) => {
    const t = userText.toLowerCase();

    if (t.includes('offline') || t.includes('network') || t.includes('no network')) {
      return 'RexiPay is designed to keep transactions moving when network service is weak. You can continue business flows even during outages by using an offline-capable transaction approach.';
    }

    if (t.includes('crypto') || t.includes('convert') || t.includes('liquidity')) {
      return 'Yes. RexiPay supports instant crypto liquidity—receive digital assets and convert them to cash with rapid settlement.';
    }

    if (t.includes('start') || t.includes('business') || t.includes('merchant') || t.includes('get started')) {
      return 'To get started, contact us from this page. Share your business type and where you need payment reliability—online and offline support is one of our core strengths.';
    }

    return 'Thanks! Tell me what you’re trying to do (payments, merchants, transfers, or crypto). I’ll point you to the right solution.';
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Msg = { id: uid(), role: 'user', text: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: uid(), role: 'bot', text: botReply(trimmed) }]);
    }, 450);
  };

  return (
    <div className={className}>
      {/* Launcher */}
      <motion.button
        type="button"
        aria-label="Open chat"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/95 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-secondary/30"
        onClick={() => setOpen(true)}
      >
        <HiOutlineChatBubbleLeftRight className="w-7 h-7" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] bg-white border border-zinc-100 shadow-2xl rounded-[1.5rem] overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 bg-gradient-to-r from-[#EDF5FD] to-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/20">
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900 text-sm">RexiPay Support</div>
                  <div className="text-xs text-zinc-500">Online • usually replies fast</div>
                </div>
              </div>
              <button
                type="button"
                className="w-9 h-9 rounded-xl hover:bg-zinc-100 flex items-center justify-center text-zinc-700"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <HiOutlineXMark className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-3 max-h-[48vh] overflow-auto">
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                    <div
                      className={
                        m.role === 'user'
                          ? 'bg-secondary text-white rounded-[1.1rem] px-3.5 py-2 text-sm max-w-[85%]'
                          : 'bg-zinc-50 text-zinc-800 rounded-[1.1rem] px-3.5 py-2 text-sm max-w-[85%] border border-zinc-100'
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick replies (only when short) */}
              {messages.length <= 2 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition"
                      onClick={() => send(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-zinc-100 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                <input
                  id="rexipay-chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-secondary/20"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-2xl bg-secondary hover:bg-secondary/95 text-white flex items-center justify-center transition"
                  aria-label="Send"
                >
                  <HiOutlinePaperAirplane className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

