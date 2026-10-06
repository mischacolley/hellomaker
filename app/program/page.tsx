import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import { stages } from '@/data/stages'
import { formats } from '@/data/formats'
import { featuredWorkshops } from '@/data/workshops'
import StageCard from '@/components/StageCard'
import PageHeader from '@/components/PageHeader'
import Form from '@/components/Form'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'The program',
  description:
    'Three progressive stages — Explorer, Maker and Changer — taking young people from unplugged exploration to confident, critical making.',
  path: '/program',
})

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="The program"
        title="A learning journey, not a coding camp"
        lede="The HelloMaker program helps young people build a healthy, capable relationship with technology. Through workshops and mentoring, they move from curious explorers to makers who understand not just how technology works, but why it matters."
      >
        <div className="flex flex-wrap gap-3 pt-1">
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            parameters={{ offer: 'Workshop Program' }}
            trackAs="program-header"
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/workshops">One-off workshops</Link>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="Three stages" title="Explorer, Maker, Changer">
          <p>
            Each stage builds the skills and mindsets for the next. Young people join at the level
            that fits them &mdash; prior stages are helpful, not required.
          </p>
        </SectionHeading>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {stages.map((stage, i) => (
            <StageCard key={stage.slug} stage={stage} index={i} />
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading eyebrow="Where, when & how" title="Delivered to suit you" align="left" />
            <ul className="flex flex-col gap-4">
              {formats.map((format) => (
                <li key={format.title} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                    <format.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{format.title}</span>
                    <span className="block text-sm leading-relaxed text-muted-foreground">
                      {format.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="One-off workshops"
              title="Single topics, in depth"
              align="left"
            >
              <p>
                Once a young person has the foundations, these standalone workshops build specific
                know-how. Ideal for schools, festivals and community events.
              </p>
            </SectionHeading>
            <ul className="flex flex-col gap-3">
              {featuredWorkshops.map((workshop) => (
                <li
                  key={workshop.slug}
                  className="rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <h3 className="text-base">{workshop.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {workshop.blurb}
                  </p>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <Link href="/workshops">
                All nine workshops
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Next step" title="Come and have a look" />
          <p className="text-lg text-muted-foreground">
            Tell me about your young person and I&rsquo;ll be in touch about what&rsquo;s coming up.
          </p>
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            size="lg"
            parameters={{ offer: 'Workshop Program' }}
            trackAs="program-footer"
          />
        </div>
      </Section>
    </>
  )
}
