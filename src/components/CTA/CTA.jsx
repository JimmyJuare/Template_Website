import Button from '../Button/Button'

export default function CTA({ heading, description, buttonText = 'Get in touch', buttonDestination = '/contact' }) {
  return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">Your next chapter</span><h2 className="display">{heading}</h2><p>{description}</p></div><Button to={buttonDestination}>{buttonText}</Button></div></section>
}