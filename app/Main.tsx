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

            <p>
              Through a learning community that offers Workshop Programs and a{' '}
              <Link href="/projects/hellomaker/makerspace">Mobile Makerspace</Link> we support young
              people on a journey from <strong>Explore</strong> to <strong>Maker</strong> to{' '}
              <strong>Changer.</strong> Moving from the joy of exploring and sense making to
              acquiring the mindsets and technical skills to be able to bring ideas to life, right
              through to combining knowledge and skills with critical thinking and the agency to
              positively interact with and impact the world around them.
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
      </div>
    </>
  )
}
