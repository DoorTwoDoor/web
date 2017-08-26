import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FormAgreementText extends Component {
  render() {
    const { type } = this.props;
    let text = null;

    if (type === 'log in') {
      text = 'logging in';
    } else {
      text = 'signing up';
    }

    return (
      <Form.Field>
        <p>
          By {text}, you agree to DoorTwoDoor's Terms of Service and Privacy Policy.
        </p>
      </Form.Field>
    );
  }
}

FormAgreementText.propTypes = {
  type: PropTypes.oneOf(['log in', 'sign up']).isRequired,
};

export default FormAgreementText;
