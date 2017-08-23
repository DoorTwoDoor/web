import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SignUpFormBirthdayLabel extends Component {
  render() {
    return (
      <Form.Field>
        <label>
          Birthday
        </label>
        <p>
          To sign up, you must be 18 or older. Other people won’t see your birthday.
        </p>
      </Form.Field>
    );
  }
}

export default SignUpFormBirthdayLabel;
