import Link from 'next/link'
import { formats } from '@/data/formats'
import { Section, SectionHeading } from '@/components/Container'

export default function Formats() {
  return (
    <Section id="formats">
      <SectionHeading eyebrow="How it works" title="Flexible delivery for every family">
        <p>
          The HelloMaker experience can be delivered in whichever way suits you &mdash; from a
          regular face-to-face series to a one-off workshop at your school or festival.
        </p>
      </SectionHeading>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((format) => (
          <li
            key={format.title}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
              <format.icon className="h-6 w-6 text-accent" aria-hidden="true" />
            </span>
            <h3 className="text-lg">
              {format.href ? (
                <Link href={format.href} className="transition-colors hover:text-primary-strong">
                  {format.title}
                </Link>
              ) : (
                format.title
              )}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{format.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
