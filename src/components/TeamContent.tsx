import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoriesDropdown from './CategoriesDropdown';

const TeamContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock team data
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', role: 'Manager' },
  ];

  const filteredTeamMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || member.role === selectedCategory)
  );

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredTeamMembers.map(member => (
          <div 
            key={member.id} 
            className="flex-1 min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{member.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamContent;
