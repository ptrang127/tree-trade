import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import './App.css';
import NavBar from '../widgets/navbar/NavBar';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
