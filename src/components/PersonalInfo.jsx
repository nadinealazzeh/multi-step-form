import StepHeader from './StepHeader'

const FIELDS = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    autoComplete: 'email',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
    autoComplete: 'tel',
  },
]

export default function PersonalInfo({ state, dispatch, headingRef }) {
  const { info, errors } = state

  return (
    <section className="step">
      <StepHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
        headingRef={headingRef}
      />

      <div className="fields">
        {FIELDS.map(({ id, label, ...inputProps }) => {
          const error = errors[id]
          const errorId = `${id}-error`
          return (
            <div className={`field${error ? ' has-error' : ''}`} key={id}>
              <div className="field__top">
                <label className="field__label" htmlFor={id}>
                  {label}
                </label>
                <span className="field__error" id={errorId} aria-live="polite">
                  {error}
                </span>
              </div>
              <input
                className="field__input"
                id={id}
                name={id}
                value={info[id]}
                onChange={(e) =>
                  dispatch({ type: 'UPDATE_INFO', field: id, value: e.target.value })
                }
                required
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={errorId}
                {...inputProps}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
