# Netlify Deployment Guide

## ✅ Fixed Issues

The 404 "Page not found" error has been resolved by adding the necessary configuration files:

### 1. `netlify.toml` (Main Configuration)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 2. `public/_redirects` (Backup Configuration)
```
/*    /index.html   200
```

## 🚀 Deployment Steps

### Option 1: Drag & Drop (Recommended)
1. Run `npm run build` locally
2. Drag the `dist` folder to Netlify's deploy area
3. Your site will be live instantly

### Option 2: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

## 📁 Important Files

- `dist/` - Production build folder
- `dist/_redirects` - Handles SPA routing
- `dist/lovable-uploads/` - Contains logo images
- `netlify.toml` - Netlify configuration

## 🌐 Your Site

Your site should now work correctly at: `https://greenleafventures.netlify.app`

All routes like `/services`, `/about`, `/contact` will now work properly!
