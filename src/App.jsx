import { useEffect, useReducer, useRef } from 'react'
import { formReducer, initialState, LAST_STEP, THANK_YOU_STEP } from './formReducer'
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import StepNav from './components/StepNav'

export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { step, errors } = state

  const headingRef = useRef(null)
  const formRef = useRef(null)
  const isFirstRender = useRef(true)
  const submitCount = useRef(0)


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [step])

  useEffect(() => {
    if (!submitCount.current || !Object.keys(errors).length) return
    formRef.current?.querySelector('[aria-invalid="true"]')?.focus()
  }, [errors])

  const handleSubmit = (event) => {
    event.preventDefault()
    submitCount.current += 1
    dispatch({ type: 'NEXT_STEP' })
  }

  const stepProps = { state, dispatch, headingRef }

  return (
    <>
      <div className="app">
        <Sidebar currentStep={Math.min(step, LAST_STEP)} />

        <main className="content">
          {step === THANK_YOU_STEP ? (
            <ThankYou headingRef={headingRef} />
          ) : (
            <form ref={formRef} className="form" noValidate onSubmit={handleSubmit}>
              {step === 1 && <PersonalInfo {...stepProps} />}
              {step === 2 && <SelectPlan {...stepProps} />}
              {step === 3 && <AddOns {...stepProps} />}
              {step === 4 && <Summary {...stepProps} />}

              <StepNav
                step={step}
                isLast={step === LAST_STEP}
                onBack={() => dispatch({ type: 'PREV_STEP' })}
              />
            </form>
          )}
        </main>
      </div>
    </>
  )
}
