import { getPopularMovies } from '@api'
import { MoviePoster } from '@movies'

export async function getServerSideProps() {
  const data = await getPopularMovies()

  const { results, page, total_pages } = data

  return {
    props: {
      movies: results,
      page: page,
      totalPages: total_pages
    }
  }
}

export default function Home(props) {
  const { movies } = props

  return (
    <>
      <header className="px-4 py-6">
        <h1 className="text-xl font-bold">Popular Movies</h1>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            image={movie.poster_path}
          />
        ))}
      </div>
    </>
  )
}
