import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/Container'

type Crumb = { href: string; title: string }

export default function PageHeader({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  children,
}: {
  eyebrow?: string
  title: string
  lede?: string
  breadcrumbs?: Crumb[]
  children?: React.ReactNode
}) {
  return (
    <div className="border-b border-border bg-secondary/40">
      <Container className="flex flex-col gap-5 py-12 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-1">
                  <Link href={crumb.href} className="hover:text-foreground">
                    {crumb.title}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </li>
              ))}
              <li aria-current="page" className="text-foreground">
                {title}
              </li>
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-strong">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl md:text-5xl">{title}</h1>
        {lede && <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">{lede}</p>}
        {children}
      </Container>
    </div>
  )
}
