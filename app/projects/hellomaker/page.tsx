import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'
import workshopsFoundationsData from '@/data/workshopsFoundationsData'
import workshopsKnowwhyData from '@/data/workshopsKnowwhyData'
import workshopsParentsData from '@/data/workshopsParentsData'
import CardWorkshop from '@/components/CardWorkshop'
import Link from 'next/link'

import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'HelloMaker | STEAM Workshop Program & Mobile Makerspace',
})

export default function HelloMaker() {
  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 md:flex items-center">
          <div className=" p-8">
            <Image
              src="/assets/logo-hellomaker.svg"
              width={800}
              height={800}
              alt="Picture of the author"
              className="drop-shadow-xl"
            />
          </div>

          <div className="prose">
            <p className="display-m text-lg">
              <strong>HelloMaker</strong> provides holistic introduction, guidance and support with{' '}
              <abbr title="STEM represents science, technology, engineering and maths. “STEAM” represents STEM plus the arts – humanities, language arts, dance, drama, music, visual arts, design and new media">
                STEAM
              </abbr>{' '}
              related disciplines. Journeying from <strong>unplugged</strong> to{' '}
              <strong>plugged-in</strong> we work to equip young people as creators not just
              consumers of digital technology.
            </p>

            <p>
              Through a Workshop Program and{' '}
              <Link href="/projects/hellomaker/makerspace">Mobile Makerspace</Link> I want to
              support young people on a journey from <strong>Explore</strong> to{' '}
              <strong>Maker</strong> to <strong>Changer.</strong> Moving from the joy of exploring
              and sense making to acquiring the mindsets and technical skills to be able to bring
              ideas to life, right through to combining knowledge and skills with critical thinking
              and the agency to positively interact with and impact the world around them.
            </p>

            <p>
              As an unschool dad I'm no expert educator<sup>*</sup> but as a{' '}
              <a href="https://mischacolley.com.au/" target="_blank">
                creative technologist
              </a>{' '}
              I'm well placed as a learning guide on this journey...
            </p>

            <p>
              I want to see young people empowered as confident makers and tinkerers who have a
              balanced relationship with digital technology and reach for tech as just one off the
              problem solving tools in their tool belt.
            </p>

            <p className="italic">
              I'm still in the process of designing this offering. The intent is to run some trial
              programs over the remainder of 2023 and kick things of fully in Feb 2024. You can read
              more about what's on offer below (and express interest) and or sign up and I'll keep
              you updated as things progress.
            </p>

            <small className="mb-4 block">
              * I hold a valid Working with Children Check and will soon have a renewed First Aid
              Certificate
            </small>

            {/* <p>
              <a
                href="https://forms.fillout.com/t/8926s4Ngckus"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Express Interest
              </a>{' '}
              OR tell me more about the ...
            </p> */}

            <NewsletterForm title="Keep me updated" />
          </div>
        </div>
        <div className="container py-12 prose">
          <h2>Workshop Program</h2>
          <p>
            Technology is all around us. Today it’s easy to think that technology just refers to
            computers and apps, but the fact is humans have been creating technology for millions of
            years. It’s important to associate "technology" with "tool" because this can help us
            place our relationship with digital technology in context.
          </p>

          <p>
            As someone who often prefers to be barefoot and as far away from any screen and signal
            as I can get, I understand that for some parents tech can often feel foreign and
            frightening. Like it represents a lot of whats wrong with our world. Depending on your
            relationship with technology there can sometimes be a tension around where it fits in
            your life and the life of your children.
          </p>

          <p>
            I find that at times I share many of those feelings AND I also remember the{' '}
            <a
              href="https://www.ted.com/talks/linda_liukas_a_delightful_way_to_teach_kids_about_computers"
              targe="_blank"
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

          <h3>Whats on offer</h3>

          <p>
            I plan to offer three different programs targeted at different age ranges and needs,
            including an <em>unplugged</em> introduction to this space.{' '}
            <strong>Foundations Workshops</strong> will be delivered as part of a series that runs
            each term and the intent is young people will work their way through the first two
            levels (<strong>Explorer</strong> & <strong>Maker</strong>) of the program somewhat
            chronologically. <strong>Knowhow Workshops</strong> will be delivered as one off
            workshops based on subject interest and demand throughout the year.{' '}
          </p>
          <p>
            The last level is the <strong>Changer</strong> level comprising a series of{' '}
            <strong>Knowwhy</strong> workshops.
          </p>
          <p>
            If you can't commit to a regular program, your looking for something a little more
            casual, or you just want time to work on projects outside of more formal structures
            thats where the <Link href="/project/hellomaker/makerspace">Mobile Makerspace</Link>{' '}
            might fit. It's intended as the natural extension of the Programs for those young people
            who really want to sink into exploring this space at a deeper level.
          </p>

          <h3>Location, Duration & Frequency</h3>

          <p>
            Workshops will be delivered at different locations around the community (TBD). At this
            stage I'm designing workshops to run for approximately 2 hours and to be delivered
            either weekly or fortnightly.
          </p>

          <h3>Cost</h3>

          <p>TBD</p>

          <p>
            <strong>
              Pilots from Term 4 2023, program begins Feb 2024. Express Interest below.
            </strong>
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="prose">
          <h2 className="">Foundations Workshop (Series)</h2>

          <p>
            Both HelloExplorer (our unplugged offering) and HelloMaker have a Foundations level
            delivered as part of a series. At this level the focus is on exploring the origins of
            modern tech. Sense making through experimenting and trying lots of different things.
            Where all Explorers here.
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
