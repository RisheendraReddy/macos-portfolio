# macOS-Inspired Portfolio Website

A beautiful, macOS-inspired developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🖥️ **Desktop Experience**: Full-screen desktop interface with macOS-inspired design
- 🪟 **Window System**: Draggable, resizable windows with minimize/maximize functionality
- 🎨 **Glassmorphism**: Beautiful frosted glass effects throughout
- 📱 **8 Apps**: Finder, About, Projects, Experience, Skills, Terminal, Resume, and Contact
- ⌨️ **Keyboard Shortcuts**: Cmd+W to close windows
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🌙 **Dark Mode**: Beautiful dark theme by default

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Your Name

Edit `src/utils/constants.ts`:
```typescript
export const PORTFOLIO_NAME = "Your Name"
```

### Update App Content

Each app component is located in `src/components/apps/`:
- `Finder.tsx` - Home page
- `About.tsx` - About me section
- `Projects.tsx` - Your projects
- `Experience.tsx` - Work experience
- `Skills.tsx` - Skills and technologies
- `Terminal.tsx` - Interactive terminal
- `Resume.tsx` - Resume viewer
- `Contact.tsx` - Contact information

### Add New Apps

1. Create a new component in `src/components/apps/`
2. Add it to the `apps` array in `src/components/Dock.tsx`
3. Import the necessary icon from `lucide-react`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Desktop.tsx      # Main desktop container
│   │   ├── MenuBar.tsx      # Top menu bar
│   │   ├── Dock.tsx         # Bottom dock with app icons
│   │   ├── Window.tsx       # Reusable window component
│   │   └── apps/            # Individual app components
│   ├── hooks/
│   │   ├── useWindowManager.ts  # Window state management
│   │   └── useDraggable.ts      # Drag functionality
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   └── utils/
│       └── constants.ts     # Constants and configuration
├── package.json
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT





