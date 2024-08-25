import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Bars3Icon } from '@heroicons/react/24/solid';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="mr-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Writix AI Dashboard</h1>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;