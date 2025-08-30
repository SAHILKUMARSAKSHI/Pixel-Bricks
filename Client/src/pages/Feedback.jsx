import React from 'react';

const Feedback = () => {
  const feedbacks = [
    { id: 1, member: 'John Doe', rating: 5, comment: 'Excellent service! The trainers are very professional and the facilities are top-notch.', date: '2024-03-15', status: 'Resolved' },
    { id: 2, member: 'Jane Smith', rating: 4, comment: 'Great experience overall. Would love to see more yoga classes in the evening.', date: '2024-03-14', status: 'Pending' },
    { id: 3, member: 'Mike Johnson', rating: 3, comment: 'The gym is good but the equipment could use some maintenance.', date: '2024-03-13', status: 'In Progress' },
    { id: 4, member: 'Sarah Wilson', rating: 5, comment: 'Amazing community! Everyone is so supportive and motivating.', date: '2024-03-12', status: 'Resolved' },
    { id: 5, member: 'David Brown', rating: 2, comment: 'The locker room needs better cleaning and maintenance.', date: '2024-03-11', status: 'Pending' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Feedback & Reviews</h1>
                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
             Export Report
           </button>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Average Rating</h3>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-yellow-400 mr-2">4.2</span>
              <div className="flex">
                {renderStars(4)}
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Total Reviews</h3>
            <p className="text-3xl font-bold text-blue-400">1,234</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Resolved</h3>
            <p className="text-3xl font-bold text-green-400">856</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Pending</h3>
            <p className="text-3xl font-bold text-red-400">45</p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-4">Rating Distribution</h3>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <div className="flex items-center w-16">
                    <span className="text-gray-300 text-sm mr-2">{rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${(rating === 5 ? 60 : rating === 4 ? 25 : rating === 3 ? 10 : rating === 2 ? 3 : 2)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-gray-300 text-sm w-12 text-right">
                    {rating === 5 ? '60%' : rating === 4 ? '25%' : rating === 3 ? '10%' : rating === 2 ? '3%' : '2%'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Feedback</h3>
            <div className="space-y-3">
              {feedbacks.slice(0, 3).map((feedback) => (
                <div key={feedback.id} className="p-3 bg-gray-600 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{feedback.member}</span>
                    <div className="flex">
                      {renderStars(feedback.rating)}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-600">
            <h3 className="text-lg font-semibold text-white">All Feedback</h3>
          </div>
          <div className="divide-y divide-gray-600">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="p-6 hover:bg-gray-600 transition-colors duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">
                        {feedback.member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{feedback.member}</h4>
                      <p className="text-gray-400 text-sm">{feedback.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex">
                      {renderStars(feedback.rating)}
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(feedback.status)}`}>
                      {feedback.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{feedback.comment}</p>
                
                                 <div className="flex items-center space-x-4">
                   <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 cursor-pointer">
                     Reply
                   </button>
                   <button className="text-green-400 hover:text-green-300 text-sm transition-colors duration-200 cursor-pointer">
                     Mark as {feedback.status === 'Resolved' ? 'Pending' : 'Resolved'}
                   </button>
                   <button className="text-red-400 hover:text-red-300 text-sm transition-colors duration-200 cursor-pointer">
                     Delete
                   </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
