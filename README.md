# Shadnext

A powerful CLI tool to quickly scaffold Next.js applications with shadcn/ui components pre-configured. Built for developers who want to skip the setup and start building immediately.

## ✨ Features

- **Next.js 15** with App Router and TypeScript
- **shadcn/ui** components pre-installed (Button, Card, Badge)
- **Tailwind CSS** with modern design system
- **ESLint** and **Prettier** configured
- **Dark mode** support out of the box
- **Professional landing page** template
- **Zero configuration** - just run and start building

## 🚀 Quick Start

```bash
# Install globally
npm install -g shadnext

# Create a new project
npx shadnext my-awesome-app

# Navigate to your project
cd my-awesome-app

# Start development server
npm run dev
```

## 📦 What's Included

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **Radix UI** - Accessible component primitives

### Pre-installed Components
- Button with multiple variants
- Card with header, content, and description
- Badge for status indicators
- Responsive layout utilities

### Development Tools
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS IntelliSense support
- Modern PostCSS configuration

## 🎨 Template Features

The generated project includes a beautiful, professional landing page with:

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, minimal design with smooth animations
- **Dark Mode** - Automatic theme switching support
- **Accessible** - Built with accessibility best practices
- **SEO Ready** - Optimized meta tags and structure

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Adding more components
npx shadcn@latest add [component-name]
```

## 🎯 Use Cases

Perfect for:
- **Rapid Prototyping** - Get ideas to screen quickly
- **Client Projects** - Professional starting point
- **Learning** - Modern React/Next.js best practices
- **Side Projects** - Skip the boring setup
- **Team Templates** - Consistent project structure

## 🔧 Customization

### Adding Components
```bash
# Add more shadcn/ui components
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add table
```

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit `components.json` for shadcn/ui configuration

### Configuration
- TypeScript settings in `tsconfig.json`
- ESLint rules in `.eslintrc.json`
- Next.js config in `next.config.js`

## 🌟 Why This Template?

### Developer Experience
- **Zero Config** - Everything works out of the box
- **Modern Stack** - Latest versions of all tools
- **Best Practices** - Industry-standard setup
- **Type Safety** - Full TypeScript integration

### Production Ready
- **Performance** - Optimized build configuration
- **Accessibility** - WCAG compliant components
- **SEO** - Proper meta tags and structure
- **Responsive** - Mobile-first design approach



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rehan Ali**
- GitHub: [@rehanali67](https://github.com/rehanali67)
- Created with ❤️ for the developer community

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production
- [shadcn/ui](https://ui.shadcn.com) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://radix-ui.com) - Low-level UI primitives

---

**Happy coding! 🚀**
