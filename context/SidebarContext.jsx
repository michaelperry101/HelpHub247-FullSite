'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const Ctx = createContext({ open: false, toggleOpen: () => {} })

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen(o => !o), [])

  return (
    <Ctx.Provider value={{ open, toggleOpen }}>
      {children}
    </Ctx.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useSidebar must be used inside SidebarProvider')
  return ctx
}
