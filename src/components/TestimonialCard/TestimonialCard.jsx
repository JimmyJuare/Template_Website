export default function TestimonialCard({ testimonial }) {
  return <figure className="testimonial"><div className="quote-mark">“</div><blockquote>{testimonial.testimonial}</blockquote><figcaption><strong>{testimonial.name}</strong><span>{testimonial.role}</span></figcaption></figure>
}