import StepHeader from './StepHeader'
import { PLANS, formatPrice, priceOf } from '../data'

export default function SelectPlan({ state, dispatch, headingRef }) {
  const { plan, yearly, errors } = state

  return (
    <section className="step">
      <StepHeader
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
        headingRef={headingRef}
      />

      <fieldset className="plans" aria-describedby="plan-error">
        <legend className="visually-hidden">Plan</legend>
        {PLANS.map((p, index) => (
          <label className="plan" key={p.id}>
            <input
              className="visually-hidden"
              type="radio"
              name="plan"
              value={p.id}
              checked={plan === p.id}
              onChange={() => dispatch({ type: 'SELECT_PLAN', plan: p.id })}
              aria-invalid={errors.plan && index === 0 ? 'true' : undefined}
            />
            <img className="plan__icon" src={p.icon} alt="" width="40" height="40" />
            <span className="plan__text">
              <span className="plan__name">{p.name}</span>
              <span className="plan__price">{formatPrice(priceOf(p, yearly), yearly)}</span>
              {yearly && <span className="plan__promo">2 months free</span>}
            </span>
          </label>
        ))}
      </fieldset>
      <p className="plans__error" id="plan-error" aria-live="polite">
        {errors.plan}
      </p>

      <div className="billing">
        <button
          type="button"
          className={`billing__option${!yearly ? ' is-active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_BILLING', yearly: false })}
          tabIndex={-1}
          aria-hidden="true"
        >
          Monthly
        </button>
        <button
          type="button"
          role="switch"
          className="billing__switch"
          aria-checked={yearly}
          aria-label="Yearly billing"
          onClick={() => dispatch({ type: 'TOGGLE_BILLING' })}
        >
          <span className="billing__knob" />
        </button>
        <button
          type="button"
          className={`billing__option${yearly ? ' is-active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_BILLING', yearly: true })}
          tabIndex={-1}
          aria-hidden="true"
        >
          Yearly
        </button>
      </div>
    </section>
  )
}
