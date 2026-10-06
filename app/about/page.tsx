import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import { trustMarkers } from '@/data/trust'
import PageHeader from '@/components/PageHeader'
import { Container, Section, SectionHeading } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'HelloMaker is run by Mischa Colley — a creative technologist of 15+ years and an unschooling parent, working with young people in the Northern Rivers.',
  path: '/about',
})

const exploring = [
  'A course for parents on confident, conscious technology use',
  'A directory connecting learners with local and online learning opportunities',
  'Persistent, evolving personal learning plans that belong to the learner',
  'Ways to document and share acquired knowledge that stay with the learner for life',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Mischa"
        lede="HelloMaker came out of fifteen years of casually exploring education, schooling and learning through an alternative lens — and out of being a parent to two young people of my own."
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="prose max-w-prose">
            <p>
              In the context of HelloMaker I like to introduce myself by saying that I&rsquo;m first
              and foremost an unschool dad to two fantastic young people.
            </p>
            <p>
              With this project I get an excuse to explore and tinker with technology in a playful
              way that I hope keeps my own interest in it alive longer than my work as a{' '}
              <a href={siteMetadata.authorSite} target="_blank" rel="noopener noreferrer">
                creative technologist
              </a>{' '}
              otherwise might.
            </p>
            <p>
              I come from a long line of teachers and have worked as a mentor with young people
              before. As a creative technologist with over a decade in tech, and an unschooling
              parent myself, I understand both the technical landscape and the real concerns parents
              have about their children&rsquo;s relationship with technology. I&rsquo;m here to
              guide both young people and{' '}
              <Link href="/parents">their parents</Link> through it.
            </p>

            <h2>What I&rsquo;m still working on</h2>
            <p>
              Alongside the program and the{' '}
              <Link href="/makerspace">Mobile Makerspace</Link>, these are the things I&rsquo;m
              turning over:
            </p>
            <ul>
              {exploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Get in touch</h2>
            <p>
              The quickest way to reach me is email. I read everything that comes in myself.
            </p>
            <p>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="inline-flex items-center gap-2 no-underline"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteMetadata.email}
              </a>
            </p>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-card">
              <Image
                src="/static/images/profile.jpeg"
                alt="Mischa Colley"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg">Credentials</h2>
              <ul className="flex flex-col gap-4">
                {trustMarkers.map((marker) => (
                  <li key={marker.label} className="flex items-start gap-3">
                    <marker.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm">
                      <span className="block font-semibold leading-snug">{marker.label}</span>
                      <span className="block text-muted-foreground">{marker.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>

      <Section tone="muted">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Safeguarding" title="How we look after people" />
          <p className="text-lg text-muted-foreground">
            Every session, in any format, runs under our Code of Conduct.
          </p>
          <Link
            href="/code-of-conduct"
            className="font-semibold text-primary-strong hover:underline"
          >
            Read the Code of Conduct
          </Link>
        </div>
      </Section>
    </>
  )
}
