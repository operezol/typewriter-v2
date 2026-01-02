# ⌨️ TypeWriter - Touch Typing Trainer

[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, interactive web application for learning touch typing with progressive lessons, real-time feedback, and comprehensive statistics tracking.

![TypeWriter Demo](./screenshot.png)

## ✨ Features

### 🎯 Progressive Learning System
- **11 Levels** from basic home row to expert coding and quotes
- **Structured Lessons** with increasing difficulty
- **Unlock System** - Complete lessons to unlock new ones
- **Multiple Exercise Types** - Keys, words, sentences, code, and inspirational quotes

### 📊 Real-Time Statistics
- **WPM (Words Per Minute)** - Track your typing speed
- **CPM (Characters Per Minute)** - Detailed character tracking
- **Accuracy Percentage** - Monitor your precision
- **Error Tracking** - Identify problem areas
- **Session History** - Review past performance

### ⌨️ Interactive Keyboard
- **Virtual Keyboard** with visual feedback
- **Color-Coded Keys** - See which finger to use
- **Next Key Highlighting** - Always know what's coming
- **Success/Error Animations** - Immediate visual feedback

### 🎨 Modern UI/UX
- **Dark Mode** - Easy on the eyes
- **Responsive Design** - Works on all screen sizes
- **Smooth Animations** - Powered by Framer Motion
- **Clean Interface** - Focus on what matters

### 💾 Progress Persistence
- **LocalStorage** - Your progress is saved automatically
- **Session History** - Track improvement over time
- **Statistics Charts** - Visualize your progress

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/operezol/typewriter.git
cd typewriter-v2

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start learning!

### Build for Production

```bash
# Build the app
pnpm build

# Preview production build
pnpm preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **Framer Motion** - Smooth animations
- **Recharts** - Statistics visualization
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
typewriter-v2/
├── src/
│   ├── components/
│   │   ├── Keyboard/      # Virtual keyboard components
│   │   ├── Lesson/        # Lesson selection and display
│   │   ├── Practice/      # Practice area and input
│   │   ├── Stats/         # Statistics and charts
│   │   └── Layout/        # Header, footer, etc.
│   ├── data/
│   │   ├── lessons.ts     # Lesson definitions
│   │   └── keyboards.ts   # Keyboard layouts
│   ├── services/
│   │   └── quoteService.ts # Quote API integration
│   ├── hooks/             # Custom React hooks
│   ├── store/             # Zustand state management
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎓 Lesson Structure

### Level 1: Home Row (ASDF - JKL;)
Learn the foundation of touch typing with the home row keys.

### Level 2: Top Row (QWER - UIOP)
Extend your reach to the top row.

### Level 3: Bottom Row (ZXCV - M,.)
Master the bottom row keys.

### Level 4: Numbers (1234567890)
Add numbers to your repertoire.

### Level 5: Symbols (!@#$%&*())
Practice common symbols and special characters.

### Level 6: Common Words
Type the 100 most common Spanish words.

### Level 7: Full Sentences
Practice with complete sentences and phrases.

### Level 8: Literary Texts
Type excerpts from classic literature.

### Level 9: Programming Code
Practice with JavaScript/TypeScript code snippets.

### Level 10: Expert Level
Master-level exercises for speed and accuracy.

### Level 11: Quote Mode - Inspirational Quotes ✨
Practice typing with famous quotes from celebrated authors. Each session fetches a random inspirational quote, making practice engaging and motivational. Perfect for maintaining interest while improving speed and accuracy.

## 📊 Statistics Tracked

- **WPM** - Words per minute (industry standard)
- **CPM** - Characters per minute
- **Accuracy** - Percentage of correct keystrokes
- **Errors** - Total number of mistakes
- **Time** - Session duration
- **Progress** - Completion percentage per lesson

## 🎯 Learning Tips

1. **Posture** - Sit up straight with feet flat on the floor
2. **Hand Position** - Keep fingers on home row (ASDF - JKL;)
3. **Look at Screen** - Don't look at the keyboard
4. **Accuracy First** - Speed will come with practice
5. **Regular Practice** - 15-30 minutes daily is ideal
6. **Take Breaks** - Rest your hands every 20-30 minutes

## 🔮 Roadmap

### v2.1
- [ ] Sound effects for keystrokes
- [ ] Additional keyboard layouts (AZERTY, Dvorak)
- [ ] Multi-language support (English, Catalan)
- [ ] Customizable themes

### v2.2
- [ ] Detailed error analysis
- [ ] Key-specific practice exercises
- [ ] Achievement system
- [ ] Daily challenges

### v3.0
- [ ] User accounts and cloud sync
- [ ] Multiplayer typing races
- [ ] Global leaderboards
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © Oriol Pérez Olivares

## 👤 Author

**Oriol Pérez Olivares**

- GitHub: [@operezol](https://github.com/operezol)
- Email: oriolperezolivares@gmail.com

## 🙏 Acknowledgments

- Inspired by typing.com and keybr.com
- Icons by [Lucide](https://lucide.dev/)
- Font: Inter by Rasmus Andersson

---

<div align="center">
Master touch typing, one keystroke at a time! ⌨️✨
</div>
