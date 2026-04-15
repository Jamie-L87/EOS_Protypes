import './Messages.css'

/* Close icon as CSS */
function CloseIcon({ color }) {
  return (
    <span className="msg-close-icon" style={{ '--icon-color': color }} aria-label="Close" />
  )
}

/* Single notification bar */
function NotificationBar({ bg, textColor, message, state, iconColor }) {
  return (
    <div className="msg-state-col">
      <span className="msg-state-label">{state}</span>
      <div className="msg-bar" style={{ backgroundColor: bg }}>
        <span className="msg-text" style={{ color: textColor }}>{message}</span>
        <button className="msg-close-btn" aria-label="Close">
          <CloseIcon color={iconColor} />
        </button>
      </div>
    </div>
  )
}

/* A full row of Resting + Hover + Focus for one message type */
function MessageTypeRow({ type, bg, textColor, message, iconColorResting, iconColorHover, iconColorFocus }) {
  return (
    <div className="msg-type-block">
      <h3 className="msg-type-title">{type}</h3>
      <div className="msg-states-row">
        <NotificationBar
          state="Resting" bg={bg} textColor={textColor}
          message={message} iconColor={iconColorResting}
        />
        <NotificationBar
          state="Hover"   bg={bg} textColor={textColor}
          message={message} iconColor={iconColorHover}
        />
        <NotificationBar
          state="Focus"   bg={bg} textColor={textColor}
          message={message} iconColor={iconColorFocus}
        />
        <div className="msg-state-col msg-state-col--example">
          <span className="msg-state-label">Example in context</span>
          <div className="msg-bar msg-bar--example" style={{ backgroundColor: bg }}>
            <span className="msg-text" style={{ color: textColor }}>{message}</span>
            <button className="msg-close-btn" aria-label="Close">
              <CloseIcon color={iconColorResting} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Messages() {
  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Messages — Global</h2>
        <p className="section-desc">
          Notification bars with Resting, Hover, and Focus states. All bars are 480px wide,
          flex row, padding 0 10px, gap 20px, border-radius 4px.
        </p>
      </div>

      <div className="section-content">

        {/* ── Info / Notification ── */}
        <MessageTypeRow
          type="Notification — Info"
          bg="#E7EDEE"
          textColor="#283D28"
          message="Your message has been delivered successfully."
          iconColorResting="#252525"
          iconColorHover="#333333"
          iconColorFocus="#616161"
        />

        {/* ── Error ── */}
        <MessageTypeRow
          type="Notification — Error"
          bg="#F7F0F1"
          textColor="#8A223B"
          message="There was a problem completing your request."
          iconColorResting="#8A223B"
          iconColorHover="#8A223B"
          iconColorFocus="#8A223B"
        />

        {/* ── Warning ── */}
        <MessageTypeRow
          type="Notification — Warning"
          bg="#F6F4EA"
          textColor="#926D53"
          message="Please review the following before continuing."
          iconColorResting="#926D53"
          iconColorHover="#926D53"
          iconColorFocus="#926D53"
        />

      </div>
    </div>
  )
}
