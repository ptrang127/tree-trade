import React, { Component } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import tree from '../../../assets/images/tree.png';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <Jumbotron>
            <img src={tree}></img>
            <br />
            <br />
            <h1>Welcome to Tree Trade</h1>
            <p>Paper trade stocks to see how you would perform in the stock market!</p>
            <p>
              <Button variant="success">Get Started</Button>
            </p>
          </Jumbotron>
        </div>

        <Container>
          <Row>
            <Col>
              <h1>About</h1>
            </Col>
            <Col></Col>
            <Col xs={10}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Col>
          </Row>

          <br />

          <Row>
            <Col></Col>
            <Col></Col>
            <Col xs={10}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

}

export default Home;
