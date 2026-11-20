import { TopographicFlow } from './components/drops/topographic-flow';
import { RefractedText } from './components/drops/refracted-text';
import { ChromaticButton } from './components/drops/chromatic-button';
import { FanGallery } from './components/drops/fan-gallery';
import { about, experience, profile, projects } from './content';

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="mb-10 flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
      <span className="text-paper">{index}</span>
      <span className="h-px w-10 bg-line" />
      {children}
    </p>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest">
          {profile.initials}
        </a>
        <nav className="flex gap-5 text-sm text-muted sm:gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-paper">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <TopographicFlow preset="survey" height="100svh" className="w-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-16">
          <p className="mb-6 font-mono text-xs tracking-widest text-muted uppercase">
            {profile.role} · {profile.location}
          </p>
          <h1 aria-label={profile.name} className="-ml-1 flex w-full max-w-4xl flex-col">
            {profile.name
              .toUpperCase()
              .split(' ')
              .map((word) => (
                <RefractedText key={word} text={word} stagger={0.4} fontSize="clamp(2.4rem, 8vw, 7rem)" />
              ))}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/80 sm:text-xl">{profile.tagline}</p>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-6">
            <ChromaticButton onClick={() => document.getElementById('work')?.scrollIntoView()}>
              View my work
            </ChromaticButton>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-sm text-muted underline-offset-4 hover:text-paper hover:underline">
              Résumé ↗
            </a>
            <a href="#contact" className="text-sm text-muted underline-offset-4 hover:text-paper hover:underline">
              Get in touch →
            </a>
          </div>
        </div>
      </TopographicFlow>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28">
      <SectionLabel index="01">Selected work</SectionLabel>
      <div className="mb-16 overflow-hidden">
        <FanGallery
          items={projects.map((p) => ({ src: p.image, alt: p.title, href: p.href }))}
          entrance="deal"
          cardWidth={260}
          aspectRatio={1.6}
          tilt={10}
          ariaLabel="Project gallery"
        />
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.href ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-2 py-6 transition-colors sm:grid-cols-[6rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-muted">0{projects.indexOf(p) + 1}</span>
              <span>
                <span className="text-xl font-medium transition-colors group-hover:text-white">
                  {p.title} <span className="text-muted transition-colors group-hover:text-paper">↗</span>
                </span>
                <span className="mt-1 block text-sm text-muted">{p.description}</span>
              </span>
              <span className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {t}
                  </span>
                ))}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28">
      <SectionLabel index="02">About</SectionLabel>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-paper/85">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">Toolkit</h3>
          <ul className="flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <li key={s} className="rounded-full border border-line px-4 py-2 text-sm">
                {s}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 mb-4 font-mono text-xs tracking-widest text-muted uppercase">Education</h3>
          <ul className="space-y-3">
            {about.education.map((e) => (
              <li key={e.school}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">
                  {e.school} · {e.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28">
      <SectionLabel index="03">Experience</SectionLabel>
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <li key={e.period} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <span className="font-mono text-sm text-muted">{e.period}</span>
            <div>
              <p className="text-lg font-medium">
                {e.title} <span className="text-muted">· {e.org}</span>
              </p>
              <p className="mt-1 text-sm text-muted">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16">
      <TopographicFlow preset="midnight" height="80svh" lineStyle="dashed" className="w-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink/60" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-5">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Looking for a developer who learns fast? Let's talk.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ChromaticButton entrance="none" onClick={() => (window.location.href = `mailto:${profile.email}`)}>
              Say hello
            </ChromaticButton>
            <a href={`mailto:${profile.email}`} className="font-mono text-sm text-paper/80 hover:text-paper">
              {profile.email}
            </a>
          </div>
        </div>
      </TopographicFlow>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex gap-6">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-paper">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
