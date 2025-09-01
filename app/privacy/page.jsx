export const dynamic = 'force-static'
export const metadata = { title: 'Privacy — HelpHub 247' }

export default function PrivacyPage() {
  return (
    <div className="container py-12 prose prose-slate max-w-3xl dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>We respect your privacy. This site stores only the minimum required data to provide the service.</p>
      <h2>Data we collect</h2>
      <ul>
        <li>Anonymous usage analytics for improving the product.</li>
        <li>Account information only when you sign in.</li>
      </ul>
      <h2>Contact</h2>
      <p>Email: support@example.com</p>
    </div>
  )
}
