import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import workshopsFoundationsData from '@/data/workshopsFoundationsData'
import workshopsKnowwhyData from '@/data/workshopsKnowwhyData'
import workshopsParentsData from '@/data/workshopsParentsData'
import CardWorkshop from '@/components/CardWorkshop'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 md:flex items-center">
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

            {/* <Link href="/program" className="btn">
              See Program
            </Link> */}

            <p>
              As an unschool dad I'm no expert educator<sup>*</sup> but as a{' '}
              <a href="https://mischacolley.com.au/" target="_blank">
                creative technologist
              </a>{' '}
              with more than a decade in tech, I'm well placed as a learning guide on this
              journey...
            </p>

            <p>
              I want to see young people empowered as confident makers and tinkerers who have a
              balanced relationship with digital technology and reach for tech as just one off the
              problem solving tools in their tool belt. I'm designing the HelloMaker learning
              community to do just that.
            </p>

            <p>
              The <Link href="/program">Program</Link> and{' '}
              <Link href="/makerspace">Mobile Makerspace</Link> can be delivered to young people in
              a variety of contexts and formats, including:
            </p>

            <ul>
              <li>a face-to-face homeschool program</li>
              <li>one-on-one & group mentoring</li>
              <li>workshops at schools, festivals & community events</li>
              <li>as an online experience</li>
            </ul>

            <p>
              As it evolves, the intent is for HelloMaker to take young people on a journey from{' '}
              <Link href="/program/helloexplorer">Explorer</Link> to{' '}
              <Link href="/program/hellomaker">Maker</Link> to{' '}
              <Link href="/program/hellochanger">Changer</Link>.
            </p>
            <p>
              Moving from the joy of exploring and sense making to acquiring the mindsets and
              technical skills to be able to bring ideas to life, right through to combining
              knowledge and skills with critical thinking and the agency to positively interact with
              and impact the world around them.
            </p>

            <p>
              The intent is to do this while supporting{' '}
              <Link href="/program/helloparent">parents</Link> along the way.
            </p>

            <small className="mb-8 block">
              * I come from a long line of teachers, have worked as a mentor with young people
              previously and I hold a valid Working with Children Check and a First Aid Certificate
            </small>

            {/* <NewsletterForm title="Keep me updated" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
