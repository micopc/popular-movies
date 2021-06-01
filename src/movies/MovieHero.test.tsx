import MovieHero from './MovieHero'
import { render, screen } from '@testing-library/react'

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

test('renders an image with the original size', () => {
  const fakeImagePath = 'abcd1234'

  render(<MovieHero image={fakeImagePath} />)

  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    expect.stringContaining(`/original/${fakeImagePath}`)
  )
})
