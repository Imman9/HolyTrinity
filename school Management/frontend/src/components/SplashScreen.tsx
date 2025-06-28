import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { currentTheme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 7000; // 7 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay for smooth transition
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: currentTheme.backgroundColor }}
      >
        <div className="text-center max-w-md mx-auto px-6">
          {/* School Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="text-6xl mb-6"
          >
            {currentTheme.icon}
          </motion.div>

          {/* School Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-3xl font-bold mb-4"
            style={{ color: currentTheme.primaryColor }}
          >
            A.C.K HOLY TRINITY Academy
          </motion.h1>

          {/* School Motto */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg italic mb-6"
            style={{ color: currentTheme.textColor }}
          >
            "Excellence in Education, Faith in Action"
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="space-y-2 mb-8"
            style={{ color: currentTheme.textColor }}
          >
            <p>📞 +254 700 000 000</p>
            <p>📧 info@ackholytrinity.ac.ke</p>
            <p>📍 P.O. Box 12345, Nairobi, Kenya</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-2 rounded-full mx-auto"
            style={{ backgroundColor: currentTheme.primaryColor }}
          />

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-4 text-sm"
            style={{ color: currentTheme.textColor }}
          >
            Loading School Management System...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 