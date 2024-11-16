import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'HelloMaker' })

export default function HelloMaker() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <nav>
            <Link href="/projects/hellomaker">Projects | HelloMaker</Link>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            HelloMaker
          </h1>
          <p>
            <em>
              For 8+<sup>*</sup> yo who possibly have some prior knowledge in digital technology or
              with expressed interest / an established DIY/Maker attitude.
            </em>
          </p>

          <p>
            Technology timelines, inventions & ideas will be explored to make sense of where we are
            with digital tech today. Overtime<sup>**</sup> we’ll introduce the tools, skill sets,
            concepts & mindsets needed to navigate and thrive in a digital world as a Maker.
          </p>

          <p>
            Building on the foundations from HelloExplorer, either learnt there or picked up
            elsewhere we'll continue to focus on origin stories and exploring the evolution of
            technology via human centered topics like those listed below. We'll move at a pace
            <sup>**</sup> that reflects where the group is as a whole, exploring the inventions,
            inventors and ideas that have got us to where we are now with digital technology.
          </p>

          <p>
            <em>
              i.e. Think Reading the Stars to the invention of the Compass to GPS and the role of
              Satellites.
            </em>
          </p>

          <p>
            Thinking will be paired with doing in a very practical hands on way to prepare these
            young people for further self directed learning on their own, via our Makerspace or
            follow up Knowhow Workshops.
          </p>

          <ul>
            <li>Evolving Tools (industrial revolution)</li>
            <li>Power & Energy</li>
            <li>Food (hunting & gathering)</li>
            <li>Shelter & Clothing (weaving & knitting)</li>
            <li>Communication</li>
            <li>Travel & Transport</li>
            <li>What screens want</li>
            <li>Storing numbers</li>
            <li>Retrieving sounds</li>
          </ul>

          <Form />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </>
  )
}
