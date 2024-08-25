import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void; // Add onClick prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer" // Add cursor-pointer
      onClick={onClick} // Add onClick handler
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-500">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;