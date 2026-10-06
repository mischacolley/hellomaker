/**
 * One-off "Knowhow" workshops. These were previously a bullet list buried on
 * /program; each is now a discrete, searchable, advertisable product.
 *
 * `featured: true` marks the three we lead with and build dedicated landing
 * pages for first. TODO(decide): confirm which three — relaunch plan, section 10.
 */
export type Workshop = {
  slug: string
  title: string
  blurb: string
  themes: string[]
  featured?: boolean
}

export const workshops: Workshop[] = [
  {
    slug: 'robotics-programming-code',
    title: 'Robotics, Programming & Code',
    blurb:
      'From physical build to working program. Young people wire up a machine, then write the instructions that bring it to life.',
    themes: ['Hardware', 'Logic', 'Debugging'],
    featured: true,
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    blurb:
      'How the web actually works, then building something real on it. Structure, style and publishing a page of their own.',
    themes: ['HTML & CSS', 'Publishing', 'How the internet works'],
    featured: true,
  },
  {
    slug: 'staying-safe-online',
    title: 'Staying Safe Online',
    blurb:
      'Practical, non-alarmist skills for the situations young people actually encounter — and the confidence to ask for help.',
    themes: ['Privacy', 'Scams & manipulation', 'Asking for help'],
    featured: true,
  },
  {
    slug: 'multimedia-visual-design',
    title: 'Multimedia & Visual Design',
    blurb:
      'Image, sound and motion as materials. Making things that communicate, using the same tools professionals use.',
    themes: ['Composition', 'Sound', 'Motion'],
  },
  {
    slug: 'design-thinking',
    title: 'Design Thinking',
    blurb:
      'A repeatable way to go from a vague problem to something you have actually built and tested with real people.',
    themes: ['Research', 'Prototyping', 'Testing'],
  },
  {
    slug: 'thinking-in-systems',
    title: 'Thinking in Systems',
    blurb:
      'Seeing the whole rather than the parts — feedback loops, side effects, and why complicated things behave the way they do.',
    themes: ['Feedback loops', 'Consequences', 'Mapping'],
  },
  {
    slug: 'our-digital-footprint',
    title: 'Our Digital Footprint',
    blurb:
      'What we leave behind online, who collects it, what it is worth, and how to make deliberate choices about it.',
    themes: ['Data', 'Identity', 'Deliberate choices'],
  },
  {
    slug: 'addiction-and-distraction',
    title: 'Addiction & Distraction',
    blurb:
      'How attention is designed for and sold. Naming the mechanics so young people can recognise them in the moment.',
    themes: ['Attention', 'Design patterns', 'Self-regulation'],
  },
  {
    slug: 'technology-and-impact',
    title: 'Technology & Impact',
    blurb:
      'Who benefits, who pays, and what technology does to the places and people around it. Ethics made concrete.',
    themes: ['Ethics', 'Trade-offs', 'Responsibility'],
  },
]

export const featuredWorkshops = workshops.filter((w) => w.featured)
