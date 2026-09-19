import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', type = 'button' }) {
  const className = `button button-${variant}`
  if (to) return <Link className={className} to={to}>{children}<ArrowUpRight size={17} /></Link>
  return <button className={className} type={type}>{children}<ArrowUpRight size={17} /></button>
}