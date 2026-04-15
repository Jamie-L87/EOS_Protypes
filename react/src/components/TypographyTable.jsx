import './TypographyTable.css'

export default function TypographyTable({ styles }) {
  return (
    <div className="typography-table">
      <table>
        <thead>
          <tr>
            <th>Style</th>
            <th>Size</th>
            <th>Weight</th>
            <th>Line-Height</th>
            <th>Letter Spacing</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {styles.map((style, idx) => (
            <tr key={idx}>
              <td className="style-name">{style.name}</td>
              <td>{style.size}</td>
              <td>{style.weight}</td>
              <td>{style.lineHeight}</td>
              <td>{style.letterSpacing}</td>
              <td className="example">{style.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
