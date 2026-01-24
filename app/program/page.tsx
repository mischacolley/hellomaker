import Link from '@/components/Link'
import workshopsFoundationsData from '@/data/workshopsFoundationsData'
import workshopsKnowwhyData from '@/data/workshopsKnowwhyData'
import workshopsParentsData from '@/data/workshopsParentsData'
import CardWorkshop from '@/components/CardWorkshop'
import { genPageMetadata } from 'app/seo'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'Program' })

export default function Program() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:flex gap-8">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose dark:prose-invert">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Our Program
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-white">
              Join a learning community building confidence, creativity, and critical thinking
              through hands-on STEM learning
            </p>

            <p>
              The HelloMaker program helps young people develop a healthy, empowered relationship
              with technology. Through structured workshops and mentoring, participants journey from
              curious explorers to confident makers who understand not just how technology works,
              but why it matters.
            </p>

            <h2>The Journey: Explorer → Maker → Changer</h2>

            <p>
              Our program is designed around three progressive levels, each building essential
              skills and mindsets:
            </p>

            <ul>
              <li>
                <strong>Explorer (Foundations)</strong> – Discover the origins of technology through
                hands-on experimentation and play
              </li>
              <li>
                <strong>Maker (Knowhow)</strong> – Develop technical skills and bring ideas to life
                through intentional making
              </li>
              <li>
                <strong>Changer (Knowwhy)</strong> – Combine knowledge with critical thinking to use
                technology responsibly and creatively
              </li>
            </ul>

            <p>
              Technology shouldn't be something that just happens to young people. As a{' '}
              <a href="https://mischacolley.com.au/" target="_blank">
                creative technologist
              </a>{' '}
              and unschooling parent, I've experienced both the{' '}
              <a
                href="https://www.ted.com/talks/linda_liukas_a_delightful_way_to_teach_kids_about_computers"
                target="_blank"
              >
                wonder
              </a>{' '}
              of early tech exploration and the very real concerns parents have today. This program
              bridges that gap, fostering curiosity while building the skills to engage with
              technology intentionally.
            </p>

            <h2>What's on offer</h2>
          </div>

          <aside className="prose dark:prose-invert">
            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              parameters={{ offer: 'Workshop Program' }}
            />

            <h3>Where, When & How</h3>

            <p>The HelloMaker experience can be delivered flexibly to suit your needs:</p>

            <ul>
              <li>a regular face-to-face homeschool program in the Northern Rivers</li>
              <li>one-on-one & group mentoring in the Northern Rivers</li>
              <li>workshops at schools, festivals & community events around the country</li>
              <li>as an online experience</li>
            </ul>
          </aside>
        </div>
      </div>

      <div className="py-12">
        <div className="prose dark:prose-invert">
          <h2 className="">Foundations Workshop (Series)</h2>

          <p>
            At the <strong>Explorer</strong> level, young people discover how technology works
            through hands-on exploration. Both HelloExplorer (our unplugged offering) and HelloMaker
            workshops focus on the origins of modern tech, building curiosity and confidence through
            experimentation and play.
          </p>

          <p>
            These workshops are designed as a series, allowing learners to build foundational
            understanding progressively.
          </p>
        </div>

        <div className="flex flex-wrap">
          {workshopsFoundationsData.map((d) => (
            <CardWorkshop
              key={d.title}
              title={d.title}
              audience={d.audience}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert">
        <h2>Knowhow Workshops (One Off)</h2>

        <p>
          The <strong>Maker</strong> level is where curiosity transforms into capability. Young
          people who have acquired foundational knowledge are ready to develop specific technical
          skills and bring their ideas to life. These standalone workshops focus on practical
          know-how across topics including:
        </p>

        <ul>
          <li>Multimedia & Visual Design</li>
          <li>Robotics, Programming & Code</li>
          <li>Web Development</li>
          <li>Design Thinking</li>
          <li>Thinking in Systems</li>
          <li>Our Digital Footprint</li>
          <li>Staying Safe Online</li>
          <li>Addiction & Distraction</li>
          <li>Technology & Impact</li>
        </ul>

        <p>
          Each workshop equips participants with skills to create intentionally and operate
          responsibly in digital spaces.
        </p>

        <Form buttonText="Express Interest" filloutId="t35aEvo87Jus" />

        <h2>Knowwhy Workshop (Series)</h2>

        <p>
          The <strong>Changer</strong> level develops critical thinking and agency. Building on
          technical skills and historical understanding, participants explore the deeper questions:
          Why does technology work this way? What are our responsibilities as makers and users? How
          can we use technology to create positive change?
        </p>

        <p>
          These workshops combine hands-on making with thoughtful discussion about technology's role
          in our lives and our power to shape its future.
        </p>
      </div>

      <div className="flex flex-wrap">
        {workshopsKnowwhyData.map((d) => (
          <CardWorkshop
            key={d.title}
            title={d.title}
            audience={d.audience}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
          />
        ))}
      </div>

      <div className="prose my-8 dark:prose-invert">
        <h2>Parent Support</h2>
      </div>

      <div className="flex flex-wrap">
        {workshopsParentsData.map((d) => (
          <CardWorkshop
            key={d.title}
            title={d.title}
            audience={d.audience}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
          />
        ))}
      </div>
    </>
  )
}
