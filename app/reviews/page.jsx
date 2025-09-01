export const dynamic = 'force-static'
export const metadata = { title: 'Reviews — HelpHub 247' }

export default function ReviewsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">What people say</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {name:'Jordan',text:'Legit feels premium. Smooth UI.'},
          {name:'Alex',text:'Love the white theme and speed.'},
          {name:'Sam',text:'The sidebar navigation is clean and easy.'}
        ].map((r, i) => (
          <div key={i} className="card">
            <p className="text-slate-700 dark:text-slate-200">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-4 text-sm text-slate-500">— {r.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
