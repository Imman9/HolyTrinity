import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  code?: string;
  class?: string;
  admissionNumber?: string;
  gradeStream?: string;
}

interface RegisterProps {
  onSwitchToLogin: () => void;
  onSwitchToApplication: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitchToLogin, onSwitchToApplication }) => {
  const { register: registerUser, loading } = useAuth();
  const { currentTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<RegisterFormData>();

  const selectedRole = watch('role');
  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      await registerUser(data);
      // Show success message and redirect to login
      onSwitchToLogin();
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: currentTheme.primaryColor }}>
            Create Account
          </h2>
          <p className="text-gray-600">Join A.C.K HOLY TRINITY Academy</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Your Role
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'admin', label: 'Admin', code: '00001' },
              { value: 'teacher', label: 'Teacher', code: '00002' },
              { value: 'student', label: 'Student', code: 'Class' },
              { value: 'parent', label: 'Parent', code: 'Admission' }
            ].map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => {}}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedRole === role.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-medium">{role.label}</div>
                <div className="text-xs text-gray-500">Code: {role.code}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register('name', { required: 'Full name is required' })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
                })}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Role-specific fields */}
          {(selectedRole === 'admin' || selectedRole === 'teacher') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                {...register('code', { required: 'Verification code is required' })}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter verification code"
              />
              {errors.code && (
                <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
              )}
            </div>
          )}

          {selectedRole === 'student' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class
              </label>
              <input
                type="text"
                {...register('class', { required: 'Class is required' })}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Form 1, Class 3"
              />
              {errors.class && (
                <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>
              )}
            </div>
          )}

          {selectedRole === 'parent' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Child's Admission Number
              </label>
              <input
                type="text"
                {...register('admissionNumber', { required: 'Admission number is required' })}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter child's admission number"
              />
              {errors.admissionNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.admissionNumber.message}</p>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center space-y-3">
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Already have an account? Sign in
          </button>
          <div>
            <button
              onClick={onSwitchToApplication}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              Apply to Join Our School
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register; 