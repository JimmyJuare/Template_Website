import { useEffect } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../../components/ContactForm/ContactForm'
import { siteData } from '../../data/siteData'

export default function Contact() {
  useEffect(() => { document.title = `Contact | ${siteData.company.name}` }, [])
  return <><section className="page-intro"><div className="container"><span className="eyebrow">Start a conversation</span><h1 className="display">Tell us what you’re imagining.</h1><p>Good projects begin with a little curiosity. Share a few details and we’ll be in touch.</p></div></section><section className="section-pad"><div className="container contact-grid"><div className="contact-details"><div className="contact-detail"><span><Mail size={14} /> Email</span><a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a></div><div className="contact-detail"><span><Phone size={14} /> Phone</span><a href={`tel:${siteData.company.phone}`}>{siteData.company.phone}</a></div><div className="contact-detail"><span><MapPin size={14} /> Studio</span><p>{siteData.company.address}<br />{siteData.company.hours}</p></div></div><ContactForm /></div></section></>
}