import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import SplashScreen from './components/SplashScreen';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ApplicationForm from './components/ApplicationForm';
import Dashboard from './components/Dashboard';
import './App.css';

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [showSplash, setShowSplash] = useState(true);
  const [authView, setAuthView] = useState<'login' | 'register' | 'application'>('login');

  useEffect(() => {
    // Show splash screen for 7 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {authView === 'login' && (
            <Login
              onSwitchToRegister={() => setAuthView('register')}
              onSwitchToApplication={() => setAuthView('application')}
            />
          )}
          {authView === 'register' && (
            <Register
              onSwitchToLogin={() => setAuthView('login')}
              onSwitchToApplication={() => setAuthView('application')}
            />
          )}
          {authView === 'application' && (
            <ApplicationForm
              onSwitchToLogin={() => setAuthView('login')}
              onSwitchToRegister={() => setAuthView('register')}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 