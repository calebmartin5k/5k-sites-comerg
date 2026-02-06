# COMERG - Next.js Application

A modern Next.js application showcasing COMERG's natural extraction technology with GSAP animations and Tailwind CSS styling.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with React hooks
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Manrope, Playfair Display)

## Getting Started

**Prerequisites**: Node.js 18+ and npm

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
comerg-next-gen/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation with scroll effects
│   ├── Hero.tsx          # Hero section with GSAP animations
│   ├── AboutSection.tsx  # Technology overview
│   ├── Statement.tsx     # Mission statement
│   ├── Applications.tsx  # Industrial applications
│   └── Footer.tsx        # Footer with contact form
├── constants.ts          # Site data and configuration
├── types.ts              # TypeScript type definitions
└── next.config.ts        # Next.js configuration
```

## Type Safety

This project is fully type-safe with TypeScript. All components, props, and data structures are properly typed.
