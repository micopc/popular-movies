import { formatMovieDuration } from './utils'
import { getYearFromDate } from '@common'
import { Star } from '@ui/icons'

interface MovieDetailsProps {
  title: string
  releaseDate: string
  genres: Array<{ id: number; name: string }>
  duration: number
  score: number
  voteCount: number
  synopsis: string
}

export default function MovieDetails(props: MovieDetailsProps) {
  const { title, releaseDate, genres, duration, score, voteCount, synopsis } =
    props

  const releaseYear = getYearFromDate(releaseDate)

  return (
    <section className="px-6 py-6">
      <h1 className="text-2xl font-bold mb-2">
        {title} {releaseYear ? `(${releaseYear})` : null}
      </h1>

      <div className="text-sm mb-4">
        <div>{genres.map((genre) => genre.name).join(', ')}</div>
        <div>{formatMovieDuration(duration)}</div>
      </div>

      <div className="mb-6">
        <div className="flex">
          <Star className="w-5 text-yellow-300 mr-1" />
          <div className="text-sm">
            {score} <span className="text-gray-500">({voteCount} votes)</span>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">Synopsis</h2>
      <p>{synopsis}</p>
    </section>
  )
}
