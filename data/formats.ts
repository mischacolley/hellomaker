import { Home, Users, GraduationCap, Monitor, Truck, type LucideIcon } from 'lucide-react'

export type Format = {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export const formats: Format[] = [
  {
    icon: Home,
    title: 'Homeschool program',
    description:
      'A regular face-to-face program in the Northern Rivers, designed for homeschooling and unschooling families. Structured as a series so understanding builds progressively.',
    href: '/program',
  },
  {
    icon: Users,
    title: 'One-on-one & group mentoring',
    description:
      'Small group and individual sessions in the Northern Rivers, where young makers explore, experiment and bring their own ideas to life.',
    href: '/program',
  },
  {
    icon: GraduationCap,
    title: 'School & community workshops',
    description:
      'One-off workshops for schools, festivals and community events around the country, covering a single topic in depth.',
    href: '/workshops',
  },
  {
    icon: Monitor,
    title: 'Online learning',
    description:
      'Flexible online experiences for young people who prefer to learn remotely or live in regional and remote areas.',
    href: '/program',
  },
  {
    icon: Truck,
    title: 'Mobile Makerspace',
    description:
      'Our vision: a trailer equipped as an outdoor classroom, bringing tools and materials directly to underserved communities.',
    href: '/makerspace',
  },
]
