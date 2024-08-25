'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import CategoriesDropdown from '../components/CategoriesDropdown';
import FeatureCard from '../components/FeatureCard';
import { featureCards } from '../utils/mockData';
import ProjectContent from '../components/ProjectContent';
import TeamContent from '../components/TeamContent';
import SettingsContent from '../components/SettingsContent';

export default function Home() {
  const [activeContent, setActiveContent] = useState('Dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredCards = useMemo(() => {
    return featureCards.filter((card) => {
      const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            card.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <FeatureCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  onClick={() => handleCardClick(card)}
                />
              </motion.div>
            ))}
          </motion.div>
        );
      case 'Projects':
        return <ProjectContent />;
      case 'Team':
        return <TeamContent />;
      case 'Settings':
        return <SettingsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeOption={activeContent}
          onOptionClick={setActiveContent}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0">{activeContent}</h2>
            {activeContent === 'Dashboard' && (
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                <SearchBar onSearch={setSearchTerm} />
                <CategoriesDropdown selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
              </div>
            )}
          </motion.div>
          {renderContent()}
        </main>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full text-gray-900 dark:text-gray-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedCard.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Additional Details:</h3>
                <ul className="list-disc list-inside">
                  <li>Category: {selectedCard.category}</li>
                  <li>Created: {selectedCard.createdAt}</li>
                  <li>Last Updated: {selectedCard.updatedAt}</li>
                </ul>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
