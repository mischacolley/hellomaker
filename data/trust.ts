import { ShieldCheck, HeartPulse, Home, Code2, type LucideIcon } from 'lucide-react'

export type TrustMarker = { icon: LucideIcon; label: string; detail: string }

/**
 * These facts were previously set in the smallest type on the homepage, last.
 * For a stranger deciding whether to put their child in a room with you, they
 * are the most important thing on the page.
 */
export const trustMarkers: TrustMarker[] = [
  {
    icon: ShieldCheck,
    label: 'Working with Children Check',
    detail: 'Current and verified',
  },
  {
    icon: HeartPulse,
    label: 'First Aid certified',
    detail: 'Current certificate',
  },
  {
    icon: Home,
    label: 'Unschooling parent',
    detail: 'Two kids of my own',
  },
  {
    icon: Code2,
    label: '15+ years in tech',
    detail: 'Working creative technologist',
  },
]
