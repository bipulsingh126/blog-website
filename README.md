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

## Component Documentation

### BlogList Component
```typescript
// components/BlogList.jsx
- Main component for displaying blog posts
- Features category filtering (All, Technology, Startup, Lifestyle)
- Fetches blogs from API on component mount
- Responsive grid layout for blog items
```

### Admin Components

#### Sidebar Component
```typescript
// components/AdminComponents/Sidebar.jsx
- Admin navigation sidebar
- Links to:
  - Add Blogs (/admin/addProduct)
  - Blogs List (/admin/blogList)
  - Subscriptions (/admin/subscriptions)
- Responsive design with collapsible layout
```

### API Routes

#### Blog API
```typescript
// app/api/blog/route.js
GET /api/blog
- Fetches all blogs or single blog by ID
- Query params: ?id={blogId} for single blog

POST /api/blog
- Creates new blog post
- Handles image upload with timestamp-based naming
- Accepts form data with:
  - title
  - description
  - category
  - image
  - author
  - authorImg
```

### Pages

#### Blog Detail Page
```typescript
// app/blogs/[id]/page.jsx
- Dynamic route for individual blog posts
- Fetches blog data based on URL parameter
- Displays:
  - Blog header with author info
  - Featured image
  - Full blog content
  - Social sharing options
```

#### Admin Pages

##### Add Product Page
```typescript
// app/admin/addProduct/page.jsx
- Form for creating new blog posts
- Features:
  - Image upload with preview
  - Title and description inputs
  - Category selection
  - Author attribution
  - Success/error notifications
```

##### Blog List Page
```typescript
// app/admin/blogList/page.jsx
- Admin interface for managing blogs
- (Currently in development)
```

##### Admin Layout
```typescript
// app/admin/layout.jsx
- Wrapper layout for admin section
- Includes:
  - Sidebar navigation
  - Header with admin info
  - Toast notifications
```

## Project Structure Updates

```
blog-website/
├── app/
│   ├── admin/
│   │   ├── addProduct/    # Blog creation
│   │   ├── blogList/      # Blog management
│   │   └── layout.jsx     # Admin layout wrapper
│   ├── blogs/
│   │   └── [id]/         # Individual blog view
│   └── api/
│       └── blog/         # Blog API endpoints
├── components/
│   ├── AdminComponents/
│   │   └── Sidebar.jsx   # Admin navigation
│   └── BlogList.jsx      # Blog listing component
```

## API Documentation Updates

### Blog Endpoints
```typescript
GET    /api/blog          // Get all blogs
GET    /api/blog?id=:id   // Get single blog
POST   /api/blog          // Create blog with image upload
```

## Development Guidelines

### Component Structure
```typescript
// Example blog component structure
const BlogComponent = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Fetch data
  }, [])

  return (
    // JSX with Tailwind styling
  )
}
```

### Image Handling
```typescript
// Image upload handling
const formData = new FormData()
formData.append('image', imageFile)
// Store with timestamp-based naming
const timestamp = Date.now()
const path = `./public/${timestamp}_${image.name}`
```
