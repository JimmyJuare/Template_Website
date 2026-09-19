import { useState } from 'react'
import Button from '../Button/Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true) }
  if (submitted) return <div className="form-success"><span className="eyebrow">Message received</span><h3 className="display">Thanks for reaching out.</h3><p>This starter form is ready to connect to your preferred form service.</p></div>
  return <form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Tell us a little about your project<textarea name="message" rows="5" required placeholder="What are you imagining?" /></label><Button type="submit">Send inquiry</Button></form>
}