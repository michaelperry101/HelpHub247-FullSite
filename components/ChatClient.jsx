'use client';

import { useEffect, useRef, useState } from 'react';

export default function ChatClient() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ready when you are.' },
  ]);
  const [input, setInput] = useState('');
  const scroller = useRef(null);

  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    // TODO: wire to your API route / model
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: 'Got it! (demo reply)' }]);
    }, 300);
  }

  return (
    <div className="mx-auto max-w-3xl w-full p-4 md:p-6">
      <div
        ref={scroller}
        className="h-[60vh] w-full overflow-y-auto rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
      >
        <ul className="space-y-3">
          {messages.map((m, i) => (
            <li key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <div
                className={`inline-block rounded-2xl px-4 py-2 text-sm md:text-base ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-100 text-neutral-900'
                }`}
              >
                {m.content}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={sendMessage} className="mt-4 flex gap-2">
        <input
          className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 active:translate-y-px"
        >
          Send
        </button>
      </form>
    </div>
  );
}
