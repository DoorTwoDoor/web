import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import FormButton from '../../../../common/components/FormButton';

class ForgotPasswordForm extends Component {
  render() {
    return (
      <Form>
        <Form.Input name={'emailAddress'} placeholder={'Email Address'} />
        <FormButton text={'Reset Password'} />
      </Form>
    );
  }
}

export default ForgotPasswordForm;
