import './GridVisualization.css'

export default function GridVisualization() {
  const columns = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="grid-visualization">
      <div className="grid-container">
        <div className="outer-margin left"></div>
        <div className="grid-content">
          {columns.map((col) => (
            <div key={col} className="grid-column">
              <div className="column-label">{col + 1}</div>
            </div>
          ))}
        </div>
        <div className="outer-margin right"></div>
      </div>
      <p className="grid-note">12-column grid at 1920px viewport with percentage-based outer margins</p>
    </div>
  )
}
