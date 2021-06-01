import MovieDetails from './MovieDetails'
import { render, screen } from '@testing-library/react'

test('renders information about the movie', () => {
  const fakeMovie = {
    title: 'Avengers Endgame',
    releaseDate: '2019-05-12',
    genres: [{ id: 1, name: 'Action' }],
    duration: 110,
    score: 7.7,
    voteCount: 2000,
    synopsis: 'Lorem ipsum dolor sit amet'
  }

  render(<MovieDetails {...fakeMovie} />)

  expect(
    screen.getByRole('heading', { name: `${fakeMovie.title} (2019)` })
  ).toBeInTheDocument()
  expect(screen.getByText('1h 50m')).toBeInTheDocument()
  expect(screen.getByText('Action')).toBeInTheDocument()
  expect(screen.getByText('7.7')).toBeInTheDocument()
  expect(screen.getByText('(2000 votes)')).toBeInTheDocument()
  expect(screen.getByText(fakeMovie.synopsis)).toBeInTheDocument()
})
