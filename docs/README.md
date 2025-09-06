# Pixel Bricks - Gym Management System

A comprehensive gym management dashboard built with React, Vite, and Tailwind CSS. This application provides fitness professionals and gym owners with tools to manage members, trainers, payments, notifications, and feedback efficiently.

## 🏋️ Features

### Dashboard
- **Real-time Statistics**: Overview of total members, active trainers, monthly revenue, and satisfaction ratings
- **Activity Feed**: Recent member registrations, payments, and trainer updates
- **Performance Metrics**: Visual representation of key business indicators

### Member Management
- **Member Directory**: Complete list of gym members with detailed information
- **Membership Types**: Support for Basic and Premium membership tiers
- **Status Tracking**: Active/Inactive member status monitoring
- **Member Analytics**: Statistics on total, active, and premium members

### Trainer Management
- **Trainer Profiles**: Comprehensive trainer information including specializations and experience
- **Rating System**: 5-star rating system for trainer performance
- **Specialization Tracking**: Various fitness specializations (Strength Training, Yoga, Cardio, Pilates, CrossFit)
- **Status Management**: Active/Inactive trainer status

### Payment System
- **Multiple Payment Methods**: Support for Credit Card, PayPal, and Bank Transfer
- **Payment Tracking**: Complete payment history with status monitoring
- **Revenue Analytics**: Monthly revenue tracking and payment method distribution
- **QR Code Payments**: Quick payment processing via QR codes
- **Invoice Management**: Automated invoice generation and management

### Notifications
- **Real-time Alerts**: System notifications for important events
- **Categorized Notifications**: Success, Info, Warning, and Error notifications
- **Read/Unread Status**: Track notification status
- **Notification Management**: Mark as read, clear all, and detailed views

### Feedback & Reviews
- **Rating System**: 5-star rating system for member feedback
- **Review Management**: Complete feedback tracking and response system
- **Rating Distribution**: Visual representation of rating statistics
- **Status Tracking**: Resolved, In Progress, and Pending feedback status

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router DOM 7.8.2
- **Development**: ESLint with React-specific rules
- **Deployment**: Vercel (configured with SPA routing)

## 📁 Project Structure

```
pixel-bricks/
├── docs/                          # Main application directory
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar.jsx        # Navigation component with responsive design
│   │   │   └── Footer.jsx        # Footer with company information
│   │   ├── pages/                # Main application pages
│   │   │   ├── Dashboard.jsx     # Main dashboard with statistics
│   │   │   ├── MembersInfo.jsx   # Member management interface
│   │   │   ├── TrainerInfo.jsx   # Trainer management interface
│   │   │   ├── Payments.jsx      # Payment processing and history
│   │   │   ├── Notifications.jsx # Notification center
│   │   │   └── Feedback.jsx      # Feedback and review management
│   │   ├── context/              # React context providers (empty)
│   │   ├── assets/               # Static assets
│   │   ├── App.jsx               # Main application component
│   │   ├── main.jsx              # Application entry point
│   │   └── index.css             # Global styles and Tailwind imports
│   ├── public/                   # Public assets
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.js            # Vite configuration
│   ├── eslint.config.js          # ESLint configuration
│   └── index.html                # HTML template
├── Server/                       # Backend directory (currently empty)
├── vercel.json                   # Vercel deployment configuration
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pixel-bricks
   ```

2. **Navigate to the docs directory**
   ```bash
   cd docs
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design Features

### Responsive Design
- **Mobile-First Approach**: Fully responsive design that works on all devices
- **Adaptive Navigation**: Collapsible mobile menu with smooth animations
- **Grid Layouts**: Responsive grid systems for optimal content display

### User Interface
- **Dark Theme**: Modern dark theme with gray color palette
- **Interactive Elements**: Hover effects and smooth transitions
- **Visual Feedback**: Color-coded status indicators and progress bars
- **Accessibility**: Proper cursor styles and keyboard navigation support

### Component Architecture
- **Modular Components**: Reusable and maintainable component structure
- **Consistent Styling**: Unified design system across all components
- **State Management**: Efficient state handling with React hooks

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins for optimal development experience and build performance.

### ESLint Configuration
Configured with React-specific rules and best practices for code quality and consistency.

### Vercel Deployment
Configured for Single Page Application (SPA) routing with proper fallback handling.

## 📊 Data Structure

The application currently uses mock data for demonstration purposes. Key data structures include:

- **Members**: ID, name, email, status, join date, membership type
- **Trainers**: ID, name, email, specialization, experience, status, rating
- **Payments**: ID, member, amount, method, status, date, invoice
- **Notifications**: ID, type, title, message, time, read status
- **Feedback**: ID, member, rating, comment, date, status

## 🚀 Deployment

The application is configured for deployment on Vercel with the following setup:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   The `vercel.json` configuration ensures proper SPA routing support.

## 🔮 Future Enhancements

### Backend Integration
- RESTful API development for data management
- Database integration for persistent storage
- User authentication and authorization
- Real-time notifications with WebSocket support

### Advanced Features
- **Reporting System**: Detailed analytics and reporting
- **Booking System**: Class and trainer booking functionality
- **Inventory Management**: Equipment and facility management
- **Mobile App**: React Native mobile application
- **Integration**: Third-party payment gateway integration

### Performance Optimizations
- **Code Splitting**: Lazy loading for better performance
- **Caching**: Implement proper caching strategies
- **PWA**: Progressive Web App capabilities
- **SEO**: Search engine optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- **Email**: support@pixelbricks.com
- **Phone**: +91 XXXXXXXXXX
- **Location**: New Delhi, India

## 🙏 Acknowledgments

- React team for the excellent framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters of this project

---

**Pixel Bricks** - Empowering fitness professionals with comprehensive management solutions.