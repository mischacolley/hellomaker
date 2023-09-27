import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="prose mx-auto">
          <p>
            Hi 👋🏻, I'm <strong>Mischa Colley</strong>. For more than 15 years I've been casually
            exploring the evolving landscape of education, schooling and learning through an
            alternative lens. You can read <Link href="/about">more about me here</Link>.
          </p>

          <p>
            <strong>
              I support learning that takes place beyond traditional educational institutions via:
            </strong>
          </p>

          <ul>
            <li>
              <strong>
                <Link href="/projects/learning-in-between">Learning In-between</Link>
              </strong>{' '}
              - A podcast exploring how learning takes place in the spaces in-between. It explores
              the stories of learners and learning guides from within various communities and has a
              focus on self directed learning and parenting off the beaten path.
            </li>

            <li>
              <strong>
                <Link href="/projects/hellomaker">HelloMaker</Link>
              </strong>{' '}
              - A digital technology offering for the homeschooling (unschooling, worldscholing et
              al) community in the form of a workshop program and mobile makerspace
            </li>

            <li>
              EdTech consulting. <a href="mailto:mischa@opencampusproject.com">Reach out</a> if
              you'd like my help with a project.
            </li>
          </ul>

          <p>
            As a parent of two unschooled children my <Link href="/ideas">ideas</Link> are around
            helping make alternative learning pathways more sustainable for all involved supported
            by the appropriate use of unobtrusive technology.
          </p>

          <p>You can follow along below while I continue to explore this space ...</p>
        </div>
        {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title="Open Campus Project News" />
        </div>
      )}
    </>
  )
}
