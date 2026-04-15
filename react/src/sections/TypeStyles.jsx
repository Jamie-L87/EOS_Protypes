import './TypeStyles.css'

function TypeSample({ name, size, weight, lineHeight, letterSpacing, transform, style }) {
  return (
    <div className="type-sample">
      <div className="type-preview" style={style}>
        Lorem Ipsum Dolor Sit Amet
      </div>
      <div className="type-details">
        <h4>{name}</h4>
        <p><strong>Font:</strong> Untitled Sans</p>
        <p><strong>Size:</strong> {size}px</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Line Height:</strong> {lineHeight}</p>
        <p><strong>Letter Spacing:</strong> {letterSpacing}</p>
        {transform && <p><strong>Transform:</strong> {transform}</p>}
      </div>
    </div>
  )
}

function TypeCategory({ title, children }) {
  return (
    <div className="type-category">
      <h3 className="type-category-title">{title}</h3>
      <div className="type-samples-grid">
        {children}
      </div>
    </div>
  )
}

export default function TypeStyles() {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Type Styles — Default</h2>
        <p className="section-desc">Complete typography system showcasing all desktop, mobile, and specialized text styles with precise sizing and spacing.</p>
      </div>

      <div className="section-content">
        
        {/* ──────────────── DESKTOP HEADERS ──────────────── */}
        <TypeCategory title="Desktop — Headers">
          <TypeSample
            name="Display"
            size="118.88"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="-3%"
            style={{ fontSize: '118.88px', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.03em', color: '#252525' }}
          />
          <TypeSample
            name="H1"
            size="99.07"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="-2%"
            style={{ fontSize: '99.07px', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.02em', color: '#252525' }}
          />
          <TypeSample
            name="H2"
            size="68.8"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="-2%"
            style={{ fontSize: '68.8px', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.02em', color: '#252525' }}
          />
          <TypeSample
            name="H3"
            size="47.78"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="-1%"
            style={{ fontSize: '47.78px', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.01em', color: '#252525' }}
          />
          <TypeSample
            name="H3 – Hero Body"
            size="47.78"
            weight="500 Medium"
            lineHeight="110%"
            letterSpacing="-1%"
            style={{ fontSize: '47.78px', fontWeight: 500, lineHeight: '110%', letterSpacing: '-0.01em', color: '#616161' }}
          />
          <TypeSample
            name="H4"
            size="33.18"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '33.18px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0', color: '#252525' }}
          />
          <TypeSample
            name="H4 – Link"
            size="33.18"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            transform="underline"
            style={{ fontSize: '33.18px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="H5"
            size="23.04"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '23.04px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0', color: '#252525' }}
          />
          <TypeSample
            name="H5 – Link"
            size="23.04"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            transform="underline"
            style={{ fontSize: '23.04px', fontWeight: 700, lineHeight: '120%', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="H6"
            size="19.2"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '19.2px', fontWeight: 700, lineHeight: '120%', color: '#252525' }}
          />
          <TypeSample
            name="H6 – Link"
            size="19.2"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            transform="underline"
            style={{ fontSize: '19.2px', fontWeight: 700, lineHeight: '120%', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="H7"
            size="16"
            weight="700 Bold"
            lineHeight="125%"
            letterSpacing="-1%"
            style={{ fontSize: '16px', fontWeight: 700, lineHeight: '125%', letterSpacing: '-0.01em', color: '#252525' }}
          />
        </TypeCategory>

        {/* ──────────────── DESKTOP UI ──────────────── */}
        <TypeCategory title="Desktop — UI">
          <TypeSample
            name="UI – Large (Bold)"
            size="23.04"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '23.04px', fontWeight: 700, lineHeight: '120%', color: '#252525' }}
          />
          <TypeSample
            name="UI – Large (Medium)"
            size="23.04"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '23.04px', fontWeight: 500, lineHeight: '120%', color: '#252525' }}
          />
          <TypeSample
            name="UI – Large (Price)"
            size="23.04"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '23.04px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#616161' }}
          />
          <TypeSample
            name="UI – Default (Bold)"
            size="16"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '16px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Default (Medium)"
            size="16"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '16px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Default (Link)"
            size="16"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            transform="underline"
            style={{ fontSize: '16px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="UI – Default (Uppercase)"
            size="16"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="1%"
            transform="uppercase"
            style={{ fontSize: '16px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0.01em', textTransform: 'uppercase', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Bold)"
            size="13.33"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '13.33px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Medium)"
            size="13.33"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '13.33px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Link)"
            size="13.33"
            weight="400 Regular"
            lineHeight="120%"
            letterSpacing="1%"
            transform="underline"
            style={{ fontSize: '13.33px', fontWeight: 400, lineHeight: '120%', letterSpacing: '0.01em', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Link Uppercase)"
            size="13.33"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="1%"
            transform="underline, uppercase"
            style={{ fontSize: '13.33px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0.01em', textDecoration: 'underline', textTransform: 'uppercase', color: '#252525' }}
          />
          <TypeSample
            name="Eyebrow (Mobile)"
            size="13.33"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            transform="uppercase"
            style={{ fontSize: '13.33px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', textTransform: 'uppercase', color: '#616161' }}
          />
        </TypeCategory>

        {/* ──────────────── DESKTOP BODY ──────────────── */}
        <TypeCategory title="Desktop — Body Copy">
          <TypeSample
            name="Body – Large"
            size="23.04"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="0%"
            style={{ fontSize: '23.04px', fontWeight: 400, lineHeight: '150%', color: '#252525' }}
          />
          <TypeSample
            name="Body – Default"
            size="19.2"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="0%"
            style={{ fontSize: '19.2px', fontWeight: 400, lineHeight: '150%', color: '#252525' }}
          />
          <TypeSample
            name="Body – Small"
            size="16"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="0%"
            style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%', color: '#252525' }}
          />
        </TypeCategory>

        {/* ──────────────── MOBILE HEADERS ──────────────── */}
        <TypeCategory title="Mobile — Headers">
          <TypeSample
            name="Display 1 (Mobile)"
            size="47.78"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="-1%"
            style={{ fontSize: '47.78px', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.01em', color: '#252525' }}
          />
          <TypeSample
            name="H1 (Mobile)"
            size="39.81"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '39.81px', fontWeight: 700, lineHeight: '120%', color: '#252525' }}
          />
          <TypeSample
            name="H2 (Mobile)"
            size="33.18"
            weight="700 Bold"
            lineHeight="110%"
            letterSpacing="0%"
            style={{ fontSize: '33.18px', fontWeight: 700, lineHeight: '110%', color: '#252525' }}
          />
        </TypeCategory>

        {/* ──────────────── MOBILE BODY ──────────────── */}
        <TypeCategory title="Mobile — Body Copy">
          <TypeSample
            name="Body – Large (Mobile)"
            size="19.2"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="0%"
            style={{ fontSize: '19.2px', fontWeight: 400, lineHeight: '150%', color: '#252525' }}
          />
          <TypeSample
            name="Body – Default (Mobile)"
            size="16"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="1%"
            style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="Body – Small (Mobile)"
            size="13.33"
            weight="400 Regular"
            lineHeight="150%"
            letterSpacing="1%"
            style={{ fontSize: '13.33px', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.01em', color: '#252525' }}
          />
        </TypeCategory>

        {/* ──────────────── MOBILE UI ──────────────── */}
        <TypeCategory title="Mobile — UI">
          <TypeSample
            name="UI – Large (Bold)"
            size="19.2"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            style={{ fontSize: '19.2px', fontWeight: 700, lineHeight: '120%', color: '#252525' }}
          />
          <TypeSample
            name="UI – Large (Bold Strikethrough)"
            size="19.2"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="0%"
            transform="line-through"
            style={{ fontSize: '19.2px', fontWeight: 700, lineHeight: '120%', textDecoration: 'line-through', color: '#616161' }}
          />
          <TypeSample
            name="UI – Default (Bold)"
            size="14"
            weight="700 Bold"
            lineHeight="171%"
            letterSpacing="1%"
            style={{ fontSize: '14px', fontWeight: 700, lineHeight: '171%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Default (Medium)"
            size="14"
            weight="500 Medium"
            lineHeight="171%"
            letterSpacing="1%"
            style={{ fontSize: '14px', fontWeight: 500, lineHeight: '171%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Bold)"
            size="11.11"
            weight="700 Bold"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '11.11px', fontWeight: 700, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Medium)"
            size="11.11"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '11.11px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#252525' }}
          />
          <TypeSample
            name="UI – Small (Link)"
            size="11.11"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            transform="underline"
            style={{ fontSize: '11.11px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', textDecoration: 'underline', color: '#252525' }}
          />
          <TypeSample
            name="Eyebrow"
            size="16"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            transform="uppercase"
            style={{ fontSize: '16px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', textTransform: 'uppercase', color: '#252525' }}
          />
        </TypeCategory>

        {/* ──────────────── PRODUCT TILES ──────────────── */}
        <TypeCategory title="Product Tiles">
          <TypeSample
            name="Color Label"
            size="11.11"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '11.11px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#616161' }}
          />
          <TypeSample
            name="Price"
            size="11.11"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            style={{ fontSize: '11.11px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', color: '#616161' }}
          />
          <TypeSample
            name="Price Strikethrough"
            size="11.11"
            weight="500 Medium"
            lineHeight="120%"
            letterSpacing="1%"
            transform="line-through"
            style={{ fontSize: '11.11px', fontWeight: 500, lineHeight: '120%', letterSpacing: '0.01em', textDecoration: 'line-through', color: '#616161' }}
          />
        </TypeCategory>

      </div>
    </div>
  )
}
