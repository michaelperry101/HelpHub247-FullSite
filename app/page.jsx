'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [voice, setVoice] = useState('uk')
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="container py-10 max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <section className="card">
        <h2 className="font-semibold text-lg">Appearance</h2>
        <p className="text-sm text-slate-500 mt-1">Switch between light and dark themes.</p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setTheme('light')}
            className={'px-4 py-2 rounded-lg border ' + (mounted && theme === 'light' ? 'bg-brand text-white border-transparent' : 'border-slate-300 dark:border-slate-700')}
          >
            Light (default)
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={'px-4 py-2 rounded-lg border ' + (mounted && theme === 'dark' ? 'bg-brand text-white border-transparent' : 'border-slate-300 dark:border-slate-700')}
          >
            Dark
          </button>
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold text-lg">Voice</h2>
        <p className="text-sm text-slate-500 mt-1">Pick a voice profile for speech responses.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {['uk','us','au','in'].map(v => (
            <button key={v}
              onClick={() => setVoice(v)}
              className={'px-4 py-2 rounded-lg border capitalize ' + (voice === v ? 'bg-brand text-white border-transparent' : 'border-slate-300 dark:border-slate-700')}
            >
              {v} English
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold text-lg">Notifications</h2>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-slate-600 dark:text-slate-300">Email updates</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(v => !v)} />
            <div className="w-12 h-6 bg-slate-300 peer-checked:bg-brand rounded-full relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-6"></div>
          </label>
        </div>
      </section>

      <section className="card">
        <h2 className="font-semibold text-lg">Danger zone</h2>
        <p className="text-sm text-slate-500 mt-1">You can reset local preferences here.</p>
        <button
          onClick={() => { localStorage.clear(); location.reload() }}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg border border-red-300 text-red-700 hover:bg-red-50"
        >
          Reset locally saved settings
        </button>
      </section>
    </div>
  )
}