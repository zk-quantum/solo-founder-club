# Deployment Guide - The Solo Founder Club

## Deploying to Vercel (Recommended)

### Method 1: Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "🚀 Initial commit - The Solo Founder Club"
   git branch -M main
   git remote add origin https://github.com/yourusername/solo-founder-club.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** 🎉
   - Your site will be live at `https://your-project.vercel.app`
   - Automatic deployments on every push to `main`
   - Preview deployments for pull requests

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `solofounder.club`)

2. **Configure DNS:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - HTTPS enabled by default

## Environment Variables

If you add environment variables in the future:

```bash
# .env.local (DO NOT commit this file)
NEXT_PUBLIC_API_URL=your_api_url
SANITY_API_TOKEN=your_token
```

Add them in Vercel Dashboard:
- Project Settings → Environment Variables

## Performance Optimization Checklist

- [x] Image optimization (next/image)
- [x] Font optimization (next/font)
- [x] Code splitting (automatic)
- [x] Compression enabled
- [x] Cache headers configured
- [x] Security headers enabled
- [x] Remove console logs in production
- [x] Minification (SWC)

## Lighthouse Score Target

✅ **Performance:** 95+
✅ **Accessibility:** 95+
✅ **Best Practices:** 95+
✅ **SEO:** 95+

## Pre-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify form submissions
- [ ] Test animations on different browsers
- [ ] Run Lighthouse audit
- [ ] Check OpenGraph images
- [ ] Verify meta descriptions
- [ ] Test loading states

## Monitoring & Analytics

### Add Vercel Analytics (Recommended)

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Add Speed Insights

```bash
npm install @vercel/speed-insights
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check `next.config.js` `remotePatterns`
- Verify image URLs are accessible

### Fonts Not Loading
- Ensure fonts are in `public/fonts`
- Check font declarations in `layout.tsx`

## Post-Deployment

1. **Submit to Search Engines:**
   - Google Search Console
   - Bing Webmaster Tools

2. **Setup Monitoring:**
   - Vercel Analytics
   - Google Analytics (optional)
   - Sentry for error tracking (optional)

3. **Performance Monitoring:**
   - Vercel Speed Insights
   - Lighthouse CI

---

**Built for Awwwards. Optimized for Vercel. Designed for Solo Founders.**
