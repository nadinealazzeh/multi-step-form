export default function StepHeader({ title, description, headingRef }) {
  return (
    <header className="step-header">
      <h1 className="step-header__title" ref={headingRef} tabIndex={-1}>
        {title}
      </h1>
      {description && <p className="step-header__description">{description}</p>}
    </header>
  )
}
