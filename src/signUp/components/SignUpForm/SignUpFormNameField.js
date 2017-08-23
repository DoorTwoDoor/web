import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SignUpFormNameField extends Component {
  render() {
    return (
      <Form.Group widths={'equal'}>
        <Form.Input name={'firstName'} placeholder={'First Name'} />
        <Form.Input name={'lastName'} placeholder={'Last Name'} />
      </Form.Group>
    );
  }
}

export default SignUpFormNameField;
