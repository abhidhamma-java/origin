import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage, type }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            이전페이지
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/${type}/` : `/${type}/page/${currentPage - 1}`}>
            <button rel="previous">이전페이지</button>
          </Link>
        )}
        <span>
          {totalPages} 페이지 중 {currentPage} 페이지
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            다음페이지
          </button>
        )}
        {nextPage && (
          <Link href={`/${type}/page/${currentPage + 1}`}>
            <button rel="next">다음페이지</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
