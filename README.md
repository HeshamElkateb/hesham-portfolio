# Hesham Amr Mohamed - Portfolio

A modern, production-ready portfolio website for a Computer Engineering student, featuring a dark theme with elegant gold accents, smooth animations, and fully responsive design.

## Features

- **Modern Dark Theme** - Sleek dark background with warm gold (#fbbf24) accents
- **Smooth Animations** - Powered by Framer Motion for premium feel
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **Glassmorphism Effects** - Modern frosted glass UI elements
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Built with Vite for optimal loading speed
- **Smooth Scrolling** - Navigation with smooth scroll transitions
- **Contact Form** - Working form with toast notifications
- **Back to Top** - Floating button for quick navigation

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications
- **React Helmet Async** - SEO management
- **React Scroll** - Smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hesham-elkateb/hesham-portfolio.git
cd hesham-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to Repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder contents to GitHub Pages

### Custom Domain

To add a custom domain:

1. Go to Repository Settings → Pages
2. Enter your custom domain under "Custom domain"
3. Add the required DNS records to your domain provider

## Project Structure

```
hesham-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/         # Reusable UI components
│   ├── data/           # Portfolio data
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── .github/
│   └── workflows/      # GitHub Actions
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

## Customization

### Updating Personal Information

Edit `src/data/portfolio.js` to update:
- Personal details (name, email, location)
- About section content
- Education details
- Work experience
- Skills
- Projects

### Changing Colors

Edit `tailwind.config.js` to customize:
- Gold accent colors
- Dark theme colors
- Animation timings

### Adding Projects

Add project objects to the `projects` array in `src/data/portfolio.js`:
```javascript
{
  id: 6,
  title: "Your Project",
  description: "Description",
  technologies: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  featured: false
}
```

## License

This project is for personal use.

## Contact

- Email: hesham.amr.elkateb@gmail.com
- LinkedIn: https://linkedin.com/in/hesham-elkateb-a18318386
- GitHub: https://github.com/hesham-elkateb

---

Built with love using React + Tailwind CSS + Framer Motion