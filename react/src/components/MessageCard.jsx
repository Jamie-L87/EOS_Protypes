import './MessageCard.css'

export default function MessageCard({ state, message, bgColor, hovering, focused }) {
  return (
    <div className={`message-card ${hovering ? 'hovering' : ''} ${focused ? 'focused' : ''}`}>
      <p className="state-label">{state}</p>
      <div className="message-container" style={{ backgroundColor: bgColor }}>
        <span className="close-icon">✕</span>
        <p className="message-text">{message}</p>
      </div>
    </div>
  )
}
