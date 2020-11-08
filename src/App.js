import React from 'react';
import NavBar from './components/nav-bar/navBar';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPage from './pages/mainpage/mainPage';
import NotFound from './components/not-found/notFound';
import ContactUs from './pages/contact-us/contactUs';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
