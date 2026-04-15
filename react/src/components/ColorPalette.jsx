import './ColorPalette.css'

export default function ColorPalette({ title, colors }) {
  return (
    <div className="color-palette-section">
      <h3 className="palette-title">{title}</h3>
      <div className="color-grid">
        {colors.map((color, idx) => (
          <div key={idx} className="color-item">
            <div className="color-swatch" style={{ backgroundColor: color.value }}></div>
            <div className="color-info">
              <p className="color-name">{color.name}</p>
              <p className="color-value">{color.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
