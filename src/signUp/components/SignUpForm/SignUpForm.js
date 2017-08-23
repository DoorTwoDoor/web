import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import SignUpFormAgreementText from './SignUpFormAgreementText';
import SignUpFormBirthdayField from './SignUpFormBirthdayField';
import SignUpFormBirthdayLabel from './SignUpFormBirthdayLabel';
import SignUpFormNameField from './SignUpFormNameField';

class SignUpForm extends Component {
  render() {
    return (
      <Form>
        <SignUpFormNameField />
        <Form.Input name={'emailAddress'} placeholder={'Email Address'} />
        <Form.Input
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <SignUpFormBirthdayLabel />
        <SignUpFormBirthdayField />
        <Form.Button color={'blue'} fluid>
          Sign Up
        </Form.Button>
        <SignUpFormAgreementText />
      </Form>
    );
  }
}

export default SignUpForm;
