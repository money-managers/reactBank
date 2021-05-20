import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


import Auth from '../../utils/auth';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

function Login(){
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const[loginUser, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData}
      });

      Auth.login(data.login.token)

    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };
    return(
      <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group  className="form" id="login">
          <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='text'
              id='email'
              className='email'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            id='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          id='button'
          className='button'
          variant='success'>
          Submit
        </Button>
        </Form>
      </>
    )
}

export default Login;