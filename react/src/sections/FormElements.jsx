import './FormElements.css'

function StateLabel({ label }) {
  return <span className="fe-state-label">{label}</span>
}

function InputFieldGroup({ fields, title }) {
  return (
    <div className="fe-field-group">
      <h4 className="fe-field-group-title">{title}</h4>
      <div className="fe-states-row">
        {fields}
      </div>
    </div>
  )
}

/* ────── BASIC TEXT INPUT ────── */
function BasicTextField({ state = 'Resting' }) {
  const bgClass = state === 'Entered' ? 'fe-input--entered' : ''
  const borderClass = state === 'Focus' ? 'fe-input--focus' : state === 'Hover' ? 'fe-input--hover' : ''
  const errorClass = state === 'Error' ? 'fe-input--error' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={state} />
      <div className="fe-field-wrapper">
        <label className="fe-label">Field Label*</label>
        <input
          type="text"
          className={`fe-input ${bgClass} ${borderClass} ${errorClass}`}
          placeholder={state === 'Focus' ? 'Placeholder text' : ''}
          defaultValue={state === 'Entered' ? 'User input here' : ''}
          disabled={state === 'Resting' || state === 'Hover'}
        />
        {state === 'Error' && (
          <span className="fe-error-text">Error text lorem ipsum dolor sit amet.</span>
        )}
      </div>
    </div>
  )
}

/* ────── TEXT INPUT WITH HELP ────── */
function TextWithHelp({ state = 'Resting' }) {
  const bgClass = state === 'Entered' ? 'fe-input--entered' : ''
  const borderClass = state === 'Focus' ? 'fe-input--focus' : state === 'Hover' ? 'fe-input--hover' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={state} />
      <div className="fe-field-wrapper">
        <label className="fe-label">Field Label*</label>
        <input
          type="text"
          className={`fe-input ${bgClass} ${borderClass}`}
          placeholder={state === 'Focus' ? 'Placeholder text' : ''}
          defaultValue={state === 'Entered' ? 'User input here' : ''}
          disabled={state === 'Resting' || state === 'Hover'}
        />
        <span className="fe-help-text">Help text lorem ipsum dolor sit amet.</span>
      </div>
    </div>
  )
}

/* ────── TEXT INPUT WITH RIGHT ICON ────── */
function TextWithIconRight({ state = 'Resting' }) {
  const bgClass = state === 'Entered' ? 'fe-input--entered' : ''
  const borderClass = state === 'Focus' ? 'fe-input--focus' : state === 'Hover' ? 'fe-input--hover' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={state} />
      <div className="fe-field-wrapper">
        <label className="fe-label">Field Label*</label>
        <div className="fe-input-with-icon">
          <input
            type="text"
            className={`fe-input ${bgClass} ${borderClass}`}
            placeholder={state === 'Focus' ? 'Select option...' : ''}
            disabled
          />
          <span className="fe-icon-right">▼</span>
        </div>
      </div>
    </div>
  )
}

/* ────── FIELD WITH BUTTON (GHOST) ────── */
function FieldButtonGhost({ state = 'Resting' }) {
  const bgClass = state === 'Entered' ? 'fe-input--entered' : ''
  const borderClass = state === 'Focus' ? 'fe-input--focus' : state === 'Hover' ? 'fe-input--hover' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={state} />
      <div className="fe-field-wrapper">
        <label className="fe-label">Field Label*</label>
        <div className="fe-input-with-button">
          <input
            type="text"
            className={`fe-input ${bgClass} ${borderClass}`}
            placeholder="Placeholder text..."
            disabled
          />
          <button className="fe-button fe-button--ghost">View Cart</button>
        </div>
      </div>
    </div>
  )
}

/* ────── FIELD WITH BUTTON (FILLED) ────── */
function FieldButtonFilled({ state = 'Resting' }) {
  const bgClass = state === 'Entered' ? 'fe-input--entered' : ''
  const borderClass = state === 'Focus' ? 'fe-input--focus' : state === 'Hover' ? 'fe-input--hover' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={state} />
      <div className="fe-field-wrapper">
        <label className="fe-label">Field Label*</label>
        <div className="fe-input-with-button">
          <input
            type="text"
            className={`fe-input ${bgClass} ${borderClass}`}
            placeholder="Placeholder text..."
            disabled
          />
          <button className="fe-button fe-button--filled">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

/* ────── SIMPLE TEXT INPUT ─────── */
function SimpleField() {
  return (
    <div className="fe-state-col">
      <StateLabel label="Simple" />
      <div className="fe-field-wrapper">
        <input
          type="text"
          className="fe-input fe-input--simple"
          placeholder="Enter text..."
          disabled
        />
      </div>
    </div>
  )
}

/* ────── NEWSLETTER SIGNUP LIGHT ────── */
function NewsletterLight({ state = 'Resting' }) {
  const bgClass = state === 'Focus' ? 'fe-newsletter--focus' : state === 'Entered' ? 'fe-newsletter--entered' : ''
  const hoverClass = state === 'Hover' ? 'fe-newsletter--hover' : ''
  const errorClass = state === 'Error' ? 'fe-newsletter--error' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={`${state} (Light)`} />
      <div className="fe-newsletter-wrapper">
        <div className={`fe-newsletter fe-newsletter--light ${bgClass} ${hoverClass} ${errorClass}`}>
          <input
            type="email"
            className="fe-newsletter-input"
            placeholder="Email@website.com"
            defaultValue={state === 'Entered' ? 'user@email.com' : ''}
            disabled={state !== 'Entered' && state !== 'Focus'}
          />
          <button className="fe-newsletter-btn">Sign Up</button>
        </div>
        {state === 'Error' && (
          <span className="fe-error-text">Error text lorem ipsum dolor sit amet.</span>
        )}
      </div>
    </div>
  )
}

/* ────── NEWSLETTER SIGNUP DARK ────── */
function NewsletterDark({ state = 'Resting' }) {
  const bgClass = state === 'Focus' ? 'fe-newsletter--focus' : state === 'Entered' ? 'fe-newsletter--entered' : ''
  const hoverClass = state === 'Hover' ? 'fe-newsletter--hover' : ''
  const errorClass = state === 'Error' ? 'fe-newsletter--error' : ''
  
  return (
    <div className="fe-state-col">
      <StateLabel label={`${state} (Dark)`} />
      <div className="fe-newsletter-wrapper">
        <div className={`fe-newsletter fe-newsletter--dark ${bgClass} ${hoverClass} ${errorClass}`}>
          <input
            type="email"
            className="fe-newsletter-input"
            placeholder="Email@website.com"
            defaultValue={state === 'Entered' ? 'user@email.com' : ''}
            disabled={state !== 'Entered' && state !== 'Focus'}
          />
          <button className="fe-newsletter-btn">Sign Up</button>
        </div>
        {state === 'Error' && (
          <span className="fe-error-text">Error text lorem ipsum dolor sit amet.</span>
        )}
      </div>
    </div>
  )
}

export default function FormElements() {
  const textStates = ['Resting', 'Hover', 'Focus', 'Entered', 'Error']
  const newsletterStates = ['Resting', 'Hover', 'Focus', 'Entered', 'Error']

  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Form Elements</h2>
        <p className="section-desc">Complete form component library with text inputs, buttons, and newsletter signup fields in all interaction states.</p>
      </div>

      <div className="section-content">
        
        {/* ──── BASIC TEXT INPUT ──── */}
        <InputFieldGroup
          title="Text Input — Basic"
          fields={
            <div className="fe-states-row">
              {textStates.map((state) => (
                <BasicTextField key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── TEXT INPUT WITH HELP ──── */}
        <InputFieldGroup
          title="Text Input — With Help Text"
          fields={
            <div className="fe-states-row">
              {textStates.slice(0, -1).map((state) => (
                <TextWithHelp key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── TEXT INPUT WITH ICON ──── */}
        <InputFieldGroup
          title="Text Input — With Icon Right"
          fields={
            <div className="fe-states-row">
              {['Resting', 'Hover', 'Focus'].map((state) => (
                <TextWithIconRight key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── FIELD WITH BUTTON GHOST ──── */}
        <InputFieldGroup
          title="Text Input — With Button (Ghost)"
          fields={
            <div className="fe-states-row">
              {['Resting', 'Hover', 'Focus'].map((state) => (
                <FieldButtonGhost key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── FIELD WITH BUTTON FILLED ──── */}
        <InputFieldGroup
          title="Text Input — With Button (Filled)"
          fields={
            <div className="fe-states-row">
              {['Resting', 'Hover', 'Focus'].map((state) => (
                <FieldButtonFilled key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── SIMPLE FIELD ──── */}
        <InputFieldGroup
          title="Text Input — Simple"
          fields={<SimpleField />}
        />

        {/* ──── NEWSLETTER LIGHT ──── */}
        <InputFieldGroup
          title="Newsletter Signup — Light Theme"
          fields={
            <div className="fe-states-row">
              {newsletterStates.map((state) => (
                <NewsletterLight key={state} state={state} />
              ))}
            </div>
          }
        />

        {/* ──── NEWSLETTER DARK ──── */}
        <InputFieldGroup
          title="Newsletter Signup — Dark Theme"
          fields={
            <div className="fe-states-row">
              {newsletterStates.map((state) => (
                <NewsletterDark key={state} state={state} />
              ))}
            </div>
          }
        />

      </div>
    </div>
  )
}
