import StepHeader from './StepHeader'
import { ADDONS, PLANS, formatPrice, priceOf } from '../data'

export default function Summary({ state, dispatch, headingRef }) {
  const { plan: planId, yearly, addons: addonIds } = state

  const plan = PLANS.find((p) => p.id === planId)
  const addons = ADDONS.filter((a) => addonIds.includes(a.id))
  const total =
    priceOf(plan, yearly) + addons.reduce((sum, a) => sum + priceOf(a, yearly), 0)

  return (
    <section className="step">
      <StepHeader
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
        headingRef={headingRef}
      />

      <div className="summary">
        <div className="summary__plan">
          <div>
            <p className="summary__plan-name">
              {plan.name} ({yearly ? 'Yearly' : 'Monthly'})
            </p>
            <button
              type="button"
              className="summary__change"
              onClick={() => dispatch({ type: 'GO_TO_STEP', step: 2 })}
            >
              Change<span className="visually-hidden"> plan</span>
            </button>
          </div>
          <p className="summary__plan-price">{formatPrice(priceOf(plan, yearly), yearly)}</p>
        </div>

        {addons.length > 0 && (
          <ul className="summary__addons">
            {addons.map((a) => (
              <li className="summary__addon" key={a.id}>
                <span>{a.name}</span>
                <span className="summary__addon-price">
                  {formatPrice(priceOf(a, yearly), yearly, { plus: true })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="total">
        <span className="total__label">Total (per {yearly ? 'year' : 'month'})</span>
        <span className="total__price">{formatPrice(total, yearly, { plus: true })}</span>
      </p>
    </section>
  )
}
