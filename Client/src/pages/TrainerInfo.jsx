import React from 'react';

const TrainerInfo = () => {
  const trainers = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', specialization: 'Strength Training', experience: '5 years', status: 'Active', rating: 4.8 },
    { id: 2, name: 'Maria Garcia', email: 'maria@example.com', specialization: 'Yoga', experience: '3 years', status: 'Active', rating: 4.9 },
    { id: 3, name: 'Tom Wilson', email: 'tom@example.com', specialization: 'Cardio', experience: '7 years', status: 'Active', rating: 4.7 },
    { id: 4, name: 'Lisa Chen', email: 'lisa@example.com', specialization: 'Pilates', experience: '4 years', status: 'Inactive', rating: 4.6 },
    { id: 5, name: 'Chris Davis', email: 'chris@example.com', specialization: 'CrossFit', experience: '6 years', status: 'Active', rating: 4.9 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Trainer Information</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Add New Trainer
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Total Trainers</h3>
            <p className="text-3xl font-bold text-blue-400">45</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Active Trainers</h3>
            <p className="text-3xl font-bold text-green-400">42</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Average Rating</h3>
            <p className="text-3xl font-bold text-yellow-400">4.8</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Specializations</h3>
            <p className="text-3xl font-bold text-purple-400">12</p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-gray-700 rounded-lg border border-gray-600 p-6 hover:bg-gray-600 transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {trainer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  trainer.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {trainer.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{trainer.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{trainer.email}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Specialization:</span>
                  <span className="text-white text-sm font-medium">{trainer.specialization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Experience:</span>
                  <span className="text-white text-sm font-medium">{trainer.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm font-medium mr-1">{trainer.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors duration-200">
                  View Profile
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded text-sm transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;
