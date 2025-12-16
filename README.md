# Dribbr Landing Page

Marketing landing page for Dribbr - Smart Bird Breeding App

## About Dribbr

Dribbr (bird spelled backwards + "br" for breeder) is a modern, user-friendly bird breeding management app. This landing page showcases the app's features and allows users to sign up for the beta program.

## Features

- **Multi-language support**: English, Dutch (Nederlands), German (Deutsch)
- **Beta signup form**: Netlify Forms integration
- **Feature request form**: Collect user feedback
- **Responsive design**: Mobile-first with Tailwind CSS
- **Static site**: Fast and SEO-friendly Hugo site

## Development

### Prerequisites

- Hugo Extended (v0.152.2 or higher)
- Node.js 20+

### Local Development

```bash
# Install dependencies
npm install

# Start Hugo development server
npm run dev
# or
hugo server -D

# Visit http://localhost:1313
```

### Build for Production

```bash
npm run build
# or
hugo --minify
```

The built site will be in the `public/` directory.

## Deployment

This site is configured for Netlify deployment:

1. Push to your Git repository
2. Connect repository to Netlify
3. Netlify will automatically build and deploy using `netlify.toml` configuration

### Netlify Forms

The beta signup and feature request forms use Netlify Forms. No additional configuration needed - forms will automatically be enabled when deployed to Netlify.

## Project Structure

```
dribbr-website/
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS styles
├── content/
│   ├── _index.en.md          # English homepage
│   ├── _index.nl.md          # Dutch homepage
│   └── _index.de.md          # German homepage
├── i18n/
│   ├── en.toml               # English translations
│   ├── nl.toml               # Dutch translations
│   └── de.toml               # German translations
├── layouts/
│   ├── _default/
│   │   └── baseof.html       # Base template
│   ├── partials/             # Reusable components
│   └── index.html            # Homepage layout
├── static/
│   └── images/               # Static assets (logo, etc.)
├── hugo.toml                 # Hugo configuration
├── netlify.toml              # Netlify build settings
├── package.json              # NPM dependencies
├── postcss.config.js         # PostCSS configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

## Color Palette

Bird-themed colors (calm and playful):
- **Bird Blue** (#2b8faf): Primary brand color
- **Bird Green** (#4ab587): Fresh, natural accent
- **Bird Orange** (#ff9100): Warm call-to-action
- **Bird Yellow** (#fad732): Bright highlights
- **Sage** (#8ca091): Neutral, calming tones

## License

Copyright © 2025 Dribbr. All rights reserved.
