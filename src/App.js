import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';
import Doctors from './pages/Doctors/Doctors';
import LabTest from './pages/LabTest/LabTest';
import Specialities from './pages/Specialities/Specialities';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import { createContext, useEffect, useState } from 'react';
import DoctorsDbProvider from './DoctorsDbProvider/DoctorsDbProvider';
import Specialty from './pages/Specialty/Specialty';
import AuthProvider from './AuthoProvider/AuthProvider';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


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
              <Route path="/labtest">
                <LabTest></LabTest>
              </Route>
              <Route exact path="/specialities">
                <Specialities></Specialities>
              </Route>
              <Route exact path="/specialities/:specialty">
                <Specialty></Specialty>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/register">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </DoctorsDbProvider>
      </AuthProvider>
    </>
  );
}

export default App;
