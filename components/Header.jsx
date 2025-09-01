'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useSidebar } from '../context/SidebarContext'
import { useEffect, useState } from 'react'

export default function Header() {
  const { toggleOpen } = useSidebar()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="HelpHub 247" width={36} height={36} className="rounded-md" />
          <Link href="/" className="font-extrabold text-xl">HelpHub 247</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {['/','/about','/reviews','/subscribe','/settings','/privacy','/terms'].map((href, i) => (
            <Link key={i} className="nav-link" href={href}>
              {href === '/' ? 'Home' : href.replace('/','').replace('-', ' ').replace(/\b\w/g, (m)=>m.toUpperCase())}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/chat" className="hidden md:inline-flex btn-primary">Chat</Link>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(mounted && theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm"
          >
            {mounted && theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button onClick={toggleOpen} className="md:hidden rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm">
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}