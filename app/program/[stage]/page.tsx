import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import { stages, getStage } from '@/data/stages'
import PageHeader from '@/components/PageHeader'
import Form from '@/components/Form'
import HexIcon, { HexBullet } from '@/components/HexIcon'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading } from '@/components/Container'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return stages.map((stage) => ({ stage: stage.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ stage: string }> }) {
  const { stage: slug } = await params
  const stage = getStage(slug)
  if (!stage) return {}
  return genPageMetadata({
    title: stage.name,
    description: stage.summary,
    image: stage.imgSrc,
    path: `/program/${stage.slug}`,
  })
}

const tones = {
  explorer: { hex: 'text-explorer-soft', glyph: 'text-explorer' },
  maker: { hex: 'text-maker-soft', glyph: 'text-maker' },
  changer: { hex: 'text-changer-soft', glyph: 'text-changer' },
} as const

export default async function StagePage({ params }: { params: Promise<{ stage: string }> }) {
  const { stage: slug } = await params
  const stage = getStage(slug)
  if (!stage) notFound()

  const index = stages.findIndex((s) => s.slug === stage.slug)
  const next = stages[index + 1]
  const tone = tones[stage.tone]

  return (
    <>
      <PageHeader
        title={stage.name}
        lede={stage.audience}
        breadcrumbs={[{ href: '/program', title: 'Program' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5">
            <HexIcon
              icon={stage.icon}
              toneClassName={tone.hex}
              iconClassName={tone.glyph}
              className="h-9 w-9"
            />
            <span className={cn('text-sm font-semibold uppercase tracking-wide', tone.glyph)}>
              {stage.stageName}
            </span>
          </span>
          {stage.ages && <span className="text-sm text-muted-foreground">{stage.ages}</span>}
        </div>
        <div className="pt-1">
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText={`Express interest in ${stage.name}`}
            parameters={{ offer: 'Workshop Program', workshop: stage.name }}
            trackAs={`stage-${stage.slug}-header`}
          />
        </div>
      </PageHeader>

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="text-xl leading-relaxed">{stage.summary}</p>
            <p className="max-w-prose leading-relaxed text-muted-foreground">{stage.detail}</p>

            <h2 className="mt-6 text-2xl">What we explore</h2>
            <p className="max-w-prose leading-relaxed text-muted-foreground">
              We work through this world from within much larger human topics:
            </p>
            <ul className="mt-1 grid gap-2 sm:grid-cols-2">
              {stage.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <HexBullet className={cn('mt-[0.4rem]', tone.glyph)} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-card">
              <Image
                src={stage.imgSrc}
                alt=""
                width={700}
                height={440}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg">Interested?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Tell me a little about your young person and I&rsquo;ll be in touch about the next
                {' '}
                {stage.name} series.
              </p>
              <Form
                filloutId={siteMetadata.forms.general}
                buttonText="Express interest"
                className="w-full"
                parameters={{ offer: 'Workshop Program', workshop: stage.name }}
                trackAs={`stage-${stage.slug}-aside`}
              />
            </div>
          </aside>
        </div>
      </Container>

      {next && (
        <Section tone="muted">
          <div className="flex flex-col items-start gap-5">
            <SectionHeading
              eyebrow={`Stage ${index + 2}`}
              title={`Next: ${next.name}`}
              align="left"
            >
              <p>{next.summary}</p>
            </SectionHeading>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={`/program/${next.slug}`}>
                Read about {next.name}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Section>
      )}
    </>
  )
}
