const siteMetadata = {
  title: 'HelloMaker | Hands-on tech learning for young people',
  shortTitle: 'HelloMaker',
  tagline: 'Confident creators, not just consumers',
  author: 'Mischa Colley',
  description:
    'Holistic STEAM education in the Northern Rivers that takes young people from unplugged exploration to hands-on making, building problem-solving skills and a healthy relationship with technology.',
  language: 'en-AU',
  locale: 'en_AU',
  // TODO(confirm): set to the live domain before deploying. Everything canonical
  // (OG tags, sitemap, robots) derives from this value.
  siteUrl: 'https://hellomaker.org',
  siteLogo: '/assets/logo-hellomaker.svg',
  socialBanner: '/static/images/TechLearningForYoungPeople.png',
  email: 'info@hellomaker.org',
  region: 'Northern Rivers, NSW',
  // TODO(decide): age band for the hero badge and form options. Null = nothing renders.
  ageRange: null,
  authorSite: 'https://mischacolley.com.au/',
  analytics: {
    umamiWebsiteId: process.env.NEXT_UMAMI_ID,
  },
  forms: {
    // Fillout form ids. inheritParameters is on, so UTMs ride through to the submission.
    general: '8926s4Ngckus',
    workshops: 't35aEvo87Jus',
  },
}

module.exports = siteMetadata
