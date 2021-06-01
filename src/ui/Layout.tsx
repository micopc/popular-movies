import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto sm:px-8">
      <main>{children}</main>

      <footer className="px-4 py-4 border-t border-gray-300">
        <p className="text-xs text-center">Made by Gabriel Peña</p>
      </footer>
    </div>
  )
}
