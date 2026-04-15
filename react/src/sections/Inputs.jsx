import './Inputs.css'

/* Custom radio dot rendered in CSS */
function RadioDot({ dotColor }) {
  return (
    <span className="radio-hit">
      <span className="radio-dot" style={{ background: dotColor }} />
    </span>
  )
}

/* Single radio + label */
function RadioButton({ dotColor, textColor, label, checked = false }) {
  return (
    <div className="radio-item">
      <RadioDot dotColor={dotColor} />
      <span className="radio-text" style={{ color: textColor, fontWeight: checked ? 700 : 500 }}>
        {label}
      </span>
    </div>
  )
}

/* A group of states for one radio variant */
function RadioStateGroup({ title, states, dark }) {
  return (
    <div className={`radio-variant-card ${dark ? 'radio-variant-card--dark' : ''}`}>
      <h4 className="radio-variant-title">{title}</h4>
      <div className="radio-states-grid">
        {states.map((s) => (
          <div key={s.name} className="radio-state-col">
            <span className="radio-state-label">{s.name}</span>
            <RadioButton {...s} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* Custom checkbox rendered in CSS */
function CheckBoxBox({ borderColor, checked = false, bgColor = 'transparent' }) {
  return (
    <span className="checkbox-hit" style={{ borderColor }}>
      {checked && <span className="checkbox-check">✓</span>}
    </span>
  )
}

/* Single checkbox + label */
function CheckBox({ borderColor, textColor, label, checked = false, opacity = 1 }) {
  return (
    <div className="checkbox-item" style={{ opacity }}>
      <CheckBoxBox borderColor={borderColor} checked={checked} />
      <span className="checkbox-text" style={{ color: textColor, fontWeight: checked ? 700 : 500 }}>
        {label}
      </span>
    </div>
  )
}

/* A group of states for one checkbox variant */
function CheckBoxStateGroup({ title, states, dark }) {
  return (
    <div className={`checkbox-variant-card ${dark ? 'checkbox-variant-card--dark' : ''}`}>
      <h4 className="checkbox-variant-title">{title}</h4>
      <div className="checkbox-states-grid">
        {states.map((s) => (
          <div key={s.name} className="checkbox-state-col">
            <span className="checkbox-state-label">{s.name}</span>
            <CheckBox {...s} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Inputs() {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Inputs</h2>
        <p className="section-desc">
          Radio buttons and checkboxes: 44×44px hit target, 20×20px dot (radio), 18×18px box (checkbox). Active state uses bold text.
        </p>
      </div>

      <div className="section-content">

        {/* ── RADIO — Active ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Radio — Active</h3>
          <div className="radio-variants-row">
            <RadioStateGroup
              title="Property 1 = Dark (on light bg)"
              states={[
                { name: 'Default', dotColor: '#252525', textColor: '#252525', label: 'In stock and ready to deliver', checked: true },
                { name: 'Hover',   dotColor: '#333333', textColor: '#252525', label: 'In stock and ready to deliver', checked: true },
                { name: 'Focus',   dotColor: '#616161', textColor: '#252525', label: 'In stock and ready to deliver', checked: true },
              ]}
            />
            <RadioStateGroup
              title="Property 1 = Light (on dark bg)"
              dark
              states={[
                { name: 'Default', dotColor: '#FFFFFF', textColor: '#FFFFFF', label: 'In stock and ready to deliver', checked: true },
                { name: 'Hover',   dotColor: '#F6F6F6', textColor: '#FAFAFA', label: 'In stock and ready to deliver', checked: true },
                { name: 'Focus',   dotColor: '#EBEBEB', textColor: '#EBEBEB', label: 'In stock and ready to deliver', checked: true },
              ]}
            />
          </div>
        </div>

        {/* ── RADIO — Inactive ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Radio — Inactive</h3>
          <div className="radio-variants-row">
            <RadioStateGroup
              title="Property 1 = Dark (on light bg)"
              states={[
                { name: 'Default', dotColor: '#616161', textColor: '#252525', label: 'I need it by:' },
                { name: 'Hover',   dotColor: '#333333', textColor: '#252525', label: 'I need it by:' },
                { name: 'Focus',   dotColor: '#333333', textColor: '#252525', label: 'I need it by:' },
              ]}
            />
            <RadioStateGroup
              title="Property 1 = Light (on dark bg)"
              dark
              states={[
                { name: 'Default', dotColor: '#FFFFFF', textColor: '#FFFFFF', label: 'I need it by:' },
                { name: 'Hover',   dotColor: '#F6F6F6', textColor: '#FAFAFA', label: 'I need it by:' },
                { name: 'Focus',   dotColor: '#EBEBEB', textColor: '#EBEBEB', label: 'I need it by:' },
              ]}
            />
          </div>
        </div>

        {/* ── RADIO — Disabled ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Radio — Disabled</h3>
          <div className="radio-variants-row">
            <RadioStateGroup
              title="Property 1 = Dark (disabled)"
              states={[
                { name: 'Disabled', dotColor: '#ACACAC', textColor: '#ACACAC', label: 'I need it by:' },
              ]}
            />
            <RadioStateGroup
              title="Property 1 = Light (disabled)"
              dark
              states={[
                { name: 'Disabled', dotColor: 'rgba(250,250,250,0.3)', textColor: 'rgba(250,250,250,0.3)', label: 'I need it by:' },
              ]}
            />
          </div>
        </div>

        {/* ── CHECKBOX — Active ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Checkbox — Active</h3>
          <div className="checkbox-variants-row">
            <CheckBoxStateGroup
              title="Property 1 = Dark (on light bg)"
              states={[
                { name: 'Default', borderColor: '#252525', textColor: '#252525', label: 'Option selected', checked: true },
                { name: 'Hover',   borderColor: '#333333', textColor: '#252525', label: 'Option selected', checked: true },
                { name: 'Focus',   borderColor: '#616161', textColor: '#252525', label: 'Option selected', checked: true },
              ]}
            />
            <CheckBoxStateGroup
              title="Property 1 = Light (on dark bg)"
              dark
              states={[
                { name: 'Default', borderColor: '#FFFFFF', textColor: '#FFFFFF', label: 'Option selected', checked: true },
                { name: 'Hover',   borderColor: '#F6F6F6', textColor: '#FAFAFA', label: 'Option selected', checked: true },
                { name: 'Focus',   borderColor: '#EBEBEB', textColor: '#EBEBEB', label: 'Option selected', checked: true },
              ]}
            />
          </div>
        </div>

        {/* ── CHECKBOX — Inactive ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Checkbox — Inactive</h3>
          <div className="checkbox-variants-row">
            <CheckBoxStateGroup
              title="Property 1 = Dark (on light bg)"
              states={[
                { name: 'Default', borderColor: '#ACACAC', textColor: '#252525', label: 'Placeholder Text' },
                { name: 'Hover',   borderColor: '#333333', textColor: '#252525', label: 'Placeholder Text' },
                { name: 'Focus',   borderColor: '#333333', textColor: '#252525', label: 'Placeholder Text' },
              ]}
            />
            <CheckBoxStateGroup
              title="Property 1 = Light (on dark bg)"
              dark
              states={[
                { name: 'Default', borderColor: '#F6F6F6', textColor: '#FFFFFF', label: 'Placeholder Text' },
                { name: 'Hover',   borderColor: '#FAFAFA', textColor: '#FAFAFA', label: 'Placeholder Text' },
                { name: 'Focus',   borderColor: '#EBEBEB', textColor: '#EBEBEB', label: 'Placeholder Text' },
              ]}
            />
          </div>
        </div>

        {/* ── CHECKBOX — Disabled ── */}
        <div className="inputs-family">
          <h3 className="inputs-family-title">Checkbox — Disabled</h3>
          <div className="checkbox-variants-row">
            <CheckBoxStateGroup
              title="Property 1 = Dark (disabled)"
              states={[
                { name: 'Disabled', borderColor: '#ACACAC', textColor: '#ACACAC', label: 'Placeholder Text', opacity: 0.5 },
              ]}
            />
            <CheckBoxStateGroup
              title="Property 1 = Light (disabled)"
              dark
              states={[
                { name: 'Disabled', borderColor: 'rgba(250,250,250,0.3)', textColor: 'rgba(250,250,250,0.3)', label: 'Placeholder Text', opacity: 0.5 },
              ]}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
