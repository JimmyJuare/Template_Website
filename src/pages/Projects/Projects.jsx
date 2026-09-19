import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import CTA from '../../components/CTA/CTA'
import { siteData } from '../../data/siteData'

function ProjectDetail({ project }) { return <><section className="page-intro"><div className="container"><span className="eyebrow">{project.category}</span><h1 className="display">{project.title}</h1><p>{project.location}</p></div></section><section className="section-pad"><div className="container about-grid"><img src={project.image} alt={project.title} /><div className="about-copy"><span className="eyebrow">The story</span><h2 className="display">Designed for the way this family spends time outside.</h2><p>{project.description}</p><Link className="button button-primary" to="/contact">Start a similar project <span>↗</span></Link></div></div></section><CTA heading="Your space could be next." description="Every project begins with a good conversation." /></> }

export default function Projects() {
  const { projectId } = useParams()
  const project = siteData.projects.find((item) => item.id === projectId)
  useEffect(() => { document.title = project ? `${project.title} | ${siteData.company.name}` : `Projects | ${siteData.company.name}` }, [project])
  if (project) return <ProjectDetail project={project} />
  return <><section className="page-intro"><div className="container"><span className="eyebrow">Selected work</span><h1 className="display">Places made to be lived in.</h1><p>A small selection of projects across Portland and the surrounding valley.</p></div></section><section className="section-pad"><div className="container"><div className="projects-grid">{siteData.projects.map((item, index) => <ProjectCard key={item.id} project={item} featured={index === 0} />)}</div></div></section><CTA heading="Let’s make something that lasts." description="Bring us your ideas, your questions, or just a photo of the space." /></>
}