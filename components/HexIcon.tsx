import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * The logo's own hexagon, reused as the container for every icon on the site.
 * The rounded square it replaces is the default any component library hands you;
 * this is brand geometry, so the icons read as part of the mark.
 *
 * Path is lifted verbatim from public/assets/logo-hellomaker.svg. Keep the two
 * in step if the mark is ever redrawn.
 */
export const HEXAGON =
  'M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z'

type HexIconProps = {
  icon: LucideIcon
  /** text-* class for the hexagon itself; the path fills with currentColor. */
  toneClassName?: string
  /** text-* class for the glyph sitting on top. */
  iconClassName?: string
  className?: string
}

export default function HexIcon({
  icon: Icon,
  // A pale amber ground with a slate glyph: the same figure/ground relationship
  // as the logo badge, a tint down. Solid amber is left to calls to action.
  toneClassName = 'text-primary-soft',
  iconClassName = 'text-foreground',
  className,
}: HexIconProps) {
  return (
    <span
      className={cn('relative inline-flex h-12 w-12 shrink-0 items-center justify-center', className)}
    >
      <svg
        viewBox="0 0 49.6 56.23"
        className={cn('absolute inset-0 h-full w-full', toneClassName)}
        aria-hidden="true"
      >
        <path d={HEXAGON} fill="currentColor" />
      </svg>
      {/* 1.75 rather than lucide's default 2. A lighter stroke reads less like a
          stock icon set and sits better inside the hexagon. */}
      <Icon
        className={cn('relative h-[42%] w-[42%]', iconClassName)}
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </span>
  )
}

/** The same hexagon at bullet size, tying list markers to the mark too. */
export function HexBullet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 49.6 56.23" className={cn('h-2 w-2 shrink-0', className)} aria-hidden="true">
      <path d={HEXAGON} fill="currentColor" />
    </svg>
  )
}
