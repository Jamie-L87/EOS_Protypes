import './Spacing.css'

/* Spacing token display block */
function SpacingToken({ name, value, cssVar }) {
  const numValue = parseInt(value)
  return (
    <div className="spacing-token">
      <div className="spacing-token-visual" style={{ height: value }}>
        <span className="spacing-token-label">{value}</span>
      </div>
      <div className="spacing-token-info">
        <p className="spacing-token-name">{name}</p>
        <code className="spacing-token-var">{cssVar}</code>
      </div>
    </div>
  )
}

export default function Spacing() {
  const spacingTokens = [
    { name: '4px', value: '4px', cssVar: '--space-4' },
    { name: '8px', value: '8px', cssVar: '--space-8' },
    { name: '12px', value: '12px', cssVar: '--space-12' },
    { name: '16px', value: '16px', cssVar: '--space-16' },
    { name: '20px', value: '20px', cssVar: '--space-20' },
    { name: '24px', value: '24px', cssVar: '--space-24' },
    { name: '32px', value: '32px', cssVar: '--space-32' },
    { name: '40px', value: '40px', cssVar: '--space-40' },
    { name: '48px', value: '48px', cssVar: '--space-48' },
    { name: '56px', value: '56px', cssVar: '--space-56' },
    { name: '64px', value: '64px', cssVar: '--space-64' },
    { name: '80px', value: '80px', cssVar: '--space-80' },
    { name: '120px', value: '120px', cssVar: '--space-120' },
  ]

  const marginTokens = [
    { name: 'Desktop 1920px', value: '112px', type: 'Outer Margin', breakpoint: '1920px' },
    { name: 'Desktop 1440px', value: '84px', type: 'Outer Margin', breakpoint: '1440px' },
    { name: 'Tablet 1024px', value: '60px', type: 'Outer Margin', breakpoint: '1024px' },
    { name: 'Tablet 768px', value: '60px', type: 'Outer Margin', breakpoint: '768px' },
    { name: 'Mobile 375px', value: '24px', type: 'Outer Margin', breakpoint: '375px' },
  ]

  const gutterTokens = [
    { name: 'Desktop & Tablet', value: '40px', type: 'Gutter (Fixed)', breakpoint: 'All Desktop/Tablet' },
    { name: 'Mobile', value: '15px', type: 'Gutter (Fixed)', breakpoint: '375px' },
  ]

  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Spacing & Grid System</h2>
        <p className="section-desc">
          Responsive spacing scale with fixed gutters. Outer margins are % based and scale with viewport.
          Gutters remain fixed per breakpoint. Mobile (375px) uses 15px gutters, all others use 40px.
        </p>
      </div>

      <div className="section-content">

        {/* Spacing Scale */}
        <div className="spacing-section">
          <h3 className="spacing-section-title">Spacing Scale</h3>
          <p className="spacing-section-desc">
            Use these spacing tokens for consistent gaps, margins, and padding throughout components and layouts.
          </p>
          <div className="spacing-tokens-grid">
            {spacingTokens.map((token) => (
              <SpacingToken key={token.cssVar} {...token} />
            ))}
          </div>
        </div>

        {/* Responsive Margins */}
        <div className="spacing-section spacing-section--margins">
          <h3 className="spacing-section-title">Responsive Outer Margins</h3>
          <p className="spacing-section-desc">
            Master container margins scale based on viewport width (% based). Mobile uses 24px fixed margins.
          </p>
          <div className="spacing-margins-grid">
            {marginTokens.map((token) => (
              <div key={token.breakpoint} className="spacing-margin-row">
                <div className="margin-info">
                  <span className="margin-name">{token.name}</span>
                  <span className="margin-breakpoint">{token.breakpoint}</span>
                </div>
                <div className="margin-visual">
                  <div className="margin-box" style={{ width: token.value }}>
                    <span className="margin-label">{token.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gutters */}
        <div className="spacing-section spacing-section--gutters">
          <h3 className="spacing-section-title">Fixed Gutters (Between Columns)</h3>
          <p className="spacing-section-desc">
            Gutters remain fixed at each breakpoint. Columns scale, margins scale, but gutters stay consistent.
          </p>
          <div className="spacing-gutters-grid">
            {gutterTokens.map((token) => (
              <div key={token.breakpoint} className="spacing-gutter-card">
                <div className="gutter-visual">
                  <div className="gutter-box" style={{ width: token.value }}>
                    <span className="gutter-label">{token.value}</span>
                  </div>
                </div>
                <div className="gutter-info">
                  <span className="gutter-name">{token.name}</span>
                  <span className="gutter-breakpoint">{token.breakpoint}</span>
                  <code className="gutter-type">{token.type}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Overview */}
        <div className="spacing-section spacing-section--grids">
          <h3 className="spacing-section-title">Grid Specifications by Breakpoint</h3>
          <div className="grids-overview">
            <div className="grid-spec-card">
              <h4>Desktop — 1920px</h4>
              <ul className="grid-spec-list">
                <li><strong>Columns:</strong> 12</li>
                <li><strong>Column Width:</strong> ~104.84px</li>
                <li><strong>Gutters:</strong> 40px (fixed)</li>
                <li><strong>Outer Margin:</strong> 112px (% based)</li>
              </ul>
            </div>
            <div className="grid-spec-card">
              <h4>Desktop — 1440px</h4>
              <ul className="grid-spec-list">
                <li><strong>Columns:</strong> 12</li>
                <li><strong>Column Width:</strong> ~69px</li>
                <li><strong>Gutters:</strong> 40px (fixed)</li>
                <li><strong>Outer Margin:</strong> 84px (% based)</li>
              </ul>
            </div>
            <div className="grid-spec-card">
              <h4>Tablet — 1024px</h4>
              <ul className="grid-spec-list">
                <li><strong>Columns:</strong> 8</li>
                <li><strong>Column Width:</strong> ~79px</li>
                <li><strong>Gutters:</strong> 40px (fixed)</li>
                <li><strong>Outer Margin:</strong> 60px (% based)</li>
              </ul>
            </div>
            <div className="grid-spec-card">
              <h4>Tablet — 768px</h4>
              <ul className="grid-spec-list">
                <li><strong>Columns:</strong> 6</li>
                <li><strong>Column Width:</strong> ~75px</li>
                <li><strong>Gutters:</strong> 40px (fixed)</li>
                <li><strong>Outer Margin:</strong> 60px (% based)</li>
              </ul>
            </div>
            <div className="grid-spec-card">
              <h4>Mobile — 375px</h4>
              <ul className="grid-spec-list">
                <li><strong>Columns:</strong> 4</li>
                <li><strong>Column Width:</strong> ~42px</li>
                <li><strong>Gutters:</strong> 15px (fixed)</li>
                <li><strong>Outer Margin:</strong> 24px (fixed)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
