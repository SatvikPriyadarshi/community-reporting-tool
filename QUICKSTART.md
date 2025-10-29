# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Navigate to Project
```bash
cd community-reporting-tool
```

### 2. Start Development Server
```bash
npm start
```

### 3. Test the Application

The app will automatically open at `http://localhost:3000`

#### Test Flow:
1. **Register** a new account (any email/password)
2. **Login** with your credentials
3. **Submit a complaint** from the Report page
4. **View dashboard** to see your complaint listed
5. **Filter** complaints by status
6. **Test anonymous** submission toggle

## 🎯 Key Features to Test

### Authentication
- Register with validation (min 6 chars password)
- Login redirects to /report
- Logout clears session
- Protected routes redirect to login

### Complaint Form
- All incident types dropdown
- File upload (photo/video)
- Anonymous toggle hides email
- Form validation
- Success notifications

### Dashboard
- View all complaints in table
- Filter by status (All/Pending/In Review/Resolved)
- Color-coded status chips
- Mock data included for demo

## 📱 Navigation

- **Home** (`/`) - Landing page with features
- **Report** (`/report`) - Submit new complaint
- **Dashboard** (`/dashboard`) - View all complaints
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user signup

## 💾 Data Storage

Currently using **localStorage** for:
- User authentication tokens
- User profile data
- Submitted complaints

This will be replaced with backend API calls in Phase 2.

## 🎨 UI Theme

- Primary Color: `#1976d2` (Material Blue)
- Material-UI components throughout
- Bootstrap for additional styling
- Fully responsive design

## ⚡ Ready for Backend

The `api.js` file is configured and ready to connect to your Express/MongoDB backend. Just update the `REACT_APP_API_URL` environment variable.
