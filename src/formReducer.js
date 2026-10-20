export const LAST_STEP = 4
export const THANK_YOU_STEP = 5

export const initialState = {
  step: 1,
  info: { name: '', email: '', phone: '' },
  plan: null,
  yearly: false,
  addons: [],
  errors: {},
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[\d\s\-().]{7,20}$/

export function validateStep(state) {
  const errors = {}

  if (state.step === 1) {
    const { name, email, phone } = state.info
    if (!name.trim()) errors.name = 'This field is required'

    if (!email.trim()) errors.email = 'This field is required'
    else if (!EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email address'

    if (!phone.trim()) errors.phone = 'This field is required'
    else if (!PHONE_RE.test(phone.trim()) || phone.replace(/\D/g, '').length < 7)
      errors.phone = 'Enter a valid phone number'
  }

  if (state.step === 2 && !state.plan) {
    errors.plan = 'Please select a plan'
  }

  return errors
}

export function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_INFO': {
      const { field, value } = action
      const { [field]: _removed, ...errors } = state.errors
      return { ...state, info: { ...state.info, [field]: value }, errors }
    }

    case 'SELECT_PLAN': {
      const { plan: _removed, ...errors } = state.errors
      return { ...state, plan: action.plan, errors }
    }

    case 'TOGGLE_BILLING':
      return { ...state, yearly: action.yearly ?? !state.yearly }

    case 'TOGGLE_ADDON': {
      const addons = state.addons.includes(action.id)
        ? state.addons.filter((id) => id !== action.id)
        : [...state.addons, action.id]
      return { ...state, addons }
    }

    case 'NEXT_STEP': {
      const errors = validateStep(state)
      if (Object.keys(errors).length) return { ...state, errors }
      return { ...state, errors: {}, step: Math.min(state.step + 1, THANK_YOU_STEP) }
    }

    case 'PREV_STEP':
      return { ...state, errors: {}, step: Math.max(state.step - 1, 1) }

    case 'GO_TO_STEP':
      return { ...state, errors: {}, step: action.step }

    default:
      return state
  }
}
