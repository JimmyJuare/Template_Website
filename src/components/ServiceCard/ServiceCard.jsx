import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return <article className="service-card"><img src={service.image} alt="" /><div className="service-card-body"><div className="icon-wrap"><Icon size={21} /></div><h3>{service.title}</h3><p>{service.description}</p><Link to="/services" aria-label={`Learn more about ${service.title}`}><ArrowUpRight size={20} /></Link></div></article>
}