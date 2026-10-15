import { Gift, MapPin, HandCoins } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/PageHeader'
import { Section, SectionHeading } from '@/components/Container'
import { Button } from '@/components/ui/button'

export const metadata = genPageMetadata({
  title: 'Support us',
  description:
    'Help build the Mobile Makerspace: donate tools and materials, host a popup session in your community, or sponsor the trailer.',
  path: '/support',
})

const ways = [
  {
    icon: Gift,
    title: 'Donate',
    description:
      'Tools, tech or materials. Hand tools, components, laptops, craft supplies. If it helps young people make something, it will get used.',
  },
  {
    icon: MapPin,
    title: 'Host',
    description:
      `Offer a space in your community. We're actively scouting locations around the ${siteMetadata.region} for popup sessions, indoors or out.`,
  },
  {
    icon: HandCoins,
    title: 'Sponsor',
    description:
      'Fund the mobile vision. The trailer, fit-out and tooling that will let us reach regional and remote communities.',
  },
]

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Help build the Mobile Makerspace"
        lede="This is growing through the generosity of our community. There are three practical ways to be part of it."
      />

      <Section>
        <ul className="grid gap-5 md:grid-cols-3">
          {ways.map((way) => (
            <li
              key={way.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                <way.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </span>
              <h2 className="text-lg">{way.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{way.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Talk to me" title="Any of the above?" />
          <p className="text-lg text-muted-foreground">
            Drop me a line and tell me what you have in mind. No form, no pitch. Just an
            email.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href={`mailto:${siteMetadata.email}?subject=Supporting the Mobile Makerspace`}>
              {siteMetadata.email}
            </a>
          </Button>
        </div>
      </Section>
    </>
  )
}
