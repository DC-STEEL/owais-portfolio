# Owais Mirakar - Personal Portfolio

A modern, highly responsive, and reactive single-page personal portfolio website showcasing my work as a Full-Stack Odoo Developer.

## 🎨 Features

### Design & UX
- **Modern Aesthetics**: Clean, minimalist UI with generous whitespace
- **Glassmorphism Effects**: Subtle frosted glass effects on navigation and cards
- **Dark Mode**: Smooth Light/Dark mode toggle with persistence
- **Responsive**: Mobile-first design with seamless scaling across all devices
- **Accessibility**: ARIA labels and semantic HTML throughout

### Interactive Elements
- **Sticky Navigation**: Smooth scrolling with active link tracking
- **Hero Section**: Typing effect headline with smooth animations
- **Scroll Animations**: Scroll-triggered reveal animations for sections
- **Micro-interactions**: Hover effects, button scaling, and transitions
- **Filterable Projects**: Dynamic project filtering without page reloads
- **Interactive Skills**: Floating pills with hover animations
- **Reactive Form**: Real-time validation with error messages

## 🛠 Technical Stack

### Core
- **Next.js 14** - React framework with SSR and static generation
- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better DX

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Declarative animation library
- **PostCSS & Autoprefixer** - CSS processing

### Icons & Utilities
- **Lucide React** - Beautiful, consistent icon library
- **React Intersection Observer** - Scroll-triggered animations

## 📁 Project Structure

```
owais-portfolio/
├── app/
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation with theme toggle
│   ├── Hero.tsx           # Hero section with typing effect
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Project gallery with filtering
│   ├── Contact.tsx        # Contact form with validation
│   ├── Footer.tsx         # Footer with social links
│   └── index.ts           # Component exports
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS config
└── next.config.js         # Next.js configuration
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DC-STEEL/owais-portfolio.git
   cd owais-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📋 Sections Overview

### 1. Navigation Bar
- Fixed position with glassmorphism effect when scrolled
- Smooth scroll anchor links
- Light/Dark mode toggle
- Responsive mobile menu

### 2. Hero Section
- Animated headline with typing effect
- Call-to-action buttons (View Work, Get In Touch)
- Animated scroll indicator
- Gradient backgrounds with blob animations

### 3. Skills Section
- Three categories: Languages, Tools, Soft Skills
- Interactive floating pill badges
- Scroll-triggered animations
- Tech stack marquee display

### 4. Projects Section
- Filterable project gallery (All, Odoo, ML, Frontend)
- Bento box grid layout with varied sizes
- Hover reveals project details and tech stack
- Modal view for expanded project information
- Real project descriptions from resume

### 5. Contact Section
- Contact information cards with social links
- Reactive form with real-time validation
- Error states with visual feedback
- Success message with animation
- Form field focus effects

### 6. Footer
- Quick navigation links
- Social media links
- Copyright information
- Animated heart icon

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first CSS with Tailwind breakpoints
- Fluid typography scaling
- Adaptive grid layouts (1 column mobile, 2+ on desktop)
- Touch-friendly interactive elements

### Animations
- **Entrance Animations**: Staggered reveal on scroll
- **Hover Effects**: Scale, color, and shadow transitions
- **Micro-interactions**: Button press feedback, form focus states
- **Scroll Parallax**: Background blob animations
- **Typing Effect**: Character-by-character headline animation

### Dark Mode
- System preference detection
- Manual toggle persistence in localStorage
- Smooth color transitions
- Optimized contrast ratios

### Form Validation
- Real-time field validation
- Email format verification
- Message length validation
- Visual error indicators
- Loading and success states

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the primary color palette:
```javascript
colors: {
  primary: {
    50: '#f5f7ff',
    // ... adjust colors as needed
  },
}
```

### Typography
Modify font families in `app/layout.tsx`:
```typescript
const inter = Inter({ subsets: ['latin'] })
```

### Animation Timing
Adjust animation durations in component files or `tailwind.config.js`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Optimized images and lazy loading
- CSS-in-JS with Tailwind purging
- Next.js automatic code splitting
- Smooth 60fps animations
- Minimal bundle size

## 🔐 SEO

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph support
- Structured data friendly

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and use it as a template for your own portfolio!

## 📧 Contact

- **Email**: mirakar101@gmail.com
- **Phone**: +91 70396 76785
- **Location**: Based in India

---

Made with ❤️ by Owais Mirakar
