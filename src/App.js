import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';
import './App.css';
import './sass-styles.scss';
import NotFoundScreen from './screens/NotFoundScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ADOWorkItemsScreen from './screens/ADOWorkItemsScreen';
import JiraIssuesScreen from './screens/JiraIssuesScreen';
import MeetingScheduleScreen from './screens/MeetingScheduleScreen';
import UserEditScreen from './screens/UserEditScreen';
import Teams from './screens/teams';
import Audit from './screens/Admin/audit';
import WorkerWorkspacesScreen from './screens/WorkerWorkspacesScreen';
import Workspace from './screens/Workspace/';
import User from './screens/teams/user';

import AdminRoute from './components/routing/AdminRoute';
import ModalComponent from './components/layouts/Modal';
import PrivateRoute from './components/routing/PrivateRoute';
import useAppInsights from './hooks/useAppInsights';
import { MenuProvider } from './hooks/MenuProvider';
import { Helmet } from 'react-helmet';
import UserOnboardingDetails from './screens/teams/onboarding/userDetails';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  useAppInsights(true);
  return (
    <>
      <Helmet>
        <meta
          name="google-signin-client_id"
          content={process.env['REACT_APP_GOOGLE_CLIENT_ID']}
        />
      </Helmet>

      <MenuProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <ModalComponent />
            <Switch>
              <PrivateRoute
                path="/admin/users/:id/edit"
                _user="worker"
                component={UserEditScreen}
              />
              <Route exact path="/" component={DashboardScreen} />
              <PrivateRoute path="/profile" component={ProfileScreen} />
              <PrivateRoute
                path="/edit-profile"
                component={EditProfileScreen}
              />
              <PrivateRoute
                path="/ado_workitems/:id"
                component={ADOWorkItemsScreen}
              />
              <PrivateRoute
                path="/jira_issues/:id"
                component={JiraIssuesScreen}
              />
              <PrivateRoute path="/meeting" component={MeetingScheduleScreen} />
              <PrivateRoute
                path="/worker/workspaces"
                component={WorkerWorkspacesScreen}
              />
              <PrivateRoute path="/teams" component={Teams} exact />
              <PrivateRoute path="/workspace" component={Workspace} exact />
              <PrivateRoute path="/teams/user/:id" component={User} exact />
              <AdminRoute path="/teams/onboarding/:id" component={UserOnboardingDetails} exact />
              <AdminRoute path="/admin/logs" component={Audit} />

              <Route path="/login" component={LoginScreen} />
              <Route path="/signup" component={RegisterScreen} />
              <Route component={NotFoundScreen} />
            </Switch>
          </Router>
        </ChakraProvider>
      </MenuProvider>
    </>
  );
};

export default App;
