import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import CTA from '../../components/CTA/CTA'
import { siteData } from '../../data/siteData'

export default function Home() {
  useEffect(() => { document.title = `${siteData.company.name} | ${siteData.company.tagline}` }, [])
  return <>
    <Hero title="Spaces with a sense of place." subtitle={siteData.company.description} 
    backgroundImage={siteData.projects[0].image} 
    primaryCta={{ label: 'Explore our work', to: '/projects' }} 
    secondaryCta={{ label: 'Meet the studio', to: '/about' }} />
    <section className="section-pad">
      <div className="container intro-grid">
        <SectionHeading eyebrow="A considered approach" title="Built around how you live." />
        <p className="intro-copy">
          We create <strong>landscapes, gardens, and outdoor rooms</strong> 
          with a clear point of view and a practical plan. Every decision is made to feel 
          good today and hold up beautifully over time.
        </p>
      </div>
    </section>
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHeading eyebrow="What we do" title="From first sketch to final detail." description="A focused set of services for creating spaces that feel effortless to use and distinctly yours." />
        <div className="services-grid">
          {siteData.services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
    <section className="section-pad dark-band"><div className="container">
      <SectionHeading eyebrow="Selected work" title="A few places we’ve helped take shape." />
      <div className="projects-grid">
        {siteData.projects.slice(0, 2).map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} />)}
      </div>
    </div>
    </section>
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Kind words" title="The best part of the work is living with it." />
        <div className="testimonials">{siteData.testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
        </div>
      </div>
    </section>
    <CTA heading="Ready to make more room for the good stuff?"
     description="Tell us what you’re imagining. We’ll help you find the next right step." />
  </>
}