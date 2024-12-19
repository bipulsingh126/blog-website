# Blog Website Frontend Documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

```
blog-website/
├── app/
│   ├── blogs/
│   │   └── [id]/           # Dynamic blog post pages
│   └── page.js             # Home page
├── components/
│   ├── Footer.jsx          # Footer component
│   └── ...                 # Other components
└── Assets/
    └── assets.js           # Central asset management
```

## Key Features

- **Dynamic Blog Posts**: Individual blog pages with unique URLs using Next.js dynamic routing
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Optimization**: Using Next.js Image component for optimal loading
- **Component-Based Architecture**: Reusable React components

## Components Overview

### Blog Post Page (`blogs/[id]/page.jsx`)
- Dynamic routing for individual blog posts
- Displays full article content with:
  - Header with logo and CTA button
  - Author information
  - Featured image
  - Article content with structured sections
  - Social sharing options
  - Footer

### Asset Management
All assets (images, icons, blog data) are centrally managed in `Assets/assets.js`:
- Blog data structure includes:
  - ID
  - Title
  - Author details
  - Images
  - Content

## Styling

The project uses Tailwind CSS for styling with:
- Responsive breakpoints (sm, md, lg)
- Custom shadows and borders
- Flexible layouts using Flexbox
- Consistent spacing using Tailwind's spacing scale

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

### Adding New Blog Posts
1. Add new blog data to `Assets/assets.js`:
```javascript
export const blog_data = [
  {
    id: 1,
    title: "Your Blog Title",
    author: "Author Name",
    author_img: "/path/to/author/image",
    image: "/path/to/featured/image",
    description: "Blog content..."
  }
  // ...
]
```

### Creating New Components
1. Create component in `/components` directory
2. Use Tailwind CSS for styling
3. Follow existing component patterns for consistency

## Deployment

Deploy using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import project to Vercel
3. Configure build settings if needed
4. Deploy

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Image Component](https://nextjs.org/docs/app/building-your-application/optimizing/images)
