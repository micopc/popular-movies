export default function SvgWrapper({ children, ...props }) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
