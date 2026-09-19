import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import CTA from '../../components/CTA/CTA'
import { siteData } from '../../data/siteData'

export default function Services() {
  useEffect(() => { document.title = `Services | ${siteData.company.name}` }, [])
  return <><section className="page-intro"><div className="container"><span className="eyebrow">What we do</span><h1 className="display">A clear plan for a more beautiful everyday.</h1><p>Thoughtful design and careful execution, tailored to your property, priorities, and pace.</p></div></section><section className="section-pad"><div className="container"><SectionHeading eyebrow="Our services" title="The right level of help for where you are." /><div className="services-grid">{siteData.services.map((service) => <ServiceCard key={service.title} service={service} />)}</div></div></section><CTA heading="Have a project in mind?" description="Start with a conversation about the space you have and the life you want it to hold." /></>
}