import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { genPageMetadata } from '@/app/seo'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'

/**
 * Conversion destination. Set this as the redirect URL on each Fillout form so
 * ad platforms have a real URL to fire a conversion against. Noindexed so it
 * never competes in search.
 */
export const metadata = {
  ...genPageMetadata({
    title: 'Thank you',
    description: 'Your interest has been received.',
    path: '/thanks',
  }),
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <Container className="flex max-w-2xl flex-col items-center gap-6 py-24 text-center md:py-32">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
      </span>
      <h1 className="text-3xl md:text-4xl">Thank you, that&rsquo;s come through</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        I read every one of these myself, so it may take a day or two. I&rsquo;ll come back to you
        with what&rsquo;s coming up and what would suit your young person best.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full">
          <Link href="/program">Read about the program</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/makerspace">The Mobile Makerspace</Link>
        </Button>
      </div>
    </Container>
  )
}
