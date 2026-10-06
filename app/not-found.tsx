import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-24 md:py-32">
      <p className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-primary-strong">
        404
      </p>
      <h1 className="max-w-xl text-3xl md:text-5xl">We couldn&rsquo;t find that page</h1>
      <p className="max-w-prose text-lg text-muted-foreground">
        The link may be out of date. The program, the workshops and the Mobile Makerspace are all a
        click away.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild className="rounded-full">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/program">See the program</Link>
        </Button>
      </div>
    </Container>
  )
}
