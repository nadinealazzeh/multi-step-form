# Frontend Mentor - Multi-step form solution

A React + Vite solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## How it's built

- **React 19 + Vite**, plain CSS with custom properties, mobile-first.
- **State:** one `useReducer` (`src/formReducer.js`) holds the step, personal info, plan, billing period, add-ons and validation errors.
- **Prices:** `src/data.js` is the single source of truth. Totals are derived at render time, never stored, so switching Monthly/Yearly always stays in sync.
- **Validation:** required fields, email format, phone format and "no plan selected"; errors are linked with `aria-describedby` and `aria-invalid`, and focus moves to the first invalid field.
- **Accessibility:** native radios/checkboxes, a `role="switch"` billing toggle, `aria-current="step"` in the progress list, and focus moves to each new step's heading.

## Structure

```
src/
  App.jsx              layout, reducer, focus management
  formReducer.js       state, actions, validation
  data.js              plans, add-ons, prices, formatting
  styles.css           all styles
  components/          Sidebar, PersonalInfo, SelectPlan, AddOns, Summary, ThankYou, StepNav
```
