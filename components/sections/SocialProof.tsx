import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { Section, SectionHeading } from '@/components/Container'

/**
 * Renders nothing until there are real testimonials in data/testimonials.ts.
 * Deliberate: a placeholder quote on a children's service page is worse than
 * no quote at all.
 */
export default function SocialProof() {
  if (testimonials.length === 0) return null

  return (
    <Section id="proof" tone="muted">
      <SectionHeading eyebrow="From families" title="What parents say" />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <blockquote className="flex-1 text-sm leading-relaxed">{t.quote}</blockquote>
            <footer className="text-sm">
              <span className="block font-semibold">{t.name}</span>
              <span className="block text-muted-foreground">{t.context}</span>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  )
}
