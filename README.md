# <p align="center"> <img id="top" src="src/assets/images/logo.png" alt="Mosadie Gives Back Logo" width="100"/> </p>

<h1 align="center">Mosadie Gives Back - Charity Web Application</h1>
<br>
<h2 align="center">About this Project</h2>
<p align="center">Mosadie Gives Back is a comprehensive web application designed to empower and support the charitable work of the Mosadie Gives Back NPO, which serves families in the Tafelsig area of Cape Town, South Africa. Built with modern web technologies and a focus on user experience, this platform bridges the gap between the charity organization, its volunteers, donors, and the community it serves. The application features an elegant black-and-white design theme with smooth, professional animations that enhance engagement without overwhelming users. Through a robust role-based access control system, the platform enables public interaction through galleries, contact forms, and volunteer applications, while providing powerful administrative tools for staff to manage inventory, track donations, coordinate distributions, and maintain all aspects of the organization's operations. This full-stack solution demonstrates the power of modern web development in creating meaningful social impact.</p>
<br><br>
<p align="center">
  <strong>Jordan Muller | ST10150702</strong>
  <br>
  <strong>Darren Stander | ST10209886</strong>
  <br>
  <strong>Tayyib Dawood | ST10132915</strong>
 <br>
 Project Repository: <br>
 https://github.com/VCCT-PROG7312-2025-G2/Mosadie-Gives-Back <br><br>
 Live Website: <br>
 https://mgb-lovat.vercel.app/ <br><br>
</p>
<br>

## Built With

<div>
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black&width=200" alt="React Badge">
  </a>
  <br>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&width=200" alt="TypeScript Badge">
  </a>
  <br>
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&width=200" alt="Vite Badge">
  </a>
  <br>
  <a href="https://supabase.com/" target="_blank">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white&width=200" alt="Supabase Badge">
  </a>
  <br>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&width=200" alt="TailwindCSS Badge">
  </a>
  <br>
  <a href="https://www.framer.com/motion/" target="_blank">
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white&width=200" alt="Framer Motion Badge">
  </a>
  <br>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&width=200" alt="Vercel Badge">
  </a>
  <br>
  <a href="https://github.com/" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white&width=200" alt="GitHub Badge">
  </a>
  <br>
  <a href="https://github.com/features/actions" target="_blank">
    <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white&width=200" alt="GitHub Actions Badge">
  </a>
 <br><br>
 <a href="#top">(Back to Top)</a>
</div>

<br>

## Getting Started

<div>
This project is built using React 18 with TypeScript, Vite for build tooling, and Supabase for backend services. The application follows modern web development best practices with clean code architecture, comprehensive type safety, and advanced animation techniques.

### Prerequisites

- **Node.js 18+** or later
- **npm** or **yarn** package manager
- **Git** for version control
- **Supabase Account** for database and authentication
- **Vercel Account** (optional, for deployment)

Ensure you have Node.js installed by downloading it from <a href="https://nodejs.org/" target="_blank">here</a>.

### Cloning Repository

To clone this repository:

```bash
git clone https://github.com/VCCT-PROG7312-2025-G2/Mosadie-Gives-Back.git
cd Mosadie-Gives-Back
```

### Environment Setup

1. **Create a `.env` file** in the root directory:

```bash
touch .env
```

2. **Add your Supabase credentials** (see `.env.example`):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

### Installing Dependencies

```bash
npm install
```

### Running the Project

1. **Start the development server**:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

2. **Build for production**:

```bash
npm run build
```

3. **Preview production build locally**:

```bash
npm run preview
```

### Project Structure

```
mosadie-gives-back/
├── src/
│   ├── assets/              # Static assets (images, icons)
│   │   ├── images/          # Charity photos and graphics
│   │   └── icons/           # SVG icons and favicons
│   ├── components/          # React components
│   │   ├── common/          # Reusable UI components (Button, Card, Modal)
│   │   ├── layout/          # Layout components (Header, Footer, Navigation)
│   │   └── features/        # Feature-specific components
│   ├── pages/               # Page components (Home, Gallery, Contact, etc.)
│   ├── context/             # React Context providers (AuthContext)
│   ├── hooks/               # Custom React hooks (useAuth)
│   ├── services/            # API services and business logic
│   │   └── supabase/        # Supabase client and auth services
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── lib/                 # Third-party library configurations
│   ├── styles/              # Global styles and Tailwind config
│   ├── App.tsx              # Main App component with routing
│   └── main.tsx             # Application entry point
├── .github/
│   └── workflows/           # GitHub Actions CI/CD pipelines
│       ├── ci.yml           # Continuous Integration
│       └── deploy.yml       # Vercel deployment
├── public/                  # Public static files
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # TailwindCSS configuration
└── vite.config.ts           # Vite build configuration
```

</div>
<a href="#top">(Back to Top)</a>

<br><br>

## Usage

This application serves multiple user types: the general public can learn about the charity, view galleries, contact the organization, apply to volunteer, and make donations. Staff members with employee roles can manage inventory, record distributions, and coordinate operations. Administrators have full access to manage all aspects of the platform including user roles, content management, and organizational data.

<div align="center">
This Application has the following Features:<br>
  <img src="https://img.shields.io/badge/Public%20Homepage-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Photo%20Gallery-cyan?style=for-the-badge" />
  <img src="https://img.shields.io/badge/About%20Us%20/%20Our%20Story-teal?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Contact%20Form-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Volunteer%20Applications-lime?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Donation%20Portal-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Our%20Projects-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Authentication%20System-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Role%20Based%20Access-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Admin%20Dashboard-pink?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Employee%20Portal-gray?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Inventory%20Management-brown?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Distribution%20Tracking-navy?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Smooth%20Animations-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Responsive%20Design-white?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CI/CD%20Pipeline-indigo?style=for-the-badge" />
</div>
<br>

The application features a clean black-and-white design aesthetic with professional animations powered by Framer Motion. Users experience smooth page transitions, elegant hover effects, staggered fade-in animations for images, and dynamic content loading that enhances engagement without overwhelming the interface.

### Key Pages & Features

**Public Pages:**
- **Home**: Dynamic carousel showcasing the charity's impact, with rotating hero text and quick access to key actions
- **About Us / Our Story**: Animated hero section with rotating text, detailed mission statement, meet the team section, and call-to-action buttons
- **Gallery**: Responsive image gallery with lazy loading, lightbox functionality, and smooth animations
- **Contact**: Form submission integrated with Supabase for direct communication
- **Volunteer**: Multi-step application form with progress tracking and validation
- **Donations**: Information about donation options and impact
- **Our Projects**: Overview of ongoing and completed charity initiatives

**Authenticated Pages:**
- **Login**: Secure authentication with Supabase Auth, supporting role-based redirects
- **Employee Portal**: Inventory management, distribution recording, and operational tools
- **Admin Dashboard**: Full content management system with user role management, analytics, and system oversight

<br>
<a href="#top">(Back to Top)</a>

<br><br>

## Technical Architecture

### Database Schema (Supabase PostgreSQL)

The application uses **11 comprehensive database tables** with Row Level Security (RLS) policies:

**Core Tables:**
- **users**: Extended user profiles with role-based permissions (admin, employee, donor, volunteer)
- **projects**: Charity projects and initiatives with descriptions, goals, and timelines
- **gallery_images**: Photo gallery with metadata, categories, and display ordering
- **contact_messages**: Submitted contact forms with status tracking
- **testimonies**: User testimonials and success stories

**Donation Management:**
- **donators**: Donor profiles with contact information and donation history
- **donations**: Individual donation records with amount, date, and project allocation

**Volunteer System:**
- **volunteers**: Volunteer applications with skills, availability, and approval status

**Inventory & Distribution:**
- **inventory**: Food items, supplies, and resources with quantity tracking
- **distribution**: Distribution events linking inventory to recipients with dates and quantities

### Authentication & Authorization

**Supabase Auth Implementation:**
- Email/password authentication with secure session management
- Role-based access control (RBAC) with hierarchical permissions
- Protected routes with conditional rendering based on user roles
- Custom authentication context provider (AuthContext)
- Fire-and-forget sign-in pattern to prevent promise hanging issues
- Session polling for reliable authentication state detection

**Row Level Security Policies:**
- Public read access for gallery, projects, and testimonies
- Authenticated write access for contact forms and volunteer applications
- Employee-level permissions for inventory and distribution management
- Admin-only access for user management and system configuration

### Frontend Architecture

**React 18 with TypeScript:**
- Functional components with React Hooks
- Custom hooks for authentication (useAuth) and data fetching
- Context API for global state management (auth state)
- React Router v6 for client-side routing with protected routes
- Strict TypeScript configuration with comprehensive type safety

**Styling & UI:**
- TailwindCSS with custom configuration and black-white-gray color palette
- Component composition pattern with reusable UI primitives
- shadcn/ui inspired component architecture
- Responsive design with mobile-first approach
- Custom utility functions (cn for class name merging)

**Animation System:**
- Framer Motion for all animations and transitions
- Smooth page transitions with exit animations
- Staggered fade-in effects for image galleries
- Spring animations for interactive elements
- Intersection Observer for viewport-triggered animations
- Rotating hero text with auto-cycling effect

**Form Management:**
- React Hook Form for form state management
- Zod schema validation for type-safe validation rules
- Multi-step forms with progress tracking
- Client-side validation with user-friendly error messages
- Integration with Supabase for form submission

### API & Services Layer

**Service Architecture:**
- Separation of concerns with dedicated service files
- Supabase client initialization with environment variables
- Authentication service (signIn, signOut, getCurrentUser, checkRole)
- Database services for CRUD operations on all tables
- Type-safe API calls with generated TypeScript interfaces

**Key Services:**
- **authService**: Complete authentication flow management
- **contactService**: Contact form submission and retrieval
- **volunteerService**: Volunteer application processing
- **inventoryService**: Inventory CRUD operations
- **distributionService**: Distribution event management

### DevOps & CI/CD

**GitHub Actions Pipelines:**

**Continuous Integration (ci.yml):**
- Triggers on push and pull requests to all branches
- Runs ESLint for code quality with `--max-warnings 0`
- Executes TypeScript compilation check
- Builds the application to verify production readiness
- Uses Node.js caching for faster pipeline execution

**Continuous Deployment (deploy.yml):**
- Triggers on push to main branch
- Automatic deployment to Vercel
- Immutable deployments with unique preview URLs
- Environment variable management through GitHub Secrets
- Zero-downtime deployments with instant rollback capability

**Deployment Architecture:**
- **Frontend**: Vercel serverless functions with global CDN edge network
- **Database**: Supabase managed PostgreSQL with automatic backups
- **Storage**: Supabase Storage for user-uploaded files (future feature)
- **SSL**: Automatic HTTPS with Vercel's SSL certificates
- **Custom Domain**: www.mosadiegivesback.org

<br><br>

## Roadmap

- ✅ **Phase 1 - Foundation & Core Infrastructure** (Complete)
  - ✅ Project setup with React, TypeScript, Vite
  - ✅ Supabase configuration and database schema
  - ✅ Authentication system with role-based access control
  - ✅ Navigation with protected routes
  - ✅ Responsive layout with Header and Footer
  - ✅ CI/CD pipeline with GitHub Actions and Vercel
  - ✅ Black-and-white theme with TailwindCSS
  - ✅ Framer Motion animation system

- ✅ **Phase 2 - Public Pages** (Complete)
  - ✅ Home page with image carousel and statistics
  - ✅ About Us page with rotating hero text and team section
  - ✅ Gallery page with lightbox and lazy loading
  - ✅ Contact page with form submission
  - ✅ Volunteer page with multi-step application form

- ⬜ **Phase 3 - Volunteer & Donation Systems** (In Progress)
  - ✅ Volunteer application form with validation
  - ⬜ Admin approval workflow for volunteer applications
  - ⬜ Donation page with payment gateway integration
  - ⬜ Donation tracking and receipt generation
  - ⬜ Donor portal with donation history
  - ⬜ Our Projects page with dynamic content

- ⬜ **Phase 4 - Employee Portal** (Planned)
  - ⬜ Inventory management dashboard
  - ⬜ Add, edit, and remove inventory items
  - ⬜ Low stock alerts and notifications
  - ⬜ Distribution event creation
  - ⬜ Distribution history and reporting
  - ⬜ Quick actions for common tasks

- ⬜ **Phase 5 - Admin Dashboard** (Planned)
  - ⬜ User management with role assignment
  - ⬜ Content management system for all pages
  - ⬜ Analytics dashboard with key metrics
  - ⬜ Gallery image upload and management
  - ⬜ Project creation and updates
  - ⬜ Testimonial moderation
  - ⬜ System settings and configuration

- ⬜ **Phase 6 - Advanced Features** (Future)
  - ⬜ Email notifications with Supabase Edge Functions
  - ⬜ Real-time updates with Supabase Realtime
  - ⬜ File uploads to Supabase Storage
  - ⬜ SMS notifications for distribution events
  - ⬜ Mobile app with React Native
  - ⬜ Multi-language support (English, Afrikaans, Xhosa)
  - ⬜ Volunteer hour tracking and certificates
  - ⬜ Advanced reporting and analytics

- ⬜ **Phase 7 - Testing & Quality Assurance** (Future)
  - ⬜ Unit tests with Vitest
  - ⬜ Integration tests with React Testing Library
  - ⬜ End-to-end tests with Playwright
  - ⬜ Performance optimization and monitoring
  - ⬜ Accessibility audit and WCAG compliance
  - ⬜ Security audit and penetration testing

<br>
<a href="#top">(Back to Top)</a>

<br><br>

## Code Architecture

### Component Hierarchy

**Layout Components:**
- **Header**: Navigation bar with logo, menu items, and authentication state
- **Footer**: Contact information, social media links, and quick navigation
- **ProtectedRoute**: Higher-order component for route protection based on user roles

**Common Components:**
- **Button**: Polymorphic button component with variants and sizes
- **Card**: Container component with consistent styling
- **Modal**: Reusable modal dialog with animation
- **Input**: Form input with label and error message support
- **Textarea**: Multi-line text input component
- **Select**: Dropdown select component

**Feature Components:**
- **ImageCarousel**: Auto-playing carousel with manual navigation
- **RotatingHero**: Animated hero section with cycling text
- **ImageGallery**: Grid layout with lightbox and lazy loading
- **ContactForm**: Form with validation and Supabase integration
- **VolunteerForm**: Multi-step form with progress indicator

### TypeScript Types & Interfaces

**User Types:**
```typescript
interface User {
  id: string
  email: string
  role: 'admin' | 'employee' | 'donor' | 'volunteer'
  fullName: string
  phoneNumber: string
  createdAt: string
}
```

**Form Data Types:**
```typescript
interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface VolunteerFormData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
  }
  availability: {
    days: string[]
    timeSlots: string[]
  }
  skills: string[]
  motivation: string
}
```

**Database Types:**
- Generated types from Supabase schema
- snake_case (database) to camelCase (frontend) transformation
- Strict null checking and optional chaining
- Type guards for runtime type safety

### State Management

**Context API:**
- **AuthContext**: Global authentication state with user information and role
- **useAuth Hook**: Custom hook for accessing authentication context
- Provider pattern for context distribution

**Local State:**
- **useState**: Component-level state for UI interactions
- **useEffect**: Side effects and lifecycle management
- **useReducer**: Complex state logic in multi-step forms

### Routing Structure

**Public Routes:**
- `/` - Home
- `/about` - About Us / Our Story
- `/gallery` - Photo Gallery
- `/contact` - Contact Form
- `/volunteer` - Volunteer Application
- `/donations` - Donation Information
- `/projects` - Our Projects

**Authenticated Routes:**
- `/login` - Authentication (redirects if already logged in)
- `/employee` - Employee Portal (employee + admin roles)
- `/admin` - Admin Dashboard (admin role only)

### Data Flow Pattern

1. **User Action**: Click, form submission, navigation
2. **Component Handler**: Event handler in React component
3. **Service Call**: API call through service layer
4. **Supabase Query**: Database operation with RLS policies
5. **Response Processing**: Transform data, update state
6. **UI Update**: Re-render with new data and animations

<br><br>

## Contact

**Jordan Muller** - ST10150702@vcconnect.edu.za
<br>
**Project Repository**: https://github.com/VCCT-PROG7312-2025-G2/Mosadie-Gives-Back
<br>
**Live Website**: https://www.mosadiegivesback.org

<br>
<a href="#top">(Back to Top)</a>

<br><br>

## Acknowledgments

This project was developed with extensive research into modern web development practices, nonprofit technology solutions, and user experience design for charitable organizations. The following acknowledgments are made for resources and inspiration:

### References

**Web Development & Frameworks:**

React Team. (2024). React Documentation - The library for web and native user interfaces. Retrieved from React Docs: https://react.dev/

Microsoft. (2024). TypeScript Documentation - JavaScript with syntax for types. Retrieved from TypeScript Docs: https://www.typescriptlang.org/

Vite Team. (2024). Vite - Next Generation Frontend Tooling. Retrieved from Vite Docs: https://vitejs.dev/

**Backend & Database:**

Supabase. (2024). Supabase Documentation - The open source Firebase alternative. Retrieved from Supabase Docs: https://supabase.com/docs

PostgreSQL Global Development Group. (2024). PostgreSQL Documentation. Retrieved from PostgreSQL Docs: https://www.postgresql.org/docs/

**UI & Styling:**

Tailwind Labs. (2024). Tailwind CSS Documentation. Retrieved from Tailwind Docs: https://tailwindcss.com/docs

Framer. (2024). Framer Motion Documentation - Production-ready motion library for React. Retrieved from Framer Motion Docs: https://www.framer.com/motion/

shadcn. (2024). shadcn/ui - Beautifully designed components built with Radix UI and Tailwind CSS. Retrieved from shadcn/ui: https://ui.shadcn.com/

**Form Management:**

React Hook Form Team. (2024). React Hook Form Documentation - Performant, flexible and extensible forms. Retrieved from React Hook Form Docs: https://react-hook-form.com/

Colinhacks. (2024). Zod - TypeScript-first schema validation. Retrieved from Zod Docs: https://zod.dev/

**Deployment & CI/CD:**

Vercel. (2024). Vercel Documentation - Build and deploy the best web experiences. Retrieved from Vercel Docs: https://vercel.com/docs

GitHub. (2024). GitHub Actions Documentation - Automate your workflow. Retrieved from GitHub Actions Docs: https://docs.github.com/en/actions

**Design Inspiration:**

Dribbble. (2024). Nonprofit and charity web design inspiration. Retrieved from Dribbble: https://dribbble.com/

Behance. (2024). Web design portfolios and case studies. Retrieved from Behance: https://www.behance.net/

**Community Resources:**

Stack Overflow. (2024). React, TypeScript, and Supabase discussions. Retrieved from Stack Overflow community.

MDN Web Docs. (2024). Web technologies for developers. Retrieved from MDN: https://developer.mozilla.org/

**Charity Sector Research:**

Mosadie Gives Back. (2024). Current charity website and organizational information. Retrieved from: https://www.mosadiegivesback.org/

### AI Usage

In the development of this project, AI tools were utilized as supplementary learning resources and coding assistants to enhance understanding of modern web development patterns, debug complex issues, and explore best practices. All implementation work was performed by the developer with a deep understanding of the codebase.

**Claude AI**: Anthropic, 2024. Claude. Available at: https://claude.ai [Accessed throughout development for architectural guidance and problem-solving].

**GitHub Copilot**: GitHub, 2024. GitHub Copilot. Available at: https://github.com/features/copilot [Used for code completion suggestions and boilerplate generation].

AI assistance was primarily used for:
- Understanding React 18 patterns and best practices with TypeScript
- Exploring Supabase authentication flows and RLS policy implementations
- Learning Framer Motion animation patterns and performance optimization
- Debugging complex TypeScript type issues and generic constraints
- Researching TailwindCSS utility patterns and responsive design techniques
- Understanding Vite build configuration and optimization strategies
- Exploring GitHub Actions workflow syntax and CI/CD best practices
- Learning form validation patterns with React Hook Form and Zod
- Understanding Context API patterns and custom hook creation
- Algorithm design for multi-step form logic and state management

**Critical Note on AI Usage:**
All code was written, thoroughly understood, tested, and debugged by the developer. AI tools served as educational resources similar to documentation, Stack Overflow, and technical articles. The developer maintains complete understanding of the entire codebase, architectural decisions, and can explain any aspect of the implementation. No code was blindly copied from AI suggestions; all implementations were carefully reviewed, modified where necessary, and integrated with full comprehension of their functionality and implications.

The use of AI tools enhanced the learning process and development speed but did not replace the fundamental requirement of developer expertise and critical thinking. Every line of code reflects deliberate design decisions made by the developer based on project requirements, best practices, and user experience considerations.

<br>

<a href="#top">(Back to Top)</a>
