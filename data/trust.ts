import { ShieldCheck, HeartPulse, UsersRound, Code2, type LucideIcon } from 'lucide-react'

export type TrustMarker = { icon: LucideIcon; label: string; detail: string }

/**
 * These facts were previously set in the smallest type on the homepage, last.
 * For a stranger deciding whether to put their child in a room with you, they
 * are the most important thing on the page.
 *
 * Each `detail` must say something the `label` cannot imply. "Current and
 * verified" under a Working with Children Check said nothing, so it carries the
 * check number instead, which anyone can verify with Service NSW. First aid
 * names the unit (HLTAID012, education and care) rather than restating that it
 * exists.
 */
export const trustMarkers: TrustMarker[] = [
  {
    icon: Code2,
    label: 'Senior technologist',
    detail: '10+ years, still in the field',
  },
  {
    icon: UsersRound,
    label: 'Homeschooling parent',
    detail: 'Mentoring youth since 2010',
  },
  {
    icon: ShieldCheck,
    label: 'Working with Children Check',
    detail: 'NSW, WWC1194686E',
  },
  {
    icon: HeartPulse,
    label: 'First Aid certified',
    detail: 'Child care first aid and CPR',
  },
]
