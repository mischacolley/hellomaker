import siteMetadata from '@/data/siteMetadata'
import Form from '@/components/Form'
import { Container } from '@/components/Container'

export default function CtaBand() {
  return (
    <div className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-8 py-14 text-center md:px-16">
          <h2 className="max-w-xl text-2xl text-primary-foreground md:text-3xl">
            Ready to raise a maker?
          </h2>
          <p className="max-w-md text-primary-foreground/80">
            Tell me a little about your young person and I&rsquo;ll be in touch about what&rsquo;s
            coming up. No commitment &mdash; just a conversation.
          </p>
          <Form
            filloutId={siteMetadata.forms.general}
            buttonText="Express interest"
            size="lg"
            variant="secondary"
            parameters={{ offer: 'Workshop Program' }}
            trackAs="cta-band"
          />
        </div>
      </Container>
    </div>
  )
}
