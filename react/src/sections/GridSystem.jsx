import './GridSystem.css'

const breakpoints = [
  { name: 'Desktop — 1920px', viewport: 1920, columns: 12, colWidth: '~104.84px', gutter: '40px (fixed)', outerMargin: '112px (5.8%)', principle: 'Percent-based scaling' },
  { name: 'Desktop — 1440px', viewport: 1440, columns: 12, colWidth: '~69px', gutter: '40px (fixed)', outerMargin: '84px (5.8%)', principle: 'Percent-based scaling' },
  { name: 'Tablet — 1024px', viewport: 1024, columns: 8, colWidth: '~79px', gutter: '40px (fixed)', outerMargin: '60px (5.8%)', principle: 'Percent-based scaling' },
  { name: 'Tablet — 768px', viewport: 768, columns: 6, colWidth: '~75px', gutter: '32px (fixed)', outerMargin: '60px (7.8%)', principle: 'Percent-based scaling' },
  { name: 'Mobile — 375px', viewport: 375, columns: 4, colWidth: '~42px', gutter: '15px (fixed)', outerMargin: '24px (6.4%)', principle: 'Percent-based mobile' },
]

const spacingScale = [
  { name: '4px', value: 4, usage: 'Minimal, tight spacing' },
  { name: '8px', value: 8, usage: 'Small padding' },
  { name: '12px', value: 12, usage: 'Compact spacing' },
  { name: '16px', value: 16, usage: 'Standard padding' },
  { name: '20px', value: 20, usage: 'Medium padding' },
  { name: '24px', value: 24, usage: 'Comfortable spacing' },
  { name: '32px', value: 32, usage: 'Large spacing' },
  { name: '40px', value: 40, usage: 'Grid gutter (desktop)' },
  { name: '48px', value: 48, usage: 'Section spacing' },
  { name: '64px', value: 64, usage: 'Major spacing' },
]

function BreakpointCard({ bp }) {
  return (
    <div className="gs-breakpoint-card">
      <div className="gs-card-header">
        <h4 className="gs-card-name">{bp.name}</h4>
        <p className="gs-card-principle">{bp.principle}</p>
      </div>
      <div className="gs-card-specs">
        <div className="gs-spec">
          <span className="gs-spec-label">Viewport</span>
          <span className="gs-spec-value">{bp.viewport}px</span>
        </div>
        <div className="gs-spec">
          <span className="gs-spec-label">Columns</span>
          <span className="gs-spec-value">{bp.columns}</span>
        </div>
        <div className="gs-spec">
          <span className="gs-spec-label">Col Width</span>
          <span className="gs-spec-value">{bp.colWidth}</span>
        </div>
        <div className="gs-spec">
          <span className="gs-spec-label">Gutter</span>
          <span className="gs-spec-value">{bp.gutter}</span>
        </div>
        <div className="gs-spec">
          <span className="gs-spec-label">Outer Margin</span>
          <span className="gs-spec-value">{bp.outerMargin}</span>
        </div>
      </div>
      <div className="gs-grid-visualization">
        <div className="gs-margin-left"></div>
        {[...Array(bp.columns)].map((_, i) => (
          <div key={i} className="gs-column-viz">
            <div className="gs-column-label">{bp.colWidth}</div>
          </div>
        ))}
        <div className="gs-margin-right"></div>
      </div>
    </div>
  )
}

function SpacingItem({ spacing }) {
  return (
    <div className="gs-spacing-item">
      <div className="gs-spacing-visual">
        <div className="gs-spacing-bar" style={{ width: `${spacing.value * 3}px`, height: '20px' }}></div>
      </div>
      <div className="gs-spacing-info">
        <span className="gs-spacing-name">{spacing.name}</span>
        <span className="gs-spacing-usage">{spacing.usage}</span>
      </div>
    </div>
  )
}

export default function GridSystem() {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Grid System & Spacing</h2>
        <p className="section-desc">Responsive grid with percent-based master container and columns. Gutters remain fixed at each breakpoint (40px desktop, 32px tablet, 15px mobile) while outer margins and columns scale proportionally with viewport width.</p>
      </div>

      <div className="section-content">
        
        {/* ──── KEY PRINCIPLES ──── */}
        <div className="gs-principles-section">
          <h3 className="gs-section-title">Design Principles</h3>
          <div className="gs-principles">
            <div className="gs-principle-card">
              <div className="gs-principle-icon">%</div>
              <h4>Percent-Based Master Container</h4>
              <p>Outer margins scale proportionally with viewport width, maintaining visual balance across all screen sizes.</p>
            </div>
            <div className="gs-principle-card">
              <div className="gs-principle-icon">▭</div>
              <h4>Percent-Based Columns</h4>
              <p>Column widths are fluid and scale with viewport, allowing responsive layouts that adapt to content and screen size.</p>
            </div>
            <div className="gs-principle-card">
              <div className="gs-principle-icon">—</div>
              <h4>Fixed Gutters</h4>
              <p>Gutters stay constant at each breakpoint (40px desktop, 32px tablet, 15px mobile) as columns expand or contract around them.</p>
            </div>
            <div className="gs-principle-card">
              <div className="gs-principle-icon">↗</div>
              <h4>Responsive Scaling</h4>
              <p>As viewport width increases, container width, column widths, and outer margins all scale proportionally together.</p>
            </div>
          </div>
        </div>

        {/* ──── BREAKPOINT SPECIFICATIONS ──── */}
        <div className="gs-breakpoints-section">
          <h3 className="gs-section-title">Breakpoints & Grid Layouts</h3>
          <div className="gs-breakpoints-grid">
            {breakpoints.map((bp) => (
              <BreakpointCard key={bp.name} bp={bp} />
            ))}
          </div>
        </div>

        {/* ──── SPACING SCALE ──── */}
        <div className="gs-spacing-section">
          <h3 className="gs-section-title">Spacing Scale</h3>
          <p className="gs-spacing-desc">Consistent spacing values used throughout the system for padding, margins, and gaps between components.</p>
          <div className="gs-spacing-scale">
            {spacingScale.map((spacing) => (
              <SpacingItem key={spacing.name} spacing={spacing} />
            ))}
          </div>
        </div>

        {/* ──── GUTTER REFERENCE ──── */}
        <div className="gs-gutter-section">
          <h3 className="gs-section-title">Gutter System</h3>
          <p className="gs-gutter-desc">Fixed gutter widths (spacing between columns) across each breakpoint ensure consistent visual rhythm.</p>
          <div className="gs-gutter-table">
            <div className="gs-gutter-row">
              <div className="gs-gutter-breakpoint">Desktop</div>
              <div className="gs-gutter-value">40px</div>
              <div className="gs-gutter-visual" style={{ width: '80px' }}></div>
            </div>
            <div className="gs-gutter-row">
              <div className="gs-gutter-breakpoint">Tablet</div>
              <div className="gs-gutter-value">32px</div>
              <div className="gs-gutter-visual" style={{ width: '64px' }}></div>
            </div>
            <div className="gs-gutter-row">
              <div className="gs-gutter-breakpoint">Mobile</div>
              <div className="gs-gutter-value">15px</div>
              <div className="gs-gutter-visual" style={{ width: '30px' }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
