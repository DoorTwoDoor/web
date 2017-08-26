import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import FormAgreementText from '../../../../common/components/FormAgreementText';
import FormButton from '../../../../common/components/FormButton';
import ForgotPasswordLink from './ForgotPasswordLink';

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
        <ForgotPasswordLink />
        <FormButton text={'Log In'} />
        <FormAgreementText type={'log in'}/>
      </Form>
    );
  }
}


export default LogInForm;
