import Button from '../Button/Button'

export default function Hero({ title, subtitle, backgroundImage, primaryCta, secondaryCta }) {
  return <section className="hero" style={{ '--hero-image': `url(${backgroundImage})` }}><div className="hero-overlay" /><div className="container hero-content reveal"><span className="eyebrow">Design · Build · Belong</span><h1 className="display">{title}</h1><p>{subtitle}</p><div className="hero-actions"><Button to={primaryCta.to}>{primaryCta.label}</Button><Button to={secondaryCta.to} variant="light">{secondaryCta.label}</Button></div></div><div className="hero-caption">Thoughtful work, made in Oregon <span>Scroll to explore ↓</span></div></section>
}