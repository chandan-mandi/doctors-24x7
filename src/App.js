import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Doctors from './pages/Doctors/Doctors';
import Specialities from './pages/Specialities/Specialities';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { createContext, useEffect, useState } from 'react';
import DoctorsDbProvider from './DoctorsDbProvider/DoctorsDbProvider';
import Specialty from './pages/Specialty/Specialty';
import AuthProvider from './AuthoProvider/AuthProvider';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import UserDetails from './pages/UserDetails/UserDetails';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/shared/Footer/Footer';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Appointment from './pages/Appointment/Appointment';


function App() {
  // const [doctors, setDoctors] = useState();

  // useEffect(() => {
  //   fetch("./doctorsdb.json")
  //   .then(res => res.json())
  //   .then(data => setDoctors(data))
  // },[])
  // console.log(doctors);
  return (
    <>
      <AuthProvider>
        <DoctorsDbProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route path="/news">
                <News></News>
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <PrivateRoute path="/specialities/:specialty">
                <Specialty></Specialty>
              </PrivateRoute>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/userDetails">
                <UserDetails></UserDetails>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </DoctorsDbProvider>
      </AuthProvider>
    </>
  );
}

export default App;
