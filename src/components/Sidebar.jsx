import { STEPS } from '../data'

export default function Sidebar({ currentStep }) {
  return (
    <aside className="sidebar">
      <nav aria-label="Form progress">
        <ol className="steps">
          {STEPS.map(({ number, label }) => {
            const isCurrent = number === currentStep
            return (
              <li
                key={number}
                className={`steps__item${isCurrent ? ' is-current' : ''}`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span className="steps__number" aria-hidden="true">
                  {number}
                </span>
                <span className="steps__text">
                  <span className="steps__eyebrow">Step {number}</span>
                  <span className="steps__label">{label}</span>
                </span>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}
