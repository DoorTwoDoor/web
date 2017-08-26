import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class BirthdayLabel extends Component {
  render() {
    return (
      <Form.Field>
        <label>
          Birthday
        </label>
        <p>
          <span>To sign up, you must be 18 years old or older. </span>
          <span>Other people won’t see your birthday.</span>
        </p>
      </Form.Field>
    );
  }
}

export default BirthdayLabel;
