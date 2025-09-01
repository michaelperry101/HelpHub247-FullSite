export const dynamic = 'force-static'
export const metadata = { title: 'Subscribe — HelpHub 247' }

export default function SubscribePage() {
  return (
    <div className="container py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Subscribe</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">Get product news and updates. No spam.</p>
      <form className="card">
        <label className="block text-sm font-medium mb-2">Email address</label>
        <input className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-900" placeholder="you@example.com" type="email" />
        <button className="btn-primary mt-4" type="button">Join the list</button>
      </form>
    </div>
  )
}
