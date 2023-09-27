import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Ideas' })

export default function Ideas() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <h1 className="display-xl">Ideas</h1>

          <p>I'm thinking about developing:</p>

          <ul>
            <li>A course for parents around confident and conscious technology use</li>

            <li>
              A platform offering a directory of learning opportunities capable of connecting
              learners (individual's and groups) with those providing these opportunities in both
              local (often face-to-face) and global (sometimes virtual) contexts
            </li>

            <li>
              Ways to construct persistent and evolving personal learning plans based on these
              opportunities that can be leveraged by learners, their families and their learning
              guides to meet desired goals
            </li>

            <li>
              Mechanisms to unlock access to spaces (i.e. a local mechanics workshop or commercial
              kitchen etc) and people (matching of interests with expertise) based on demonstration
              of acquired knowledge
            </li>

            <li>
              Methods to support space shifting and sharing so previously locked down campuses (i.e.
              what happens in schools after hours?) can be leveraged by more learners
            </li>

            <li>
              Ways to document and share acquired knowledge that's owned by and stays with the
              learner thought their life long learning journey
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
