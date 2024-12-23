import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Form from '@/components/Form'

export const metadata = genPageMetadata({ title: 'HelloParent' })

export default function HelloParent() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <nav>
            <Link href="/program">Programs | HelloParent</Link>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            HelloParent
          </h1>

          <p>
            Not every young person and family will use, value or understand digital technologies in
            the same way and thats ok. Adult relationships with digital technology can depend on a
            range of factors like age and access but it also depends on views formed around
            technology use through our lived experience and worldview. This is important because our
            relationships with technology shape those of the young people in our lives.
          </p>

          <p>
            I find that people often talk about technology in a similar way to creativity or singing
            by saying things like, <em>“I’m not technical”</em>.
          </p>
          <p>
            What is often being referred to here is a level of familiarity, comfort or desire to use
            digital technology, not actual ability. This is important because this feeling can often
            translate into technology avoidance instead of empowerment.
          </p>
          <p>
            When it comes to our kids I think most parents want their children to feel empowered. As
            a parent one of the best ways to ensure that happens with technology is to level up
            yourself.
          </p>

          <p>
            This doesn't mean you need to learn to code (unless you want to) but it does mean you
            should have a clear understanding of what's possible, and what the opportunities and
            dangers are so you can be of most support.
          </p>

          <p>With that in mind here are some of the things I'd like to offer parents.</p>

          <ul>
            <li>One-on-One & Group Coaching</li>
            <li>The Terrible Ones & Zeros</li>
            <li>Resources for Parents</li>
          </ul>

          <Form
            buttonText="Express Interest"
            filloutId="8926s4Ngckus"
            parameters={{ parent: 'true' }}
          />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap"></div>
        </div>
      </div>
    </>
  )
}
