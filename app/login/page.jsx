'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const onGoogle = () => signIn('google')

  return (
    <div className="container py-12 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>
      <div className="card space-y-4">
        <button onClick={onGoogle} className="btn-primary w-full">Continue with Google</button>
        <div className="text-sm text-slate-500">
          Email login will be enabled when SMTP is configured.
        </div>
      </div>
    </div>
  )
}
