# Portfolio Template - Professional Web Developer Portfolio

A modern, responsive portfolio template designed for web developers, designers, and creative professionals. Built with clean HTML, Tailwind CSS, and vanilla JavaScript - no framework dependencies required.

## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Performance Focused**: Lightweight, fast-loading with optimized assets
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Analytics Ready**: Integrated PostHog analytics for tracking page views and interactions

### Page Sections

1. **Hero Section**
   - Oversized name with fit-to-width text effect
   - Hero image with overlay text
   - Customizable location and availability text
   - Social handle display

2. **Skills Section**
   - Grid of skill icons with hover effects
   - Brand-specific colors on hover
   - 10+ pre-configured technology icons (HTML5, CSS, JavaScript, Mailchimp, SendGrid, HubSpot, etc.)

3. **Projects Section**
   - Grid layout with project cards (2:3 aspect ratio images)
   - Category tags (Design System, Marketing, E-commerce, etc.)
   - Project titles and descriptions
   - Action links (Case Study, Visit Site, Live Demo, etc.)
   - Click tracking for analytics

4. **About Section**
   - Personal introduction
   - Experience summary
   - Philosophy and approach

5. **Case Studies Section**
   - Detailed case study showcases
   - Side-by-side layout with images
   - Key metrics and highlights
   - Links to full case study pages

6. **Contact/Footer Section**
   - Contact information
   - Social media links
   - Navigation links
   - Email CTA button

### Interactive Features

- **Exit Intent Modal**: Displays when users try to leave the page
  - Customizable introduction video (YouTube embed)
  - Uppercase title with centered text
  - Smooth fade-in animation
  - Close button and "Continue Browsing" button

- **Mobile Navigation**: 
  - Hamburger menu for mobile devices
  - Smooth transitions
  - Accessible navigation controls

- **Smooth Scrolling**: Anchor link navigation with header offset compensation

## 📁 Project Structure

```
Portfolio1/
├── index.html                 # Main portfolio page
├── case-study/
│   └── email-campaign/
│       └── email.html         # Sample case study page
├── css/
│   └── main.css               # Custom styles (fit-to-width, skill icons, modal)
├── img/
│   └── hero.jpg               # Hero section image
└── readme.md                  # This file
```

## 🚀 Quick Start

1. **Download/Clone the template**
   ```bash
   git clone <repository-url>
   cd Portfolio1
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - No build process required!

3. **Customize your content**
   - Replace placeholder text in `index.html`
   - Add your own images to the `img/` folder
   - Update meta tags and structured data

## 🎨 Customization Guide

### 1. Personal Information

#### Update Meta Tags (Lines 6-14 in `index.html`)
```html
<title>Your Name — Portfolio | Your Title</title>
<meta name="description" content="Your description...">
<meta name="keywords" content="your, keywords, here">
```

#### Update Structured Data (Lines 54-95)
- Change `name`, `url`, `email`, `jobTitle`
- Update social media links in `sameAs` array
- Modify skills in `knowsAbout` array
- Update location information

#### Update Header Navigation (Lines 161-166)
```html
<nav class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-700">
  <a href="#work">Explore</a>
  <a href="#projects">Portfolio</a>
  <a href="#about">My Story</a>
  <!-- Add/remove navigation items -->
</nav>
```

#### Update Contact Information
- **Email** (Line 172): Change `hello@jamesjackson.com` to your email
- **Social Handle** (Line 229): Update `@jamesjackson.studio` to your handle

### 2. Hero Section

#### Update Name (Line 211)
```html
<span><span>Your Name</span></span>
<span aria-hidden="true">Your Name</span>
```

#### Update Hero Image (Line 218)
- Replace `img/hero.jpg` with your own hero image
- Recommended: 1200x800px or larger
- Format: JPG, PNG, or WebP

#### Update Hero Text (Line 223)
```html
<p class="...">
  Your custom hero text here
</p>
```
- Currently set to: "Based in New York But Available Worldwide"
- Add `uppercase` class to make text uppercase

#### Update Social Handle (Line 229)
```html
<span>@your-handle</span>
```

### 3. Skills Section

#### Add/Remove Skills (Lines 244-279)
Each skill uses this structure:
```html
<a class="skill-icon skill-icon-[name] group ...">
  <img src="https://cdn.simpleicons.org/[icon-name]/0a0a0a" alt="[Name]">
</a>
```

**Available icons** (using Simple Icons CDN):
- Any icon from [Simple Icons](https://simpleicons.org/)
- Format: `https://cdn.simpleicons.org/[icon-name]/0a0a0a`

**Add custom hover colors** in `css/main.css`:
```css
.skill-icon-[name]:hover img {
  filter: brightness(0) saturate(100%) invert(X%) sepia(X%) saturate(X%) hue-rotate(Xdeg) brightness(X);
}
```

### 4. Projects Section

#### Add/Edit Project Cards (Lines 332-492)
Each project card structure:
```html
<article class="group rounded-md border border-zinc-200 bg-white overflow-hidden">
  <!-- Image -->
  <a href="#" class="relative overflow-hidden aspect-[2/3] block">
    <img src="your-image-url" alt="Project name" class="...">
  </a>
  <div class="p-5">
    <!-- Category Tags -->
    <div class="flex items-center gap-2">
      <span class="...">Category 1</span>
      <span class="...">Category 2</span>
    </div>
    <!-- Title -->
    <a href="#" class="mt-3 ...">
      <h3>Project Name</h3>
    </a>
    <!-- Description -->
    <p class="mt-2 text-sm text-zinc-600">Project description...</p>
    <!-- Action Link -->
    <div class="mt-4 flex items-center justify-between">
      <a href="#" class="...">
        <i data-lucide="external-link"></i>
        <span>Action Text</span>
      </a>
    </div>
  </div>
</article>
```

**Project Image Requirements:**
- Aspect ratio: 2:3 (portrait)
- Recommended size: 800x1200px
- Formats: JPG, PNG, or WebP

### 5. About Section

#### Update About Content (Lines 495-507)
```html
<h2 class="...">Your Title</h2>
<p class="...">Your introduction paragraph...</p>
<p class="...">Your second paragraph...</p>
```

### 6. Case Studies Section

#### Update Case Studies (Lines 510-593)
Each case study includes:
- Category tags
- Title and description
- Metrics/highlights
- Link to full case study page
- Featured image (4:3 aspect ratio)

### 7. Footer Section

#### Update Footer Content (Lines 598-643)
- Logo/name (Line 586)
- Description (Line 587)
- Social links (Lines 589-597)
- Navigation links (Lines 602-608)
- Contact information (Lines 612-618)

### 8. Exit Intent Modal

#### Update Modal Title (Line 658)
```html
<h2 class="...">
  Your Custom Modal Title
</h2>
```

#### Update Video (Line 663)
Replace the YouTube video ID:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
```

#### Modal Settings (Lines 785-817)
- Edit exit intent detection sensitivity
- Modify when modal appears
- Customize close behavior

## 📊 Analytics Setup (PostHog)

### Initial Setup

1. **Get Your PostHog API Key**
   - Sign up at [PostHog](https://posthog.com)
   - Create a project
   - Copy your Project API Key

2. **Update API Key** in both files:
   - `index.html` (Line 138)
   - `case-study/email-campaign/email.html` (Line 31)
   
   Replace `'YOUR_PROJECT_API_KEY'` with your actual API key:
   ```javascript
   posthog.init('phc_your_actual_api_key_here', {
     api_host: 'https://us.i.posthog.com',
     // ...
   });
   ```

3. **Custom Instance**
   - If using self-hosted PostHog, update `api_host`:
   ```javascript
   api_host: 'https://your-instance.posthog.com'
   ```

### Tracked Events

The template automatically tracks:

1. **Page Views** (`$pageview`)
   - Home page: `page_type: 'home'`
   - Case study pages: `page_type: 'case_study'`

2. **Project Clicks** (`project_clicked`)
   - Properties: `project_name`, `project_type` ('image' or 'title')

3. **Case Study Clicks** (`case_study_clicked`)
   - Properties: `case_study_name`, `click_type` ('image' or 'button')

### Custom Events

Add custom tracking:
```javascript
posthog.capture('event_name', {
  property1: 'value1',
  property2: 'value2'
});
```

## 📄 Case Study Pages

### Create a New Case Study Page

1. **Create directory structure:**
   ```
   case-study/
     └── your-project-name/
         └── index.html
   ```

2. **Copy template from `case-study/email-campaign/email.html`**

3. **Customize the page:**
   - Update title and meta tags
   - Replace YouTube video embed
   - Update project explanation paragraphs
   - Modify highlights list
   - Add your project images

4. **Link from main page:**
   - Update project card links to point to your case study
   - Update case study section links

### Case Study Page Structure

- **Title Section**: Project name, category tags, description
- **Project Overview**: Left column with paragraphs
- **Highlights**: Right column with key points
- **Video Section**: Full-width YouTube embed
- **Image Gallery**: 3 images in a grid
- **Back Button**: Link back to portfolio

## 🎨 Styling Customization

### Colors

The template uses Tailwind's default zinc color palette. To customize:

1. **Use Tailwind CDN custom config** (if needed):
   ```html
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             primary: '#your-color',
           }
         }
       }
     }
   </script>
   ```

2. **Or edit CSS directly** in `css/main.css`

### Fonts

- **Primary Font**: Inter (loaded from Google Fonts)
- **Font Size Scale**: Uses Tailwind's default scale
- To change font, update the font-family in:
  - `css/main.css` (Line 7)
  - Case study pages (Line 30 in email.html)

### Spacing & Layout

- Uses Tailwind's spacing scale
- Max width: `max-w-7xl` (1280px)
- Padding: Responsive with `px-6` and `py-16 sm:py-24`

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS (no dependencies)
- **Lucide Icons**: Icon library (via CDN)
- **PostHog**: Analytics (optional)

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ (with graceful degradation)

### Performance

- No build process required
- Optimized for fast loading
- Lazy loading for images (where applicable)
- Minimal JavaScript

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px)
- **Desktop**: `md:` (≥ 768px)
- **Large Desktop**: `lg:` (≥ 1024px)
- **XL Desktop**: `xl:` (≥ 1280px)

## 🔍 SEO Features

### Meta Tags
- Title, description, keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Geo-location tags
- Canonical URL

### Structured Data
- Person schema (JSON-LD)
- WebSite schema
- Proper semantic HTML

### Best Practices
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- ARIA labels where needed

## 📝 Tips & Best Practices

1. **Images**
   - Use WebP format for better compression
   - Optimize images before uploading
   - Use appropriate aspect ratios (2:3 for projects, 4:3 for case studies)

2. **Content**
   - Keep project descriptions concise
   - Use clear, action-oriented CTAs
   - Highlight metrics and achievements

3. **Performance**
   - Minimize custom JavaScript
   - Use CDN-hosted assets where possible
   - Consider lazy loading for below-fold images

4. **Accessibility**
   - Maintain proper heading hierarchy
   - Ensure sufficient color contrast
   - Test with keyboard navigation
   - Use descriptive alt text

## 🐛 Troubleshooting

### Icons Not Showing
- Check that Lucide Icons CDN is loading
- Ensure `lucide.createIcons()` is called after DOM loads

### Analytics Not Working
- Verify PostHog API key is correct
- Check browser console for errors
- Ensure no ad blockers are interfering

### Images Not Displaying
- Check file paths are correct
- Ensure images are in the `img/` folder
- Verify image URLs are accessible

### Modal Not Appearing
- Check that exit intent detection JavaScript is loaded
- Test by moving mouse to top of page quickly
- Verify modal HTML structure is intact

## 📄 License

This template is provided as-is for portfolio use. Customize freely for your personal or professional portfolio.

## 🙏 Credits

- **Design**: Modern portfolio template
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Technology Icons**: [Simple Icons](https://simpleicons.org/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [PostHog](https://posthog.com/)

## 📞 Support

For customization help or questions:
1. Review the code comments in HTML files
2. Check Tailwind CSS documentation
3. Refer to this README

---

**Happy Building! 🚀**

Build something amazing with this template!

