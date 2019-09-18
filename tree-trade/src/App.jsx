import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import SignUp from './components/pages/signup/SignUp';
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
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
