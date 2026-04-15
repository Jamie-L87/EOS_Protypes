import './Buttons.css'

function StateLabel({ label }) {
  return <span className="btn-state-label">{label}</span>
}

function ButtonGroup({ title, children, dark }) {
  return (
    <div className={`btn-group ${dark ? 'btn-group--dark' : ''}`}>
      <h4 className="btn-group-title">{title}</h4>
      <div className="btn-states-row">{children}</div>
    </div>
  )
}

function BtnState({ name, children }) {
  return (
    <div className="btn-state-col">
      <StateLabel label={name} />
      {children}
    </div>
  )
}

const CloseIcon = ({ color = '#FFFFFF' }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <line x1="1" y1="1" x2="13" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="13" y1="1" x2="1" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const LockIcon = ({ color = '#FFFFFF' }) => (
  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" aria-hidden="true">
    <rect x="1" y="9" width="14" height="11" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M4 9V5.5C4 3.567 5.567 2 8 2C10.433 2 12 3.567 12 5.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="14.5" r="1.5" fill={color}/>
  </svg>
)

const ChevronUpIcon = ({ color = '#252525' }) => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
    <path d="M1 6L6 1L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = ({ color = '#252525' }) => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
    <path d="M1 1L6 6L11 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EllipsisIcon = ({ color = '#FFFFFF' }) => (
  <svg width="16" height="4" viewBox="0 0 16 4" fill="none" aria-hidden="true">
    <circle cx="2" cy="2" r="1.5" fill={color}/>
    <circle cx="8" cy="2" r="1.5" fill={color}/>
    <circle cx="14" cy="2" r="1.5" fill={color}/>
  </svg>
)

const TrashIcon = ({ color = '#252525' }) => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
    <path d="M1 4H13M5 4V2H9V4M2 4L3 16H11L12 4H2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AccountIcon = ({ color = '#252525' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="7" r="4" stroke={color} strokeWidth="1.5"/>
    <path d="M2 18C2 14.686 5.582 12 10 12C14.418 12 18 14.686 18 18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const ShoppingBagIcon = ({ color = '#FFFFFF' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 6H16L14 18H6L4 6Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 6V4C7 2.343 8.343 1 10 1C11.657 1 13 2.343 13 4V6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function Buttons() {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Buttons — Global</h2>
        <p className="section-desc">All button variants with Resting, Hover, and Select states. Font: Meta Offc Bold.</p>
      </div>

      <div className="section-content">

        {/* ── 1. LARGE BUTTON — FILL ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Large Button — Fill</h3>
          <p className="btn-family-desc">375×55px · 16px Bold · border-radius 4px resting / 5px hover+select</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-lf btn-lf-dark">Add to Cart</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lf btn-lf-dark btn-lf-dark--hover">Add to Cart</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lf btn-lf-dark btn-lf-dark--select">Add to Cart</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-lf btn-lf-light">Add to Cart</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lf btn-lf-light btn-lf-light--hover">Add to Cart</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lf btn-lf-light btn-lf-light--select">Add to Cart</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 2. LARGE BUTTON — FILL + ICON LEFT ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Large Button — Fill + Icon Left</h3>
          <p className="btn-family-desc">360×55px · 16px Bold · Lock icon (16×21px) left · border-radius 4px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-lfil btn-lfil-dark">
                  <span className="btn-lfil-icon"><LockIcon color="#FFFFFF" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lfil btn-lfil-dark btn-lfil-dark--hover">
                  <span className="btn-lfil-icon"><LockIcon color="#FFFFFF" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lfil btn-lfil-dark btn-lfil-dark--select">
                  <span className="btn-lfil-icon"><LockIcon color="#FFFFFF" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-lfil btn-lfil-light">
                  <span className="btn-lfil-icon"><LockIcon color="#252525" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lfil btn-lfil-light btn-lfil-light--hover">
                  <span className="btn-lfil-icon"><LockIcon color="#252525" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lfil btn-lfil-light btn-lfil-light--select">
                  <span className="btn-lfil-icon"><LockIcon color="#252525" /></span>
                  <span className="btn-lfil-text">Checkout</span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 3. LARGE BUTTON — STROKE ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Large Button — Stroke</h3>
          <p className="btn-family-desc">375×55px · 16px Bold · border-radius 5px · Hover/Select fills solid</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-ls btn-ls-dark">View Cart</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-ls btn-ls-dark btn-ls-dark--hover">View Cart</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-ls btn-ls-dark btn-ls-dark--select">View Cart</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-ls btn-ls-light">View Cart</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-ls btn-ls-light btn-ls-light--hover">View Cart</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-ls btn-ls-light btn-ls-light--select">View Cart</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 4. LARGE BUTTON — ICON (50×50) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Large Button — Icon</h3>
          <p className="btn-family-desc">50×50px · Close (×) icon 18×18px · border-radius 5px · No border</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-li btn-li-dark" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-li btn-li-dark btn-li-dark--hover" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-li btn-li-dark btn-li-dark--select" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-li btn-li-light" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-li btn-li-light btn-li-light--hover" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-li btn-li-light btn-li-light--select" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 5. LARGE BUTTON — FILL + ICON RIGHT (337×54) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Large Button — Fill + Icon Right</h3>
          <p className="btn-family-desc">337×54px · 16px Bold · Text left · Ellipsis icon right · Padding 5px 10px 5px 25px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-lfir btn-lfir-dark">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lfir btn-lfir-dark btn-lfir-dark--hover">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lfir btn-lfir-dark btn-lfir-dark--select">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-lfir btn-lfir-light">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-lfir btn-lfir-light btn-lfir-light--hover">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-lfir btn-lfir-light btn-lfir-light--select">
                  <span className="btn-lfir-text">Explore All</span>
                  <span className="btn-lfir-icon"><EllipsisIcon color="#252525" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 6. DEFAULT BUTTON — FILL (132×55) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Fill</h3>
          <p className="btn-family-desc">132×55px · 16px Bold · Padding 18px 30px · border-radius 5px · Dark/Red/Light</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-df btn-df-dark">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-df btn-df-dark btn-df-dark--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-df btn-df-dark btn-df-dark--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Red">
              <BtnState name="Resting">
                <button className="btn-df btn-df-red">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-df btn-df-red btn-df-red--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-df btn-df-red btn-df-red--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-df btn-df-light">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-df btn-df-light btn-df-light--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-df btn-df-light btn-df-light--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 7. DEFAULT BUTTON — STROKE (132×55) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Stroke</h3>
          <p className="btn-family-desc">132×55px · 16px Bold · Dark hover fills to #252525 · Dark select fills to #333333</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-dstroke btn-dstroke-dark">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dstroke btn-dstroke-dark btn-dstroke-dark--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dstroke btn-dstroke-dark btn-dstroke-dark--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-dstroke btn-dstroke-light">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dstroke btn-dstroke-light btn-dstroke-light--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dstroke btn-dstroke-light btn-dstroke-light--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 8. DEFAULT BUTTON — STROKE + ICON LEFT (164×50) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Stroke + Icon Left</h3>
          <p className="btn-family-desc">164×50px · 16px Bold · Chevron-up icon · Padding 3px 10px · Gap 4px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Default (Dark)">
              <BtnState name="Resting">
                <button className="btn-dsil btn-dsil-dark">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#252525" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsil btn-dsil-dark btn-dsil-dark--hover">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#FFFFFF" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsil btn-dsil-dark btn-dsil-dark--select">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#FFFFFF" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-dsil btn-dsil-light">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#FAFAFA" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsil btn-dsil-light btn-dsil-light--hover">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#252525" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsil btn-dsil-light btn-dsil-light--select">
                  <span className="btn-dsil-icon"><ChevronUpIcon color="#252525" /></span>
                  <span className="btn-dsil-text">Explore All</span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 9. DEFAULT BUTTON — STROKE + ICON RIGHT (164×50) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Stroke + Icon Right</h3>
          <p className="btn-family-desc">164×50px · 16px Bold · Chevron-down right · 16px spacer left · Hover dark: #45464D (not #333333)</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-dsir btn-dsir-dark">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsir btn-dsir-dark btn-dsir-dark--hover">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsir btn-dsir-dark btn-dsir-dark--select">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-dsir btn-dsir-light">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#FAFAFA" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsir btn-dsir-light btn-dsir-light--hover">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsir btn-dsir-light btn-dsir-light--select">
                  <span className="btn-dsir-text">Explore All</span>
                  <span className="btn-dsir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 10. DEFAULT BUTTON — STROKE — ICON SQUARE (50×50) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Stroke — Icon Square</h3>
          <p className="btn-family-desc">50×50px · Close (×) 14×14px · Dark: border 2px solid #252525 · Light: border 2px solid #EBEBEB</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-dsis btn-dsis-dark" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsis btn-dsis-dark btn-dsis-dark--hover" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsis btn-dsis-dark btn-dsis-dark--select" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-dsis btn-dsis-light" aria-label="Close"><CloseIcon color="#FAFAFA" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-dsis btn-dsis-light btn-dsis-light--hover" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-dsis btn-dsis-light btn-dsis-light--select" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 11. DEFAULT BUTTON — GHOST — ICON (44×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Button — Ghost — Icon</h3>
          <p className="btn-family-desc">44×44px · No border · Account icon fills ~31.82% inset · Transparent background</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark / Hover / Select">
              <BtnState name="Dark">
                <button className="btn-ghost" aria-label="Account"><AccountIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-ghost" aria-label="Account"><AccountIcon color="#333333" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-ghost" aria-label="Account"><AccountIcon color="#616161" /></button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light / Variant3" dark>
              <BtnState name="Light">
                <button className="btn-ghost" aria-label="Account"><AccountIcon color="#FFFFFF" /></button>
              </BtnState>
              <BtnState name="Variant3">
                <button className="btn-ghost" aria-label="Account"><AccountIcon color="#252525" /></button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 12. SHOP BY ROOM — BLUR ICON (138×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Shop by Room — Blur Icon</h3>
          <p className="btn-family-desc">138×44px · bg rgba(37,37,37,0.7) · backdrop-filter blur(2.5px) · border-radius 5px · 13.33px Bold</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Resting / Select" dark>
              <BtnState name="Resting">
                <button className="btn-sbr">
                  <span className="btn-sbr-icon"><ShoppingBagIcon color="#FFFFFF" /></span>
                  <span className="btn-sbr-text">View Products</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-sbr">
                  <span className="btn-sbr-icon"><ShoppingBagIcon color="#FFFFFF" /></span>
                  <span className="btn-sbr-text">View Products</span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 13. DEFAULT TEXT LINK — UI ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Default Text Link — UI</h3>
          <p className="btn-family-desc">Padding 12px 0 · 16px Regular · Underline · Hover dark: #45464D · No background</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <a className="btn-tlink btn-tlink-dark" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-tlink btn-tlink-dark--hover" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-tlink btn-tlink-dark--select" href="#">Move to Favorites</a>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <a className="btn-tlink btn-tlink-light" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-tlink btn-tlink-light--hover" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-tlink btn-tlink-light--select" href="#">Move to Favorites</a>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 14. MOBILE SMALL BUTTON — STROKE + ICON LEFT (169×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Mobile Small Button — Stroke + Icon Left</h3>
          <p className="btn-family-desc">169×44px · 13.33px Bold · Arrow-down icon 12×12px · Border 1.5px · Dark resting border: #1B1B1B · Dark hover: #45464D</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-msil btn-msil-dark">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#252525" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msil btn-msil-dark btn-msil-dark--hover">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msil btn-msil-dark btn-msil-dark--select">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-msil btn-msil-light">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#FAFAFA" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msil btn-msil-light btn-msil-light--hover">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#252525" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msil btn-msil-light btn-msil-light--select">
                  <span className="btn-msil-icon"><ChevronDownIcon color="#252525" /></span>
                  <span className="btn-msil-text">Jump to All Products</span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 15. MOBILE SMALL BUTTON — STROKE — ICON SQUARE (44×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Mobile Small Button — Stroke — Icon Square</h3>
          <p className="btn-family-desc">44×44px outer · 41×41px inner stroke · Close icon · Dark hover: #45464D · Light hover: #FAFAFA fill</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-msis btn-msis-dark" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msis btn-msis-dark btn-msis-dark--hover" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msis btn-msis-dark btn-msis-dark--select" aria-label="Close"><CloseIcon color="#FFFFFF" /></button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-msis btn-msis-light" aria-label="Close"><CloseIcon color="#FAFAFA" /></button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msis btn-msis-light btn-msis-light--hover" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msis btn-msis-light btn-msis-light--select" aria-label="Close"><CloseIcon color="#252525" /></button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 16. MOBILE BUTTON — STROKE (88×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Mobile Button — Stroke</h3>
          <p className="btn-family-desc">88×44px · 13.33px Bold · Border 1.5px solid · Padding 13px 10px 12px · Gap 5px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-ms btn-ms-dark">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-ms btn-ms-dark btn-ms-dark--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-ms btn-ms-dark btn-ms-dark--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-ms btn-ms-light">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-ms btn-ms-light btn-ms-light--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-ms btn-ms-light btn-ms-light--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 17. MOBILE BUTTON — STROKE + ICON RIGHT (127×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Mobile Button — Stroke + Icon Right</h3>
          <p className="btn-family-desc">127×44px · 13.33px Bold · Dropdown icon 44×44 right · Padding 0 0 0 15px · Border 2px solid</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-msir btn-msir-dark">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msir btn-msir-dark btn-msir-dark--hover">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msir btn-msir-dark btn-msir-dark--select">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#FFFFFF" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-msir btn-msir-light">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#FAFAFA" /></span>
                </button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-msir btn-msir-light btn-msir-light--hover">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-msir btn-msir-light btn-msir-light--select">
                  <span className="btn-msir-text">Explore All</span>
                  <span className="btn-msir-icon"><ChevronDownIcon color="#252525" /></span>
                </button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 18. MOBILE BUTTON — FILL (88×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Mobile Button — Fill</h3>
          <p className="btn-family-desc">88×44px · 13.33px Bold · Padding 13px 10px 12px · border-radius 5px · Dark/Red/Light</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <button className="btn-mf btn-mf-dark">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-mf btn-mf-dark btn-mf-dark--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-mf btn-mf-dark btn-mf-dark--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Red">
              <BtnState name="Resting">
                <button className="btn-mf btn-mf-red">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-mf btn-mf-red btn-mf-red--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-mf btn-mf-red btn-mf-red--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <button className="btn-mf btn-mf-light">Shop Now</button>
              </BtnState>
              <BtnState name="Hover">
                <button className="btn-mf btn-mf-light btn-mf-light--hover">Shop Now</button>
              </BtnState>
              <BtnState name="Select">
                <button className="btn-mf btn-mf-light btn-mf-light--select">Shop Now</button>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 19. SMALL TEXT LINK — UI ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Small Text Link — UI</h3>
          <p className="btn-family-desc">13.33px Bold · Uppercase · Underline · Padding 12px 0 · Hover dark: #45464D</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <a className="btn-stlink btn-stlink-dark" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-stlink btn-stlink-dark--hover" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-stlink btn-stlink-dark--select" href="#">Move to Favorites</a>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <a className="btn-stlink btn-stlink-light" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-stlink btn-stlink-light--hover" href="#">Move to Favorites</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-stlink btn-stlink-light--select" href="#">Move to Favorites</a>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 20. SMALL TEXT LINK — UI + ICON LEFT (152×44) ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Small Text Link — UI + Icon Left</h3>
          <p className="btn-family-desc">152×44px · Trash icon 14×18px · 13.33px Bold Uppercase · Padding 0 15px 0 0 · Gap 8px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <a className="btn-stlil btn-stlil-dark" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#252525" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-stlil btn-stlil-dark--hover" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#252525" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-stlil btn-stlil-dark--select" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#252525" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <a className="btn-stlil btn-stlil-light" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#FAFAFA" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-stlil btn-stlil-light--hover" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#F6F6F6" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-stlil btn-stlil-light--select" href="#">
                  <span className="btn-stlil-icon"><TrashIcon color="#EBEBEB" /></span>
                  <span className="btn-stlil-text">Move to Favorites</span>
                </a>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 21. TEXT LINK — UI — UPPERCASE ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Text Link — UI — Uppercase</h3>
          <p className="btn-family-desc">13.33px Bold · Uppercase · Underline · Padding 13px 0 · Hover dark: #333333 (not #45464D)</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <a className="btn-tlup btn-tlup-dark" href="#">promo</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-tlup btn-tlup-dark--hover" href="#">promo</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-tlup btn-tlup-dark--select" href="#">promo</a>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <a className="btn-tlup btn-tlup-light" href="#">promo</a>
              </BtnState>
              <BtnState name="Hover">
                <a className="btn-tlup btn-tlup-light--hover" href="#">promo</a>
              </BtnState>
              <BtnState name="Select">
                <a className="btn-tlup btn-tlup-light--select" href="#">promo</a>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 22. BADGE ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Badge</h3>
          <p className="btn-family-desc">49×29px · 11.11px Bold Uppercase · Padding 8px 13px · Transparent fill · Pin-Line border</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Property 1 = Dark">
              <BtnState name="Resting">
                <span className="badge badge-dark">NEW</span>
              </BtnState>
            </ButtonGroup>
            <ButtonGroup title="Property 1 = Light" dark>
              <BtnState name="Resting">
                <span className="badge badge-light">NEW</span>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

        {/* ── 23. TOOL TIP ── */}
        <div className="btn-family">
          <h3 className="btn-family-title">Tool Tip</h3>
          <p className="btn-family-desc">104×40px · bg #252525 · 13.33px Bold · text #FAFAFA · border-radius 5px</p>
          <div className="btn-variants-row">
            <ButtonGroup title="Resting">
              <BtnState name="Resting">
                <span className="btn-tooltip">Out of stock</span>
              </BtnState>
            </ButtonGroup>
          </div>
        </div>

      </div>
    </div>
  )
}
