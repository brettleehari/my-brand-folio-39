import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import photo from "@/assets/profile.jpg";
import { profile, primaryLinks, otherLinks, proofStrip, work, principles, timeline, writing, speaking } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hariprasad Sudharshan — Product leader shipping AI" },
      { name: "description", content: "Builder PM with patents, research and live AI projects. MIT agentic AI hackathon runner-up." },
      { property: "og:title", content: "Hariprasad Sudharshan — Product leader shipping AI" },
      { property: "og:description", content: "Patents, papers and live demos. I'd rather show than tell." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ext = { target: "_blank", rel: "noreferrer" } as const;

function Section({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t py-16 md:py-24">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{label}</p>
      {children}
    </section>
  );
}

function Index() {
  const kinds = ["All", ...Array.from(new Set(timeline.map((t) => t.kind)))];
  const [filter, setFilter] = useState("All");
  const contactHref = profile.email ? `mailto:${profile.email}` : "https://linkedin.com/in/haripm4ai";

  return (
    <main className="mx-auto max-w-5xl px-6">
      <header className="animate-rise grid items-center gap-10 py-16 md:grid-cols-[1fr_auto] md:py-28">
        <div>
          <p className="text-sm text-muted-foreground">{profile.name} · {profile.location}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.proof}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent">See my work</a>
            <a href="#contact" className="rounded-md border px-5 py-3 text-sm font-medium transition hover:border-accent hover:text-accent">Get in touch</a>
          </div>
          <div className="mt-6 flex gap-5 text-sm">
            {primaryLinks.map((l) => <a key={l.label} href={l.href} {...ext} className="underline-offset-4 hover:text-accent hover:underline">{l.label}</a>)}
          </div>
        </div>
        <img src={photo} alt={profile.name} width={240} height={320} className="h-64 w-48 rounded-lg object-cover md:h-80 md:w-60" />
      </header>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
        {proofStrip.map((p) => (
          <a key={p.label} href={p.href} {...ext} className="bg-card p-6 transition hover:bg-secondary">
            <div className="font-display text-3xl font-bold">{p.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{p.label}</div>
          </a>
        ))}
      </div>

      <Section id="work" label="Featured work">
        <div className="grid gap-6 md:grid-cols-2">
          {work.map((w) => (
            <article key={w.title} className="flex flex-col rounded-lg border bg-card p-7">
              <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="text-accent">{w.theme}</span><span>{w.year}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold">{w.title}</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div><dt className="inline font-semibold">Problem. </dt><dd className="inline text-muted-foreground">{w.problem}</dd></div>
                <div><dt className="inline font-semibold">Built. </dt><dd className="inline text-muted-foreground">{w.built}</dd></div>
                <div><dt className="inline font-semibold">Result. </dt><dd className="inline text-muted-foreground">{w.result}</dd></div>
              </dl>
              <a href={w.href} {...ext} className="mt-auto pt-6 text-sm font-semibold hover:text-accent">{w.cta} →</a>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Speaking">
        <div className="grid gap-6 md:grid-cols-2">
          {speaking.map((t) => (
            <a key={t.href} href={t.href} {...ext} className="group flex flex-col overflow-hidden rounded-lg border bg-card">
              {t.video ? <img src={`https://i.ytimg.com/vi/${t.video}/hqdefault.jpg`} alt={t.title} loading="lazy" className="aspect-video w-full object-cover" /> : (
                <div className="flex aspect-video w-full flex-col justify-end bg-primary p-7 text-primary-foreground">
                  <span className="font-display text-5xl font-bold text-accent">AI</span>
                  <span className="mt-2 font-display text-2xl font-bold leading-tight">The Gold Rush, seen up close.</span>
                </div>
              )}
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">{t.event}</p>
                <h3 className="mt-2 text-xl font-bold group-hover:text-accent">{t.title} →</h3>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section label="How I work">
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title}>
              <div className="font-display text-sm text-accent">0{i + 1}</div>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Journey">
        <div className="mb-6 flex flex-wrap gap-2">
          {kinds.map((k) => (
            <button key={k} onClick={() => setFilter(k)} className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === k ? "border-primary bg-primary text-primary-foreground" : "hover:border-accent"}`}>{k}</button>
          ))}
        </div>
        <ul className="divide-y border-y">
          {timeline.filter((t) => filter === "All" || t.kind === filter).map((t) => (
            <li key={t.text} className="grid grid-cols-[5rem_1fr] gap-4 py-4 md:grid-cols-[6rem_8rem_1fr]">
              <span className="font-display font-semibold">{t.year}</span>
              <span className="hidden text-sm text-muted-foreground md:block">{t.kind}</span>
              {t.href ? <a href={t.href} {...ext} className="hover:text-accent">{t.text} →</a> : <span>{t.text}</span>}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Writing">
        <ul className="space-y-4">
          {writing.map((w) => (
            <li key={w.href}>
              <a href={w.href} {...ext} className="group flex items-baseline justify-between gap-6 border-b pb-4">
                <span className="text-xl font-semibold group-hover:text-accent">{w.title}</span>
                <span className="shrink-0 text-sm text-muted-foreground">{w.where}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" label="Contact">
        <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Building something in AI? Let's talk.</h2>
        <a href={contactHref} {...ext} className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:bg-primary">
          {profile.email ? "Email me" : "Message me on LinkedIn"}
        </a>
      </Section>

      <footer className="flex flex-wrap gap-x-6 gap-y-2 border-t py-10 text-sm text-muted-foreground">
        <span>© {profile.name}</span>
        {[...primaryLinks, ...otherLinks].map((l) => <a key={l.label} href={l.href} {...ext} className="hover:text-accent">{l.label}</a>)}
      </footer>
    </main>
  );
}
