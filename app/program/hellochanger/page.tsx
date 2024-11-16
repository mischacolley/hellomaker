import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'HelloChanger' })

export default function HelloChanger() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <nav>
            <Link href="/projects/hellomaker">Projects | HelloMaker</Link>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            HelloChanger
          </h1>
          <p>
            <em>
              For 15+<sup>*</sup>yo who have an interest in digital technology and how it impacts
              their world
            </em>
          </p>

          <p>
            Using current events and our lived experiences<sup>***</sup> (and those of others) we'll
            use a series of questions to explore the often unexplored aspects of digital technology
            in our lives. We'll zero-in on the critical thinking skills needed to navigate and
            thrive in a digital world.
          </p>

          <p>
            <em>Are we creators or consumers?</em> <em>The customer or the product?</em>
          </p>

          <p>
            The intent would be to bring the humanities to this space and paired with the likes of
            systems thinking and design thinking methodologies begin to explore how we can use
            technology to positively impact the world around us:
          </p>
          <ul>
            <li>
              Telling the truth
              <ul>
                <li>Censorship</li>
                <li>Fake News</li>
                <li>Deep Fakes</li>
                <li>The role of the Fourth Estate</li>
              </ul>
            </li>
            <li>Taking responsibility</li>
            <li>Ethics, AI & Big Data</li>
            <li>Access & Accessability</li>
            <li>
              The role of technology in:
              <ul>
                <li>Civic Engagement, Protest & Decent</li>
                <li>Natural disaster response & prevention</li>
                <li>Climate Change</li>
              </ul>
            </li>
            <li>Nature & Technology (Biomimicary)</li>
            <li>
              The role of technology in our future
              <ul>
                <li>living on other planets</li>
                <li>future of food</li>
                <li>language preservation</li>
                <li>technology and health (wearables)</li>
              </ul>
            </li>
          </ul>

          {/* <p>
            <strong>Beginning May 2024</strong>
          </p> */}

          <p>
            <a
              href="https://forms.fillout.com/t/8926s4Ngckus?offer=Workshop%20Program&workshop=HelloChanger"
              className="btn bsl-btn"
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
