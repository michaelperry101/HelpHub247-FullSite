import './globals.css'
import { ThemeProvider } from 'next-themes'
import ClientShell from '../components/ClientShell'

export const metadata = {
  title: 'HelpHub 247',
  description: 'Meet Carys — your helpful AI assistant. Ask questions, plan, create, and chat, now with natural voice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientShell>
            {children}
          </ClientShell>
        </ThemeProvider>
      </body>
    </html>
  )
}