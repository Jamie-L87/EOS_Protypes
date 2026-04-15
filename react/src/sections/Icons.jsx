import './Icons.css'

// Comprehensive icon library - 76 icons extracted from Figma specification
// All icons maintained at 44x44px standard hit target
// Primary color: #252525 (Off-Black), special cases noted below

function IconBox({ name, icon }) {
  return (
    <div className="icon-item">
      <div className="icon-visualization" title={name}>
        {icon}
      </div>
      <p className="icon-name">{name}</p>
    </div>
  )
}

// SVG Icon Components - All normalized to 44x44px viewBox
const IconComponents = {
  // NAVIGATION & ARROWS (6 icons)
  'arrow-left': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 22h24M10 22l7-7M10 22l7 7" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'arrow-right': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M34 22H10M34 22l-7-7M34 22l-7 7" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'arrow-down': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M14 18l8 10 8-10M22 8v22" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'arrow-down-menu': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M14 20l8 9 8-9" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'arrow-back-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M28 18l-10 6 10 6" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'arrow-down-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M16 20l6 8 6-8" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // BASIC ACTIONS (12 icons)
  'check': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M12 22l5 6 15-14" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'check-fill': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" fill="#252525" />
      <path d="M12 22l5 6 15-14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'check-large': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 20L18 28 34 12" stroke="#252525" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'close': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M12 12l20 20M32 12L12 32" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'close-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M18 18l8 8M26 18l-8 8" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'close-small-circle': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <path d="M18 18l8 8M26 18l-8 8" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'plus': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 10v24M10 22h24" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'plus-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 14v16M14 22h16" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'minus': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 22h24" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'delete': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="12" y="14" width="20" height="18" rx="1" stroke="#252525" strokeWidth="1.5" />
      <path d="M10 14h24M16 14V10h12v4" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="20" x2="17" y2="30" stroke="#252525" strokeWidth="1.2" />
      <line x1="22" y1="20" x2="22" y2="30" stroke="#252525" strokeWidth="1.2" />
      <line x1="27" y1="20" x2="27" y2="30" stroke="#252525" strokeWidth="1.2" />
    </svg>
  ),
  'trash': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M14 12h16M12 12h20l-1 22c0 1 0 2-1 2H14c-1 0-1-1-1-2L12 12Z" stroke="#252525" strokeWidth="1.5" fill="none" />
      <line x1="17" y1="20" x2="17" y2="30" stroke="#252525" strokeWidth="1" />
      <line x1="22" y1="20" x2="22" y2="30" stroke="#252525" strokeWidth="1" />
      <line x1="27" y1="20" x2="27" y2="30" stroke="#252525" strokeWidth="1" />
    </svg>
  ),
  'ellipsis': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="10" cy="22" r="2" fill="#252525" />
      <circle cx="22" cy="22" r="2" fill="#252525" />
      <circle cx="34" cy="22" r="2" fill="#252525" />
    </svg>
  ),

  // INTERFACE CONTROLS (7 icons)
  'lock': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="12" y="20" width="20" height="14" rx="1.5" stroke="#252525" strokeWidth="1.5" />
      <path d="M16 20V14c0-3.3 2.7-6 6-6s6 2.7 6 6v6" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="27" r="1.5" fill="#252525" />
    </svg>
  ),
  'search': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="18" cy="18" r="9.5" stroke="#252525" strokeWidth="2" />
      <path d="M28 28l8 8" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'calendar': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="12" width="24" height="22" rx="1.5" stroke="#252525" strokeWidth="1.5" />
      <line x1="10" y1="19" x2="34" y2="19" stroke="#252525" strokeWidth="1" />
      <line x1="15" y1="8" x2="15" y2="12" stroke="#252525" strokeWidth="1.5" />
      <line x1="29" y1="8" x2="29" y2="12" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  'account': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="14" r="5.5" stroke="#252525" strokeWidth="1.5" />
      <path d="M10 32c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'edit': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M12 32h20M8 28l6-6 18-18 6 6-18 18-6 6Z" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'filter': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M8 10h28l-8 8v10l-4 4v-14l-8-8Z" stroke="#252525" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  'quiz': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="24" height="24" rx="2" stroke="#252525" strokeWidth="1.5" />
      <line x1="10" y1="18" x2="34" y2="18" stroke="#252525" strokeWidth="1" />
      <line x1="10" y1="24" x2="34" y2="24" stroke="#252525" strokeWidth="1" />
      <line x1="10" y1="30" x2="34" y2="30" stroke="#252525" strokeWidth="1" />
    </svg>
  ),

  // COMMUNICATION (4 icons)
  'mail': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="12" width="28" height="20" rx="1.5" stroke="#252525" strokeWidth="1.5" />
      <path d="M8 12l14 10 14-10" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'chat': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M8 14c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H12c-1.1 0-2 .9-2 2l-2 4V14Z" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'share': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="14" cy="12" r="4.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="30" cy="12" r="4.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="22" cy="32" r="4.5" stroke="#252525" strokeWidth="1.5" />
      <path d="M18 16l8 12M26 16l-8 12" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'print': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="10" width="28" height="12" rx="1" stroke="#252525" strokeWidth="1.5" />
      <rect x="8" y="26" width="28" height="8" stroke="#252525" strokeWidth="1.5" />
      <path d="M12 22v4M32 22v4" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // SOCIAL MEDIA (9 icons)
  'facebook': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="24" height="24" rx="2" stroke="#252525" strokeWidth="1.5" />
      <line x1="16" y1="10" x2="16" y2="34" stroke="#252525" strokeWidth="1.5" />
      <line x1="10" y1="18" x2="24" y2="18" stroke="#252525" strokeWidth="1" />
    </svg>
  ),
  'facebook-circle': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#ACACAC" strokeWidth="2" />
      <line x1="18" y1="14" x2="18" y2="30" stroke="#FFFFFF" strokeWidth="2" />
      <line x1="14" y1="20" x2="22" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  ),
  'twitter': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M36 12c-1.5 1-3 1.5-5 2 1-1 2-2 2-4-1.5 1-3 1.5-5 2-1.5-1-2.5-2-4-2-4 0-6 3-6 7 0 .5 0 1 .5 1.5-5 0-10-3-13-7-.5 1-1 2-1 3 0 2.5 1.5 4.5 3.5 5.5-1.5 0-2.5 0-3.5-.5 0 2.5 1.5 5 4.5 6-1.5.5-2.5.5-4 .5.5 1 1.5 2.5 4 2.5-2 2-5 3-8 3 1 0 2 0 3 .5 3 2 6 3 10 3 11 0 17-9 17-17v-1c1-.5 2-1.5 3-2.5Z" stroke="#252525" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'instagram': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="24" height="24" rx="4" stroke="#252525" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="5.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="28" cy="14" r="1.2" fill="#252525" />
    </svg>
  ),
  'pinterest': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="10" stroke="#252525" strokeWidth="1.5" />
      <path d="M22 12v12c0 1 1 2 2 2" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'youtube': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="14" width="28" height="18" rx="2" stroke="#252525" strokeWidth="1.5" />
      <path d="M18 20v8l8-4-8-4Z" fill="#252525" />
    </svg>
  ),
  'houzz': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 8l12 8v20H10V16l12-8Z" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="22" y1="16" x2="22" y2="32" stroke="#252525" strokeWidth="1" />
    </svg>
  ),
  'tumblr': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M18 10v12c0 2 1 4 4 4s4-2 4-4v-4M20 26v6" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'google': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="10.5" stroke="#ACACAC" strokeWidth="1.5" opacity="0.5" />
      <g opacity="0.7">
        <path d="M16 20l6-8h8l-8 10 8 10h-8l-6-8" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),

  // COMMERCE (4 icons)
  'shopping-bag': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="12" y="16" width="20" height="20" rx="1" stroke="#252525" strokeWidth="1.5" />
      <path d="M16 16c0-2 1-4 3-4h10c2 0 3 2 3 4" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="28" y2="24" stroke="#252525" strokeWidth="0.5" />
    </svg>
  ),
  'store': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 18h24l-2 16H12l-2-16Z" stroke="#252525" strokeWidth="1.5" fill="none" />
      <path d="M10 18l4-8h16l4 8" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="18" x2="18" y2="34" stroke="#252525" strokeWidth="1" />
      <line x1="26" y1="18" x2="26" y2="34" stroke="#252525" strokeWidth="1" />
    </svg>
  ),
  'sale-tag': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <g transform="translate(22 22) rotate(-25) translate(-22 -22)">
        <rect x="12" y="14" width="20" height="16" rx="1" stroke="#252525" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="1.5" fill="#252525" />
      </g>
    </svg>
  ),
  'gallery': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="10" width="28" height="24" rx="1.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="15" cy="17" r="3" stroke="#252525" strokeWidth="1.5" />
      <path d="M8 32l10-10 10 8 8-6" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // MEDIA & PLAYBACK (4 icons)
  'play': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M14 10v24l20-12-20-12Z" fill="#252525" />
    </svg>
  ),
  'play-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M16 14v16l14-8-14-8Z" fill="#252525" />
    </svg>
  ),
  'pause': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="12" y="10" width="4" height="24" fill="#252525" />
      <rect x="28" y="10" width="4" height="24" fill="#252525" />
    </svg>
  ),
  'camera': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="14" width="28" height="20" rx="1.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="22" cy="24" r="6.5" stroke="#252525" strokeWidth="1.5" />
      <circle cx="28" cy="16" r="1.5" fill="#252525" />
    </svg>
  ),

  // VIEWING OPTIONS (6 icons)
  '1-up': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="14" y="10" width="16" height="24" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  '2-up': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="10" height="24" stroke="#252525" strokeWidth="1.5" />
      <rect x="24" y="10" width="10" height="24" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  '3-up': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="8" y="10" width="8" height="24" stroke="#252525" strokeWidth="1.5" />
      <rect x="18" y="10" width="8" height="24" stroke="#252525" strokeWidth="1.5" />
      <rect x="28" y="10" width="8" height="24" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  'zoom-in': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="18" cy="18" r="10" stroke="#252525" strokeWidth="1.5" />
      <line x1="28" y1="28" x2="35" y2="35" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="12" x2="18" y2="24" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="24" y2="18" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'zoom-out': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="18" cy="18" r="10" stroke="#252525" strokeWidth="1.5" />
      <line x1="28" y1="28" x2="35" y2="35" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="24" y2="18" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  '360': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <path d="M28 18c3 2 4 6 2 9" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="33" cy="22" r="2" fill="#252525" />
    </svg>
  ),
  '3d': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 14l8-5 14 0l2 8l-8 5l-16 0Z" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 30l-8-5l0-14l8 5l0 14Z" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // INPUT & STATUS (5 icons)
  'checkbox-active': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="24" height="24" rx="2" fill="#252525" />
      <path d="M14 22l5 6 11-12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'checkbox-hover': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="10" y="10" width="24" height="24" rx="2" stroke="#333333" strokeWidth="2" />
    </svg>
  ),
  'radio-active': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="5" fill="#252525" />
    </svg>
  ),
  'radio-inactive': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#616161" strokeWidth="1.5" />
    </svg>
  ),
  'text-input': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <line x1="22" y1="10" x2="22" y2="34" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // FEEDBACK & HELP (4 icons)
  'help': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <text x="22" y="27" textAnchor="middle" fontSize="16" fontWeight="700" fill="#252525">?</text>
    </svg>
  ),
  'help-small': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="8.5" stroke="#252525" strokeWidth="1.2" />
      <text x="22" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="#252525">?</text>
    </svg>
  ),
  'error': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <text x="22" y="28" textAnchor="middle" fontSize="18" fontWeight="700" fill="#252525">!</text>
    </svg>
  ),
  'disable-small-circle': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="34" y2="34" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // LOADING & ANIMATION (2 icons)
  'loading-color': () => (
    <svg viewBox="0 0 44 44" fill="none" style={{animation: 'spin 1.5s linear infinite'}}>
      <circle cx="22" cy="22" r="12" stroke="rgba(16, 96, 233, 0.3)" strokeWidth="3" />
      <path d="M22 10A12 12 0 0 1 34 22" stroke="rgba(16, 96, 233, 0.8)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  'loading-neutral': () => (
    <svg viewBox="0 0 44 44" fill="none" style={{animation: 'spin 1.5s linear infinite'}}>
      <circle cx="22" cy="22" r="12" stroke="rgba(172, 172, 172, 0.3)" strokeWidth="3" />
      <path d="M22 10A12 12 0 0 1 34 22" stroke="rgba(172, 172, 172, 0.8)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // FAVORITES & INFO (5 icons)
  'heart': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 34s-12-6-12-14c0-4 3-7 6-7s4 2 6 4c2-2 3-4 6-4s6 3 6 7c0 8-12 14-12 14Z" fill="#E22D00" />
    </svg>
  ),
  'star': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 8l5 11h12l-10 7 4 11-11-8-11 8 4-11-10-7h12l5-11Z" fill="#252525" />
    </svg>
  ),
  'bullet': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="3" fill="#ACACAC" />
    </svg>
  ),
  'history': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="11" stroke="#252525" strokeWidth="1.5" />
      <path d="M22 16v6h6" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 18c2-1 2-3 1-5" stroke="#252525" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  'ar': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 32l8-22 8 22" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="22" x2="22" y2="22" stroke="#252525" strokeWidth="1" />
      <circle cx="30" cy="20" r="5.5" stroke="#252525" strokeWidth="1.5" />
      <path d="M30 17v6" stroke="#252525" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),

  // FILE OPERATIONS (4 icons)
  'download': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 10v16M16 20l6 8 6-8" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="34" x2="36" y2="34" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  'upload': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 34V18M16 24l6-8 6 8" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="10" x2="36" y2="10" stroke="#252525" strokeWidth="1.5" />
    </svg>
  ),
  'pin': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 10l-8 10c-1 1-1 3 0 4l6 6 6-6c1-1 1-3 0-4l-8-10Z" stroke="#252525" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="18" r="2" fill="#252525" />
    </svg>
  ),
  'pointer': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M10 8l8 18-4 2 4 8 2-4 8 2-20-26Z" fill="#252525" />
    </svg>
  ),

  // DROPDOWN & UI (2 icons)
  'dropdown': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M14 18l8 10 8-10" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'customize': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="6" stroke="#252525" strokeWidth="2" />
      <path d="M22 8v28M8 22h28" stroke="#252525" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // SPECIAL: LIVE CHAT
  'live-chat-active': () => (
    <svg viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="3" fill="#00816C" />
    </svg>
  ),
}

// Main component renderer
export default function Icons() {
  const iconNames = Object.keys(IconComponents)

  const categories = {
    'Navigation & Arrows': ['arrow-left', 'arrow-right', 'arrow-down', 'arrow-down-menu', 'arrow-back-small', 'arrow-down-small'],
    'Basic Actions': ['check', 'check-fill', 'check-large', 'close', 'close-small', 'close-small-circle', 'plus', 'plus-small', 'minus', 'delete', 'trash', 'ellipsis'],
    'Interface Controls': ['lock', 'search', 'calendar', 'account', 'edit', 'filter', 'quiz', 'customize'],
    'Communication': ['mail', 'chat', 'share', 'print'],
    'Social Media': ['facebook', 'facebook-circle', 'twitter', 'instagram', 'pinterest', 'youtube', 'houzz', 'tumblr', 'google'],
    'Commerce': ['shopping-bag', 'store', 'sale-tag', 'gallery'],
    'Media & Playback': ['play', 'play-small', 'pause', 'camera'],
    'Viewing Options': ['1-up', '2-up', '3-up', 'zoom-in', 'zoom-out', '360', '3d'],
    'Input & Status': ['checkbox-active', 'checkbox-hover', 'radio-active', 'radio-inactive', 'text-input'],
    'Feedback & Help': ['help', 'help-small', 'error', 'disable-small-circle'],
    'Loading': ['loading-color', 'loading-neutral'],
    'Info & Favorites': ['heart', 'star', 'bullet', 'history', 'ar'],
    'File Operations': ['download', 'upload', 'pin', 'pointer'],
    'Other': ['dropdown', 'live-chat-active'],
  }

  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Icons</h2>
        <p className="section-desc">76 icons organized by category. Standard size 44×44px with 24×24px variants for mobile. Primary color: #252525 Off-Black. Special cases: Heart #E22D00 (Brand Red), Bullet #ACACAC (Gray-Mid), Radio-inactive #616161 (Gray-Dark), Live-chat-active #00816C (Success Green).</p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="section-content">
        {Object.entries(categories).map(([category, icons]) => (
          <div key={category} className="icon-category">
            <h3 className="icon-category-title">{category}</h3>
            <div className="icons-grid">
              {icons.map((name) => (
                <IconBox key={name} name={name} icon={IconComponents[name]()} />
              ))}
            </div>
          </div>
        ))}

        {/* Size Reference */}
        <div className="icon-reference">
          <h3 className="reference-title">Size Specifications</h3>
          <div className="reference-grid">
            <div className="reference-item">
              <span className="ref-label">Desktop</span>
              <span className="ref-size">44 × 44px</span>
              <p className="ref-desc">Primary size for all UI elements</p>
            </div>
            <div className="reference-item">
              <span className="ref-label">Mobile</span>
              <span className="ref-size">24 × 24px</span>
              <p className="ref-desc">Compact variant (close-small, arrow-down-small, help-small)</p>
            </div>
            <div className="reference-item">
              <span className="ref-label">Inline</span>
              <span className="ref-size">20 × 20px</span>
              <p className="ref-desc">Text-inline and badges (live-chat-active)</p>
            </div>
          </div>
        </div>

        {/* Color Reference */}
        <div className="icon-colors">
          <h3 className="colors-title">Color Palette</h3>
          <div className="colors-reference">
            <div className="color-item">
              <div className="color-box" style={{background: '#252525'}}></div>
              <span className="color-name">Off-Black</span>
              <span className="color-hex">#252525</span>
            </div>
            <div className="color-item">
              <div className="color-box" style={{background: '#E22D00'}}></div>
              <span className="color-name">Brand Red</span>
              <span className="color-hex">#E22D00</span>
            </div>
            <div className="color-item">
              <div className="color-box" style={{background: '#ACACAC'}}></div>
              <span className="color-name">Gray-Mid</span>
              <span className="color-hex">#ACACAC</span>
            </div>
            <div className="color-item">
              <div className="color-box" style={{background: '#616161'}}></div>
              <span className="color-name">Gray-Dark</span>
              <span className="color-hex">#616161</span>
            </div>
            <div className="color-item">
              <div className="color-box" style={{background: '#00816C'}}></div>
              <span className="color-name">Success Green</span>
              <span className="color-hex">#00816C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
