import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/admin/login/Login';
import Signup from './pages/doctor/signup/signup';
import OTPVerification from './pages/doctor/verifyOTP/verifyOTP';
import PDFView from './pages/doctor/pdfView/pdfView';
import PDFData from './pages/doctor/pdfData/pdfData';
import ForgotPassword from './pages/doctor/forgetPassword/forgetPassword';
import PersonalInformation from './pages/doctor/personalInformation/personalInformation';
import './App.css';
import Admin from './layout/adminLayout';
import SignIn from './pages/doctor/signIn/signIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docter/signIn" element={<SignIn />} />
        <Route path="/docter/signup" element={<Signup />} />
        <Route path="/docter/otp-verification" element={<OTPVerification />} />
        <Route path="/pdf-view" element={<PDFView />} />
        <Route path="/docter/pdf-data" element={<PDFData />} />
        <Route path="/docter/forgot-password" element={<ForgotPassword />} />
        <Route path="/docter/personal-information" element={<PersonalInformation />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>

);
};

export default App;
