import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;