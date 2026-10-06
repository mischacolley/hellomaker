import { pillars } from '@/data/approach'
import { Section, SectionHeading } from '@/components/Container'

export default function Approach() {
  return (
    <Section id="approach">
      <SectionHeading eyebrow="Our approach" title="Technology is a tool, not just a screen">
        <p>
          Humans have been making technology for millions of years. We help young people place their
          relationship with digital technology in that context &mdash; building wonder, capability
          and intentional choices.
        </p>
      </SectionHeading>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <li
            key={pillar.title}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
              <pillar.icon className="h-6 w-6 text-accent" aria-hidden="true" />
            </span>
            <h3 className="text-lg">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
