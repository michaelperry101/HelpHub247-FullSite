'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '../context/SidebarContext'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/chat', label: 'Chat' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/subscribe', label: 'Subscribe' },
  { href: '/settings', label: 'Settings' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Sidebar() {
  const { open, toggleOpen } = useSidebar()

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="sidebar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          className="md:hidden overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur"
        >
          <div className="container py-3 max-h-64 overflow-y-auto">
            <nav className="grid gap-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={toggleOpen}
                  className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}