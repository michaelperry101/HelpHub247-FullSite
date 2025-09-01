'use client'

import { useState, useRef, useEffect } from 'react'

export const metadata = { title: 'Chat — HelpHub 247' }

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi, I\'m Carys. How can I help today?' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages(m => [...m, { role: 'user', content: trimmed }])
    setInput('')
    // Demo reply
    setTimeout(() => {
      setMessages(m => [...m, { role: 'assistant', content: 'Noted! (demo reply)' }])
    }, 450)
  }

  return (
    <div className="container py-6">
      <div className="h-[65vh] md:h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800/60">
        <div className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <span className={
                'inline-block px-4 py-2 rounded-2xl ' +
                (m.role === 'user' ? 'bg-brand text-white' : 'bg-slate-200 dark:bg-slate-700')
              }>
                {m.content}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <input
          className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-900"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? send() : null}
        />
        <button className="btn-primary" onClick={send}>Send</button>
      </div>
    </div>
  )
}