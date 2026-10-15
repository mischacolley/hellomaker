import { Compass, Hammer, Rocket, type LucideIcon } from 'lucide-react'

export type Stage = {
  slug: string
  name: string
  stageName: string
  /** TODO(decide): age bands are unset until confirmed. See the relaunch plan, section 10.
   *  Nothing renders an age until this is a string. */
  ages?: string
  icon: LucideIcon
  /** Token prefix: text-explorer / bg-explorer-soft etc. */
  tone: 'explorer' | 'maker' | 'changer'
  audience: string
  summary: string
  detail: string
  topics: string[]
  imgSrc: string
}

export const stages: Stage[] = [
  {
    slug: 'explorer',
    name: 'HelloExplorer',
    stageName: 'Explorer',
    icon: Compass,
    tone: 'explorer',
    audience:
      'For young people who have shown interest in digital technology, or who you want to give an unplugged introduction to this space.',
    summary:
      "Without touching a computer, or even talking about code, we unpack the chronological origins of modern tech.",
    detail:
      "I'm in no rush to teach my kids to code (or yours) but I also know that handcrafts like knitting are the basis of binary code, and that computational thinking starts with looking for patterns, thinking outside the box, creating step-by-step plans and learning how to break big problems into smaller ones.",
    topics: [
      'Early Tools (stone age technology)',
      'Power & Energy',
      'Food (hunting & gathering)',
      'Shelter & Clothing (weaving & knitting)',
      'Communication',
      'Wayfinding',
      'Seeing Colour',
      'Keeping Count',
      'Making Sounds',
    ],
    imgSrc: '/static/images/programs/explorer.png',
  },
  {
    slug: 'maker',
    name: 'HelloMaker',
    stageName: 'Maker',
    icon: Hammer,
    tone: 'maker',
    audience:
      'For young people with some prior knowledge of digital technology, or an established DIY/Maker attitude.',
    summary:
      'Technology timelines, inventions and ideas are explored to make sense of where we are with digital tech today.',
    detail:
      "Building on the foundations from HelloExplorer (learnt there or picked up elsewhere), we continue to focus on origin stories and the evolution of technology through human-centred topics. We move at a pace that reflects where the group is as a whole. Think reading the stars, to the invention of the compass, to GPS and the role of satellites. Thinking is paired with doing in a very practical, hands-on way.",
    topics: [
      'Evolving Tools (industrial revolution)',
      'Power & Energy',
      'Food (hunting & gathering)',
      'Shelter & Clothing (weaving & knitting)',
      'Communication',
      'Travel & Transport',
      'What screens want',
      'Storing numbers',
      'Retrieving sounds',
    ],
    imgSrc: '/static/images/programs/maker.png',
  },
  {
    slug: 'changer',
    name: 'HelloChanger',
    stageName: 'Changer',
    icon: Rocket,
    tone: 'changer',
    audience:
      'For young people moving into their teenage years who have an interest in digital technology and how it impacts their world.',
    summary:
      'Using current events and lived experience, we explore the often unexplored aspects of digital technology in our lives.',
    detail:
      'Are we creators or consumers? The customer or the product? The intent is to bring the humanities to this space and, paired with systems thinking and design thinking methodologies, begin to explore how we can use technology to positively impact the world around us.',
    topics: [
      'Telling the truth: censorship, fake news, deep fakes',
      'Taking responsibility',
      'Ethics, AI & Big Data',
      'Access & Accessibility',
      'Civic engagement, protest & dissent',
      'Natural disaster response & prevention',
      'Climate change',
      'Nature & Technology (biomimicry)',
      'The role of technology in our future',
    ],
    imgSrc: '/static/images/programs/changer.png',
  },
]

export const getStage = (slug: string) => stages.find((s) => s.slug === slug)
