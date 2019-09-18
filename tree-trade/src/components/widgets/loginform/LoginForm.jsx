/**import React from 'react';
import './LoginForm.css';

import {Form, Button } from 'react-bootstrap';

const LoginForm: React.FC = () => {
    return (
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
    );
}

export default LoginForm; **/ 

import React from 'react';
import { validateAll } from 'indicative';

class LoginForm extends React.Component {
  state = {
    name:'',
    email:'',
    password:'',
    password_confirm:'',
  }
  handleInputChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  handleSubmit=(event)=> {
    event.preventDefault();
    console.log(this.state);

    const data = this.state;
    const rules = {
      name: 'require|string', // indicated that name field is required with string values and same with email as well
      email: 'required|email',
      password:'required|string|min:4|confirmed' // min:6 here indicates a minimum of 4 characters and confirmed checks for password confirmation.
    }
    validateAll(data, rules)
      .then(() => {
        console.log('success')
      })
      .catch(errors => {
        console.log(errors); //show errors 
      })
  };
  render () {
    return (
        <div className="mh-fullscreen bg-img center-vh p-20" style ={{backgroundImage:
          'url(assets/images/trees-background.jpg)'}}>
      <div className="card card-shadowed p-50 w-500 mb-0" style={{maxWidth: '100%'}}>
        <h5 className="text-uppercase text-center">Register</h5>
        <br />
        <br />
        <form className="form-type-material" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" name="name" onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email Address" name="email" onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange}/>            
          </div>
          <div className="form-group">
          <input type="password" className="form-control" placeholder="Password (confirm)" name="password_confirm" onChange={this.handleInputChange}/>            
          </div>
          <br />
          <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
        </form>
        <hr className="w-30" />
      </div> 
    </div>

    );
  }
};

export default LoginForm;