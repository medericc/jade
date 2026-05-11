import Link from 'next/link'
import './button.css'

interface Props {
  href: string
  children: React.ReactNode

  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false
}: Props) {
  return (
    <Link
      href={href}
      className={`
        btn
        btn-${variant}
        btn-${size}
        ${fullWidth ? 'btn-full' : ''}
      `}
    >
      <span>{children}</span>
    </Link>
  )
}