import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import { workshops } from '@/data/workshops'
import PageHeader from '@/components/PageHeader'
import Form from '@/components/Form'
import { Section, SectionHeading } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'One-off workshops',
  description:
    'Nine standalone workshops covering robotics, web development, design thinking, online safety and the ethics of technology — for schools, festivals and community events.',
  path: '/workshops',
})

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title="Single topics, explored properly"
        lede="Standalone workshops that build specific know-how. Each one pairs hands-on making with the thinking behind it, and can be delivered at your school, festival or community event."
      >
        <div className="pt-1">
          <Form
            filloutId={siteMetadata.forms.workshops}
            buttonText="Enquire about a workshop"
            parameters={{ offer: 'Knowhow Workshop' }}
            trackAs="workshops-header"
          />
        </div>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="The catalogue" title="Nine workshops">
          <p>
            Every workshop equips participants to create intentionally and operate responsibly in
            digital spaces. Tell me which fits and we&rsquo;ll shape it to your group.
          </p>
        </SectionHeading>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <li
              key={workshop.slug}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h3 className="text-lg">{workshop.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {workshop.blurb}
              </p>
              <ul className="flex flex-wrap gap-1.5 pt-1">
                {workshop.themes.map((theme) => (
                  <li
                    key={theme}
                    className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Bookings" title="Bring a workshop to your group" />
          <p className="text-lg text-muted-foreground">
            Schools, homeschool groups, festivals and community events across the country. Let me
            know your group size, age range and what you&rsquo;re hoping for.
          </p>
          <Form
            filloutId={siteMetadata.forms.workshops}
            buttonText="Enquire about a workshop"
            size="lg"
            parameters={{ offer: 'Knowhow Workshop' }}
            trackAs="workshops-footer"
          />
        </div>
      </Section>
    </>
  )
}
