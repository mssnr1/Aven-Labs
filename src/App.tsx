import type { CSSProperties } from 'react'
import { APPS, greeting, type PortalApp } from './apps'

const BASE = import.meta.env.BASE_URL

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[22px]" aria-hidden>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function AppCard({ app }: { app: PortalApp }) {
  const soon = !app.url
  const style = { '--l1': app.light } as CSSProperties
  const body = (
    <>
      <div className="pic">
        <img src={BASE + app.image} alt="" loading="lazy" className={soon ? 'soon-img' : ''} />
        {!soon && <div className="glow" />}
        {app.badge && <span className="chip">{app.badge}</span>}
      </div>
      <div className="info">
        <div className="min-w-0 flex-1">
          <div className="kicker">{app.topic}</div>
          <div className="name">{app.name}</div>
          <div className="desc">{app.line}</div>
        </div>
        {soon ? <span className="soon">Bald</span> : <span className="open"><Arrow /></span>}
      </div>
    </>
  )
  return soon ? (
    <div className="card" style={style} aria-label={`${app.name}, ${app.topic}, kommt bald`}>{body}</div>
  ) : (
    <a className="card" style={style} href={app.url} aria-label={`${app.name} öffnen, ${app.topic}`}>{body}</a>
  )
}

export function App() {
  const now = new Date()
  const date = now.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })
  return (
    <main className="app">
      <header className="top">
        <div className="mark"><span className="dot" />aven labs</div>
      </header>
      <section className="intro">
        <p className="eyebrow">{greeting(now.getHours())} · {date}</p>
        <h1 className="display">Was tut dir heute gut?</h1>
      </section>
      <div className="grid">
        {APPS.map((a) => <AppCard key={a.id} app={a} />)}
      </div>
      <footer className="foot">
        <p>Jede App einzeln oder <b>alle zusammen</b> in einem Paket.</p>
        <p className="credit">Anatomie nach Z-Anatomy (CC BY-SA 4.0) und BodyParts3D (CC BY-SA 2.1 JP). Keine medizinische Beratung.</p>
      </footer>
    </main>
  )
}
