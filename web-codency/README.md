# Web Codency - Professional Web Development Agency

A modern, comprehensive website for Web Codency, a professional web development agency. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🌟 Features

### 🏠 Homepage
- **Hero Section**: Full-screen animated hero with gradient backgrounds and floating elements
- **Success Metrics**: Animated counters showing key statistics (50+ brands served, 98% satisfaction rate)
- **Client Logos**: Responsive grid with hover animations
- **Services Overview**: Interactive service cards with detailed features
- **Testimonials**: Client feedback with star ratings
- **CTA Sections**: Multiple conversion-focused call-to-action areas

### 👥 About Us Page
- **Company Story**: Mission, vision, and values presentation
- **Team Bios**: Professional team member profiles with social links
- **Timeline**: Interactive company growth timeline
- **Awards & Recognition**: Industry achievements and certifications
- **Core Values**: Visual representation of company principles

### 💼 Portfolio Page
- **Project Filtering**: Filter by category (E-Commerce, SaaS, Corporate, NGO)
- **Search Functionality**: Search projects by name, description, or technology
- **Project Cards**: Detailed project information with stats and technologies
- **Case Study Links**: Links to detailed project case studies
- **Live Demo Links**: Direct access to project demonstrations
- **Process Overview**: 4-step development process visualization

### 🛠️ Services Page
- **Service Catalog**: Comprehensive list of all services offered
- **Interactive Pricing Calculator**: Real-time project cost estimation
- **Service Details**: In-depth information for each service
- **Technology Stack**: Technologies used for each service
- **Process Breakdown**: Step-by-step service delivery process
- **Client Testimonials**: Service-specific client feedback

### 📞 Contact Page
- **Quote Request Form**: Comprehensive form with project details
- **General Inquiry Form**: Simple contact form for general questions
- **Form Validation**: Real-time validation with error messages
- **Quick Contact Cards**: Multiple contact methods (email, phone, chat, calendar)
- **Office Locations**: Global office information with contact details
- **FAQ Section**: Frequently asked questions and answers
- **Success States**: Form submission confirmation and feedback

### 🎨 Design Features
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop layouts
- **Custom Animations**: Framer Motion powered smooth transitions
- **Micro-interactions**: Hover effects, button animations, and loading states
- **Performance Optimized**: Fast loading with optimized assets

### 🔧 Technical Features
- **Next.js 14**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Form Handling**: React Hook Form with Zod validation
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Accessibility**: WCAG compliant with proper ARIA labels
- **PWA Ready**: Progressive Web App capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/web-codency.git
   cd web-codency
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web-codency/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About us page
│   │   ├── contact/        # Contact and quote page
│   │   ├── portfolio/      # Portfolio showcase
│   │   ├── services/       # Services and pricing
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.tsx        # Homepage
│   └── components/         # Reusable components
│       ├── Navigation.tsx  # Main navigation component
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Professional and trustworthy
- **Secondary**: Gray (#64748b) - Clean and modern
- **Accent**: Purple (#d946ef) - Creative and innovative

### Typography
- **Headings**: Inter font family, various weights
- **Body**: Inter font family, optimized for readability
- **Code**: Roboto Mono for technical content

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Elevated surfaces with hover effects
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with smooth scrolling

## 🛡️ SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD markup for better search results
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization
- **Core Web Vitals**: Optimized for Google's ranking factors

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `src/components/Navigation.tsx`

### Modifying Styles
- Edit `tailwind.config.ts` for design tokens
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling

### Adding New Services
1. Update the services array in `src/app/services/page.tsx`
2. Add corresponding pricing factors
3. Update navigation dropdown if needed

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS**: Use AWS Amplify or S3 + CloudFront
- **DigitalOcean**: Deploy to App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ for all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with automatic code splitting
- **Image Optimization**: Next.js Image component with lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: hello@webcodency.com
- **Phone**: +1 (555) 123-4567
- **Website**: [https://webcodency.com](https://webcodency.com)

## 🙏 Acknowledgments

- **Next.js**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Motion library for React
- **Lucide Icons**: Beautiful icon library
- **React Hook Form**: Performant forms with validation

---

**Built with ❤️ by the Web Codency Team**
