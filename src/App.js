import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import './assets/css/styles.css';
import ProtectedRoutes from './configs/ProtectedRoutes';
const Home = lazy(() => import('./home/UserRegistration'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const RecoverPassword = lazy(() => import('./home/PasswordRecovery'));
const Login = lazy(() => import('./home/Login'));

function App() {
  const loading = () => <div>Loading...</div>;
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={loading()}>
            <Switch>
              <ProtectedRoutes exact path='/dashboard' component={Dashboard} />
              <Route exact path='/' component={Home} />
              <Route exact path='/password' component={RecoverPassword} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}
export default App;
