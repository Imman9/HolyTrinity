import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ApplicationFormProps {
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSwitchToLogin, onSwitchToRegister }) => {
  const { currentTheme } = useTheme();
  const [applicationType, setApplicationType] = useState<'student' | 'teacher' | 'other'>('student');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: currentTheme.primaryColor }}>
            Apply to Join A.C.K HOLY TRINITY Academy
          </h2>
          <p className="text-gray-600">Complete the application form below</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Application Form Coming Soon
          </h3>
          <p className="text-gray-600 mb-6">
            This will include comprehensive forms for student, teacher, and staff applications.
          </p>
        </div>

        <div className="mt-8 text-center space-y-3">
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationForm; 