import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopNavigation from './topnavigation';
import Sidebar from './sidebar';
// import UsersList from '../pages/userslist/userslist';
import DoctorsList from '../pages/admin/doctorsList/doctorsList';
import Dashboard from '../pages/admin/dashboard/dashboard';
import UnregisteredDoctorsList from '../pages/admin/unregisteredDoctors/unregisteredDoctors';
import PendingRequests from '../pages/admin/pendingRequests/pendingRequests';
import UsersList from '../pages/admin/userslist/userslist';

const Admin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      <div 
      style={{ boxShadow: '2px 0px 8px 0px #0000001A' }}
      className='relative'
      >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex-grow flex flex-col">
        <TopNavigation />
        <main className="p-6 bg-[#FCFCFD] flex-grow">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="unregisteredDoctorsList" element={<UnregisteredDoctorsList />} />
            <Route path="userlist" element={<UsersList />} />
            <Route path="doctorsList" element={<DoctorsList />} />
            <Route path="pendingRequests" element={<PendingRequests />} />
            <Route path="/" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
