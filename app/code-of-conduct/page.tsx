import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Code of Conduct' })

export default function CodeOfConduct() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 prose">
          <h1 className="display-xl">Code of Conduct</h1>

          <p>Lorem ispum:</p>
        </div>
      </div>
    </>
  )
}
