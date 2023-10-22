import React from 'react';
import AdminDashboard from './Admin';
import useAuthActions from '../hooks/useAuth';
import UserDashboard from './User/UserDashboard';

const DashboardScreen = () => {
  const {auth} = useAuthActions()
  
  if(auth?.userType ==='seller'){
    return <UserDashboard />;
  }
  return <AdminDashboard />;
  
};


export default DashboardScreen;
