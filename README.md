# 🛡️ Community Based Reporting and Monitoring Tool

A modern, full-stack web application built with React for community incident reporting and tracking. This platform enables citizens to report incidents, track complaint status, and help build safer communities.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎯 Core Functionality
- **User Authentication** - Secure login and registration system
- **Complaint Submission** - Multi-step form with validation
- **Dashboard** - Real-time complaint tracking and monitoring
- **Analytics** - Visual statistics and progress tracking
- **Search & Filter** - Advanced filtering by status, type, and keywords
- **Export Data** - Download complaints as CSV

### 🎨 Modern UI/UX
- **Responsive Design** - Works on all devices
- **Glassmorphism Effects** - Modern, frosted glass aesthetics
- **Smooth Animations** - Fade, zoom, and slide transitions
- **Dark Theme Ready** - Theme context prepared
- **Loading States** - Skeleton loaders for better UX
- **Empty States** - Beautiful no-data illustrations

### 🚀 Advanced Features
- **Multi-step Form** - Guided complaint submission
- **Drag & Drop Upload** - Easy file attachment
- **Image Preview** - Preview uploaded images
- **Auto-save Draft** - Never lose your progress
- **Character Counter** - Real-time character tracking
- **Anonymous Reporting** - Privacy-focused submissions
- **Status Tracking** - Pending, In Review, Resolved
- **Notification System** - Toast notifications

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - Latest React with hooks
- **Material-UI (MUI) 7.3** - Modern component library
- **React Router DOM 7.1** - Client-side routing
- **Emotion** - CSS-in-JS styling
- **Axios** - HTTP client (ready for backend)

### Styling
- **Custom CSS** - Advanced animations
- **Gradient Backgrounds** - Modern aesthetics
- **Responsive Grid** - Mobile-first design
- **Custom Scrollbar** - Branded scrollbar

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/community-reporting-tool.git
cd community-reporting-tool
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🎮 Usage

### 1. Register/Login
- Create a new account or login with existing credentials
- Mock authentication using localStorage

### 2. Submit a Complaint
- Navigate to "Report" page
- Fill in the multi-step form:
  - **Step 1:** Location and incident type
  - **Step 2:** Description and file upload
  - **Step 3:** Review and submit
- Toggle anonymous submission if needed

### 3. View Dashboard
- See all complaints in a table view
- Use search bar to find specific complaints
- Filter by status (Pending, In Review, Resolved)
- Filter by incident type
- Export data to CSV
- View analytics and statistics

## 📁 Project Structure

```
community-reporting-tool/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Complaints/
│   │   │   ├── ComplaintForm.js
│   │   │   └── ComplaintDashboard.js
│   │   ├── Analytics.js
│   │   ├── EmptyState.js
│   │   ├── Footer.js
│   │   ├── LoadingSkeleton.js
│   │   └── Navbar.js
│   ├── context/
│   │   ├── NotificationContext.js
│   │   └── ThemeContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Report.js
│   │   └── Dashboard.js
│   ├── App.js
│   ├── api.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Key Components

### ComplaintForm
- Multi-step wizard interface
- Drag & drop file upload
- Image preview functionality
- Auto-save to localStorage
- Character counter
- Form validation

### ComplaintDashboard
- Advanced search and filtering
- Analytics overview
- Export to CSV
- Loading skeletons
- Empty states
- Responsive table

### Analytics
- Visual statistics cards
- Progress bars
- Complaint type distribution
- Status breakdown

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Theme Customization
Edit `src/App.js` to customize the theme:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e40af",
    },
    // ... customize colors
  },
});
```

## 📊 Features Breakdown

### Authentication
- ✅ User registration with validation
- ✅ Login with mock JWT tokens
- ✅ Protected routes
- ✅ Logout functionality
- ✅ User profile display

### Complaint Management
- ✅ Create complaints
- ✅ View all complaints
- ✅ Search complaints
- ✅ Filter by status
- ✅ Filter by type
- ✅ Export to CSV
- ✅ Anonymous submissions

### UI/UX
- ✅ Responsive design
- ✅ Loading states
- ✅ Empty states
- ✅ Error handling
- ✅ Success notifications
- ✅ Smooth animations
- ✅ Modern glassmorphism

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔮 Future Enhancements

### Phase 2 (Backend Integration)
- [ ] Connect to Express/MongoDB backend
- [ ] Real authentication with JWT
- [ ] File upload to cloud storage
- [ ] Real-time notifications
- [ ] Email notifications

### Phase 3 (Advanced Features)
- [ ] Dark mode toggle
- [ ] User profile page
- [ ] Comment system
- [ ] Upvote/downvote
- [ ] Map integration
- [ ] Priority levels
- [ ] Status timeline
- [ ] Admin dashboard

### Phase 4 (Mobile)
- [ ] React Native mobile app
- [ ] Push notifications
- [ ] Offline support
- [ ] Camera integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- Material-UI for the amazing component library
- React team for the incredible framework
- Community contributors



**Made with ❤️ for safer communities**
