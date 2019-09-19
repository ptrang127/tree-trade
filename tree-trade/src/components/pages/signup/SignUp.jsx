import React, { Component } from 'react';
import { withFirebase } from '../../firebase';
import { Form, Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Tree from '../../../assets/images/tree.png';
import './SignUp.css';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...this.INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    return (
      <React.Fragment>
        <Jumbotron>
          <h1>Welcome to Tree Trade!</h1>
          <p>
            We're glad to have you :)
          </p>
          <p>
            <Button variant="success">Learn more</Button>
          </p>
        </Jumbotron>
        <Row noGutters={true}>
          <Col md={5}>
            <div class="about">
              <h1>Sign up with <br />Tree Trade</h1>
              <img src={Tree}></img>
              <br />
              <br />
              <p>Join millions of others on your journey to paper trading!</p>
            </div>
          </Col>

          <Col md={6}>
            <h2>Register</h2>
            <h3>It's quick and easy.</h3>
            <hr />
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="John" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Doe" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="emailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder="john.doe@example.com" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password again" />
              </Form.Group>
              <hr />
              <Button variant="success" type="submit">
                Sign Up
                </Button>
            </Form>
          </Col>
        </Row>
      </React.Fragment >

    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpPage;
