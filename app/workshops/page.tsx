import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import workshopsFoundationsData from '@/data/workshopsFoundationsData'
import workshopsKnowwhyData from '@/data/workshopsKnowwhyData'
import workshopsParentsData from '@/data/workshopsParentsData'
import CardWorkshop from '@/components/CardWorkshop'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Workshops' })

export default function Workshops() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Workshops
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Journey from unplugged to plugged-in with balance
          </p> */}
        </div>
      </div>

      <div className="py-12">
        <div className="prose">
          <h2 className="">Foundations Workshop (Series)</h2>

          <p>
            Both HelloExplorer (our unplugged offering) and HelloMaker have a Foundations level
            delivered as part of a series. At this level the focus is on exploring the origins of
            modern tech. Sense making through experimenting and trying lots of different things. We
            are all explorers here.
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
          us or elsewhere in their lives) and they are ready to tinker more intentionally and begin
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
          <li>Our digital footprint</li>
          <li>Staying safe online</li>
          <li>Addiction & distraction</li>
          <li>Technology & impact</li>
        </ul>

        <a
          href="https://forms.fillout.com/t/8926s4Ngckus?offer=Workshop%20Program&workshop=HelloMaker"
          className="btn bsl-btn"
        >
          Express Interest
        </a>

        <h2>Knowwhy Workshop (Series)</h2>

        <p>
          The <strong>Changer</strong> level is the advanced level of the program and it will focus
          on developing Critical Thinking & Agency. Now that we know some of our history and the
          origin of technical things in our life, the <strong>Changer</strong> level intends to
          build upon acquired technical skills and match them up with deep thought on our roles and
          responsibilities in relation to how technology is used in our lives now and what roles it
          has in our future.
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
