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
import PrivateRoute from './components/routing/PrivateRoute';
import useLogin from './hooks/useLogin'
import JobDetail from './screens/FindJob/JobDetail';
import HomePage from './screens/HomePage';

const App = () => {
  
  useLogin()
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
              <PrivateRoute path="/dashboard" component={DashboardScreen} />
              <Route path="/find-work" component={FindWork} />
              <Route path="/job-detail" component={JobDetail} />
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
