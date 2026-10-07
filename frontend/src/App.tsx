import { useMemo, useState } from 'react'
import { REPO_URL, tutorialUrl, tutorials, type Category } from './tutorials'

const ALL = 'All'

const categories = [ALL, ...new Set(tutorials.map((t) => t.category))] as (Category | typeof ALL)[]

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | typeof ALL>(ALL)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tutorials.filter(
      (t) =>
        (category === ALL || t.category === category) &&
        (!q || `${t.title} ${t.description} ${t.slug}`.toLowerCase().includes(q)),
    )
  }, [query, category])

  return (
    <>
      <header className="hero">
        <h1>Agents Towards Production</h1>
        <p>
          Hands-on tutorials for taking GenAI agents from prototype to production: orchestration,
          memory, tools, security, evaluation and deployment.
        </p>
        <a className="button" href={REPO_URL} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </header>

      <main>
        <div className="controls">
          <input
            type="search"
            placeholder="Search tutorials…"
            aria-label="Search tutorials"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="chips" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="count" aria-live="polite">
          {visible.length} of {tutorials.length} tutorials
        </p>

        <ul className="grid">
          {visible.map((t) => (
            <li key={t.slug}>
              <a className="card" href={tutorialUrl(t.slug)} target="_blank" rel="noopener noreferrer">
                <span className="tag">{t.category}</span>
                <h2>{t.title}</h2>
                <p>{t.description}</p>
              </a>
            </li>
          ))}
        </ul>

        {visible.length === 0 && <p className="empty">No tutorials match your search.</p>}
      </main>
    </>
  )
}

export default App
