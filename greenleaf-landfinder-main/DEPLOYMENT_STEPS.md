# 🚀 Netlify Deployment - Step by Step Guide

## ❌ Current Issue
Your site is showing "Page not found" because the configuration files haven't been deployed yet.

## ✅ Solution Steps

### Step 1: Build the Project (Already Done)
```bash
npm run build
```
✅ This creates the `dist` folder with all necessary files.

### Step 2: Deploy to Netlify

#### Option A: Drag & Drop (Easiest)
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Drag the entire `dist` folder to the deploy area
3. Wait for deployment to complete
4. Your site will be live with working routes!

#### Option B: Git Integration
1. Push your code to GitHub/GitLab
2. In Netlify Dashboard → "New site from Git"
3. Connect your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Step 3: Verify Configuration Files
After deployment, check that these files are in your Netlify site:
- ✅ `netlify.toml` (in root)
- ✅ `_redirects` (in root)
- ✅ All your React routes work

## 🔧 Configuration Files Added

### 1. `netlify.toml`
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = true

[[redirects]]
  from = "/services"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/about"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/contact"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/projects"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/insights"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 2. `public/_redirects`
```
/*    /index.html   200

# Handle all routes for SPA
/services    /index.html   200
/about       /index.html   200
/contact     /index.html   200
/projects    /index.html   200
/insights    /index.html   200
```

## 🌐 Expected Result
After deployment, these URLs should work:
- ✅ `https://greenleafventures.netlify.app/`
- ✅ `https://greenleafventures.netlify.app/services`
- ✅ `https://greenleafventures.netlify.app/about`
- ✅ `https://greenleafventures.netlify.app/contact`
- ✅ `https://greenleafventures.netlify.app/projects`
- ✅ `https://greenleafventures.netlify.app/insights`

## 🚨 Important Notes
1. **You MUST redeploy** - The configuration files only work after deployment
2. **Clear browser cache** - Sometimes browsers cache the 404 page
3. **Wait 2-3 minutes** - Netlify takes time to apply redirects

## 📞 If Still Not Working
1. Check Netlify deployment logs
2. Verify `_redirects` file is in the deployed site root
3. Try accessing the site in incognito mode
4. Contact Netlify support if needed
