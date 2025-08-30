import React from 'react'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Welcome to Pixel Bricks</h1>
          <p className="text-gray-300">
            Your modern dashboard is ready! The navbar above contains all the sections you requested:
            Dashboard, Members Info, Trainer Info, Notifications, Payments, and Feedback.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App