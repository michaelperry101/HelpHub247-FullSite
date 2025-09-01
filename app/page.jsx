import Link from 'next/link'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Meet <span className="text-brand">Carys</span> — your helpful AI
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Ask questions, plan, create, and talk. Designed to feel legit, fast, and friendly.
            Voice coming soon. Try it free — no sign up required.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link href="/chat" className="btn-primary">
              Start chatting
            </Link>
            <Link className="inline-flex items-center font-semibold text-brand hover:underline" href="/about">
              Learn more →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-bold">Real-time chat</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Clean, fast UI with message memory.</p>
            </div>
            <div className="card">
              <h3 className="font-bold">Privacy-first</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Transparent terms &amp; controls.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card">
            <div className="text-sm text-slate-500 mb-3">Preview</div>
            <div className="h-72 overflow-hidden rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4">
              <div className="space-y-3 text-sm">
                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-slate-200">Hi Carys! What can you do?</div>
                <div className="max-w-[80%] rounded-2xl px-4 py-2 ml-auto bg-brand text-white">Help plan my week?</div>
                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-slate-200">Absolutely. Let’s start with your top goals.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}