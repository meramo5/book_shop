import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import LoginHome from './Pages/Login/LoginHome/LoginHome';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import AllBooks from './Pages/AllBooks/AllBooks';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LoginHome></LoginHome>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/books'>
              <AllBooks></AllBooks>
            </Route>
            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>       
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
