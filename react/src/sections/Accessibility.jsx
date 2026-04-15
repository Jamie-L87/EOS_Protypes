import SectionTemplate from '../components/SectionTemplate'

export default function Accessibility() {
  const guidelines = [
    {
      title: 'Development & design adheres to WCAG 2.1',
      description: 'All components follow Web Content Accessibility Guidelines 2.1 standards'
    },
    {
      title: 'Ensure minimum color contrast ratios',
      description: 'Maintain AAA level contrast ratios where possible for readability'
    },
    {
      title: 'Utilizing 44px min target states (AAA) where possible',
      description: 'Touch targets should be at least 44x44px for accessibility'
    },
    {
      title: 'All focus states should also include default browser focus',
      description: 'Keyboard navigation must be clearly visible with default browser focus indicators'
    }
  ]

  return (
    <SectionTemplate
      title="Accessibility"
      subtitle="Accessibility — Global"
      wcagLink="https://www.w3.org/TR/WCAG21/"
      highlights={guidelines}
    />
  )
}
