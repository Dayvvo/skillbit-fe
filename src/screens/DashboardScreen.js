import React from 'react';
import AdminDashboard from './Admin';
import useAuthActions from '../hooks/useAuth';
import UserDashboard from './User/UserDashboard';

const DashboardScreen = () => {
  const {auth} = useAuthActions()
  
  console.log('auth',auth)

  if(auth?.accountType ==='seller'){
    return <UserDashboard />;
  }
  return <AdminDashboard />;
  
};


export default DashboardScreen;
