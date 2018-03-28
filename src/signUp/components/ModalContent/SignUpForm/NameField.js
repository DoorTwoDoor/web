import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NameField extends Component {
  render() {
    return (
      <Form.Group widths={'equal'}>
        <Form.Input
          icon={'user'}
          name={'firstName'}
          placeholder={'First Name'}
        />
        <Form.Input
          icon={'user'}
          name={'lastName'}
          placeholder={'Last Name'}
        />
      </Form.Group>
    );
  }
}

export default NameField;
