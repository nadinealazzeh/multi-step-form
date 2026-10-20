export default function StepNav({ step, isLast, onBack }) {
  return (
    <div className="step-nav">
      {step > 1 && (
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          Go Back
        </button>
      )}
      <button type="submit" className={`btn ${isLast ? 'btn--confirm' : 'btn--primary'}`}>
        {isLast ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  )
}
