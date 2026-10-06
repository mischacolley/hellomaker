import siteMetadata from '@/data/siteMetadata'
import Form from '@/components/Form'
import { Section, SectionHeading } from '@/components/Container'

const reassurances = [
  'Workshop series running through the year',
  'Small groups, so every maker gets attention',
  'No prior tech experience needed',
  `Based in the ${siteMetadata.region}`,
]

export default function InterestSection() {
  return (
    <Section id="interest">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading eyebrow="Get started" title="Express your interest" align="left">
            <p>
              Let me know who you are and what you&rsquo;re looking for. I&rsquo;ll come back to you
              with details on upcoming sessions and the best fit for your family.
            </p>
          </SectionHeading>

          <ul className="flex flex-col gap-3">
            {reassurances.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-8 shadow-card">
          <h3 className="text-xl">Which are you interested in?</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Each option opens a short form. Separate forms let me track which audience is finding
            the site, so pick whichever is closest.
          </p>
          <div className="flex w-full flex-col gap-3">
            <Form
              filloutId={siteMetadata.forms.general}
              buttonText="The program, for my child"
              className="w-full"
              parameters={{ offer: 'Workshop Program' }}
              trackAs="interest-program"
            />
            <Form
              filloutId={siteMetadata.forms.workshops}
              buttonText="A workshop for my school or event"
              variant="outline"
              className="w-full"
              parameters={{ offer: 'Knowhow Workshop' }}
              trackAs="interest-workshops"
            />
            <Form
              filloutId={siteMetadata.forms.general}
              buttonText="Support for me, as a parent"
              variant="outline"
              className="w-full"
              parameters={{ parent: 'true' }}
              trackAs="interest-parents"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
