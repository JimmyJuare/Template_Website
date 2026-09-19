import { useEffect } from 'react'
import CTA from '../../components/CTA/CTA'
import { siteData } from '../../data/siteData'

export default function About() {
  useEffect(() => { document.title = `About | ${siteData.company.name}` }, [])
  return <><section className="page-intro"><div className="container"><span className="eyebrow">The studio</span><h1 className="display">Good work starts with paying attention.</h1><p>{siteData.company.tagline}</p></div></section><section className="section-pad"><div className="container about-grid"><img src={siteData.about.image} alt="A Northline Studio garden project" /><div className="about-copy"><span className="eyebrow">Our point of view</span><h2 className="display">Small by design. Thorough by nature.</h2>{siteData.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section><CTA heading="Let’s talk about your place." description="We’re currently booking projects for the coming season." /></>
}