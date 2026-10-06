import { stages } from '@/data/stages'
import StageCard from '@/components/StageCard'
import { Section, SectionHeading } from '@/components/Container'

export default function Journey() {
  return (
    <Section id="journey" tone="muted">
      <SectionHeading
        eyebrow="The journey"
        title="From exploring, to making, to changing things"
      >
        <p>
          Three progressive stages. Young people join at the level that fits and move through at
          the pace of the group.
        </p>
      </SectionHeading>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {stages.map((stage, i) => (
          <StageCard key={stage.slug} stage={stage} index={i} />
        ))}
      </ul>
    </Section>
  )
}
