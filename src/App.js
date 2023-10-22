import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';
import './App.css';
import './sass-styles.scss';
import NotFoundScreen from './screens/NotFoundScreen';
import { MenuProvider } from './hooks/MenuProvider';
import { Helmet } from 'react-helmet';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import ModalComponent from './components/layouts/Modal';
import FindWork from './screens/FindJob/find-work';
import HomePage from './screens/HomePage';
import UserProject from './screens/User/UserProject';
import UserDashboard from './screens/User/UserDashboard';

const App = () => {
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
              <Route exact path="/" component={HomePage} />
              <Route path="/seller/overview" component={DashboardScreen} />
              <Route path="/user/overview" component={UserDashboard} />
              <Route path="/user/project" component={UserProject} />
              <Route path="/find-work" component={FindWork} />
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
