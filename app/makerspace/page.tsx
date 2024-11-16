import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Mobile Makerspace' })

export default function Makerspace() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          {/* <nav>
            <Link href="/projects/hellomaker">Projects | HelloMaker</Link>
          </nav> */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mobile Makerspace
          </h1>

          <p>
            As an unschooling parent I’m forever betting on the power of learning that takes place
            in the spaces in-between. With boredom. With interest. With opportunity. With asking
            questions? With motivation or lack there of. With{' '}
            <a href="https://www.youtube.com/watch?app=desktop&v=fg2GiZtQ5bk" target="_blank">
              failure
            </a>
            .
          </p>

          <p>
            It's hard to think of a better companion to this mindset than that of the{' '}
            <a
              href="https://www.iste.org/explore/In-the-classroom/The-maker-movement-A-learning-revolution"
              target="_blank"
            >
              Maker Movement
            </a>
            . My intent is to establish an environment were young people can come together regularly
            to make, share, give, learn, play, participate, support and change.
          </p>

          <h3>Whats on offer</h3>
          <p>
            In a casual group setting young people<sup>6+</sup> will be supported to explore their
            interests around STEAM. This might be around art/craft, multimedia, visual design,
            robotics, coding, web development or a combination of related interests. They'll be
            encouraged to set a learning intention (so they can come back to it over a number of
            sessions) and pick a project to work on.
          </p>

          <p>
            My hope is that I'll work with a mix of young people who have participated in the{' '}
            <Link href="/projects/hellomaker">Workshop Program</Link> and those who haven't.
          </p>

          <p>
            These sessions will require a fair amount of self autonomy and be guided by the
            following <Link href="/code-of-conduct">Code of Conduct</Link>.
          </p>

          <h3>Whats available</h3>

          <p>
            Some basic tools (like power and Internet access) will be provided to start and I'll
            have at least one laptop with me plus a few other bits and pieces. I'm working on
            creating a list of what I have / need. I plan to grow what's available overtime so a BYO
            DIY attitude will be a must in the early days.
          </p>

          <h3>Location & Frequency</h3>
          <p>
            Delivered via popup sessions at different locations around the community (TBD based on
            interest) the space will be available for a couple of hours at a time. Likely
            fortnightly to start but I hope to increase the frequency.
          </p>

          <p>
            For the most part the makerspace will <Link href="/about#vision">intentionally</Link> be
            delivered off-grid in an outdoor learning experience.
          </p>

          <h3>Cost</h3>

          <p>
            I'll be starting with an introductory offer TBD and session will likely move to a tiered
            pricing model based on number of sessions attended and assistance / materials required.
          </p>

          <p>
            <strong>Sessions beginning February 2025</strong>
          </p>

          <p>
            <a
              href="https://forms.fillout.com/t/8926s4Ngckus?offer=Mobile%20Makerspace"
              target="_blank"
              className="btn"
            >
              Express Interest
            </a>
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </>
  )
}
