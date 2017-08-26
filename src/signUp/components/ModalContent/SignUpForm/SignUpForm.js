import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import FormAgreementText from '../../../../common/components/FormAgreementText';
import FormButton from '../../../../common/components/FormButton';
import BirthdayField from './BirthdayField';
import BirthdayLabel from './BirthdayLabel';
import NameField from './NameField';

class SignUpForm extends Component {
  render() {
    return (
      <Form>
        <NameField />
        <Form.Input name={'emailAddress'} placeholder={'Email Address'} />
        <Form.Input
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <BirthdayLabel />
        <BirthdayField />
        <FormButton text={'Sign Up'} />
        <FormAgreementText type={'sign up'}/>
      </Form>
    );
  }
}

export default SignUpForm;
