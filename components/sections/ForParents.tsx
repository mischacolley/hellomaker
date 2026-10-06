import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Heart, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/Container'

const supports = [
  { icon: Shield, text: 'Guidance on healthy digital habits, without the scare stories' },
  { icon: Heart, text: 'Understanding your own relationship with technology first' },
  { icon: BookOpen, text: "Resources and strategies to support your child's journey" },
]

export default function ForParents() {
  return (
    <Section id="parents" tone="card">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-secondary shadow-card">
          <Image
            src="/static/images/programs/parent.png"
            alt="A parent and child working on a project together"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="For parents"
            title="Your relationship with tech shapes theirs"
            align="left"
          >
            <p>
              Not every young person or family will use, value or understand digital technology the
              same way &mdash; and that&rsquo;s fine. HelloParent is for parents grappling with the
              role of technology in their own lives, and looking for ways to guide their children
              through it.
            </p>
          </SectionHeading>

          <ul className="flex flex-col gap-4">
            {supports.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                  <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>

          <Button asChild className="rounded-full">
            <Link href="/parents">
              More for parents
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
