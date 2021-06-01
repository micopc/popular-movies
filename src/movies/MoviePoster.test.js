import MoviePoster from './MoviePoster'
import { render, screen } from '@testing-library/react'

test('renders a link to the movie', () => {
  const fakeMovie = {
    id: 1234,
    title: 'Avengers Endgame',
    image: 'abcd1234'
  }

  render(<MoviePoster {...fakeMovie} />)

  const link = screen.getByRole('link', { name: fakeMovie.title })
  const poster = screen.getByRole('img', { name: fakeMovie.title })

  expect(link).toContainElement(poster)
  expect(link).toHaveAttribute('href', `/movies/${fakeMovie.id}`)
  expect(poster).toHaveAttribute(
    'src',
    expect.stringContaining(`/w185/${fakeMovie.image}`)
  )
})
