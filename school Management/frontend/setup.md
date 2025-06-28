# Frontend Setup Guide

## Prerequisites Installation

### 1. Install Node.js

**Windows:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Verify installation by opening Command Prompt and running:
   ```bash
   node --version
   npm --version
   ```

**macOS:**
1. Install Homebrew if you don't have it:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Node.js:
   ```bash
   brew install node
   ```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

### 2. Verify Installation

After installing Node.js, verify it's working:
```bash
node --version  # Should show v16 or higher
npm --version   # Should show 8 or higher
```

## Project Setup

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Lucide React
- And more...

### 3. Start Development Server
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

## Troubleshooting

### Common Issues

**1. Node.js not found:**
- Make sure Node.js is installed and in your PATH
- Restart your terminal/command prompt after installation

**2. npm install fails:**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules folder and package-lock.json
- Run `npm install` again

**3. Port 3000 already in use:**
- The app will automatically try port 3001
- Or kill the process using port 3000

**4. TypeScript errors:**
- These are expected until Node.js is installed
- After installation and `npm install`, the errors will resolve

## Development

Once the app is running, you can:

1. **View the Splash Screen** - 7-second loading screen
2. **Test Authentication** - Login/Register forms
3. **Explore the Dashboard** - Basic layout with role-based features
4. **Check Theme System** - Dynamic festive themes

## Next Steps

After the frontend is running, you can proceed to build:
1. The backend API (Node.js/Express)
2. The database (PostgreSQL)
3. Additional frontend features

## Support

If you encounter any issues:
1. Check that Node.js is properly installed
2. Ensure you're in the correct directory
3. Try clearing npm cache and reinstalling dependencies
4. Check the console for specific error messages 