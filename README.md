# The Solo Founder Club

> One becomes many. The unbounded one.

An award-worthy website celebrating solo founders who scale through leverage, not headcount. Built with Next.js 14, Framer Motion, and brutalist design principles.

## 🎯 Vision

The definitive online hub for modern solo founders—a digital space that champions the individual as the ultimate unit of scale.

## ✨ Features

### Core Pages

- **🏠 The Manifesto** - Immersive homepage with scroll-driven animations
- **🛠️ The Arsenal** - Curated directory of leverage-multiplying tools
- **👥 The Fellows** - Showcase of successful solo founders
- **📚 The Ledger** - Essays and case studies on solo entrepreneurship
- **🚪 The Gate** - Curated membership application system

### Design Philosophy

- **Brutalist minimalism meets sophisticated elegance**
- **Dark mode first** with monochrome palette + bold accent
- **Premium micro-interactions** using Framer Motion
- **Award-worthy typography** with Crimson Pro serif
- **Lightning-fast performance** optimized for Core Web Vitals

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Typography**: Crimson Pro, JetBrains Mono
- **Icons**: Lucide React
- **3D**: Three.js (optional)
- **Smooth Scroll**: Lenis

## 📁 Project Structure

```
solo-founder-club/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage (Manifesto)
│   ├── arsenal/           # Tool directory
│   ├── fellows/           # Member showcase
│   ├── ledger/            # Content/blog
│   ├── apply/             # Membership application
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🎨 Design System

### Colors

```css
--color-bg: #0c0a09        /* Stone 950 */
--color-fg: #fafaf9        /* Stone 50 */
--color-accent: #ef4444    /* Red 500 */
--color-border: #292524    /* Stone 800 */
--color-muted: #78716c     /* Stone 500 */
```

### Typography Scale

- **Display**: 3rem - 8rem (clamp)
- **Hero**: 2.5rem - 6rem (clamp)
- **H1**: 2rem - 4rem (clamp)
- **H2**: 1.5rem - 3rem (clamp)
- **H3**: 1.25rem - 2rem (clamp)

### Animation Curves

- `ease-out-expo`: cubic-bezier(0.16, 1, 0.3, 1)
- `ease-in-out-circ`: cubic-bezier(0.85, 0, 0.15, 1)

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# The output will be in the .next folder
# Deploy using your preferred hosting provider
```

## 🎯 Core Philosophy

1. **The Individual is the Platform** - One determined person rivals any team
2. **Leverage over Labor** - Amplify through AI, automation, intelligent systems
3. **A Community of Ones** - Self-reliant founders connecting for wisdom, not dependency

## 📊 Performance Goals

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🛠️ Development

### Adding New Features

1. Create component in `components/`
2. Add page in `app/[route]/page.tsx`
3. Update navigation in layout
4. Maintain design system consistency

### Design Principles

- Mobile-first responsive design
- Meaningful micro-interactions only
- Performance over complexity
- Accessibility (WCAG AA minimum)
- Semantic HTML

## 🤝 Contributing

This is a production website. Contributions welcome for:

- Performance optimizations
- Accessibility improvements
- Animation enhancements
- Content suggestions

## 📝 License

© 2025 The Solo Founder Club. All rights reserved.

---

**Built by a solo founder, for solo founders.**
