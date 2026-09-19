import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, featured = false }) {
  return <article className={`project-card ${featured ? 'project-card-featured' : ''}`}><Link to={`/projects/${project.id}`}><img src={project.image} alt={project.title} /><div className="project-info"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.location}</p></div><ArrowUpRight size={22} /></div></Link></article>
}