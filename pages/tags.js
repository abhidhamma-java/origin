import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const springTags = await getAllTags('spring')
  const reactTags = await getAllTags('react')
  const algorithmTags = await getAllTags('algorithm')
  const blogTags = await getAllTags('blog')

  const tags = [
    ...Object.entries(springTags),
    ...Object.entries(reactTags),
    ...Object.entries(algorithmTags),
    ...Object.entries(blogTags),
  ]

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = tags.sort()

  for (let i = 1; i < sortedTags.length; i++) {
    if (sortedTags[i][0] === sortedTags[i - 1][0]) {
      sortedTags[i - 1][1] += sortedTags[i][1]
      sortedTags.splice(i, 1)
    }
  }
  sortedTags.sort((a, b) => b[1] - a[1])

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t[0]} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                >
                  {` (${t[1]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
