import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ModalActions extends Component {
  render() {
    const { type } = this.props;
    let text = null;

    if (type === 'log in') {
      text = "Don't have an account? Sign Up";
    } else if (type === 'forgot password') {
      text = 'Back to Log In';
    } else {
      text = 'Already have an account? Log In';
    }

    return (
      <Modal.Actions>
        <p>
          {text}
        </p>
      </Modal.Actions>
    );
  }
}

ModalActions.propTypes = {
  type: PropTypes.oneOf(['log in', 'forgot password', 'sign up']).isRequired,
};

export default ModalActions;
