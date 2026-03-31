# Personal Blog - Angular Project

A responsive, modern personal blog built with Angular featuring a beautiful left-side navigation, smooth animations, and stunning design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Left-Side Navigation**: Beautiful sidebar navigation with smooth transitions
- **Animations**: Smooth entrance animations, hover effects, and interactive elements
- **Custom Typography**: Uses futuristic Orbitron font for headings and Fredoka Condensed for content
- **Color Scheme**: Modern design with #CC3333 accent color and strategic use of white background
- **Multiple Sections**:
  - 💼 **Experience**: Professional work history
  - ⚡ **Skills**: Technical expertise with progress bars
  - 🎓 **Education**: Academic background with timeline
  - ✉️ **Contact**: Contact information and message form

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── education/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.css
├── main.ts
├── index.html
└── styles.css
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200/`

## Build

To build for production:

```bash
npm run build
```

## Customization

### Colors

- Primary Accent: `#CC3333`
- Font Color: Black (#000)
- Background: Split half white/light gray

### Fonts

- Menu Font: 'Orbitron' (Modern/Futuristic)
- Content Font: 'Fredoka Condensed' (Readable)

### Content

Edit the data arrays in each component to add your own:

- Experience items in `experience.component.ts`
- Skills in `skills.component.ts`
- Education in `education.component.ts`
- Contact info in `contact.component.ts`

## Technologies

- Angular 18
- TypeScript
- CSS3 with Animations
- Angular Animations API
- Responsive Design (Mobile-first)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Created as a modern personal portfolio and blog template.
