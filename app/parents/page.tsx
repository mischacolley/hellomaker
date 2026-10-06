import { genPageMetadata } from '@/app/seo'
import siteMetadata from '@/data/siteMetadata'
import PageHeader from '@/components/PageHeader'
import Form from '@/components/Form'
import { Container, Section, SectionHeading } from '@/components/Container'

export const metadata = genPageMetadata({
  title: 'For parents',
  description:
    "HelloParent — coaching and resources for parents navigating the role of technology in their own lives, and in their children's.",
  path: '/parents',
})

const offers = [
  {
    title: 'One-on-one & group coaching',
    description:
      'Work through your own relationship with technology, and what you want it to look like in your household.',
  },
  {
    title: 'The Terrible Ones & Zeros',
    description:
      'A plain-language tour of what is actually happening behind the screens your children use.',
  },
  {
    title: 'Resources for parents',
    description:
      'Practical starting points — what to look for, what to worry less about, and where to go next.',
  },
]

export default function ParentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="HelloParent"
        title="Your relationship with tech shapes theirs"
        lede="Not every young person and family will use, value or understand digital technology in the same way — and that's fine. But our own relationships with technology shape those of the young people in our lives."
      >
        <div className="pt-1">
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            parameters={{ parent: 'true' }}
            trackAs="parents-header"
          />
        </div>
      </PageHeader>

      <Container className="py-14 md:py-20">
        <div className="prose max-w-prose">
          <p>
            I find that people often talk about technology the same way they talk about creativity
            or singing, by saying things like <em>&ldquo;I&rsquo;m not technical&rdquo;</em>.
          </p>
          <p>
            What&rsquo;s usually being described there is a level of familiarity, comfort or desire
            to use digital technology &mdash; not actual ability. That matters, because the feeling
            often translates into technology avoidance rather than empowerment.
          </p>
          <p>
            When it comes to our kids, I think most parents want their children to feel empowered.
            One of the best ways to make that happen is to level up yourself.
          </p>
          <p>
            That doesn&rsquo;t mean you need to learn to code, unless you want to. It does mean
            having a clear understanding of what&rsquo;s possible, and where the opportunities and
            the dangers actually are, so you can be of most support.
          </p>
        </div>
      </Container>

      <Section tone="muted">
        <SectionHeading eyebrow="What&rsquo;s on offer" title="Three ways in" align="left" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <li
              key={offer.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="text-lg">{offer.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{offer.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionHeading eyebrow="Get in touch" title="Start with a conversation" />
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            size="lg"
            parameters={{ parent: 'true' }}
            trackAs="parents-footer"
          />
        </div>
      </Section>
    </>
  )
}
