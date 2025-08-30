import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Dashboard from './pages/Dashboard'
import MembersInfo from './pages/MembersInfo'
import TrainerInfo from './pages/TrainerInfo'
import Notifications from './pages/Notifications'
import Payments from './pages/Payments'
import Feedback from './pages/Feedback'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<MembersInfo />} />
            <Route path="/trainers" element={<TrainerInfo />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App