import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'members', label: 'Members Info' },
    { id: 'trainers', label: 'Trainer Info' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'payments', label: 'Payments' },
    { id: 'feedback', label: 'Feedback' },
  ];

  return (
         <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PB</span>
              </div>
                             <span className="ml-3 text-xl font-bold text-white">Pixel Bricks</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform active:scale-95 hover:scale-105 ${
                   activeTab === item.id
                     ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                     : 'text-gray-300 hover:text-white hover:bg-gray-700'
                 }`}
               >
                 {item.label}
               </button>
            ))}
          </div>

          {/* User Profile Section */}
          <div className="hidden md:flex items-center space-x-4">
                         {/* Notification Bell */}
             <button className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 transform active:scale-95 hover:scale-105">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75a2.25 2.25 0 0 0 4.5 0V9.75a6 6 0 0 0-12 0v3.75a2.25 2.25 0 0 0 4.5 0V9.75z" />
               </svg>
               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                 3
               </span>
             </button>

            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">A</span>
              </div>
                             <div className="hidden lg:block">
                 <p className="text-sm font-medium text-white">Admin User</p>
                 <p className="text-xs text-gray-400">admin@pixelbricks.com</p>
               </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
                         <button
               onClick={() => setIsOpen(!isOpen)}
               className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200 transform active:scale-95 hover:scale-105"
             >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                                 className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 transform active:scale-98 ${
                   activeTab === item.id
                     ? 'bg-blue-600 text-white border border-blue-500'
                     : 'text-gray-300 hover:text-white hover:bg-gray-700'
                 }`}
               >
                 {item.label}
               </button>
            ))}
            
                         {/* Mobile User Profile */}
             <div className="px-3 py-3 border-t border-gray-700 mt-4">
               <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                   <span className="text-white font-medium text-sm">A</span>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-white">Admin User</p>
                   <p className="text-xs text-gray-400">admin@pixelbricks.com</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
