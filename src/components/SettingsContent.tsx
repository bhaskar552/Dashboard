import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoriesDropdown from './CategoriesDropdown';

const SettingsContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock settings data
  const settings = [
    { id: 1, name: 'General Settings', category: 'General' },
    { id: 2, name: 'Security Settings', category: 'Security' },
    { id: 3, name: 'Notification Settings', category: 'Notifications' },
  ];

  const filteredSettings = settings.filter(setting => 
    setting.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || setting.category === selectedCategory)
  );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredSettings.map(setting => (
          <div 
            key={setting.id} 
            className="flex-1 min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{setting.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{setting.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsContent;
