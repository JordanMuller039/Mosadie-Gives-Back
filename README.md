# Mosadie Gives Back

A web application for the Mosadie Gives Back charity organization.

## Tech Stack

- React 18
- TypeScript
- Vite
- Supabase (Database & Auth)
- TailwindCSS
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/mosadie-gives-back.git
cd mosadie-gives-back
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then fill in your Supabase credentials in `.env`

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure
```
src/
├── assets/          # Images, icons, static files
├── components/      # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── services/        # API and external services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── context/         # React context providers
└── styles/          # Global styles and theme
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

Deployed automatically via GitHub Actions to [your-domain.com]

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and development process.

## License

This project is licensed under the MIT License - see the LICENSE file for details