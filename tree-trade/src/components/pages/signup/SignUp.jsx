import React, { Component } from 'react';
import './SignUp.css';

import { Form, Button } from 'react-bootstrap';

class SignUp extends Component {
  render() {
    return (
      <div class="signup signup-header">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the Terms & Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
      </div>
    );
  }
}

export default SignUp;