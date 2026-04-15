import './IconShowcase.css'

export default function IconShowcase({ icons }) {
  return (
    <div className="icon-showcase">
      <h3>Icon Library</h3>
      <div className="icons-grid">
        {icons.map((icon, idx) => (
          <div key={idx} className="icon-item">
            <div className="icon-box">
              <span className="icon">{icon.icon}</span>
            </div>
            <p className="icon-name">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
