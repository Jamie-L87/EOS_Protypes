import './SpacingScale.css'

export default function SpacingScale({ values }) {
  return (
    <div className="spacing-scale">
      <h3>Spacing Values</h3>
      <div className="spacing-list">
        {values.map((space, idx) => (
          <div key={idx} className="spacing-item">
            <div className="spacing-visual">
              <div 
                className="spacing-bar" 
                style={{ width: space.value }}
              ></div>
            </div>
            <div className="spacing-info">
              <span className="spacing-name">{space.name}</span>
              <span className="spacing-value">{space.value}</span>
              <span className="spacing-var">{space.cssVar}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
