# Ocean Exploration Platform

A comprehensive ocean exploration platform built with Next.js and organized as a monorepo.

## Project Structure

```
ocean-exploration-platform/
├── apps/                    # Individual applications
│   ├── main-app/           # Main landing page and navigation
│   ├── aboutus/            # About us page
│   ├── info-ocean/         # Ocean information portal
│   ├── marine-map/         # Interactive marine maps
│   ├── marine-shorts/      # Marine video content
│   ├── ocean-bot/          # AI ocean chatbot
│   └── ocean-game/         # Ocean exploration game
├── packages/               # Shared libraries and components
└── README.md              # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies for all apps:
```bash
npm run install-all
```

2. Start the main application:
```bash
npm run dev
```

### Development Scripts

- `npm run dev` - Start the main app in development mode
- `npm run dev:main` - Start main app specifically
- `npm run dev:about` - Start about us page
- `npm run dev:info` - Start info ocean app  
- `npm run dev:map` - Start marine map app
- `npm run dev:shorts` - Start marine shorts app
- `npm run build` - Build all applications
- `npm run lint` - Lint all applications
- `npm run clean` - Clean build artifacts

## Applications

### Main App
The central hub containing the homepage, navigation, and core features.

### About Us
Dedicated application for company/team information.

### Info Ocean
Educational content and information about oceans and marine life.

### Marine Map
Interactive maps showing marine data, species locations, and ocean features.

### Marine Shorts
Short-form video content about marine life and ocean exploration.

### Ocean Bot
AI-powered chatbot for answering questions about ocean and marine topics.

### Ocean Game
Interactive game for ocean exploration and learning.

## Development

Each app can be developed independently. Use the workspace commands to run specific apps or run all apps simultaneously during development.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across relevant applications
5. Submit a pull request

## License

MIT License - see LICENSE file for details
