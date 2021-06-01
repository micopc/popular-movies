import Link from './Link'
import { render, screen } from '@testing-library/react'

test('renders the footer an any content that is passed as children', () => {
  render(<Link href="/a/b/c">Children</Link>)

  const link = screen.getByRole('link', { name: 'Children' })

  expect(link).toHaveAttribute('href', '/a/b/c')
})
