# Blog Website Documentation

A modern blog platform built with Next.js 14, featuring server components, app router, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **State Management:** React Context
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Markdown:** MDX

## Project Structure

```
blog-website/
├── app/
│   ├── (auth)/
│   │   ├── login/         # Login page
│   │   └── register/      # Register page
│   ├── blogs/
│   │   ├── [id]/         # Individual blog view
│   │   ├── create/       # Create new blog
│   │   └── edit/[id]/    # Edit blog
│   ├── api/              # API routes
│   └── page.tsx          # Home page
├── components/
│   ├── auth/            # Authentication components
│   ├── blog/            # Blog-related components
│   ├── shared/          # Reusable components
│   └── ui/              # UI components
├── lib/
│   ├── actions/         # Server actions
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utility functions
│   └── validations/     # Schema validations
├── public/              # Static assets
└── styles/             # Global styles
```

## Key Features

- **Authentication & Authorization**
  - Email & Password login
  - Social login (Google, GitHub)
  - Protected routes
  - Role-based access

- **Blog Management**
  - Create, edit, delete posts
  - Rich text editor with MDX
  - Image upload with optimization
  - Categories and tags

- **User Experience**
  - Responsive design
  - Dark/Light mode
  - Infinite scroll
  - Search functionality
  - Comment system

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-website.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
# .env.local
DATABASE_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLOUDINARY_URL=
```

4. Run the development server:
```bash
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MongoDB connection string |
| `NEXTAUTH_SECRET` | NextAuth.js secret key |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `CLOUDINARY_URL` | Cloudinary upload URL |

## API Routes

### Blog Endpoints
```typescript
GET    /api/blogs          // Get all blogs
GET    /api/blogs/:id      // Get single blog
POST   /api/blogs          // Create blog
PUT    /api/blogs/:id      // Update blog
DELETE /api/blogs/:id      // Delete blog
```

### User Endpoints
```typescript
POST   /api/auth/register  // Register new user
POST   /api/auth/login     // Login user
GET    /api/user/profile   // Get user profile
PUT    /api/user/profile   // Update profile
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use server components by default
- Implement error boundaries
- Write unit tests for critical functions

### Component Creation
```typescript
// Example component structure
import { FC } from 'react'

interface ComponentProps {
  // Props interface
}

const Component: FC<ComponentProps> = ({ }) => {
  return (
    // JSX
  )
}

export default Component
```

### Data Fetching
```typescript
// Example server action
'use server'

export async function fetchBlogs() {
  try {
    // Fetch logic
  } catch (error) {
    // Error handling
  }
}
```

## Deployment

1. Push to GitHub
2. Deploy on Vercel:
   - Connect GitHub repository
   - Configure environment variables
   - Deploy

## Performance Optimization

- Image optimization with next/image
- Static page generation where possible
- Dynamic imports for heavy components
- API route caching
- Database query optimization

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## Learn More

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org)
- [MongoDB](https://www.mongodb.com/docs)
