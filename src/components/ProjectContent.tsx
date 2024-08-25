import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar'; // Import the SearchBar component if it's in a different file

const ProjectContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project A', category: 'Development', completed: false },
    { id: 2, name: 'Project B', category: 'Design', completed: false },
    { id: 3, name: 'Project C', category: 'Marketing', completed: false },
  ]);

  const handleCompleteToggle = (projectId: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId ? { ...project, completed: !project.completed } : project
      )
    );
  };

  const filteredProjects = projects.filter(
    project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || project.category === selectedCategory)
  );

  const completedProjects = projects.filter(project => project.completed).length;
  const progressPercentage = (completedProjects / projects.length) * 100;

  return (
    <div className="p-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center mb-4">
          <SearchBar onSearch={setSearchTerm} />
          {/* Placeholder for CategoriesDropdown if needed */}
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Add a dropdown or other filtering components if needed */}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="relative pt-1 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex mb-2 items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">Project Completion</h3>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {completedProjects}/{projects.length} Completed
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
          <motion.div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            style={{ width: `${progressPercentage}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.7, type: 'spring' }}
          />
        </div>
      </motion.div>

      {/* Project List */}
      <div className="flex flex-wrap gap-4">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            className={`flex-1 min-w-[300px] p-4 rounded-lg shadow-lg ${
              project.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-white dark:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{project.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.category}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={project.completed}
                  onChange={() => handleCompleteToggle(project.id)}
                  className="mr-2"
                />
                <span>{project.completed ? 'Completed' : 'Incomplete'}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
