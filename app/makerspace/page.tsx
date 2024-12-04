import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'Mobile Makerspace' })

export default function Makerspace() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:flex gap-8">
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
              .
            </p>

            <p>
              My vision is to establish a mobile environment were young people can come together
              regularly to make, share, give, learn, play, participate, support and change.
            </p>

            <h3>Whats on offer</h3>

            <p>
              In a casual group setting young people will be supported to explore their interests
              around STEAM. This might be around art/craft, multimedia, visual design, robotics,
              coding, web development or a combination of related interests. They'll be encouraged
              to set a learning intention (so they can come back to it over a number of sessions)
              and pick a project to work on.
            </p>

            <p>
              My hope is that I'll work with a mix of young people who have participated in the{' '}
              <Link href="/program">Workshop Program</Link> and those who haven't.
            </p>

            <p>
              These sessions will require a fair amount of self autonomy and be guided by the
              following <Link href="/code-of-conduct">Code of Conduct</Link>.
            </p>

            <h3>Whats available</h3>

            <p>
              Some basic tools (like power and Internet access) will be provided to start and I'll
              have at least one laptop with me plus a few other bits and pieces. I'm working on
              creating a list of what I have / need. I plan to grow what's available overtime so a
              BYO DIY attitude will be a must in the early days.
            </p>
          </div>
          <aside className="prose">
            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              parameters={{ offer: 'Mobile Makerspace' }}
            />

            <h3>Where, When & How</h3>

            <p>
              Based on demand I'd like to begin offering popup sessions at different locations
              around the Byron Bay area in early 2025.
            </p>

            <p>
              For the most part the makerspace will intentionally be delivered off-grid in an
              outdoor learning experience but I am activly scouting locations so please{' '}
              <a href="mailto:info@hellomaker.org">get in touch</a> if you know of somewhere.
            </p>
          </aside>
        </div>
      </div>
    </>
  )
}
