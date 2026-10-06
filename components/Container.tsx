import { cn } from '@/lib/utils'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6', className)}>{children}</div>
}

/** Vertical rhythm for marketing sections. `tone` paints the band behind it. */
export function Section({
  id,
  tone = 'default',
  className,
  children,
}: {
  id?: string
  tone?: 'default' | 'muted' | 'card'
  className?: string
  children: React.ReactNode
}) {
  const tones = {
    default: 'bg-background',
    muted: 'bg-secondary/50',
    card: 'bg-card',
  }
  return (
    <section id={id} className={cn('py-16 md:py-24', tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  )
}

/** Centred eyebrow + heading + standfirst, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-strong">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {children && <div className="text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  )
}
