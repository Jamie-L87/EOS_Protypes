import './SectionTemplate.css'

export default function SectionTemplate({ title, subtitle, wcagLink, highlights }) {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">{subtitle}</h2>
        {wcagLink && (
          <a href={wcagLink} target="_blank" rel="noopener noreferrer" className="wcag-link">
            {wcagLink}
          </a>
        )}
      </div>

      <div className="section-content">
        <div className="highlights-section">
          <h3 className="highlights-title">Highlights</h3>
          <ul className="highlights-list">
            {highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                <span className="highlight-bullet"></span>
                <div className="highlight-content">
                  <h4 className="highlight-name">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
