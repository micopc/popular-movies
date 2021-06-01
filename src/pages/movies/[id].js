import { getMovieDetails } from '@api'
import { MovieDetails, MovieHero } from '@movies'

export async function getServerSideProps({ params }) {
  const data = await getMovieDetails(params.id)

  return {
    props: {
      movie: data
    }
  }
}

export default function MoviePage(props) {
  const { movie } = props

  return (
    <>
      <MovieHero image={movie.backdrop_path} />

      <MovieDetails
        title={movie.original_title}
        releaseDate={movie.release_date}
        genres={movie.genres}
        duration={movie.runtime}
        score={movie.vote_average}
        voteCount={movie.vote_count}
        synopsis={movie.overview}
      />
    </>
  )
}
