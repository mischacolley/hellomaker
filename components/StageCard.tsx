import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Stage } from '@/data/stages'
import HexIcon from '@/components/HexIcon'

/** Stage colour is meaning, not decoration: warm earth -> eucalypt -> deep ink. */
const tones = {
  explorer: { hex: 'text-explorer-soft', glyph: 'text-explorer' },
  maker: { hex: 'text-maker-soft', glyph: 'text-maker' },
  changer: { hex: 'text-changer-soft', glyph: 'text-changer' },
} as const

export default function StageCard({ stage }: { stage: Stage }) {
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
          <HexIcon
            icon={stage.icon}
            toneClassName={tone.hex}
            iconClassName={tone.glyph}
            className="h-10 w-10"
          />
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
