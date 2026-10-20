import thankYouIcon from '../assets/images/icon-thank-you.svg'

export default function ThankYou({ headingRef }) {
  return (
    <section className="thank-you">
      <img className="thank-you__icon" src={thankYouIcon} alt="" width="80" height="80" />
      <h1 className="thank-you__title" ref={headingRef} tabIndex={-1}>
        Thank you!
      </h1>
      <p className="thank-you__text">
        Thanks for confirming your subscription! We hope you have fun using our platform. If
        you ever need support, please feel free to email us at{' '}
        <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>.
      </p>
    </section>
  )
}
