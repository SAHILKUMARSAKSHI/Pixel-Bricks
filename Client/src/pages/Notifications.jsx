import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'success', title: 'New Member Registration', message: 'John Doe has successfully registered as a new member.', time: '2 hours ago', read: false },
    { id: 2, type: 'info', title: 'Payment Received', message: 'Payment of $150.00 has been received from Jane Smith.', time: '4 hours ago', read: false },
    { id: 3, type: 'warning', title: 'Trainer Schedule Update', message: 'Alex Johnson has updated their training schedule for next week.', time: '6 hours ago', read: true },
    { id: 4, type: 'error', title: 'System Maintenance', message: 'Scheduled maintenance will occur tonight from 2-4 AM.', time: '1 day ago', read: true },
    { id: 5, type: 'success', title: 'New Trainer Added', message: 'Sarah Wilson has been added as a new trainer.', time: '1 day ago', read: true },
    { id: 6, type: 'info', title: 'Monthly Report Ready', message: 'Your monthly performance report is now available.', time: '2 days ago', read: true },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Notifications</h1>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Mark All Read
            </button>
            <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Clear All
            </button>
          </div>
        </div>

        {/* Notification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Total Notifications</h3>
            <p className="text-3xl font-bold text-blue-400">{notifications.length}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Unread</h3>
            <p className="text-3xl font-bold text-red-400">{notifications.filter(n => !n.read).length}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <h3 className="text-lg font-semibold text-white">Read</h3>
            <p className="text-3xl font-bold text-green-400">{notifications.filter(n => n.read).length}</p>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`bg-gray-700 rounded-lg border border-gray-600 p-4 hover:bg-gray-600 transition-colors duration-200 ${
                !notification.read ? 'border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${!notification.read ? 'text-white' : 'text-gray-300'}`}>
                      {notification.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                      <span className="text-sm text-gray-400">{notification.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-1">{notification.message}</p>
                  <div className="flex items-center space-x-2 mt-3">
                    <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200">
                      View Details
                    </button>
                    <span className="text-gray-500">•</span>
                    <button className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200">
                      Mark as {notification.read ? 'unread' : 'read'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-200">
            Load More Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
