'use client'

import Sidebar from './Sidebar'
import Header from './Header'
import { SidebarProvider } from '../context/SidebarContext'

export default function ClientShell({ children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Sidebar />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-12">
          <div className="container text-sm text-slate-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} HelpHub 247</div>
            <div className="flex gap-4">
              <a className="hover:underline" href="/privacy">Privacy</a>
              <a className="hover:underline" href="/terms">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  )
}