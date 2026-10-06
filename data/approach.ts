import { Lightbulb, Wrench, Compass, Users, type LucideIcon } from 'lucide-react'

export type Pillar = { icon: LucideIcon; title: string; description: string }

export const pillars: Pillar[] = [
  {
    icon: Lightbulb,
    title: 'Curiosity first',
    description:
      'We start with questions and exploration, not answers. Young people discover the origins of modern tech through stories and hands-on experiments.',
  },
  {
    icon: Wrench,
    title: 'Unplugged to plugged-in',
    description:
      'Handcrafts before screens. Weaving, counting and wayfinding build a tangible understanding of the ideas that digital technology is made of.',
  },
  {
    icon: Compass,
    title: 'The why, not just the how',
    description:
      "Beyond technical skills, we develop thoughtful digital citizens who understand technology's impact on themselves and on the world.",
  },
  {
    icon: Users,
    title: 'Mentored, not instructed',
    description:
      'Small groups guided by a working creative technologist. Each maker sets their own learning intention and chooses projects that genuinely excite them.',
  },
]
