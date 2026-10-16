# Second opinion on Hari.me, and a rebuild plan

## What works
- Strong proof: 3 patents, 45+ citations, MIT hackathon runner-up, merged LlamaIndex PRs. Every claim has a link, which builds trust.
- "I'd rather show than tell" is a good voice. The hackathon write-up sounds like a real person.

## What holds the brand back
1. **No clear headline.** "Builder PM with entrepreneurial spirit and research interest" lists three identities. A visitor can't tell in 5 seconds what you are known for. Pick one line, e.g. "Product leader who ships AI agents, from patent to production."
2. **Too many links up top.** 8 social links before any work. Keep 3 (LinkedIn, GitHub, Scholar) and move the rest to the footer.
3. **The hackathon shows up twice** (hero banner and Featured Work). Show it once.
4. **Stats lack context.** "20 Years" of what? "6+ papers" has no link. Either link or explain each number.
5. **Featured Work mixes old and new without a story.** Smart-Review (2019) sits next to CricketMind (2026). Group by theme (AI agents, Developer tools, Research) instead of mixing.
6. **Journey timeline is long and noisy.** Badges like Pull Shark and Arctic Code Vault are small wins that dilute the big ones. Collapse them into one "Open source" line.
7. **Missing pieces for a brand:** no clear "work with me / contact" button, no short story of what you do as a PM day to day, no writing section that pulls in your Substack/Medium posts, no outcomes from your PM role (users, revenue, teams led).
8. **Typos and polish:** "Metabolistic" vs "Metabolic", "Opensourced", "click for details" labels.

## Proposed rebuild (single page, here)
1. **Top:** photo, one-line positioning, one-sentence proof, two buttons: "See my work" and "Get in touch".
2. **Proof strip:** Patents, Citations, MIT runner-up, Open-source PRs, each linked.
3. **Featured work:** 4 cards max, grouped by theme, each with problem, what you built, result, link.
4. **How I work:** 3 short principles (build in public, show not tell, full loop ownership), taken from your hackathon story.
5. **Research & patents:** compact list linking to Scholar.
6. **Writing:** latest posts from Substack/Medium.
7. **Timeline:** condensed, filterable, smaller.
8. **Contact:** email, LinkedIn, Calendly-style link, plus footer with all other profiles.

Visual direction: editorial and confident (bold serif-free display type, dark ink on warm off-white, one accent color), so it reads as a person, not a template.

## Technical details
- Rebuild in this project as one route at `/` with section components; content kept in one data file so it is easy to update.
- Reuse your existing text, links and profile photo (I'll pull them from the GitHub repo).
- Proper page title, description and social preview tags.
