import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import LogInFormForgotPasswordLink from './LogInFormForgotPasswordLink';

class LogInForm extends Component {
  render() {
    return (
      <Form>
        <Form.Input name={'emailAddress'} placeholder={'Email Address'} />
        <Form.Input
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <LogInFormForgotPasswordLink />
        <Form.Button color={'blue'} fluid>
          Log In
        </Form.Button>
      </Form>
    );
  }
}


export default LogInForm;
