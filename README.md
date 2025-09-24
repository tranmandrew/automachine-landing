# Automachine Landing Page - Next.js Migration

This is the migrated version of the Automachine landing page, converted from static HTML to Next.js 14+ with React and TypeScript.

## Project Structure

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling (via CDN, matching original)
- **React components** for reusable UI elements

## Pages

- `/` - Home page (index.html converted)
- `/pricing` - Pricing page
- `/contact` - Enterprise contact form
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/contact-success` - Contact form success page

## Key Features Preserved

✅ **All original content and styling** exactly preserved
✅ **SEO optimization** with proper meta tags and structured data
✅ **Responsive design** maintained
✅ **All images and assets** copied and working
✅ **External CDN dependencies** (Tailwind, Font Awesome) maintained
✅ **Form functionality** with Web3Forms integration
✅ **Interactive elements** (mobile menu, FAQ toggles, etc.)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Migration Details

### Original vs New Structure
- `index.html` → `src/app/page.tsx`
- `pricing.html` → `src/app/pricing/page.tsx`
- `contact.html` → `src/app/contact/page.tsx`
- `terms.html` → `src/app/terms/page.tsx`
- `privacy.html` → `src/app/privacy/page.tsx`
- `contact-success.html` → `src/app/contact-success/page.tsx`

### Components Created
- `Header.tsx` - Navigation header with mobile menu
- `Footer.tsx` - Site footer with links and newsletter signup

### Styling Approach
- **Global styles** in `src/app/globals.css` (migrated from original style.css)
- **Inline Tailwind classes** preserved exactly as in original HTML
- **Custom CSS animations** and hover effects maintained

### SEO & Metadata
- **Per-page metadata** via layout files
- **Structured data** preserved with Next.js Script component
- **OpenGraph and Twitter cards** properly configured
- **Viewport and theme color** correctly set

### Assets
- All images copied to `/public` directory
- `robots.txt` and `sitemap.xml` preserved
- Favicon and app icons maintained

## Production Deployment

This Next.js application is ready for deployment on any platform that supports Node.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any VPS with Node.js

The application builds to static files and can be exported for CDN deployment if needed.

## Notes

- External scripts (Tailwind CSS, Font Awesome) are loaded via CDN as in original
- All interactive JavaScript functionality converted to React hooks
- Form submissions preserved with original Web3Forms integration
- All external links and app redirects maintained as original
