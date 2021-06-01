import { GetServerSideProps } from 'next'
import { getMovieDetails, Movie } from '@api'
import { MovieDetails, MovieHero } from '@movies'

interface MoviePageProps {
  movie: Movie
}

export const getServerSideProps: GetServerSideProps<
  MoviePageProps,
  { id: string }
> = async ({ params }) => {
  const data = await getMovieDetails(params!.id)

  return {
    props: {
      movie: data
    }
  }
}

export default function MoviePage(props: MoviePageProps) {
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
