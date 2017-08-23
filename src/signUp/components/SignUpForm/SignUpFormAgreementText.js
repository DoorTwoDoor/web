import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SignUpFormAgreementText extends Component {
  render() {
    return (
      <Form.Field>
        <p>
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </Form.Field>
    );
  }
}

export default SignUpFormAgreementText;
