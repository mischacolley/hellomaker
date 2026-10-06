import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Stage } from '@/data/stages'
import { cn } from '@/lib/utils'

/** Stage colour is meaning, not decoration: warm start -> cool middle -> deep end. */
const tones = {
  explorer: { chip: 'bg-explorer-soft text-explorer', mark: 'bg-explorer' },
  maker: { chip: 'bg-maker-soft text-maker', mark: 'bg-maker' },
  changer: { chip: 'bg-changer-soft text-changer', mark: 'bg-changer' },
} as const

export default function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const tone = tones[stage.tone]
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
      <Link href={`/program/${stage.slug}`} className="flex h-full flex-col" tabIndex={-1}>
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={stage.imgSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
              tone.chip
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', tone.mark)} aria-hidden="true" />
            Stage {index + 1}
          </span>
          {stage.ages && <span className="text-sm text-muted-foreground">{stage.ages}</span>}
        </div>

        <h3 className="text-xl">
          <Link
            href={`/program/${stage.slug}`}
            className="rounded-sm transition-colors hover:text-primary-strong"
          >
            {stage.name}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{stage.summary}</p>

        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary-strong">
          Learn more
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </li>
  )
}
