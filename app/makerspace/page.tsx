import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/PageHeader'
import Form from '@/components/Form'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'Mobile Makerspace',
  description:
    'A welcoming, self-directed space where young makers gather to explore, experiment and bring their own ideas to life, working towards a mobile makerspace for regional and remote communities.',
  path: '/makerspace',
})

const expectations = [
  'Self-directed learning, with guidance when it is wanted',
  'Multi-session projects that develop over time',
  'A supportive environment guided by our Code of Conduct',
  'Opportunities to share, teach and collaborate',
]

const earlyDays = [
  'A BYO DIY attitude',
  'Willingness to work with evolving resources',
  'Enthusiasm for being part of something from the ground up',
]

export default function MakerspacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mobile Makerspace"
        title="Learning happens in the spaces in-between"
        lede="A welcoming environment where young makers gather regularly to explore, experiment and bring their ideas to life."
      >
        <div className="pt-1">
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            parameters={{ offer: 'Mobile Makerspace' }}
            trackAs="makerspace-header"
          />
        </div>
      </PageHeader>

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="prose max-w-prose">
            <p>
              As an unschooling parent, I&rsquo;ve seen firsthand how powerful learning becomes when
              it emerges from boredom, curiosity, failure and genuine interest. There&rsquo;s no
              better companion to that than the Maker Movement, where young people learn by doing,
              building and creating together.
            </p>

            <h2>What we&rsquo;ll create together</h2>
            <p>
              In casual, supportive group sessions, young people explore STEAM topics through
              hands-on making. Art and craft, multimedia, visual design, robotics, coding, web
              development, or a fusion of interests. Each maker sets their own learning
              intention and chooses projects that genuinely excite them.
            </p>
            <p>
              These sessions welcome both <Link href="/program">program</Link> alumni and newcomers,
              building a diverse community of makers learning from and inspiring each other.
            </p>

            <h3>What to expect</h3>
            <ul>
              {expectations.map((item) => (
                <li key={item}>
                  {item === 'A supportive environment guided by our Code of Conduct' ? (
                    <>
                      A supportive environment guided by our{' '}
                      <Link href="/code-of-conduct">Code of Conduct</Link>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>

            <h2>Where we&rsquo;re headed</h2>
            <p>
              Right now we&rsquo;re starting with the essentials: curiosity and imagination. Plus
              power, internet access, a laptop and a growing collection of tools and materials.
              I&rsquo;m building the inventory thoughtfully, with plans to expand into a
              fully-equipped mobile makerspace, a trailer that can serve as an outdoor
              classroom and let us work with underserved communities across regional and remote
              areas.
            </p>

            <h3>In these early days</h3>
            <p>We need makers with:</p>
            <ul>
              {earlyDays.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg">Where, when &amp; how</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Based on demand, I&rsquo;d like to begin offering popup sessions at different
                locations around the {siteMetadata.region}.
              </p>
              <Form
                filloutId={siteMetadata.forms.general}
                buttonText="Express interest"
                className="w-full"
                parameters={{ offer: 'Mobile Makerspace' }}
                trackAs="makerspace-aside"
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-secondary/60 p-6">
              <h2 className="text-lg">Want to help build it?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The makerspace is growing through the generosity of our community: donated
                tools, offered spaces, and sponsorship towards the trailer.
              </p>
              <Button asChild variant="outline" className="w-fit rounded-full">
                <Link href="/support">
                  Ways to support
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </Container>

      <Section tone="muted">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Popup sessions" title="Be first to know" />
          <p className="text-lg text-muted-foreground">
            Register your interest and I&rsquo;ll let you know when sessions open near you.
          </p>
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            size="lg"
            parameters={{ offer: 'Mobile Makerspace' }}
            trackAs="makerspace-footer"
          />
        </div>
      </Section>
    </>
  )
}
