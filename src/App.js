import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUS/AboutUs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import OurServices from './Pages/OurServices/OurServices/OurServices';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute/PrivateRoute';
import AllProduct from './Pages/AllProduct/AllProduct/AllProduct';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/aboutus">
                  <AboutUs/>
                </Route>
                <Route path="/services">
                  <OurServices/>
                </Route>
                <Route path="/allproduct">
                  <AllProduct/>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard/>
                </PrivateRoute>
                <Route path="/signin">
                  <Login/>
                </Route>
                <Route path="/signup">
                  <Register/>
                </Route>
              </Switch>
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
