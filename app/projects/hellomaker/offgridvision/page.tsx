import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Off-Grid Vision' })

export default function OffGridVision() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <nav>
            <Link href="/projects/hellomaker">Projects | HelloMaker</Link>
          </nav>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Off Grid Vision for the Mobile Makerspace
          </h1>

          <p>Lorem</p>
        </div>
      </div>
    </>
  )
}
