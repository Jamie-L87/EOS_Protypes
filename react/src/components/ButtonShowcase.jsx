import './ButtonShowcase.css'

export default function ButtonShowcase({ variant }) {
  return (
    <div className="button-showcase">
      <h3>{variant.variant}</h3>
      <div className="button-states">
        {variant.states.map((state, idx) => (
          <div key={idx} className="button-state">
            <p className="state-label">{state.name}</p>
            <button
              className="showcase-button"
              style={{
                backgroundColor: state.bgColor,
                color: state.textColor,
                border: state.border || 'none'
              }}
            >
              {state.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
