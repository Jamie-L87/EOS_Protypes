import './Colors.css'

function Swatch({ name, value, hasBorder }) {
  const isTransparent = value.startsWith('rgba') || value.startsWith('rgb')
  const borderStyle = hasBorder ? `1px solid ${hasBorder}` : (isTransparent ? '1px solid #EBEBEB' : 'none')
  
  return (
    <div className="color-swatch-card">
      <div
        className="color-swatch-box"
        style={{ background: value, border: borderStyle }}
      />
      <div className="color-swatch-info">
        <span className="color-name">{name}</span>
        <span className="color-value">{value}</span>
      </div>
    </div>
  )
}

function ColorGroup({ title, colors }) {
  return (
    <div className="color-group">
      <h3 className="color-group-title">{title}</h3>
      <div className="color-swatches">
        {colors.map(c => <Swatch key={c.name} {...c} />)}
      </div>
    </div>
  )
}

export default function Colors() {
  const brandColors = [
    { name: 'Brand/Red - Brand',       value: '#E22D00' },
    { name: 'Brand/Red - Dark',        value: '#A81910' },
    { name: 'Brand/Red - Darker',      value: '#601B15' },
  ]

  const neutralColors = [
    { name: 'Neutrals/Black',            value: '#1B1B1B' },
    { name: 'Neutrals/Off-Black',        value: '#252525' },
    { name: 'Neutrals/Off-Black Select', value: '#333333' },
    { name: 'Neutrals/Gray - Dark',      value: '#616161' },
    { name: 'Neutrals/Gray-Mid',         value: '#ACACAC' },
    { name: 'Neutrals/Gray-Light',       value: '#EBEBEB' },
    { name: 'Neutrals/Off-White BG',     value: '#FAFAFA', hasBorder: 'rgba(9,9,9,0.15)' },
    { name: 'Neutrals/White',            value: '#FFFFFF', hasBorder: '#D8D7D7' },
  ]

  const subtleColors = [
    { name: 'Text/Off-Black - Subtle',   value: 'rgba(37,37,37,0.7)' },
    { name: 'Text/Off-White Subtle',     value: 'rgba(250,250,250,0.7)' },
    { name: 'Pin-Line/Dark',             value: 'rgba(9,9,9,0.15)' },
    { name: 'Pin-Line/Light',            value: 'rgba(255,255,255,0.2)' },
  ]

  const overlayColors = [
    { name: 'Overlay/Off-Black',                value: 'rgba(37,37,37,0.7)' },
    { name: 'Overlay/Off-Black + Blur(2.5px)', value: 'rgba(37,37,37,0.6)' },
    { name: 'Overlay/Blur - Light',             value: 'rgba(255,255,255,0.8)' },
  ]

  const shadowColors = [
    { name: 'Shadow/Off-White (Default)',       value: '#F8F7F8' },
    { name: 'Shadow/Off-White (Small)',         value: '#F8F7F8' },
  ]

  const utilityColors = [
    { name: 'Utility/Red - Error',    value: '#CD4557' },
    { name: 'Utility/Green - Success', value: '#00816C' },
    { name: 'Utility/Yellow - Warning', value: '#CE973D' },
  ]

  const blueExperience = [
    { name: 'Experience/Blue-5',   value: '#F3F5F5' },
    { name: 'Experience/Blue-10',  value: '#E7EDEE' },
    { name: 'Experience/Blue-15',  value: '#D0DCDE' },
    { name: 'Experience/Blue-20',  value: '#B0CED8' },
    { name: 'Experience/Blue-30',  value: '#86BBD2' },
    { name: 'Experience/Blue-40',  value: '#568EB8' },
    { name: 'Experience/Blue-50',  value: '#28628E' },
    { name: 'Experience/Blue-60',  value: '#2F5179' },
    { name: 'Experience/Blue-70',  value: '#2E4168' },
    { name: 'Experience/Blue-80',  value: '#1B2A46' },
    { name: 'Experience/Blue-90',  value: '#1F2532' },
  ]

  const greenExperience = [
    { name: 'Experience/Green-5',   value: '#ECF1EE' },
    { name: 'Experience/Green-10',  value: '#E4EFE9' },
    { name: 'Experience/Green-15',  value: '#CADFD4' },
    { name: 'Experience/Green-20',  value: '#B6D3C2' },
    { name: 'Experience/Green-30',  value: '#83C09B' },
    { name: 'Experience/Green-40',  value: '#589F7D' },
    { name: 'Experience/Green-50',  value: '#00816C' },
    { name: 'Experience/Green-60',  value: '#216958' },
    { name: 'Experience/Green-70',  value: '#25503B' },
    { name: 'Experience/Green-80',  value: '#2A4132' },
    { name: 'Experience/Green-90',  value: '#1D271D' },
  ]

  const lavenderExperience = [
    { name: 'Experience/Lavender-5',   value: '#F0EDEE' },
    { name: 'Experience/Lavender-10',  value: '#EFE7EA' },
    { name: 'Experience/Lavender-15',  value: '#EBDFE4' },
    { name: 'Experience/Lavender-20',  value: '#E0CFD6' },
    { name: 'Experience/Lavender-30',  value: '#CDB9C2' },
    { name: 'Experience/Lavender-40',  value: '#B49EAF' },
    { name: 'Experience/Lavender-50',  value: '#876B8B' },
    { name: 'Experience/Lavender-60',  value: '#6E5A6B' },
    { name: 'Experience/Lavender-70',  value: '#504552' },
    { name: 'Experience/Lavender-80',  value: '#372D35' },
    { name: 'Experience/Lavender-90',  value: '#201620' },
  ]

  const orangeExperience = [
    { name: 'Experience/Orange-5',   value: '#F8F1EE' },
    { name: 'Experience/Orange-10',  value: '#F9EBE2' },
    { name: 'Experience/Orange-15',  value: '#F3D9C7' },
    { name: 'Experience/Orange-20',  value: '#FECAA5' },
    { name: 'Experience/Orange-30',  value: '#FBA262' },
    { name: 'Experience/Orange-40',  value: '#DF6621' },
    { name: 'Experience/Orange-50',  value: '#BE572A' },
    { name: 'Experience/Orange-60',  value: '#96431F' },
    { name: 'Experience/Orange-70',  value: '#752804' },
    { name: 'Experience/Orange-80',  value: '#4A1D09' },
    { name: 'Experience/Orange-90',  value: '#341202' },
  ]

  const pinkExperience = [
    { name: 'Experience/Pink-5',   value: '#FFF6F4' },
    { name: 'Experience/Pink-10',  value: '#FBE8E7' },
    { name: 'Experience/Pink-15',  value: '#F6DAD9' },
    { name: 'Experience/Pink-20',  value: '#EFC9C6' },
    { name: 'Experience/Pink-30',  value: '#E7A4AD' },
    { name: 'Experience/Pink-40',  value: '#DB717F' },
    { name: 'Experience/Pink-50',  value: '#CD4557' },
    { name: 'Experience/Pink-60',  value: '#8A223B' },
    { name: 'Experience/Pink-70',  value: '#5B1828' },
    { name: 'Experience/Pink-80',  value: '#380914' },
    { name: 'Experience/Pink-90',  value: '#23050C' },
  ]

  const tealExperience = [
    { name: 'Experience/Teal-5',   value: '#EFF6F9' },
    { name: 'Experience/Teal-10',  value: '#E0F1F6' },
    { name: 'Experience/Teal-15',  value: '#D0EAF1' },
    { name: 'Experience/Teal-20',  value: '#BFE3ED' },
    { name: 'Experience/Teal-30',  value: '#9ED5E1' },
    { name: 'Experience/Teal-40',  value: '#41A9B7' },
    { name: 'Experience/Teal-50',  value: '#007E94' },
    { name: 'Experience/Teal-60',  value: '#006B7D' },
    { name: 'Experience/Teal-70',  value: '#17515D' },
    { name: 'Experience/Teal-80',  value: '#16383F' },
    { name: 'Experience/Teal-90',  value: '#0A1F26' },
  ]

  const yellowExperience = [
    { name: 'Experience/Yellow-5',   value: '#F6F4EA' },
    { name: 'Experience/Yellow-10',  value: '#F1ECDC' },
    { name: 'Experience/Yellow-15',  value: '#F1E7B5' },
    { name: 'Experience/Yellow-20',  value: '#F8DE84' },
    { name: 'Experience/Yellow-30',  value: '#EBBF6B' },
    { name: 'Experience/Yellow-40',  value: '#DFAA52' },
    { name: 'Experience/Yellow-50',  value: '#CE973D' },
    { name: 'Experience/Yellow-60',  value: '#926D53' },
    { name: 'Experience/Yellow-70',  value: '#725C51' },
    { name: 'Experience/Yellow-80',  value: '#4B413B' },
    { name: 'Experience/Yellow-90',  value: '#29231F' },
  ]

  return (
    <div className="section-template">
      <div className="section-header">
        <h2 className="section-title">Colors — Global</h2>
        <p className="section-desc">Complete color system including brand, neutrals, tokens, utility, and experience colors.</p>
      </div>

      <div className="section-content">
        <ColorGroup title="Brand Colors" colors={brandColors} />
        <ColorGroup title="Neutral Colors" colors={neutralColors} />
        <ColorGroup title="Opacity & Border Tokens" colors={subtleColors} />
        <ColorGroup title="Overlay Colors" colors={overlayColors} />
        <ColorGroup title="Shadow Colors" colors={shadowColors} />
        <ColorGroup title="Utility / Status Colors" colors={utilityColors} />
        
        <h3 className="experience-header">Experience / Semantic Colors</h3>
        <ColorGroup title="Blue" colors={blueExperience} />
        <ColorGroup title="Green" colors={greenExperience} />
        <ColorGroup title="Lavender" colors={lavenderExperience} />
        <ColorGroup title="Orange" colors={orangeExperience} />
        <ColorGroup title="Pink" colors={pinkExperience} />
        <ColorGroup title="Teal" colors={tealExperience} />
        <ColorGroup title="Yellow" colors={yellowExperience} />
      </div>
    </div>
  )
}
