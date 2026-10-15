# HelloMaker

Marketing site for [HelloMaker](https://hellomaker.org) — hands-on STEAM learning for young
people in the Northern Rivers, NSW.

## Stack

- **Next.js 16** (App Router, Turbopack) on React 19
- **Tailwind CSS 3** with an HSL token layer in `css/tailwind.css`
- A single [shadcn/ui](https://ui.shadcn.com) primitive (`Button`) — add more only when used
- **Fillout** for the interest forms, **Umami** for analytics
- Fully static: every route is prerendered at build time

## Running it

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # production build
yarn typecheck  # tsc --noEmit
yarn lint       # eslint --fix
```

Copy `.env.example` to `.env` and set `NEXT_UMAMI_ID` if you want analytics locally. Without it
the analytics script simply isn't rendered.

## How the content is organised

All copy that appears more than once lives in `data/` as typed objects, so a change lands
everywhere at once. There is no CMS and no MDX pipeline.

| File | Holds |
| --- | --- |
| `data/siteMetadata.js` | Domain, titles, contact, Fillout form ids, region, age range |
| `data/stages.ts` | The three journey stages (Explorer, Maker, Changer) and their topics |
| `data/workshops.ts` | The nine one-off workshops; `featured: true` surfaces one on `/program` |
| `data/formats.ts` | The five delivery formats |
| `data/approach.ts` | The four approach pillars on the homepage |
| `data/trust.ts` | Credentials shown in the homepage trust strip and on `/about` |
| `data/testimonials.ts` | Parent quotes. **Empty by design** — see below |
| `data/navigation.ts` | Header and footer navigation |

### Adding a stage or workshop

Add an entry to `data/stages.ts` and the card, the `/program/[stage]` route, the sitemap and the
footer all pick it up. Same for `data/workshops.ts`.

### Testimonials

`data/testimonials.ts` is an empty array and the homepage section renders `null` while it stays
that way. That is deliberate: a placeholder quote on a children's service page is worse than no
quote. Add real ones (first name, child's age, written permission) and the section appears.

## Design system

Tokens live in `css/tailwind.css` and are exposed through `tailwind.config.js`.

- `--primary` is the logo amber `#f8b500`. It is too light to carry white text, so
  `--primary-foreground` is near-black slate (9.6:1) and `--primary-strong` is a darkened amber
  for links and eyebrows (5.5:1). **Do not put white text on `bg-primary`.**
- `--accent` is teal, used for icons and informational chips.
- `--explorer` / `--maker` / `--changer` give each stage an identity. Amber stays reserved for
  calls to action so stage colour keeps its meaning.
- Every text/background pairing in the light palette meets WCAG AA (4.5:1).
- Dark tokens exist under `.dark` but nothing toggles the class yet — the site ships light-only.

## Conversion tracking

Each Fillout form should redirect to `/thanks` on completion (set in the Fillout dashboard).
That gives ad platforms a real URL to fire a conversion against; `/thanks` is noindexed.
`Form` also emits a `interest-form-open` Umami event carrying a `placement` label, so
cost-per-lead can be read per audience rather than per site.

## Deployment notes

- `data/siteMetadata.js` → `siteUrl` drives every canonical tag, OG URL and sitemap entry. It must
  match the live domain.
- `next.config.js` holds the CSP. Any new third-party origin (a font host, a video embed, a new
  analytics provider) has to be added there or the browser will block it.
- Old URLs from the previous structure 308-redirect in `next.config.js` — keep those entries.

## Logo assets

| File | Use |
| --- | --- |
| `public/assets/logo-hellomaker.svg` | The badge on its own. What the header, footer and favicon use. |
| `public/assets/logo-hellomaker-lockup.svg` | Badge and wordmark together, for anywhere outside the site: Canva, social profiles, print, slide decks. |
| `public/assets/logo-hellomaker-lockup-reversed.svg` | The same lockup for dark backgrounds. |

The site itself does **not** use the lockup. The header sets the wordmark as live
text beside the badge so it reflows and stays selectable; the lockup exists so
external material matches it exactly.

In the lockup the wordmark is Nunito ExtraBold converted to outlines, so it needs
no font installed and cannot reflow or substitute. Proportions are taken from the
header: wordmark at half the badge height, gap a quarter of it, cap height centred
on the badge, letter-spacing `-0.025em`. It is trimmed to the ink, so add clear
space of at least half the badge width when placing it.

Editing the badge means regenerating both lockups, since the badge geometry is
embedded in them.
