# EOS Design System - Style Guide

Complete style guide for the EOS Cloud 2.0 design system with both React and HTML/CSS implementations.

## Project Structure

```
styleguide/
├── react/                    # React + Vite implementation
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── sections/        # Section pages (Accessibility, Spacing, etc.)
│   │   ├── styles/          # Global styles and design tokens
│   │   ├── App.jsx          # Main app component
│   │   ├── App.css          # App layout styles
│   │   ├── index.css        # Global styles
│   │   └── main.jsx         # Entry point
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite configuration
│   └── .gitignore
│
└── html/                     # Standalone HTML/CSS implementation
    ├── index.html           # Main page
    ├── css/
    │   ├── styles.css       # Global styles and design tokens
    │   └── accessibility.css # Section-specific styles
    └── js/
        └── app.js           # Navigation logic
```

## Sections Planned

- [ ] Accessibility
- [ ] Spacing
- [ ] Form Elements
- [ ] Inputs
- [ ] Messages
- [ ] Icons
- [ ] Colors
- [ ] Grid System and Spacing
- [ ] Type Styles
- [ ] Buttons

## React Version Setup

### Install Dependencies
```bash
cd react
npm install
```

### Run Development Server
```bash
npm run dev
```

The style guide will open at `http://localhost:5174`

### Build for Production
```bash
npm run build
```

## HTML Version

Simply open `html/index.html` in a browser to view the standalone style guide.

## Design Tokens

All design tokens are centralized in:
- **React**: `src/styles/tokens.css`
- **HTML**: `css/styles.css`

These include:
- Color system
- Typography scales
- Spacing system
- Border and layout utilities

## Adding New Sections

### For React:
1. Create a new file in `src/sections/[SectionName].jsx`
2. Import and add to the sections array in `src/App.jsx`
3. Use the `SectionTemplate` component for consistent styling

### For HTML:
1. Add a new section div in `index.html`
2. Add a new button in the sidebar
3. Add section-specific CSS to `css/[section-name].css`

## Notes

- Both implementations share the same design tokens
- All sections follow the same visual structure and patterns
- Responsive design included for mobile and tablet views
