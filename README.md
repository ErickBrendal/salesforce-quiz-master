# Salesforce Quiz Master 🏆

Interactive quiz application for Salesforce certification preparation with multilingual support (English/Portuguese).

## Features

- 🌍 **Multilingual Support**: English and Portuguese
- 📚 **7 Certification Paths**:
  - Platform Foundations
  - Administrator Sales
  - Sales Cloud
  - Marketing Cloud
  - Agentforce Specialist
  - Data Cloud
  - Business Analyst
- 🎮 **Gamification**:
  - Score tracking
  - Streak system with fire emoji
  - Lives system (3 hearts)
  - Stars earned
- 🤖 **AI-Powered Questions** (Optional):
  - Integration with OpenAI API for dynamic questions
  - Fallback to offline question bank
- 🎨 **Modern UI**:
  - Gradient backgrounds
  - Smooth animations
  - Responsive design
  - Beautiful color schemes per certification

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **OpenAI API** - Dynamic question generation (optional)

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

### Build

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## Configuration

### OpenAI API (Optional)

To enable dynamic question generation, provide your OpenAI API key in the setup screen. Without an API key, the app will use the offline question bank.

## Project Structure

```
salesforce-quiz-app/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and media
│   ├── components/  # React components
│   ├── App.jsx      # Main application component
│   ├── App.css      # Styles
│   └── main.jsx     # Entry point
├── index.html       # HTML template
└── package.json     # Dependencies
```

## License

MIT

## Author

Created with ❤️ for Salesforce Trailblazers
