import React from 'react';


// import Spinner from '../components/layouts/Spinner';
// import OnboardUser from '../components/form/Onboarding/UserForm';
// import UserWorkspace from '../components/workspace';
// import WorkerAsideBar from '../components/layouts/WorkerAsideBar';


import AdminDashboard from './Admin';

const DashboardScreen = () => {
  // Selectors

  // send request to onboard user if user signed up with office account(SJULTRA)
  
  
  //set profile to useRef to eliminate need for dependency array
  


  // if (loading || !profile)  {
  //   return (
  //     <Flex
  //       position="fixed"
  //       w="100vw"
  //       h="100vh"
  //       align="center"
  //       justify="center"
  //     >
  //       <Spinner />
  //     </Flex>
  //   );
  // } 
  // else if (!profileSetup) return <OnboardUser profile={profile} />;
  // else if (auth?.token && auth?.role === 'Admin') {
    return <AdminDashboard />;
  // } 
  // else {
  //   return (
  //     <WorkerAsideBar>
  //       <UserWorkspace />
  //     </WorkerAsideBar>
  //   );
  // }
};


export default DashboardScreen;
