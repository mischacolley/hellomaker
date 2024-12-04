import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'HelloExplorer' })

export default function HelloExplorer() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <nav>
            <Link href="/program">Programs | HelloMaker</Link>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            HelloExplorer
          </h1>
          <p>
            <em>
              For 6-10<sup>*</sup>yo who have shown interest in digital technology and or you want
              them to have an unplugged intro to this space
            </em>
          </p>

          <p>
            Without touching a computer, or even talking about code, we'll unpack the chronological
            origins of modern tech. This lays the ground work for deep understanding of the complex
            technological world we live in today.
          </p>

          <p>
            I'm in no rush to teach my kids to code (or yours) but I also know that handcrafts (like
            knitting) are the basis of binary code, and that computational thinking starts with
            looking for patterns, thinking outside the box, creating step-by-step plans and learning
            how to break big problems into smaller ones.
          </p>

          <p>We'll start to explore this world from within much larger human topics like:</p>

          <ul>
            <li>Early Tools (stone age technology)</li>
            <li>Power & Energy</li>
            <li>Food (hunting & gathering)</li>
            <li>Shelter & Clothing (weaving & knitting)</li>
            <li>Communication</li>
            <li>Wayfinding</li>
            <li>Seeing Colour</li>
            <li>Keeping Count</li>
            <li>Making Sounds</li>
          </ul>

          <Form
            buttonText="Express Interest"
            filloutId="8926s4Ngckus"
            parameters={{ offer: 'Workshop Program', workshop: 'HelloExplorer' }}
          />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </>
  )
}
