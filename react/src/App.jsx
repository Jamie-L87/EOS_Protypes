import { useState } from 'react'
import './App.css'
import './styles/tokens.css'
import Accessibility from './sections/Accessibility'
import Colors from './sections/Colors'
import TypeStyles from './sections/TypeStyles'
import Buttons from './sections/Buttons'
import FormElements from './sections/FormElements'
import Inputs from './sections/Inputs'
import Messages from './sections/Messages'
import Icons from './sections/Icons'
import Spacing from './sections/Spacing'
import GridSystem from './sections/GridSystem'

function App() {
  const [activeSection, setActiveSection] = useState('accessibility')

  const sections = [
    { id: 'accessibility', label: 'Accessibility', component: Accessibility },
    { id: 'colors', label: 'Colors', component: Colors },
    { id: 'type-styles', label: 'Type Styles', component: TypeStyles },
    { id: 'buttons', label: 'Buttons', component: Buttons },
    { id: 'form-elements', label: 'Form Elements', component: FormElements },
    { id: 'inputs', label: 'Inputs', component: Inputs },
    { id: 'messages', label: 'Messages', component: Messages },
    { id: 'icons', label: 'Icons', component: Icons },
    { id: 'spacing', label: 'Spacing', component: Spacing },
    { id: 'grid-system', label: 'Grid System', component: GridSystem },
  ]

  return (
    <div className="styleguide-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>EOS Design System</h1>
          <p>Style Guide</p>
        </div>
        <ul className="section-list">
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`section-button ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <main className="main-content">
        {sections.find(s => s.id === activeSection)?.component && 
          sections.find(s => s.id === activeSection).component()}
      </main>
    </div>
  )
}

export default App
