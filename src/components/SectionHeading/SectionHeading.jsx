export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return <div className={`section-heading section-heading-${align}`}><span className="eyebrow">{eyebrow}</span><h2 className="display">{title}</h2>{description && <p>{description}</p>}</div>
}