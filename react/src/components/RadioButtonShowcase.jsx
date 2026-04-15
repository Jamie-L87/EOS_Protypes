import './RadioButtonShowcase.css'

export default function RadioButtonShowcase({ options }) {
  return (
    <div className="radio-showcase">
      {options.map((option, idx) => (
        <div key={idx} className={`radio-item ${option.state}`}>
          <input
            type="radio"
            id={`radio-${idx}`}
            name="options"
            checked={option.state === 'active'}
            readOnly
          />
          <label htmlFor={`radio-${idx}`}>{option.label}</label>
        </div>
      ))}
    </div>
  )
}
