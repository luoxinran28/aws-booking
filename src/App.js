import React from 'react';
import NavBar from './components/nav-bar/navBar';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPage from './components/mainpage/mainPage';
import NotFound from './components/not-found/notFound';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
