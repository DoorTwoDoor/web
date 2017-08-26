import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FormButton extends Component {
  render() {
    const { text } = this.props;

    return (
      <Form.Button color={'blue'} fluid>
        {text}
      </Form.Button>
    );
  }
}

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormButton;
