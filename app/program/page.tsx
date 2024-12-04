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
          <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              The Program
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Join a learning community empowering young people as confident makers and tinkerers
            </p>

            <p>
              Technology is all around us. Today it’s easy to think that technology just refers to
              computers and apps, but the fact is humans have been creating technology for millions
              of years. I believe it’s important we associate "technology" with "tool" because this
              can help us place our relationship with digital technology in context.
            </p>

            <p>
              As a creative technologist my work requires I spend a lot of time in front of a
              computer. When I'm not working I prefer to be barefoot and as far away from any screen
              and signal as I can get. I understand that for some parents tech can often feel
              foreign and frightening. Like it represents a lot of whats wrong with our world.
              Depending on your relationship with technology there can sometimes be a tension around
              where it fits in your life and the life of your children.
            </p>

            <p>
              I find that at times I share many of those feelings AND I also remember the{' '}
              <a
                href="https://www.ted.com/talks/linda_liukas_a_delightful_way_to_teach_kids_about_computers"
                target="_blank"
              >
                whimsical
              </a>{' '}
              and wonderful! The way I felt in the early days of being introduced to multimedia,
              design and code by some wonderful mentors and in the early days of the web.
            </p>

            <p>
              A sense of wonder, empowerment and the ability to make intentional choices around how
              you interact with and use technology to impact the world around you is some of what I
              hope to share through this program.
            </p>

            <h2>Whats on offer</h2>
          </div>

          <aside className="prose">
            <Form
              buttonText="Express Interest"
              filloutId="8926s4Ngckus"
              parameters={{ offer: 'Workshop Program' }}
            />

            <h3>Where, When & How</h3>

            <p>
              The Program and Mobile Makerspace can be delivered to young people in a variety of
              contexts and formats, including:
            </p>

            <ul>
              <li>a regular face-to-face homeschool program in the Byron shire</li>
              <li>one-on-one & group mentoring in the Byron shire</li>
              <li>workshops at schools, festivals & community events around the country</li>
              <li>as an online experience</li>
            </ul>

            <p>Based on demand I'd like to offer all of these options from early 2025.</p>
          </aside>
        </div>
      </div>

      <div className="py-12">
        <div className="prose">
          <h2 className="">Foundations Workshop (Series)</h2>

          <p>
            Both HelloExplorer (our unplugged offering) and HelloMaker have a Foundations level,
            generally intended to be delivered as part of a somewhat sequencial series. At this
            level the focus is on exploring the origins of modern tech. Sense making through
            experimenting and trying lots of different things.
          </p>

          <p>
            We are all at the <strong>Explorer</strong> level here.
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

      <div className="prose">
        <h2>Knowhow Workshops (One Off)</h2>

        <p>
          The <strong>Maker</strong> level is the core part of the program. At this stage the
          expectation would be that young people have acquired foundational knowledge (either with
          me or elsewhere in their lives) and they are ready to tinker more intentionally and begin
          to acquire Skills in specific areas that interest them and the Knowledge to operate with
          accountability (to themselves & others) in these spaces. Based on demand, the type of
          workshops I'd start to run at this level would cover things like:
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

        <Form buttonText="Express Interest" filloutId="t35aEvo87Jus" />

        <h2>Knowwhy Workshop (Series)</h2>

        <p>
          The <strong>Changer</strong> level is the advanced level of the program and the intent is
          to focus on developing Critical Thinking & Agency. Now that we know some of our history
          and the origin of technical things in our life, the <strong>Changer</strong> level intends
          to build upon acquired technical skills and match them up with deep thought on our roles
          and responsibilities in relation to how technology is used in our lives now and what roles
          it has in our future.
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

      <div className="prose my-8">
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
