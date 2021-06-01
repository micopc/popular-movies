import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

export interface LinkProps
  extends NextLinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  href: string

  className?: string

  external?: boolean

  target?: '_self' | '_blank' | '_parent' | '_top'

  children: ReactNode
}

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}
