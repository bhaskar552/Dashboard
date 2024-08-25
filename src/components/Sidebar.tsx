import React from 'react';
import { sidebarOptions, userProgress } from '../utils/mockData';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface SidebarProps {
  activeOption: string;
  onOptionClick: (option: string) => void;
  isOpen: boolean;
  onClose: () => void;
  
}

const Sidebar: React.FC<SidebarProps> = ({ activeOption, onOptionClick, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-800 text-white transition duration-200 ease-in-out z-20 md:relative md:translate-x-0`}>
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-white focus:outline-none">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        <ul>
          {sidebarOptions.map((option) => (
            <li
              key={option.name}
              className={`mb-4 cursor-pointer ${
                activeOption === option.name ? 'text-blue-400' : ''
              }`}
              onClick={() => {
                onOptionClick(option.name);
                onClose();
              }}
            >
              <div className="flex items-center">
                <option.icon className="w-6 h-6 mr-2" />
                {option.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <h3 className="text-sm mb-2">Progress</h3>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(userProgress.completedTasks / userProgress.totalTasks) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm mt-2">{userProgress.completedTasks} / {userProgress.totalTasks} projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;