import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'
import Form from '@/components/Form'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'

/**
 * Place sits in the opening sentence rather than in a badge above the headline.
 * The badge duplicated a fact the page already states five other times, and a
 * geographic chip at the top reads as a gate on the whole offering when one of
 * the formats is deliberately online. In a sentence it also carries more weight
 * for local search than a decorative element does.
 *
 * Ages join the same sentence once that call is made (siteMetadata.ageRange).
 */
function openingClause() {
  return siteMetadata.ageRange
    ? `Holistic STEAM learning in the Northern Rivers for ages ${siteMetadata.ageRange}, taking young people`
    : 'Holistic STEAM learning in the Northern Rivers that takes young people'
}

export default function Hero() {
  return (
    <section className="overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl leading-[1.08] md:text-5xl lg:text-[3.4rem]">
              Confident <span className="text-primary-strong">creators</span>, not just consumers.
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {openingClause()} from unplugged exploration to hands-on making, building real
              problem-solving skills and a healthy relationship with digital technology.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Form
                filloutId={siteMetadata.forms.general}
                buttonText="Express interest"
                size="lg"
                parameters={{ offer: 'Workshop Program' }}
                trackAs="hero"
              />
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/program">
                  See the program
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-card">
              <Image
                src="/static/images/TechLearningForYoungPeople.png"
                alt="Young people working together on a hands-on technology project"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card sm:-left-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-lg font-extrabold text-primary-foreground">
                3
              </span>
              <span className="text-sm">
                <span className="block font-semibold">Learning stages</span>
                <span className="block text-muted-foreground">Explorer, Maker, Changer</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
