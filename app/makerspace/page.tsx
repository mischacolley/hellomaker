import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'Mobile Makerspace' })

export default function Makerspace() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:flex gap-8">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose dark:prose-invert">
            {/* <nav>
            <Link href="/projects/hellomaker">Projects | HelloMaker</Link>
          </nav> */}
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Mobile Makerspace
            </h1>

            <p className="text-xl italic">Learning happens in the spaces in-between</p>

            <p>
              As an unschooling parent, I've seen firsthand how powerful learning becomes when it
              emerges from boredom, curiosity, failure, and genuine interest. There's no better
              companion to this philosophy than the Maker Movement. Where young people learn by
              doing, building, and creating together.
            </p>

            <p>
              My vision is to establish a mobile makerspace: a welcoming environment where young
              makers can gather regularly to explore, experiment, and bring their ideas to life.
            </p>

            <h3>What we'll create together</h3>

            <p>
              In casual, supportive group sessions, young people will explore STEM related topics
              through hands-on making. Whether it's art and craft, multimedia, visual design,
              robotics, coding, web development, or a fusion of interests, each maker sets their own
              learning intention and chooses projects that genuinely excite them.
            </p>

            <p>
              These sessions welcome both <Link href="/program">Workshop Program</Link> alumni and
              newcomers, building a diverse community of makers learning from and inspiring each
              other.
            </p>

            <p>What to expect:</p>

            <ul>
              <li>Self-directed learning with guidance when needed</li>
              <li>Multi-session projects that develop over time</li>
              <li>
                A supportive environment guided by our{' '}
                <Link href="/code-of-conduct">Code of Conduct</Link>
              </li>
              <li>Opportunities to share, teach, and collaborate</li>
            </ul>

            <h3>Where we're headed</h3>

            <p>
              Right now, we're starting with the essentials: curiosity and imagination. We'll also
              have power, internet access, a laptop, and a growing collection of tools and
              materials. I'll be building our inventory thoughtfully, with plans to expand into a
              fully-equipped mobile makerspace. The vision is a trailer that can serve as an outdoor
              classroom and allow us to work with underserved communities across regional and remote
              areas.
            </p>

            <p>In these early days, we need makers with:</p>

            <ul>
              <li>A BYO DIY attitude</li>
              <li>Willingness to work with evolving resources</li>
              <li>Enthusiasm for being part of something from the ground up</li>
            </ul>
          </div>
          <aside className="prose dark:prose-invert">
            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              parameters={{ offer: 'Mobile Makerspace' }}
            />

            <h3>Where, When & How</h3>

            <p>
              Based on demand I'd like to begin offering popup sessions at different locations
              around the Northern Rivers.
            </p>

            {/* <p>
              For the most part the makerspace will intentionally be delivered off-grid in an
              outdoor learning experience but I am activly scouting locations so please{' '}
              <a href="mailto:info@hellomaker.org">get in touch</a> if you know of somewhere.
            </p> */}

            <h3>Ways to Support</h3>

            <p>This mobile makerspace is growing through the generosity of our community.</p>

            <ul>
              <li>
                <strong>Donate:</strong> Tools, tech, or materials
              </li>
              <li>
                <strong>Host:</strong> Offer a space in your community
              </li>
              <li>
                <strong>Sponsor:</strong> Fund the mobile vision
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}
