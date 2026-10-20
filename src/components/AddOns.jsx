import StepHeader from './StepHeader'
import { ADDONS, formatPrice, priceOf } from '../data'

export default function AddOns({ state, dispatch, headingRef }) {
  const { addons, yearly } = state

  return (
    <section className="step">
      <StepHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
        headingRef={headingRef}
      />

      <fieldset className="addons">
        <legend className="visually-hidden">Add-ons (optional)</legend>
        {ADDONS.map((addon) => (
          <label className="addon" key={addon.id}>
            <input
              className="addon__checkbox"
              type="checkbox"
              name="addons"
              value={addon.id}
              checked={addons.includes(addon.id)}
              onChange={() => dispatch({ type: 'TOGGLE_ADDON', id: addon.id })}
              aria-describedby={`${addon.id}-desc`}
            />
            <span className="addon__text">
              <span className="addon__name">{addon.name}</span>
              <span className="addon__description" id={`${addon.id}-desc`}>
                {addon.description}
              </span>
            </span>
            <span className="addon__price">
              {formatPrice(priceOf(addon, yearly), yearly, { plus: true })}
            </span>
          </label>
        ))}
      </fieldset>
    </section>
  )
}
