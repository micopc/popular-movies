import Layout from './Layout'
import { render, screen } from '@testing-library/react'

test('renders the footer an any content that is passed as children', () => {
  render(<Layout>Children</Layout>)

  expect(screen.getByRole('main')).toHaveTextContent('Children')
  expect(screen.getByText('Made by Gabriel Peña')).toBeInTheDocument()
})
