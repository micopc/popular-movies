import { SVGProps } from 'react'

export type SvgWrapperProps = Omit<SVGProps<SVGSVGElement>, 'fill' | 'viewBox'>

export default function SvgWrapper({ children, ...props }: SvgWrapperProps) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20">
      {children}
    </svg>
  )
}
