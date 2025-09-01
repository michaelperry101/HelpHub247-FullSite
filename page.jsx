export const dynamic = 'force-static'

export const metadata = { title: 'About — HelpHub 247' }

export default function AboutPage() {
  return (
    <div className="container py-12 prose prose-slate max-w-3xl dark:prose-invert">
      <h1>About HelpHub 247</h1>
      <p>HelpHub 247 is your always-on AI companion named <strong>Carys</strong>. We focus on a crisp UX, privacy first, and practical features for everyday life.</p>
      <h2>What you can expect</h2>
      <ul>
        <li>Clean, white-first design with dark mode available.</li>
        <li>A mobile-friendly, scrollable sidebar navigation.</li>
        <li>Simple, no-nonsense pages for Terms, Privacy, Reviews, Subscribe.</li>
      </ul>
    </div>
  )
}