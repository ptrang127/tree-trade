import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import LoginForm from './components/widgets/loginform/LoginForm';
import NavBar from './components/widgets/navbar/NavBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Home} />
              <Route exact path="/signup" component={LoginForm} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
