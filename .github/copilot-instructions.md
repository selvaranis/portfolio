<!-- Copilot Instructions for Personal Blog Project -->

# Personal Blog - Angular Project Setup

## Project Overview

A responsive, modern personal blog/portfolio built with Angular featuring:

- Left-side navigation with smooth animations
- Responsive design for all devices
- Four main sections: Experience, Skills, Education, Contact
- Custom styling with #CC3333 accent color
- Beautiful typography using Orbitron and Fredoka Condensed fonts

## Installation Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm start
   ```

3. Open browser to `http://localhost:4200/`

## Key Files

- **src/app/app.component.ts**: Main app component with navigation logic
- **src/styles.css**: Global styles, animations, and color scheme
- **src/app/components/**: Individual section components
- **angular.json**: Angular build configuration
- **package.json**: Project dependencies and scripts

## Features Implemented

✅ Responsive left-side navigation sidebar
✅ Four main sections with animated content
✅ Mobile-responsive hamburger menu
✅ Smooth animations and transitions
✅ Custom fonts (Orbitron + Fredoka Condensed)
✅ #CC3333 accent color scheme
✅ Half white background gradient
✅ Beautiful hover effects
✅ Timeline design for education
✅ Progress bars for skills
✅ Contact form with validation

## Customization Guide

### Adding Content

1. Edit component TypeScript files to modify data arrays
2. Update HTML templates in component files
3. Rebuild and refresh browser

### Changing Colors

- Primary: Search and replace `#CC3333` with your color
- Font: Edit `'Orbitron'` and `'Fredoka Condensed'` in CSS
- Background: Modify gradient in `src/styles.css`

### Building for Production

```bash
npm run build
```

Output will be in `dist/personal-blog/`

## Technologies Used

- Angular 18
- TypeScript 5.4
- CSS3 with Animations
- Angular Animations API
- Responsive Design
