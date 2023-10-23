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
import UserOnboardingDetails from './screens/teams/onboarding/userDetails';
import JobDetail from './screens/FindJob/JobDetail';
import HomePage from './screens/HomePage';
import MakePaymentModal from './screens/Admin/MakePaymentModal';

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
              <PrivateRoute exact path="/" component={DashboardScreen} />
              <Route exact path="/" component={HomePage} />
              <Route path="/dashboard" component={DashboardScreen} />
              <Route path="/find-work" component={FindWork} />
              <Route path="/job-detail" component={JobDetail} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/signup" component={RegisterScreen} />
              <Route path="/payment" component={MakePaymentModal} />
              <Route component={NotFoundScreen} />
            </Switch>
          </Router>
        </ChakraProvider>
      </MenuProvider>
    </>
  );
};

export default App;
