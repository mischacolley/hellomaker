import Link from '@/components/Link'
import Image from 'next/image'
import Form from '@/components/Form'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:flex gap-8">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose dark:prose-invert">
            <p className="display-m text-lg dark:text-white">
              <strong>HelloMaker</strong> helps young people become confident creators, not just
              consumers, of technology.
            </p>

            <p className="dark:text-white">
              We provide wholistic{' '}
              <abbr title="STEM represents science, technology, engineering and maths">STEM</abbr>{' '}
              related education that journeys from unplugged exploration to hands-on making,
              equipping young people with problem-solving skills and a healthy relationship with
              digital technology.
            </p>

            <h2>Why HelloMaker?</h2>

            <p className="dark:text-white">
              Technology shouldn't be something that just happens to our young people, it should be
              a tool they understand and can use creatively. HelloMaker builds this confidence
              through guided exploration, making, and real-world problem solving.
            </p>

            <h2>Our Program</h2>

            <p className="dark:text-white">
              The HelloMaker experience can be delivered flexibly to suit your needs:
            </p>

            <ul>
              <li>Face-to-face Homeschool programs</li>
              <li>One-on-one and group mentoring</li>
              <li>School, festival, and community workshops</li>
              <li>Online learning experiences</li>
            </ul>

            <p className="dark:text-white">
              Our <Link href="/makerspace">Mobile Makerspace Vision</Link> is to work towards
              bringing hands-on tools and materials directly to learners, espeically those in
              underserved communities.
            </p>

            <h2>The Journey: Explorer → Maker → Changer</h2>

            <p className="dark:text-white">Young people ideally progress through three stages:</p>

            <ul>
              <li>
                <Link href="/program/helloexplorer">Explorer</Link> – Discovering the joy of
                curiosity and sense-making
              </li>
              <li>
                <Link href="/program/hellomaker">Maker</Link> – Developing mindsets and technical
                skills to bring ideas to life
              </li>
              <li>
                <Link href="/program/hellochanger">Changer</Link> – Combining knowledge with
                critical thinking to positively impact their world
              </li>
            </ul>

            <h2>Who i am</h2>

            <p className="dark:text-white">
              As a{' '}
              <a href="https://mischacolley.com.au/" target="_blank" className="dark:text-white">
                creative technologist
              </a>{' '}
              with over a decade in tech and an unschooling parent myself, I understand both the
              technical landscape and the real concerns parents have about their children's
              relationship with technology. I'm here to guide both young people and their{' '}
              <Link href="/program/helloparents">parents</Link> through this journey.
            </p>

            <small className="mb-8 block dark:text-white">
              I come from a long line of teachers, have worked as a mentor with young people
              previously and I hold a valid Working with Children Check and a First Aid Certificate.
            </small>
          </div>

          <aside className="prose dark:prose-invert">
            <Image
              alt="Tech Learning For Young People"
              src="/static/images/TechLearningForYoungPeople.png"
              width={500}
              height={300}
              className=""
            />

            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              parameters={{ offer: 'Workshop Program' }}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
