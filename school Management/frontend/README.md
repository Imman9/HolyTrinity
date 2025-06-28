# A.C.K HOLY TRINITY Academy - Frontend

A modern, responsive school management system built with React.js, TypeScript, and Tailwind CSS.

## Features

### 🔐 Authentication System
- **Splash Screen**: 7-second loading screen with school motto and contact information
- **Role-based Login**: Admin (00001), Teacher (00002), Student (Class), Parent (Admission)
- **Secure Registration**: Password confirmation and role-specific fields
- **4-digit Verification**: In-app verification with rate limiting

### 🧠 A.C.K AI Assistant
- **96% Intelligent Mock AI**: No API costs, built-in chatbot
- **Smart Features**:
  - Answer student questions
  - Generate practice questions
  - Grade and provide feedback
  - Explain notes and topics
- **Pro AI Upgrade (99%)**: Manual payment verification with enhanced features
- **Dynamic Chat UI**: Red cards for users, blue for AI, gold for Pro

### 🎓 Core Features
- **Results Management**: Upload, view, and export results with auto-remarks
- **Forum System**: Real-time messaging with threaded conversations
- **Library System**: Book management with search functionality
- **Dynamic Themes**: Christmas, New Year, and Easter themes

### 🏫 School Application System
- **Apply to Join**: Student, Teacher, and Other staff applications
- **Comprehensive Forms**: Role-specific information collection
- **Admin Review**: Application management dashboard

## Tech Stack

- **Frontend**: React.js 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Context API
- **Forms**: React Hook Form with validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Routing**: React Router DOM

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installing Node.js

1. **Windows**: Download from [nodejs.org](https://nodejs.org/)
2. **macOS**: Use Homebrew: `brew install node`
3. **Linux**: Use package manager or download from nodejs.org

## Installation

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── SplashScreen.tsx
│   │   ├── Dashboard.tsx
│   │   └── ApplicationForm.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Key Components

### Authentication
- **Login**: Role-based authentication with verification codes
- **Register**: Comprehensive registration with role-specific fields
- **SplashScreen**: 7-second loading screen with school branding

### Context Providers
- **AuthContext**: Manages user authentication state
- **ThemeContext**: Handles dynamic festive themes

### Type Definitions
- Comprehensive TypeScript interfaces for all data models
- Type-safe component props and API responses

## Styling

The project uses Tailwind CSS with custom configurations:

- **Custom Colors**: Primary and secondary color palettes
- **Animations**: Fade-in, slide-in, and bounce effects
- **Responsive Design**: Mobile-first approach
- **Theme Support**: Dynamic festive themes

## Development

### Adding New Components

1. Create the component file in the appropriate directory
2. Export the component as default
3. Import and use in parent components
4. Add TypeScript interfaces for props

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Create custom CSS classes in `App.css` for complex styles
- Follow the established color scheme and spacing patterns

### State Management

- Use React Context for global state (auth, theme)
- Use local state for component-specific data
- Follow the established patterns in existing contexts

## Building for Production

1. **Create a production build**:
   ```bash
   npm run build
   ```

2. **The build folder** will contain optimized files ready for deployment

## Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript for all new components
3. Add proper error handling and loading states
4. Test components thoroughly before committing

## Support

For questions or issues, please refer to the project documentation or contact the development team.

---

**A.C.K HOLY TRINITY Academy** - Excellence in Education, Faith in Action 