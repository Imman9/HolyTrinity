import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{currentTheme.icon}</span>
              <h1 className="text-xl font-semibold" style={{ color: currentTheme.primaryColor }}>
                A.C.K HOLY TRINITY Academy
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.name} ({user?.role})
              </span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: currentTheme.primaryColor }}>
            {currentTheme.greeting}
          </h2>
          <p className="text-gray-600 mb-8">
            Dashboard coming soon! This will include role-specific features for {user?.role}s.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Results Management</h3>
              <p className="text-gray-600">Upload, view, and manage student results</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">A.C.K AI Assistant</h3>
              <p className="text-gray-600">Get help with questions and assignments</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Forum</h3>
              <p className="text-gray-600">Connect with teachers and students</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Library</h3>
              <p className="text-gray-600">Access books and study materials</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Assignments</h3>
              <p className="text-gray-600">View and submit assignments</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Notes</h3>
              <p className="text-gray-600">Access class notes and materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 